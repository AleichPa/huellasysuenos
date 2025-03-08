import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/product";
import { CheckCircle, Copy, Download, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

interface OrderConfirmationProps {
  items: (Product & { quantity: number })[];
  total: number;
  orderDetails: {
    orderId: string;
    customerName: string;
    email: string;
    paymentMethod: string;
    orderTotal?: number;
  };
}

const OrderConfirmation = ({ items, total, orderDetails }: OrderConfirmationProps) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const { clearCart } = useCart();
  
  // Use the total value passed from props to ensure it shows the correct amount
  const orderTotal = orderDetails.orderTotal || total;
  
  // Clear cart after showing confirmation
  useEffect(() => {
    return () => {
      clearCart();
    };
  }, [clearCart]);
  
  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case "card":
        return "Tarjeta de crédito/débito";
      case "paypal":
        return "PayPal";
      case "cash":
        return "Pago contra reembolso";
      default:
        return method;
    }
  };
  
  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderDetails.orderId);
    setCopied(true);
    toast({
      title: "Copiado al portapapeles",
      description: `Número de pedido: ${orderDetails.orderId}`,
    });
    setTimeout(() => setCopied(false), 2000);
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };
  
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Pedido Completado!
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Gracias por tu compra, {orderDetails.customerName}. Hemos enviado un resumen de tu pedido a {orderDetails.email}.
        </p>
      </div>

      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Número de pedido</div>
              <div className="text-lg font-medium flex items-center">
                {orderDetails.orderId}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 h-8 w-8 p-0"
                  onClick={handleCopyOrderId}
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <div className="text-sm text-gray-500">Fecha</div>
              <div className="font-medium">
                {formatDate(new Date())}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-hotel-dark-purple flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-hotel-purple" />
              Detalles del Pedido
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center py-2">
                    <div className="h-12 w-12 rounded-md overflow-hidden mr-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        {item.quantity} x {item.price.toFixed(2)}€
                      </div>
                    </div>
                    <div className="font-medium">
                      {(item.price * item.quantity).toFixed(2)}€
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-3" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{orderTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>Gratis</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-hotel-dark-purple">
                    {orderTotal.toFixed(2)}€
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3 text-hotel-dark-purple">
              Información
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 space-y-4">
              <div>
                <div className="text-sm text-gray-500">Método de pago</div>
                <div className="font-medium">
                  {getPaymentMethodText(orderDetails.paymentMethod)}
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">{orderDetails.email}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Entrega estimada</div>
                <div className="font-medium">{formatDate(estimatedDelivery)}</div>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <Button
                className="w-full bg-hotel-purple hover:bg-hotel-dark-purple"
                onClick={() => navigate("/productos")}
              >
                Seguir comprando
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-hotel-purple text-hotel-purple hover:bg-hotel-light-purple/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar factura
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
