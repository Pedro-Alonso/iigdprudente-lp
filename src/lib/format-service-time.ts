export function formatServiceTime(time: string): string {
  const [hours = "0", minutes = "00"] = time.split(":");
  const hourLabel = `${Number(hours)}h`;
  return minutes === "00" ? hourLabel : `${hourLabel}${minutes}`;
}
