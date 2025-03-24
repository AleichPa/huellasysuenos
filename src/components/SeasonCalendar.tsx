
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, InfoIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

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

const SeasonCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<Date>(new Date());

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

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-hotel-dark-purple mb-2">Calendario de Temporadas</h2>
          <p className="text-gray-600">
            Consulta nuestras tarifas según la temporada
          </p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 self-start"
            >
              <InfoIcon className="h-4 w-4" />
              <span>Ver Leyenda</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4">
            <div className="space-y-2">
              <h3 className="font-medium">Temporadas y Tarifas</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Temporada Baja</Badge>
                <span className="text-sm">Tarifa estándar</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Temporada Media</Badge>
                <span className="text-sm">+15% sobre tarifa estándar</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Temporada Alta</Badge>
                <span className="text-sm">+30% sobre tarifa estándar</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
          className="pointer-events-auto"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day_selected: "",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground opacity-50",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
          components={{
            Caption: (props) => (
              <div className="flex justify-center pt-1 relative items-center">
                <div className="text-sm font-medium capitalize">
                  {format(props.displayMonth, "MMMM yyyy", { locale: es })}
                </div>
              </div>
            ),
            Day: (props) => {
              const seasonStyle = getSeasonStyles(props.date);
              return (
                <div 
                  className={`h-9 w-9 p-0 font-normal flex items-center justify-center rounded-md hover:bg-gray-100 aria-selected:opacity-100 ${seasonStyle}`} 
                  {...props}
                />
              );
            }
          }}
        />
      </div>

      {date && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">Información para {format(date, "PPP", { locale: es })}</h3>
          <div className="space-y-2">
            {getDateSeason(date) === "baja" && (
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800">Temporada Baja</Badge>
                <span>Tarifa estándar aplicable - ¡Mejor precio del año!</span>
              </div>
            )}
            {getDateSeason(date) === "media" && (
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-100 text-orange-800">Temporada Media</Badge>
                <span>Tarifa con recargo del 15% - Disponibilidad moderada</span>
              </div>
            )}
            {getDateSeason(date) === "alta" && (
              <div className="flex items-center gap-2">
                <Badge className="bg-red-100 text-red-800">Temporada Alta</Badge>
                <span>Tarifa con recargo del 30% - Reserva con antelación</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeasonCalendar;
