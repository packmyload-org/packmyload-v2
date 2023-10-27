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


export function sumVolume(objects: { volume: number }[]): any {
  let totalVolume = 0;

  for (const obj of objects) {
    if (obj && obj.volume) {
      totalVolume += obj.volume;
    }
  }

  return totalVolume;
}
interface BookingFormItem {
  room: string;
  price: number;
  numberOfRooms: string;
}

export function sumItemPrices(items: BookingFormItem[]): number {
  return items.reduce((total, item) => total + item.price, 0);
}

export function arrayToCommaSeparatedString(array:any[]) {
  if (!Array.isArray(array)) {
    return "";
  }

  const result = array.map((item) => item.item).join(', ');
  return result;
}
export function calculateTax(value: number): number {
  const percentage = (value * 7.5) / 100;
  return percentage;
}
export function getAvailableTimes(selectedDate: Date | null): string[] {
  const currentUtcTime = new Date();
  if (selectedDate) {
    const selectedUtcDate = new Date(selectedDate.toISOString());

    if (selectedUtcDate > currentUtcTime) {
      return ["8am", "10am", "12 noon"];
    }
  }

  if (currentUtcTime.getUTCHours() < 8) {
    return ["8am", "10am", "12 noon"];
  } else if (currentUtcTime.getUTCHours() < 10) {
    return ["10am", "12 noon"];
  } else if (currentUtcTime.getUTCHours() < 12) {
    return ["12 noon"];
  }

  return [];
}










