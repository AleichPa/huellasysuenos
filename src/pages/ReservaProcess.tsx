
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Loader2, ArrowRight, PawPrint, Heart } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { generatePDF } from "@/utils/pdfGenerator";

const ReservaProcess = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedRoom = queryParams.get("room") || "";
  
  // Estado para el formulario
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    startDate: null,
    endDate: null,
    additionalServices: [],
    specialRequirements: "",
    room: selectedRoom
  });
  const [isLoading, setIsLoading] = useState(false);
  const [reservaCompleta, setReservaCompleta] = useState(false);
  const [reservaId, setReservaId] = useState("");

  // Opciones para selects
  const petTypes = [
    { value: "perro", label: "Perro" },
    { value: "gato", label: "Gato" },
    { value: "ave", label: "Ave" },
    { value: "roedor", label: "Roedor pequeño" },
    { value: "reptil", label: "Reptil" },
    { value: "pez", label: "Pez" },
    { value: "otro", label: "Otro" }
  ];

  const additionalServices = [
    { id: "grooming", name: "Peluquería y baño", price: 25 },
    { id: "training", name: "Entrenamiento básico", price: 35 },
    { id: "walks", name: "Paseos extra", price: 15 },
    { id: "toys", name: "Pack de juguetes", price: 20 },
    { id: "premium-food", name: "Alimentación premium", price: 30 },
    { id: "photo", name: "Servicio fotográfico", price: 22 }
  ];

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (field, date) => {
    setFormData(prev => ({ ...prev, [field]: date }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => {
      const currentServices = [...prev.additionalServices];
      if (currentServices.includes(serviceId)) {
        return { ...prev, additionalServices: currentServices.filter(id => id !== serviceId) };
      } else {
        return { ...prev, additionalServices: [...currentServices, serviceId] };
      }
    });
  };

  const handleNext = () => {
    // Validación simple
    if (step === 1) {
      if (!formData.petName || !formData.petType) {
        toast({
          title: "Completa todos los campos requeridos",
          description: "Por favor, rellena todos los campos marcados como obligatorios.",
          variant: "destructive"
        });
        return;
      }
    } else if (step === 2) {
      if (!formData.ownerName || !formData.ownerEmail || !formData.ownerPhone) {
        toast({
          title: "Completa todos los campos requeridos",
          description: "Por favor, rellena todos los campos marcados como obligatorios.",
          variant: "destructive"
        });
        return;
      }
    } else if (step === 3) {
      if (!formData.startDate || !formData.endDate) {
        toast({
          title: "Selecciona las fechas",
          description: "Por favor, selecciona las fechas de entrada y salida.",
          variant: "destructive"
        });
        return;
      }
    }
    
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de envío a servidor
    setTimeout(() => {
      const reservationId = `RES-${Math.floor(Math.random() * 10000)}`;
      setReservaId(reservationId);
      setReservaCompleta(true);
      setIsLoading(false);
      toast({
        title: "¡Reserva confirmada!",
        description: `Tu reserva #${reservationId} ha sido confirmada. Recibirás un correo con los detalles.`,
      });
    }, 2000);
  };

  const handleGeneratePDF = () => {
    const selectedServices = additionalServices
      .filter(service => formData.additionalServices.includes(service.id))
      .map(service => ({ name: service.name, price: service.price }));
      
    generatePDF({
      reservaId,
      petInfo: {
        name: formData.petName,
        type: formData.petType,
        breed: formData.petBreed,
        age: formData.petAge
      },
      ownerInfo: {
        name: formData.ownerName,
        email: formData.ownerEmail,
        phone: formData.ownerPhone
      },
      dateInfo: {
        startDate: formData.startDate ? format(formData.startDate, 'dd/MM/yyyy') : '',
        endDate: formData.endDate ? format(formData.endDate, 'dd/MM/yyyy') : ''
      },
      roomInfo: formData.room,
      services: selectedServices,
      specialRequirements: formData.specialRequirements
    });
  };
  
  // Cálculo del precio
  const calculatePrice = () => {
    let total = 0;
    let days = 0;
    
    // Calcular días
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
    }
    
    // Precio base de habitación
    const basePrice = formData.room.includes("Suite") ? 
                      (formData.room.includes("grandes") ? 90 : 65) : 
                      (formData.room.includes("grandes") ? 50 : 40);
    
    total += basePrice * days;
    
    // Servicios adicionales
    formData.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        total += service.price;
      }
    });
    
    return { total, days, basePrice };
  };
  
  // Renderizado condicional para los pasos
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-hotel-olive">Información de tu mascota</h2>
              <p className="text-gray-600">Cuéntanos sobre tu peludo amigo para darle la mejor atención</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="petName" className="text-hotel-olive">Nombre de la mascota <span className="text-red-500">*</span></Label>
                <Input 
                  id="petName" 
                  name="petName" 
                  value={formData.petName} 
                  onChange={handleInputChange} 
                  placeholder="Ej. Toby" 
                  className="border-hotel-olive/30 focus-visible:ring-hotel-olive"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="petType" className="text-hotel-olive">Tipo de mascota <span className="text-red-500">*</span></Label>
                <Select 
                  value={formData.petType} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, petType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo de mascota" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Mascotas</SelectLabel>
                      {petTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="petBreed" className="text-hotel-olive">Raza</Label>
                <Input 
                  id="petBreed" 
                  name="petBreed" 
                  value={formData.petBreed} 
                  onChange={handleInputChange} 
                  placeholder="Ej. Border Collie" 
                  className="border-hotel-olive/30 focus-visible:ring-hotel-olive"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="petAge" className="text-hotel-olive">Edad</Label>
                <Input 
                  id="petAge" 
                  name="petAge" 
                  value={formData.petAge} 
                  onChange={handleInputChange} 
                  placeholder="Ej. 3 años" 
                  className="border-hotel-olive/30 focus-visible:ring-hotel-olive"
                />
              </div>
            </div>
            
            {formData.room && (
              <div className="mt-6 p-4 bg-hotel-soft-sage/20 rounded-lg">
                <p className="text-gray-700 flex items-center gap-2">
                  <PawPrint className="h-5 w-5 text-hotel-olive" />
                  <span>Habitación seleccionada: <span className="font-semibold text-hotel-dark-olive">{formData.room}</span></span>
                </p>
              </div>
            )}
            
            <div className="flex justify-end mt-8">
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-hotel-olive to-hotel-dark-olive hover:from-hotel-dark-olive hover:to-hotel-olive text-white px-6"
              >
                Siguiente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-hotel-olive">Información del propietario</h2>
              <p className="text-gray-600">Tus datos para poder contactar contigo</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ownerName" className="text-hotel-olive">Nombre completo <span className="text-red-500">*</span></Label>
                <Input 
                  id="ownerName" 
                  name="ownerName" 
                  value={formData.ownerName} 
                  onChange={handleInputChange} 
                  placeholder="Ej. María García" 
                  className="border-hotel-olive/30 focus-visible:ring-hotel-olive"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="ownerEmail" className="text-hotel-olive">Correo electrónico <span className="text-red-500">*</span></Label>
                <Input 
                  id="ownerEmail" 
                  name="ownerEmail" 
                  type="email" 
                  value={formData.ownerEmail} 
                  onChange={handleInputChange} 
                  placeholder="Ej. maria@email.com" 
                  className="border-hotel-olive/30 focus-visible:ring-hotel-olive"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="ownerPhone" className="text-hotel-olive">Teléfono <span className="text-red-500">*</span></Label>
                <Input 
                  id="ownerPhone" 
                  name="ownerPhone" 
                  value={formData.ownerPhone} 
                  onChange={handleInputChange} 
                  placeholder="Ej. 699123456" 
                  className="border-hotel-olive/30 focus-visible:ring-hotel-olive"
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                className="border-hotel-olive text-hotel-olive"
              >
                Anterior
              </Button>
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-hotel-olive to-hotel-dark-olive hover:from-hotel-dark-olive hover:to-hotel-olive text-white px-6"
              >
                Siguiente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-hotel-olive">Fechas y servicios adicionales</h2>
              <p className="text-gray-600">Elige las fechas de estancia y servicios extra para tu mascota</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-hotel-dark-olive">Fechas de reserva</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="text-hotel-olive">Fecha de entrada <span className="text-red-500">*</span></Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-hotel-olive/30",
                          !formData.startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.startDate ? format(formData.startDate, "PPP", { locale: es }) : "Selecciona una fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.startDate}
                        onSelect={date => handleDateSelect('startDate', date)}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="endDate" className="text-hotel-olive">Fecha de salida <span className="text-red-500">*</span></Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-hotel-olive/30",
                          !formData.endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.endDate ? format(formData.endDate, "PPP", { locale: es }) : "Selecciona una fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.endDate}
                        onSelect={date => handleDateSelect('endDate', date)}
                        initialFocus
                        disabled={(date) => 
                          date < new Date() || 
                          (formData.startDate && date < formData.startDate)
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2 mt-6">
                  <Label htmlFor="specialRequirements" className="text-hotel-olive">Requisitos especiales</Label>
                  <Textarea 
                    id="specialRequirements" 
                    name="specialRequirements" 
                    value={formData.specialRequirements} 
                    onChange={handleInputChange} 
                    placeholder="Si tu mascota tiene necesidades especiales, cuéntanoslas aquí..."
                    className="border-hotel-olive/30 focus-visible:ring-hotel-olive"
                    rows={4}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-hotel-dark-olive mb-4">Servicios adicionales</h3>
                <div className="grid grid-cols-1 gap-3">
                  {additionalServices.map(service => (
                    <div 
                      key={service.id}
                      className={cn(
                        "p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center",
                        formData.additionalServices.includes(service.id)
                          ? "border-hotel-olive bg-hotel-soft-sage/20"
                          : "border-gray-200 hover:border-hotel-olive/50 hover:bg-hotel-soft-sage/10"
                      )}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center",
                          formData.additionalServices.includes(service.id)
                            ? "bg-hotel-olive text-white"
                            : "border border-gray-300"
                        )}>
                          {formData.additionalServices.includes(service.id) && (
                            <Heart className="h-3 w-3" />
                          )}
                        </div>
                        <span>{service.name}</span>
                      </div>
                      <span className="font-semibold text-hotel-olive">{service.price}€</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                className="border-hotel-olive text-hotel-olive"
              >
                Anterior
              </Button>
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-hotel-olive to-hotel-dark-olive hover:from-hotel-dark-olive hover:to-hotel-olive text-white px-6"
              >
                Revisar y confirmar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );
        
      case 4:
        const { total, days, basePrice } = calculatePrice();
        return (
          <div className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-hotel-olive">Revisar y confirmar reserva</h2>
              <p className="text-gray-600">Comprueba los datos antes de finalizar</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-hotel-dark-olive flex items-center gap-2">
                    <PawPrint className="h-5 w-5" />
                    Información de la mascota
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nombre:</span>
                    <span className="font-medium">{formData.petName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span className="font-medium">{formData.petType}</span>
                  </div>
                  {formData.petBreed && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Raza:</span>
                      <span className="font-medium">{formData.petBreed}</span>
                    </div>
                  )}
                  {formData.petAge && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Edad:</span>
                      <span className="font-medium">{formData.petAge}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-hotel-dark-olive flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Tus datos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nombre:</span>
                    <span className="font-medium">{formData.ownerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{formData.ownerEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Teléfono:</span>
                    <span className="font-medium">{formData.ownerPhone}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-hotel-dark-olive flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Detalles de la estancia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-gray-600">Habitación:</p>
                      <p className="font-medium text-hotel-dark-olive">{formData.room}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-600">Fechas:</p>
                      <p className="font-medium">
                        {formData.startDate && formData.endDate ? (
                          <>
                            {format(formData.startDate, "PPP", { locale: es })} - {format(formData.endDate, "PPP", { locale: es })}
                            <span className="block text-sm text-gray-500">({days} {days === 1 ? 'día' : 'días'})</span>
                          </>
                        ) : (
                          'Fechas no seleccionadas'
                        )}
                      </p>
                    </div>
                  </div>
                  
                  {formData.additionalServices.length > 0 && (
                    <div className="mt-4">
                      <p className="text-gray-600 mb-2">Servicios adicionales:</p>
                      <ul className="space-y-1">
                        {formData.additionalServices.map(serviceId => {
                          const service = additionalServices.find(s => s.id === serviceId);
                          return (
                            <li key={serviceId} className="flex justify-between">
                              <span>{service?.name}</span>
                              <span className="font-medium">{service?.price}€</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  
                  {formData.specialRequirements && (
                    <div className="mt-4">
                      <p className="text-gray-600 mb-2">Requisitos especiales:</p>
                      <p className="text-sm bg-gray-50 p-3 rounded">{formData.specialRequirements}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-hotel-soft-sage/20 border-hotel-olive/20 shadow-sm mt-6">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">Precio por noche:</p>
                    <p className="text-2xl font-bold text-hotel-dark-olive">{basePrice}€</p>
                    <p className="text-sm text-gray-600">{days} {days === 1 ? 'día' : 'días'} x {basePrice}€</p>
                    
                    {formData.additionalServices.length > 0 && (
                      <p className="text-sm text-gray-600 mt-1">+ Servicios adicionales</p>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <p className="text-gray-700">Total:</p>
                    <p className="text-3xl font-bold text-hotel-dark-olive">{total}€</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                className="border-hotel-olive text-hotel-olive"
              >
                Volver a editar
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-gradient-to-r from-hotel-olive to-hotel-dark-olive hover:from-hotel-dark-olive hover:to-hotel-olive text-white px-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    Confirmar reserva
                    <Heart className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  // Renderizado para reserva completada
  const renderReservaCompleta = () => (
    <div className="bg-white p-8 rounded-xl shadow-md text-center">
      <div className="mb-6 text-hotel-olive">
        <Heart className="h-16 w-16 mx-auto" />
      </div>
      
      <h2 className="text-3xl font-display font-bold text-hotel-dark-olive mb-4">¡Reserva confirmada!</h2>
      <p className="text-gray-600 mb-6 max-w-lg mx-auto">
        Gracias por confiar en Huellas y Sueños para el cuidado de {formData.petName}. Tu reserva ha sido registrada con éxito.
      </p>
      
      <div className="p-6 bg-hotel-soft-sage/20 rounded-lg inline-block mb-8">
        <p className="text-hotel-dark-olive font-medium">ID de Reserva:</p>
        <p className="text-2xl font-bold text-hotel-olive">{reservaId}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        <p>Te hemos enviado un correo a <span className="font-medium">{formData.ownerEmail}</span> con todos los detalles.</p>
        <p>Si tienes alguna duda, puedes contactarnos en el <span className="font-medium">999 888 777</span> o vía email en <span className="font-medium">reservas@huellasysuenos.com</span></p>
      </div>
      
      <div className="space-x-4">
        <Button 
          onClick={handleGeneratePDF}
          variant="outline"
          className="border-hotel-olive text-hotel-olive hover:bg-hotel-soft-sage/20"
        >
          Descargar confirmación
        </Button>
        
        <Button 
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-hotel-olive to-hotel-dark-olive hover:from-hotel-dark-olive hover:to-hotel-olive text-white"
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-hotel-soft-sage/20">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {!reservaCompleta ? (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center items-center mb-10">
                <div className="w-full max-w-2xl">
                  <div className="relative">
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>
                    <div className="relative flex justify-between">
                      {[1, 2, 3, 4].map((stepNumber) => (
                        <div key={stepNumber} className="flex flex-col items-center">
                          <div 
                            className={cn(
                              "relative z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                              stepNumber < step 
                                ? "bg-hotel-dark-olive text-white" 
                                : stepNumber === step 
                                  ? "bg-hotel-olive text-white" 
                                  : "bg-gray-200 text-gray-400"
                            )}
                          >
                            {stepNumber < step ? (
                              <PawPrint className="h-5 w-5" />
                            ) : (
                              <span>{stepNumber}</span>
                            )}
                          </div>
                          <span 
                            className={cn(
                              "mt-2 text-xs font-medium",
                              stepNumber <= step ? "text-hotel-olive" : "text-gray-500"
                            )}
                          >
                            {stepNumber === 1 
                              ? "Mascota" 
                              : stepNumber === 2
                                ? "Propietario"
                                : stepNumber === 3
                                  ? "Fechas y servicios"
                                  : "Confirmación"
                            }
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {renderStepContent()}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              {renderReservaCompleta()}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReservaProcess;
