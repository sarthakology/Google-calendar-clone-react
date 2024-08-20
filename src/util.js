// Import the Day.js library, which is a lightweight date manipulation library
import dayjs from "dayjs";

// Export the function getMonth which generates a matrix of dates representing a calendar month
export function getMonth(month = dayjs().month()) {
  // Ensure the provided month is an integer by flooring it (rounding down)
  month = Math.floor(month);

  // Get the current year using Day.js
  const year = dayjs().year();

  // Get the day of the week of the first day of the given month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  // Initialize a counter starting from the negative value of the first day of the month
  // This counter will be used to generate dates, starting from the previous month's dates if necessary
  let currentMonthCount = 0 - firstDayOfTheMonth;

  // Create a 5x7 matrix to represent the days in a month (5 weeks by 7 days)
  const daysMatrix = new Array(5).fill([]).map(() => {
    // For each row (week), create an array of 7 elements (days)
    return new Array(7).fill(null).map(() => {
      // Increment the counter for each day
      currentMonthCount++;
      // Create a new Day.js date object for the current day in the loop
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  // Return the matrix of days representing the calendar month
  return daysMatrix;
}