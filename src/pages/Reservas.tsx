import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, ArrowLeft, InfoIcon } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SEASONS, generateSeasonDates } from "@/utils/seasonData";

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
  const [showSeasonInfo, setShowSeasonInfo] = useState(false);

  // Season data
  const [seasonData, setSeasonData] = useState({
    low: [] as Date[],
    medium: [] as Date[],
    high: [] as Date[]
  });

  useEffect(() => {
    // Generate season data for the current year
    setSeasonData(generateSeasonDates());
  }, []);

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

          <div className="flex justify-center mb-6">
            <Button 
              variant="outline"
              className="text-xs flex items-center gap-1"
              onClick={() => setShowSeasonInfo(true)}
            >
              <InfoIcon size={14} /> Ver información de temporadas
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
                  <span>{SEASONS.medium.name} - Recargo del {(SEASONS.medium.priceMultiplier - 1) * 100}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full" style={{ backgroundColor: SEASONS.high.color }}></div>
                  <span>{SEASONS.high.name} - Recargo del {(SEASONS.high.priceMultiplier - 1) * 100}%</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>

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
                      seasonModifiers={seasonData}
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
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
                      seasonModifiers={seasonData}
                      className="pointer-events-auto"
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
