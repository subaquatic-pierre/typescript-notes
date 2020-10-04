export function stringToDate(date: string): Date {
  const dateParts = date.split("/").map((value: string): number => {
    return parseInt(value);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
