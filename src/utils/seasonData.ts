
// Define seasons based on real business periods rather than simple weekday logic

// Season types
export type SeasonType = 'low' | 'medium' | 'high';

// Season definition interface
export interface SeasonDefinition {
  name: string;
  description: string;
  priceMultiplier: number;
  color: string;
}

// Season periods
export const SEASONS: Record<SeasonType, SeasonDefinition> = {
  low: {
    name: "Temporada Baja",
    description: "Menor demanda, fuera de vacaciones escolares y festivos",
    priceMultiplier: 1, // No increase (base price)
    color: "rgba(184, 244, 211, 0.5)" // Green for low season
  },
  medium: {
    name: "Temporada Media",
    description: "Demanda moderada",
    priceMultiplier: 1.3, // 30% increase
    color: "rgba(255, 179, 107, 0.5)" // Orange for medium season
  },
  high: {
    name: "Temporada Alta",
    description: "Alta demanda, vacaciones y festivos",
    priceMultiplier: 1.7, // 70% increase
    color: "rgba(234, 56, 76, 0.5)" // Red for high season
  }
};

// Helper function to determine if a date is a holiday or special event
// This would typically come from an API or database with actual holiday data
const isHoliday = (date: Date): boolean => {
  // Example implementation for some major holidays in Spain
  const month = date.getMonth();
  const day = date.getDate();
  
  // Simplified holiday check (major holidays in Spain)
  // New Year's Day
  if (month === 0 && day === 1) return true;
  // Epiphany
  if (month === 0 && day === 6) return true;
  // Labor Day
  if (month === 4 && day === 1) return true;
  // Assumption of Mary
  if (month === 7 && day === 15) return true;
  // National Day of Spain
  if (month === 9 && day === 12) return true;
  // All Saints Day
  if (month === 10 && day === 1) return true;
  // Constitution Day
  if (month === 11 && day === 6) return true;
  // Immaculate Conception
  if (month === 11 && day === 8) return true;
  // Christmas
  if (month === 11 && (day === 24 || day === 25)) return true;
  
  return false;
};

// Function to determine the season for a given date
export const getSeason = (date: Date): SeasonType => {
  const month = date.getMonth(); // 0-11 (Jan-Dec)
  const day = date.getDate();
  
  // First check if it's a holiday (always high season)
  if (isHoliday(date)) {
    return 'high';
  }
  
  // Low Season: Nov 1 - Dec 15, Feb 1 - May 31
  if ((month === 10 || (month === 11 && day <= 15)) || // Nov 1 - Dec 15
      (month >= 1 && month <= 4)) { // Feb 1 - May 31
    return 'low';
  }
  
  // Medium Season: Dec 16-23, Jun 1 - Jul 15, Sep 1 - Oct 31
  if ((month === 11 && day >= 16 && day <= 23) || // Dec 16-23
      (month === 5) || // Jun
      (month === 6 && day <= 15) || // Jul 1-15
      (month === 8 || month === 9)) { // Sep 1 - Oct 31
    return 'medium';
  }
  
  // High Season: Dec 24 - Jan 31, Jul 16 - Aug 31
  if ((month === 11 && day >= 24) || // Dec 24-31
      (month === 0) || // Jan
      (month === 6 && day >= 16) || // Jul 16-31
      (month === 7)) { // Aug
    return 'high';
  }
  
  // Default to medium season if something doesn't match
  return 'medium';
};

// Generate season dates for a given year
export const generateSeasonDates = (year: number = new Date().getFullYear()): Record<SeasonType, Date[]> => {
  const lowSeasonDates: Date[] = [];
  const mediumSeasonDates: Date[] = [];
  const highSeasonDates: Date[] = [];
  
  // Generate dates for the entire year
  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const season = getSeason(date);
      
      switch (season) {
        case 'low':
          lowSeasonDates.push(date);
          break;
        case 'medium':
          mediumSeasonDates.push(date);
          break;
        case 'high':
          highSeasonDates.push(date);
          break;
      }
    }
  }
  
  return {
    low: lowSeasonDates,
    medium: mediumSeasonDates,
    high: highSeasonDates
  };
};
