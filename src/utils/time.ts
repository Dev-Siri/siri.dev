export function getFormattedTime(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const paddedMonth = month.toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDay}`;
}
