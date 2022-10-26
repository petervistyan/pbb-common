// @ts-ignore
import moment from 'moment';

/* Date string (non-timestamp) conversion to local time string */
export const dateStringConvert = (date) => {
    return new Date(date).toLocaleTimeString('en-ZA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};
/* Date string (timestamp) conversion to Date */
export function timestampToDate(timestamp) {
    return moment.unix(timestamp).format('YYYY-MM-DD');
}