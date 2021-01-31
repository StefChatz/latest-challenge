import moment from 'moment';

export const dateFormater = (date) => moment(date).format('d MMMM YYYY - H:mm');
