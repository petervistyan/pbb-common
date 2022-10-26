/* Date string (non-timestamp) conversion to local time string */
export const dateStringConvert = (date) => {
    return new Date(date).toLocaleTimeString('en-ZA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};