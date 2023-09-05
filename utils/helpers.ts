export function getMinDate(): string {
  // Get the current UTC time
  const currentUtcTime = new Date();

  // Get the current GMT time
  const currentGmtTime = new Date(currentUtcTime.toISOString());

  // Check if the current time is past 12 noon (12:00 PM) GMT
  if (currentGmtTime.getUTCHours() >= 12) {
    // If past 12 noon, return the next day as the minimum date
    currentGmtTime.setDate(currentGmtTime.getUTCDate() + 1);
  }

  // Format the date as "YYYY-MM-DD"
  const formattedDate = currentGmtTime.toISOString().split('T')[0];
  return formattedDate;
}




