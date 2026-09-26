// Made for you: today's date in Cameroon, like "2026-09-26".
// new Date().toISOString() is in UTC: between midnight and 1:00
// it still gives yesterday's date.
export function todayISO(): string {
  const format = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Douala",
  });
  return format.format(new Date());
}
