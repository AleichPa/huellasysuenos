import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, ArrowLeft, InfoIcon } from "lucide-react";
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

// Función para mostrar el precio según la temporada
const getSeasonLabel = (day: Date): string => {
  const season = getDateSeason(day);
  switch (season) {
    case "baja":
      return "B";
    case "media":
      return "M";
    case "alta":
      return "A";
    default:
      return "";
  }
};

const Reservas = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  // Obtener el tipo de habitación de los parámetros de URL si existe
  useState(() => {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");
    if (room) {
      setSelectedRoom(room);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Error",
        description: "Por favor selecciona las fechas de entrada y salida",
        variant: "destructive",
      });
      return;
    }

    if (!petName || !petType || !ownerName || !ownerEmail || !ownerPhone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos del formulario",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Reserva recibida!",
      description: "Nos pondremos en contacto contigo a la brevedad para confirmar tu reserva.",
    });

    // Simulamos un retraso y luego redirigimos a la página principal
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-24 flex-grow">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center gap-2" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Button>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center text-hotel-purple">
            Reserva tu estancia
          </h1>
          
          {selectedRoom && (
            <div className="mb-6 p-4 bg-hotel-purple/10 rounded-lg">
              <p className="font-medium">Habitación seleccionada: <span className="text-hotel-purple">{selectedRoom}</span></p>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg mb-6 flex items-center gap-2">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="checkIn">Fecha de entrada</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="checkIn"
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
                      components={{
                        Day: (props) => {
                          const seasonStyle = getSeasonStyles(props.date);
                          const seasonLabel = getSeasonLabel(props.date);
                          const isSelected = checkIn && props.date.toDateString() === checkIn.toDateString();
                          
                          return (
                            <div 
                              className={`h-9 w-9 p-0 font-normal flex items-center justify-center rounded-md hover:bg-gray-100 ${seasonStyle} ${isSelected ? 'ring-2 ring-hotel-purple' : ''}`} 
                              {...props}
                            >
                              <div className="flex flex-col items-center justify-center">
                                <span>{props.date.getDate()}</span>
                                {seasonLabel && (
                                  <span className="text-xs font-bold">{seasonLabel}</span>
                                )}
                              </div>
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
                <Label htmlFor="checkOut">Fecha de salida</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="checkOut"
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
                      components={{
                        Day: (props) => {
                          const seasonStyle = getSeasonStyles(props.date);
                          const seasonLabel = getSeasonLabel(props.date);
                          const isSelected = checkOut && props.date.toDateString() === checkOut.toDateString();
                          
                          return (
                            <div 
                              className={`h-9 w-9 p-0 font-normal flex items-center justify-center rounded-md hover:bg-gray-100 ${seasonStyle} ${isSelected ? 'ring-2 ring-hotel-purple' : ''}`} 
                              {...props}
                            >
                              <div className="flex flex-col items-center justify-center">
                                <span>{props.date.getDate()}</span>
                                {seasonLabel && (
                                  <span className="text-xs font-bold">{seasonLabel}</span>
                                )}
                              </div>
                            </div>
                          );
                        }
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

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

            <Button type="submit" className="w-full bg-hotel-purple hover:bg-hotel-dark-purple text-white py-6 h-auto">
              Confirmar Reserva
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservas;
