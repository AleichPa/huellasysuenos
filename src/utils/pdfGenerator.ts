
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  paymentMethod: string;
  orderDate: Date;
  orderTotal: number;
}

export const generateInvoicePDF = (
  items: OrderItem[],
  orderDetails: OrderDetails
) => {
  // Create a new PDF document
  const doc = new jsPDF();
  
  // Add company logo/header
  doc.setFillColor(100, 70, 200);
  doc.rect(0, 0, doc.internal.pageSize.width, 40, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Huellas y Sueños", 15, 20);
  
  doc.setFontSize(12);
  doc.text("Factura de Compra", 15, 30);
  
  // Customer and order information
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };
  
  const paymentMethodText = {
    card: "Tarjeta de crédito/débito",
    paypal: "PayPal",
    cash: "Pago contra reembolso",
  }[orderDetails.paymentMethod] || orderDetails.paymentMethod;
  
  // Customer details
  doc.text(`Cliente: ${orderDetails.customerName}`, 15, 50);
  doc.text(`Email: ${orderDetails.email}`, 15, 57);
  doc.text(`Método de pago: ${paymentMethodText}`, 15, 64);
  
  // Order details
  doc.text(`Número de pedido: ${orderDetails.orderId}`, 120, 50);
  doc.text(`Fecha: ${formatDate(orderDetails.orderDate)}`, 120, 57);
  
  // Items table
  const tableColumn = ["Producto", "Cantidad", "Precio", "Total"];
  const tableRows = items.map((item) => [
    item.name,
    item.quantity.toString(),
    `${item.price.toFixed(2)}€`,
    `${(item.price * item.quantity).toFixed(2)}€`,
  ]);
  
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 75,
    theme: "grid",
    headStyles: {
      fillColor: [100, 70, 200],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [240, 240, 250],
    },
  });
  
  // Total section
  const finalY = (doc as any).lastAutoTable.finalY + 10;
  
  doc.text("Subtotal:", 140, finalY);
  doc.text(`${orderDetails.orderTotal.toFixed(2)}€`, 170, finalY);
  
  doc.text("Envío:", 140, finalY + 7);
  doc.text("Gratis", 170, finalY + 7);
  
  doc.setFont("helvetica", "bold");
  doc.text("Total:", 140, finalY + 14);
  doc.text(`${orderDetails.orderTotal.toFixed(2)}€`, 170, finalY + 14);
  
  // Footer
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.text(
    "Gracias por su compra en Huellas y Sueños. ¡Esperamos verle pronto!",
    105,
    finalY + 30,
    { align: "center" }
  );
  
  // Save the PDF
  doc.save(`factura_${orderDetails.orderId}.pdf`);
};
