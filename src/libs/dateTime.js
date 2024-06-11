import moment from'moment'

const now = (format = 'YYYY-MM-DD HH:mm:ss') => {
	const date =  new Date()
	return moment(date).format(format)
}

const getYear = () => {
    return moment().year();
}

const nowtimestamp = () => {
    const date =  new Date()
    return moment(date).valueOf();
}

const dateFormat = (date) => {
    if (date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    
    return null;
}

const addDays = (date, days, format = 'YYYY-MM-DD HH:mm:ss') => {
    const dateMoment = moment(date, format);
    const newDate = dateMoment.add(days, 'days');

      // retrun new Date
      return newDate.format(format);
}

const timeExpiration = (expiration_hours = 1) => {
    const now = moment();
    const expiration = expiration_hours * 60 * 60 * 1000;
    const date_expiration = now.add(expiration, 'milliseconds');

    return date_expiration.valueOf();
}

export {
	now,
	dateFormat,
    timeExpiration,
    nowtimestamp,
    addDays,
    getYear,
}