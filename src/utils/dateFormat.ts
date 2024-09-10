// Function to convert ISO 8601 datetime string to a human-readable format
function ConvertToReadableDateTime(datetimeStr: string): string {
    // Create a Date object from the datetime string
    const date = new Date(datetimeStr);

    // Define formatting options
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    // Convert to locale string
    return date.toLocaleString('en-US', options);
}

export default ConvertToReadableDateTime;