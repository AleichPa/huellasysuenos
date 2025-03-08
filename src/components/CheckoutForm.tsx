
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  DollarSign,
  Wallet,
  ChevronRight,
  ShoppingCart,
  CreditCardIcon,
  LockKeyhole,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  address: z.string().min(5, { message: "La dirección es requerida" }),
  city: z.string().min(2, { message: "La ciudad es requerida" }),
  postalCode: z.string().min(5, { message: "El código postal es requerido" }),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCVC: z.string().optional(),
  paymentMethod: z.enum(["card", "paypal", "cash"]),
  notes: z.string().optional(),
});

interface CheckoutFormProps {
  items: (Product & { quantity: number })[];
  total: number;
  onComplete: (data: { name: string; email: string; paymentMethod: string }) => void;
}

const CheckoutForm = ({ items, total, onComplete }: CheckoutFormProps) => {
  const { clearCart } = useCart();
  const [summaryOpen, setSummaryOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVC: "",
      paymentMethod: "card",
      notes: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real application, this would process the payment
    onComplete({
      name: values.name,
      email: values.email,
      paymentMethod: values.paymentMethod,
    });
    
    // Clear the cart after successful order
    clearCart();
  };

  const selectedPaymentMethod = form.watch("paymentMethod");

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-hotel-light-purple to-hotel-soft-lavender p-6">
        <h1 className="text-2xl font-bold text-hotel-dark-purple flex items-center">
          <ShoppingCart className="mr-2 h-6 w-6" />
          Finalizar Compra
        </h1>
        <p className="text-hotel-purple mt-2">
          Complete sus datos para realizar el pago y finalizar su pedido
        </p>
      </div>

      <div className="p-6">
        <div className="md:flex gap-8">
          <div className="md:w-2/3">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-hotel-dark-purple">
                    Información Personal
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="juan.perez@ejemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-hotel-dark-purple">
                    Dirección de Envío
                  </h2>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dirección</FormLabel>
                        <FormControl>
                          <Input placeholder="Calle Ejemplo 123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ciudad</FormLabel>
                          <FormControl>
                            <Input placeholder="Madrid" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Código Postal</FormLabel>
                          <FormControl>
                            <Input placeholder="28001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-hotel-dark-purple">
                    Método de Pago
                  </h2>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="card" />
                              </FormControl>
                              <FormLabel className="font-normal flex-1 cursor-pointer">
                                <div className="flex items-center">
                                  <CreditCard className="w-4 h-4 mr-2 text-hotel-purple" />
                                  Tarjeta de crédito/débito
                                </div>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="paypal" />
                              </FormControl>
                              <FormLabel className="font-normal flex-1 cursor-pointer">
                                <div className="flex items-center">
                                  <Wallet className="w-4 h-4 mr-2 text-hotel-purple" />
                                  PayPal
                                </div>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="cash" />
                              </FormControl>
                              <FormLabel className="font-normal flex-1 cursor-pointer">
                                <div className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-2 text-hotel-purple" />
                                  Pago contra reembolso
                                </div>
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {selectedPaymentMethod === "card" && (
                  <div className="space-y-4 bg-gray-50 p-4 rounded-md border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-700 flex items-center">
                        <CreditCardIcon className="w-4 h-4 mr-2" />
                        Detalles de la tarjeta
                      </h3>
                      <div className="text-xs text-gray-500 flex items-center">
                        <LockKeyhole className="w-3 h-3 mr-1" />
                        Conexión segura
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de tarjeta</FormLabel>
                          <FormControl>
                            <Input placeholder="1234 5678 9012 3456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="cardExpiry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Fecha de expiración</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/AA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardCVC"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVC</FormLabel>
                            <FormControl>
                              <Input placeholder="123" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-hotel-dark-purple">
                    Información Adicional
                  </h2>
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notas del pedido (opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Instrucciones especiales para la entrega..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-hotel-purple hover:bg-hotel-dark-purple transition-colors"
                  >
                    Completar Pedido
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h2 className="text-xl font-semibold text-hotel-dark-purple">
                Resumen del Pedido
              </h2>
              
              <div className="mt-4 space-y-3">
                <div className="hidden md:block">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded overflow-hidden mr-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-sm">
                          {item.name} x{item.quantity}
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {(item.price * item.quantity).toFixed(2)}€
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="md:hidden">
                  <Button
                    variant="ghost"
                    className="w-full flex justify-between items-center py-2 px-0 text-left"
                    onClick={() => setSummaryOpen(!summaryOpen)}
                  >
                    <span>
                      {items.length} {items.length === 1 ? "artículo" : "artículos"}
                    </span>
                    {summaryOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                  
                  {summaryOpen && (
                    <div className="space-y-2 mt-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between py-1">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded overflow-hidden mr-2">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="text-sm">
                              {item.name} x{item.quantity}
                            </span>
                          </div>
                          <span className="text-sm font-medium">
                            {(item.price * item.quantity).toFixed(2)}€
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div className="flex justify-between py-2">
                  <span>Subtotal</span>
                  <span className="font-medium">{total.toFixed(2)}€</span>
                </div>
                
                <div className="flex justify-between py-2">
                  <span>Envío</span>
                  <span className="font-medium">Gratis</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-hotel-dark-purple text-lg">
                    {total.toFixed(2)}€
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
