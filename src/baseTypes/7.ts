/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum days {
  sunday = "Sunday",
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thurday = "Thurday",
  friday = "Friday",
  saturday = "Saturday",
}

function isWeekend(day: string): boolean {
  if (day === "Saturday" || day === "Sunday") {
    return false;
  } else {
    return true;
  }
}
