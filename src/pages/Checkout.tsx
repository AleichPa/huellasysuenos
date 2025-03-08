
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "@/components/CheckoutForm";
import OrderConfirmation from "@/components/OrderConfirmation";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    customerName: string;
    email: string;
    paymentMethod: string;
    orderTotal: number;
  } | null>(null);

  // If cart is empty and no completed order, redirect to products
  if (cartItems.length === 0 && !orderComplete) {
    navigate("/productos");
    return null;
  }

  const handleOrderComplete = (formData: {
    name: string;
    email: string;
    paymentMethod: string;
  }) => {
    // Generate random order ID
    const orderId = `PET-${Math.floor(Math.random() * 100000)}`;
    
    // Save order details including the current totalPrice
    setOrderDetails({
      orderId,
      customerName: formData.name,
      email: formData.email,
      paymentMethod: formData.paymentMethod,
      orderTotal: totalPrice,
    });
    
    setOrderComplete(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {!orderComplete ? (
            <CheckoutForm 
              items={cartItems} 
              total={totalPrice} 
              onComplete={handleOrderComplete}
            />
          ) : (
            <OrderConfirmation 
              items={cartItems}
              total={orderDetails?.orderTotal || 0}
              orderDetails={orderDetails!}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
