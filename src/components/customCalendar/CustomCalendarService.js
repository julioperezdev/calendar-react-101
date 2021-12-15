export const currentMonthName = (time) =>{
    return time.format("MMMM")
}

export const currentYearNumber = (time) =>{
    return time.format("YYYY")
}

export const dayStyles = (time, day) =>{
    if(beforeToday(day)){return "custom-calendar-days-before"}
    if(isSelected(time, day)){return "custom-calendar-days-selected"}
    if(isToday(day)){return "custom-calendar-days-today"}
    return ""
}

export const previousMonth = (time) =>{
    return time.clone().subtract(1, "month")
}

export const nextMonth = (time) =>{
    return time.clone().add(1, "month")
}

export const thisMonth = (time) => {
    return time.isSame(new Date(), "month")
}

const isSelected = (time, day) =>{
    return time.isSame(day, "day")
}

export const beforeToday = (day) =>{
    return day.isBefore(new Date(), "day")
}


const isToday = (day) =>{
    return day.isSame(new Date(), "day")
}

