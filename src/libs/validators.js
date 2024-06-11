const isString = (value, validateEmptyString = false) => {
	if(validateEmptyString) {
        return typeof value === 'string' && value.trim() !== ''
    }

	return typeof value === 'string'
}
	
const isInt = (value) => {
	return !isNaN(parseInt(value, 10)) && /^\d+$/.test(value);
}

const isBoolean = (value) => {
	return typeof value === 'boolean'
}

const isArray = (value) => {
	return Array.isArray(value)
}

const isEmail = (value) => {
	const validate_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  	return validate_email.test(value)
}

const isCellPhone = (value) => {
	const regex = /^\+\d{1,4}\d{1,15}$/;
  	return regex.test(value);
}

const isInteger = (value) => {
	return !Number.isInteger(value)
}

export {
	isString,
	isInteger,
	isBoolean,
	isArray,
	isEmail,
	isCellPhone,
	isInt
}