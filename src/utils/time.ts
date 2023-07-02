export function getFormattedTime(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const paddedMonth = month.toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDay}`;
}

export function getRelativeTime(dateString: string) {
  const date = new Date(dateString);
  const timeMs = date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);
  const timeUnitSeconds = [60, 3600, 86400, 604800, 2592000, 31536000, Infinity];
  const timeUnits = ["second", "minute", "hour", "day", "week", "month", "year"] as const;

  const unitIndex = timeUnitSeconds.findIndex(timeUnitSecond => timeUnitSecond > Math.abs(deltaSeconds));

  const divisor = unitIndex ? timeUnitSeconds[unitIndex - 1] : 1;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  try {
    return rtf.format(Math.floor(deltaSeconds / divisor!), timeUnits[unitIndex]!);
  } catch (error) {
    console.error(error);
    return "Error parsing date";
  }
}
