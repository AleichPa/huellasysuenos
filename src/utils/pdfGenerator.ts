
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

// Original function for e-commerce order invoices
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

// New function for pet reservation receipts
export const generateInvoicePDF2 = (reservationData: {
  reservaId: string;
  petInfo: {
    name: string;
    type: string;
    breed: string;
    age: string;
  };
  ownerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  dateInfo: {
    startDate: string;
    endDate: string;
  };
  roomInfo: string;
  services: { name: string; price: number }[];
  specialRequirements: string;
}) => {
  // Create a new PDF document
  const doc = new jsPDF();
  
  // Add company logo/header
  doc.setFillColor(118, 140, 75); // Color olive
  doc.rect(0, 0, doc.internal.pageSize.width, 40, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Huellas y Sueños", 15, 20);
  
  doc.setFontSize(12);
  doc.text("Confirmación de Reserva", 15, 30);
  
  // Owner information
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  
  // Customer details
  doc.text(`Propietario: ${reservationData.ownerInfo.name}`, 15, 50);
  doc.text(`Email: ${reservationData.ownerInfo.email}`, 15, 57);
  doc.text(`Teléfono: ${reservationData.ownerInfo.phone}`, 15, 64);
  
  // Reservation details
  doc.text(`Número de reserva: ${reservationData.reservaId}`, 120, 50);
  doc.text(`Fecha de entrada: ${reservationData.dateInfo.startDate}`, 120, 57);
  doc.text(`Fecha de salida: ${reservationData.dateInfo.endDate}`, 120, 64);
  
  // Pet information
  doc.setFont("helvetica", "bold");
  doc.text("Información de la mascota:", 15, 75);
  doc.setFont("helvetica", "normal");
  doc.text(`Nombre: ${reservationData.petInfo.name}`, 15, 82);
  doc.text(`Tipo: ${reservationData.petInfo.type}`, 15, 89);
  
  if (reservationData.petInfo.breed) {
    doc.text(`Raza: ${reservationData.petInfo.breed}`, 15, 96);
  }
  
  if (reservationData.petInfo.age) {
    doc.text(`Edad: ${reservationData.petInfo.age}`, 15, 103);
  }
  
  // Room information
  doc.setFont("helvetica", "bold");
  doc.text("Habitación seleccionada:", 15, 115);
  doc.setFont("helvetica", "normal");
  doc.text(reservationData.roomInfo, 15, 122);
  
  // Services table
  if (reservationData.services.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.text("Servicios adicionales:", 15, 134);
    
    const tableColumn = ["Servicio", "Precio"];
    const tableRows = reservationData.services.map((service) => [
      service.name,
      `${service.price.toFixed(2)}€`,
    ]);
    
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 140,
      theme: "grid",
      headStyles: {
        fillColor: [118, 140, 75], // Color olive
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [240, 245, 235],
      },
    });
  } else {
    doc.text("No se han seleccionado servicios adicionales", 15, 134);
  }
  
  // Special requirements
  if (reservationData.specialRequirements) {
    const finalY = reservationData.services.length > 0 
      ? (doc as any).lastAutoTable.finalY + 15
      : 145;
    
    doc.setFont("helvetica", "bold");
    doc.text("Requisitos especiales:", 15, finalY);
    doc.setFont("helvetica", "normal");
    doc.text(reservationData.specialRequirements, 15, finalY + 7, { 
      maxWidth: 180 
    });
  }
  
  // Footer
  const footerY = reservationData.services.length > 0 
    ? (doc as any).lastAutoTable.finalY + 30
    : 200;
  
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.text(
    "Gracias por confiar en Huellas y Sueños para el cuidado de tu mascota.",
    105,
    footerY,
    { align: "center" }
  );
  
  doc.text(
    "Si tienes alguna pregunta, no dudes en contactar con nosotros.",
    105,
    footerY + 5,
    { align: "center" }
  );
  
  // Save the PDF
  doc.save(`reserva_${reservationData.reservaId}.pdf`);
};
