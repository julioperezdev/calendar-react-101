const buildCalendar = (time) =>{

    const startDay = time.clone().startOf("month").startOf("week")
    const endtDay = time.clone().endOf("month").endOf("week")
    const day = startDay.clone().subtract(1, "day")

    const calendar = []
    while(day.isBefore(endtDay, "day")){
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone())
        )
    }
    
    return calendar
}

export default buildCalendar