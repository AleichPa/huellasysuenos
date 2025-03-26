import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SEASONS, generateSeasonDates, getSeason, SeasonType, formatPercentage } from "@/utils/seasonData";

const rooms = [
  {
    id: "perros-pequenos-standard",
    title: "Standard para perros pequeños",
    description: "Un nidito acogedor para perros pequeños con todo lo que necesitan para sentirse como en casa.",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
    price: 40,
    features: ["Camita suave y calentita", "Platos coloridos", "Juguetes divertidos", "Limpieza diaria con productos eco"]
  },
  {
    id: "perros-grandes-standard",
    title: "Standard para perros grandes",
    description: "Espacio amplio y diseñado para ofrecer comodidad a los amigos peludos de mayor tamaño.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    price: 50,
    features: ["Cama ortopédica extra suave", "Zona de juegos con túneles", "Galletas y premios caseros", "Paseos extra largos", "TV con programas para mascotas"]
  },
  {
    id: "gatos-standard",
    title: "Standard para gatos",
    description: "Un espacio tranquilo y confortable diseñado específicamente para gatos, con múltiples niveles para trepar.",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
    price: 30,
    features: ["Rascadores de diferentes texturas", "Camas elevadas", "Juguetes interactivos", "Ventanas para observación", "Espacios para esconderse"]
  },
  {
    id: "roedores-standard",
    title: "Standard Roedores",
    description: "Habitación diseñada para el confort y seguridad de pequeños roedores como hámsters, cobayas y conejos enanos.",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
    price: 10,
    features: ["Tubos y túneles", "Juguetes para roer", "Viruta premium", "Control de temperatura", "Ruedas de ejercicio"]
  },
  {
    id: "reptiles-standard",
    title: "Standard Reptiles",
    description: "Espacio especializado para reptiles con control preciso de temperatura y humedad.",
    image: "https://images.unsplash.com/photo-1597162216923-ba9b920f29fa",
    price: 10,
    features: ["Control preciso de temperatura", "Lámparas UVB/UVA", "Escondites naturales", "Fuentes de agua fresca", "Sustratos específicos"]
  },
  {
    id: "aves-standard",
    title: "Standard aves",
    description: "Un espacio luminoso y seguro para que tus aves disfruten de su estancia.",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9",
    price: 8,
    features: ["Perchas variadas", "Juguetes coloridos", "Música ambiental", "Alimentación variada", "Baño para aves"]
  },
  {
    id: "peces-con-pecera",
    title: "Standard de peces con pecera",
    description: "Alojamiento perfecto para peces con mantenimiento profesional. Mínimo una semana de estancia y requiere traer pecera propia.",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    price: 5,
    features: ["Control de parámetros del agua", "Alimentación específica", "Monitoreo constante", "Mínimo una semana de estancia", "Requiere traer pecera propia"]
  },
  {
    id: "peces-sin-pecera",
    title: "Standard de peces sin pecera",
    description: "Servicio completo para el cuidado de tus peces en nuestras peceras profesionales.",
    image: "https://images.unsplash.com/photo-1571106816054-1aa8af14e471",
    price: 10,
    features: ["Peceras profesionales", "Filtración avanzada", "Iluminación controlada", "Mantenimiento diario", "Tratamiento de agua especializado"]
  },
  {
    id: "suite-perros-pequenos",
    title: "Suite para perros pequeños",
    description: "Lujosa habitación con espacio para hasta 3 perros pequeños que quieran disfrutar de una estancia premium.",
    image: "https://images.unsplash.com/photo-1583512603806-077998240c7a",
    price: 65, // Promedio entre 60-70€
    features: ["Capacidad hasta 3 perros pequeños", "Camas individuales premium", "Zona de juegos privada", "Servicio de snacks gourmet", "Paseos personalizados"]
  },
  {
    id: "suite-perros-grandes",
    title: "Suite para perros grandes",
    description: "Nuestra suite más exclusiva y espaciosa para perros grandes, con capacidad hasta 3 perros.",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    price: 90, // Promedio entre 80-100€
    features: ["Capacidad hasta 3 perros grandes", "Camas ortopédicas XL", "Zona de juegos exclusiva", "Servicio de masajes", "Menú gourmet personalizado", "Paseos VIP"]
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

  // Cálculo de costos
  const getSelectedRoom = () => rooms.find(room => room.id === selectedRoom);
  const roomPrice = getSelectedRoom()?.price || 0;
  
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
  
  // Calculate price with season adjustments
  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return 0;
    
    const nights = calculateNights();
    if (nights <= 0) return 0;
    
    let totalPrice = 0;
    const baseNightPrice = roomPrice + getServicesPrice();
    
    // Iterate through each night to apply correct seasonal rates
    const currentDate = new Date(checkIn);
    for (let i = 0; i < nights; i++) {
      // Clone the date to avoid modifying the original
      const nightDate = new Date(currentDate);
      nightDate.setDate(nightDate.getDate() + i);
      
      // Get the season for this specific date
      const season = getSeason(nightDate);
      const priceMultiplier = SEASONS[season].priceMultiplier;
      
      // Add price for this night with seasonal adjustment
      totalPrice += baseNightPrice * priceMultiplier;
    }
    
    return Math.round(totalPrice);
  };
  
  const totalPrice = calculateTotalPrice();

  // Generate season dates for calendar display
  const [seasonData, setSeasonData] = useState({
    low: [] as Date[],
    medium: [] as Date[],
    high: [] as Date[]
  });

  const [showSeasonInfo, setShowSeasonInfo] = useState(false);

  useEffect(() => {
    // Generate season data for the entire year
    setSeasonData(generateSeasonDates());
  }, []);

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
      <h2 className="text-2xl font-bold text-center mb-6">Selecciona fechas de estancia</h2>
      
      <div className="flex justify-center mb-2">
        <Button 
          variant="outline"
          className="text-xs flex items-center gap-1"
          onClick={() => setShowSeasonInfo(true)}
        >
          Ver información de temporadas
        </Button>
      </div>

      <Dialog open={showSeasonInfo} onOpenChange={setShowSeasonInfo}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Información de temporadas</DialogTitle>
            <DialogDescription>
              Los precios varían según la temporada:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: SEASONS.low.color }}></div>
              <span>{SEASONS.low.name} - Precio regular</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: SEASONS.medium.color }}></div>
              <span>{SEASONS.medium.name} - Recargo del {formatPercentage(SEASONS.medium.priceMultiplier)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: SEASONS.high.color }}></div>
              <span>{SEASONS.high.name} - Recargo del {formatPercentage(SEASONS.high.priceMultiplier)}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
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
                onSelect={setCheckIn}
                initialFocus
                disabled={(date) => date < new Date()}
                seasonModifiers={seasonData}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
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
                onSelect={setCheckOut}
                initialFocus
                disabled={(date) => !checkIn || date <= checkIn}
                seasonModifiers={seasonData}
                className={cn("p-3 pointer-events-auto")}
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

            {/* Resumen de costos con información de temporada */}
            {selectedRoom && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Resumen de costos</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Habitación ({getSelectedRoom()?.title})</span>
                    <span>${roomPrice}/noche</span>
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
                      <div className="flex justify-between">
                        <span>Noches:</span>
                        <span>{calculateNights()}</span>
                      </div>
                      
                      {/* Show season info for selected dates if available */}
                      {checkIn && (
                        <div className="flex items-center gap-2 mt-2">
                          <span>Temporada:</span>
                          <div className="h-3 w-3 rounded-full" 
                               style={{ backgroundColor: SEASONS[getSeason(checkIn)].color }}></div>
                          <span>{SEASONS[getSeason(checkIn)].name}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="border-t pt-2 font-bold">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>${totalPrice}</span>
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
