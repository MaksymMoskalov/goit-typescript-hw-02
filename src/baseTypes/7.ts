/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thurday = "Thurday",
  Friday = "Friday",
  Saturday = "Saturday",
}

function isWeekend(day: Days): boolean {
  return day === Days.Saturday || day === Days.Sunday;
}
