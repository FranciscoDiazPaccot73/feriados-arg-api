export const getFullYear = () => new Date().getFullYear();

export const getNextHoliday = (holidays) => {
  const now = new Date()
  const today = {
    day: now.getDate(),
    month: now.getMonth() + 1
  };
  
  const holiday = holidays.find(date => 
    date.mes === today.month && date.dia > today.day || date.mes > today.month
  ) ?? holidays[0];

  return holiday;
}

export const getNextOptional = (holidays) => {
  const now = new Date()
  const today = {
    day: now.getDate(),
    month: now.getMonth() + 1
  };
  
  const holiday = holidays.find(date => 
    date.tipo === 'nolaborable' && (
      date.mes === today.month && date.dia > today.day || date.mes > today.month
    )
  ) ?? holidays[0];

  return holiday;
}

export const getMonthBasedOnIndex = (index) => {
  const months = {
    0: "Enero",
    1: "Febrero",
    2: "Marzo",
    3: "Abril",
    4: "Mayo",
    5: "Junio",
    6: "Julio",
    7: "Agosto",
    8: "Septiembre",
    9: "Octubre",
    10: "Noviembre",
    11: "Diciembre"
  }

  return months[index] ?? ''
}
