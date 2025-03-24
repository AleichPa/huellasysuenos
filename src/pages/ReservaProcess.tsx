import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, ArrowLeft, ArrowRight, Check, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Definición de temporadas
type Season = "baja" | "media" | "alta";

interface SeasonDate {
  from: Date;
  to: Date;
  season: Season;
}

// Datos de temporadas para el año actual
const currentYear = new Date().getFullYear();
const seasons: SeasonDate[] = [
  // Temporada Baja (verde)
  { from: new Date(currentYear, 0, 1), to: new Date(currentYear, 4, 31), season: "baja" }, // Enero - Mayo
  { from: new Date(currentYear, 9, 1), to: new Date(currentYear, 11, 15), season: "baja" }, // Octubre - 15 Diciembre
  
  // Temporada Media (naranja)
  { from: new Date(currentYear, 5, 1), to: new Date(currentYear, 5, 30), season: "media" }, // Junio
  { from: new Date(currentYear, 8, 1), to: new Date(currentYear, 8, 30), season: "media" }, // Septiembre
  
  // Temporada Alta (roja)
  { from: new Date(currentYear, 6, 1), to: new Date(currentYear, 7, 31), season: "alta" }, // Julio - Agosto
  { from: new Date(currentYear, 11, 16), to: new Date(currentYear, 11, 31), season: "alta" }, // 16 Diciembre - 31 Diciembre
];

const rooms = [
  {
    id: "estandar",
    title: "Habitación Estándar",
    description: "Espacio cómodo con todas las necesidades básicas para mascotas pequeñas.",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
    price: 25,
    features: ["Cama cómoda", "Comedero y bebedero", "Juguetes básicos", "Limpieza diaria"]
  },
  {
    id: "premium",
    title: "Suite Premium",
    description: "Amplio espacio con extras para mascotas que merecen un trato especial.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    price: 40,
    features: ["Cama ortopédica", "Área de juegos", "Snacks premium", "Paseos extras", "TV con canales para mascotas"]
  },
  {
    id: "familiar",
    title: "Suite Familiar",
    description: "Perfecta para familias de mascotas que quieren compartir espacio.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    price: 55,
    features: ["Espacio ampliado", "Varias camas", "Juegos interactivos", "Tiempo de juego supervisado", "Cámaras para monitoreo"]
  },
];

const additionalServices = [
  {
    id: "paseo",
    title: "Paseos diarios extra",
    description: "Paseos adicionales para que tu mascota se ejercite",
    price: 10,
  },
  {
    id: "baño",
    title: "Baño y peluquería",
    description: "Servicio completo de baño y peluquería al final de la estancia",
    price: 15,
  },
  {
    id: "training",
    title: "Sesión de entrenamiento",
    description: "Sesiones de entrenamiento básico con nuestros especialistas",
    price: 20,
  },
  {
    id: "premium-food",
    title: "Alimentación premium",
    description: "Menú especial con alimentos de primera calidad",
    price: 8,
  },
];

// Función para determinar la temporada de una fecha
const getDateSeason = (date: Date): Season | null => {
  for (const period of seasons) {
    if (date >= period.from && date <= period.to) {
      return period.season;
    }
  }
  return null;
};

// Función para aplicar estilos según la temporada
const getSeasonStyles = (day: Date): string => {
  const season = getDateSeason(day);
  
  switch (season) {
    case "baja":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "media":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200";
    case "alta":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "";
  }
};

const ReservaProcess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedRoomId = searchParams.get("room");
  
  // Estados para los pasos del proceso
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(
    preselectedRoomId ? preselectedRoomId.toLowerCase() : null
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");

  // Cálculo de costos con ajuste por temporada
  const getSelectedRoom = () => rooms.find(room => room.id === selectedRoom);
  const roomBasePrice = getSelectedRoom()?.price || 0;
  
  const getServicesPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };
  
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Aplicar recargo según temporada de entrada
  const getSeasonPriceMultiplier = () => {
    if (!checkIn) return 1;
    const season = getDateSeason(checkIn);
    switch (season) {
      case "baja": return 1;    // Precio estándar
      case "media": return 1.15; // +15%
      case "alta": return 1.3;  // +30%
      default: return 1;
    }
  };
  
  const roomPrice = roomBasePrice * getSeasonPriceMultiplier();
  const totalPrice = (roomPrice + getServicesPrice()) * Math.max(1, calculateNights());

  // Manejadores de eventos
  const handleSelectRoom = (roomId: string) => {
    setSelectedRoom(roomId);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId) 
        : [...prev, serviceId]
    );
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedRoom) {
      toast({
        title: "Error",
        description: "Por favor selecciona una habitación",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === 3 && (!checkIn || !checkOut)) {
      toast({
        title: "Error",
        description: "Por favor selecciona las fechas de entrada y salida",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === 4 && (!petName || !petType || !ownerName || !ownerEmail || !ownerPhone)) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos del formulario",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Envío final del formulario
      toast({
        title: "¡Reserva recibida!",
        description: "Nos pondremos en contacto contigo a la brevedad para confirmar tu reserva.",
      });

      // Simulamos un retraso y luego redirigimos a la página principal
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate("/");
    }
  };

  const renderRoomSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">Selecciona una habitación</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Card 
            key={room.id} 
            className={cn(
              "overflow-hidden border cursor-pointer transition-all hover:shadow-lg",
              selectedRoom === room.id ? "ring-2 ring-hotel-purple" : "hover:-translate-y-1"
            )}
            onClick={() => handleSelectRoom(room.id)}
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={room.image} 
                alt={room.title} 
                className="w-full h-full object-cover"
              />
              {selectedRoom === room.id && (
                <div className="absolute top-2 right-2 bg-hotel-purple text-white p-1 rounded-full">
                  <Check size={16} />
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{room.title}</CardTitle>
                <span className="text-hotel-purple font-bold">${room.price}/noche</span>
              </div>
              <CardDescription>{room.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {room.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-hotel-purple"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-2">Selecciona servicios adicionales</h2>
      <p className="text-center text-gray-600 mb-6">
        Estos servicios tienen un costo adicional por noche
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {additionalServices.map((service) => (
          <div 
            key={service.id}
            className={cn(
              "p-4 border rounded-lg flex items-start gap-3 cursor-pointer",
              selectedServices.includes(service.id) ? "bg-hotel-purple/10 border-hotel-purple" : "hover:bg-gray-50"
            )}
            onClick={() => handleSelectService(service.id)}
          >
            <Checkbox 
              checked={selectedServices.includes(service.id)}
              className="mt-1" 
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{service.title}</h3>
                <span className="text-hotel-purple font-bold">${service.price}</span>
              </div>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDateSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-3">Selecciona fechas de estancia</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center gap-2">
        <InfoIcon className="h-5 w-5 text-hotel-purple" />
        <div className="flex-1">
          <p className="text-sm mb-2">Los precios varían según temporada:</p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-100 text-green-800">Temporada Baja - Tarifa Estándar</Badge>
            <Badge className="bg-orange-100 text-orange-800">Temporada Media - +15%</Badge>
            <Badge className="bg-red-100 text-red-800">Temporada Alta - +30%</Badge>
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <InfoIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4">
            <div className="space-y-2">
              <h4 className="font-medium">Detalles de Temporadas</h4>
              <p className="text-sm">
                <span className="font-medium">Temporada Baja:</span> Enero-Mayo y Octubre-15 Diciembre
              </p>
              <p className="text-sm">
                <span className="font-medium">Temporada Media:</span> Junio y Septiembre
              </p>
              <p className="text-sm">
                <span className="font-medium">Temporada Alta:</span> Julio-Agosto y 16-31 Diciembre
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Fecha de entrada</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? (
                  format(checkIn, "PPP", { locale: es })
                ) : (
                  <span>Selecciona la fecha</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  if (date) {
                    setCheckIn(date);
                  }
                }}
                initialFocus
                disabled={(date) => date < new Date()}
                components={{
                  Day: ({ date, ...props }) => {
                    const seasonStyle = getSeasonStyles(date);
                    const isSelected = checkIn && date.toDateString() === checkIn.toDateString();
                    
                    return (
                      <div 
                        className={`h-9 w-9 p-0 font-normal flex items-center justify-center rounded-md hover:bg-gray-100 ${seasonStyle} ${isSelected ? 'ring-2 ring-hotel-purple' : ''}`} 
                        {...props}
                      >
                        <span>{date.getDate()}</span>
                      </div>
                    );
                  }
                }}
              />
            </PopoverContent>
          </Popover>
          {checkIn && getDateSeason(checkIn) && (
            <div className="mt-2 flex items-center gap-2">
              <Badge className={cn(
                getDateSeason(checkIn) === "baja" && "bg-green-100 text-green-800",
                getDateSeason(checkIn) === "media" && "bg-orange-100 text-orange-800",
                getDateSeason(checkIn) === "alta" && "bg-red-100 text-red-800"
              )}>
                Temporada {getDateSeason(checkIn)?.charAt(0).toUpperCase() + getDateSeason(checkIn)?.slice(1)}
              </Badge>
              {getDateSeason(checkIn) !== "baja" && (
                <span className="text-xs text-gray-500">
                  {getDateSeason(checkIn) === "media" ? "+15%" : "+30%"} sobre tarifa estándar
                </span>
              )}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label>Fecha de salida</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? (
                  format(checkOut, "PPP", { locale: es })
                ) : (
                  <span>Selecciona la fecha</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={(date) => {
                  if (date) {
                    setCheckOut(date);
                  }
                }}
                initialFocus
                disabled={(date) => !checkIn || date <= checkIn}
                components={{
                  Day: ({ date, ...props }) => {
                    const seasonStyle = getSeasonStyles(date);
                    const isSelected = checkOut && date.toDateString() === checkOut.toDateString();
                    
                    return (
                      <div 
                        className={`h-9 w-9 p-0 font-normal flex items-center justify-center rounded-md hover:bg-gray-100 ${seasonStyle} ${isSelected ? 'ring-2 ring-hotel-purple' : ''}`} 
                        {...props}
                      >
                        <span>{date.getDate()}</span>
                      </div>
                    );
                  }
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );

  const renderContactForm = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">Completa tus datos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="petName">Nombre de tu mascota</Label>
          <Input
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            placeholder="Nombre de tu mascota"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="petType">Tipo de mascota</Label>
          <Input
            id="petType"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            placeholder="Perro, gato, etc."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ownerName">Tu nombre</Label>
          <Input
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Nombre completo"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ownerEmail">Email</Label>
          <Input
            id="ownerEmail"
            type="email"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
            placeholder="tu@email.com"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="ownerPhone">Teléfono</Label>
          <Input
            id="ownerPhone"
            value={ownerPhone}
            onChange={(e) => setOwnerPhone(e.target.value)}
            placeholder="Número de teléfono"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center gap-2" 
          onClick={handlePrevStep}
        >
          <ArrowLeft size={16} />
          {currentStep === 1 ? 'Volver al inicio' : 'Paso anterior'}
        </Button>

        <div className="max-w-6xl mx-auto">
          {/* Indicador de progreso */}
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={cn(
                  "flex items-center",
                  step < currentStep ? "text-hotel-purple" : "text-gray-400"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center border-2",
                  step <= currentStep ? "border-hotel-purple bg-hotel-purple text-white" : "border-gray-300"
                )}>
                  {step < currentStep ? <Check size={16} /> : step}
                </div>
                {step < 4 && (
                  <div className={cn(
                    "hidden md:block w-24 h-0.5 mx-2",
                    step < currentStep ? "bg-hotel-purple" : "bg-gray-300"
                  )} />
                )}
              </div>
            ))}
          </div>

          {/* Contenido del paso actual */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            {currentStep === 1 && renderRoomSelection()}
            {currentStep === 2 && renderServiceSelection()}
            {currentStep === 3 && renderDateSelection()}
            {currentStep === 4 && renderContactForm()}

            {/* Resumen de costos */}
            {selectedRoom && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Resumen de costos</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <div>
                      <span>Habitación ({getSelectedRoom()?.title})</span>
                      {checkIn && getDateSeason(checkIn) !== "baja" && (
                        <Badge className={cn(
                          "ml-2",
                          getDateSeason(checkIn) === "media" && "bg-orange-100 text-orange-800",
                          getDateSeason(checkIn) === "alta" && "bg-red-100 text-red-800"
                        )}>
                          {getDateSeason(checkIn) === "media" ? "+15%" : "+30%"}
                        </Badge>
                      )}
                    </div>
                    <span>${roomPrice.toFixed(2)}/noche</span>
                  </div>
                  
                  {selectedServices.length > 0 && (
                    <>
                      <div className="border-t pt-2">
                        <p className="font-medium mb-1">Servicios adicionales:</p>
                        {selectedServices.map(serviceId => {
                          const service = additionalServices.find(s => s.id === serviceId);
                          return (
                            <div key={serviceId} className="flex justify-between text-sm">
                              <span>{service?.title}</span>
                              <span>${service?.price}/noche</span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                  {checkIn && checkOut && (
                    <div className="border-t pt-2">
                      <span>Noches: {calculateNights()}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 font-bold">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <Button
                onClick={handleNextStep}
                className="bg-hotel-purple hover:bg-hotel-dark-purple text-white px-8"
              >
                {currentStep === 4 ? (
                  'Confirmar Reserva'
                ) : (
                  <>
                    Siguiente
                    <ArrowRight size={16} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReservaProcess;
