const fs = require('fs');
const path = require('path');

// Read the bookingOverviewData.ts file
const bookingOverviewPath = path.join(__dirname, 'src/data/bookingOverviewData.ts');
const mockDataPath = path.join(__dirname, 'src/data/mockData.ts');

let bookingOverviewContent = fs.readFileSync(bookingOverviewPath, 'utf8');

// Extract the data array
const dataMatch = bookingOverviewContent.match(/export const shipperBookingsData: ShipperBooking\[\] = (\[[\s\S]*?\]);/);
if (!dataMatch) {
  console.error('Could not find shipperBookingsData array');
  process.exit(1);
}

const dataArray = dataMatch[1];

// Create the new bookingDetailsDataNew object
let newDataObject = 'export const bookingDetailsDataNew: Record<string, any> = {\n';

// Parse the data array and create entries
const entries = dataArray.match(/\{[^}]+\}/g);
if (entries) {
  entries.forEach((entry, index) => {
    // Extract the id from the entry
    const idMatch = entry.match(/"id":\s*"([^"]+)"/);
    if (idMatch) {
      const id = idMatch[1];
      // Remove the id field from the entry since it's the key
      const entryWithoutId = entry.replace(/"id":\s*"[^"]+",\s*/, '');
      newDataObject += `  "${id}": ${entryWithoutId},\n`;
    }
  });
}

newDataObject += '};';

// Read the mockData.ts file
let mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

// Replace the existing bookingDetailsDataNew
const regex = /export const bookingDetailsDataNew: Record<string, any> = \{[\s\S]*?\};/;
mockDataContent = mockDataContent.replace(regex, newDataObject);

// Write back to mockData.ts
fs.writeFileSync(mockDataPath, mockDataContent, 'utf8');

console.log('Successfully populated bookingDetailsDataNew with data from bookingOverviewData.ts');
