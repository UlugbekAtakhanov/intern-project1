export const days = () => {
    // Get the current date
    const currentDate = new Date();

    // Get the current month and year
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Create a new Date object for the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    // Array to store the formatted dates
    const daysArray = [];

    // Iterate over the days of the month
    while (firstDayOfMonth.getMonth() === currentMonth) {
        // Format the date as "Month Day"
        const formattedDate = firstDayOfMonth.toLocaleString('default', { month: 'short', day: 'numeric' });

        // Push the formatted date to the array
        daysArray.push(formattedDate);

        // Move to the next day
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    // Print the array of days
    return daysArray
}