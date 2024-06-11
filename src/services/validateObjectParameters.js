import {
	isString,
	isInteger,
	isBoolean,
	isArray,
	isEmail,
	isCellPhone
} from "#/libs/validators.js"

const validateObjectParameter = (keys, data) => {
	return new Promise((resolve, reject) => {
		const result = {}
		const array_errors = []

		for(let index in keys) {
			const key = keys[index]

			switch(key.type) {
				case 'integer':
						result[key.name] = data[key.name] !== null && data[key.name] !== undefined ? data[key.name].toString().trim() == '' ? '' : isInteger(data[key.name].toString()) ? data[key.name] : null : null
					break;
				case 'string':
						result[key.name] = data[key.name] != null && data[key.name] != undefined ? data[key.name].trim() == '' ? '' : isString(data[key.name]) ? data[key.name] : null : null
					break;
				case 'boolean':
						result[key.name] = data[key.name] != null && data[key.name] != undefined ? isBoolean(data[key.name]) : null
					break;
				case 'array':
						result[key.name] = data[key.name] != null && data[key.name] != undefined ? data[key.name].toString().trim() == '' ? '' : isArray(data[key.name]) ? data[key.name] : null : null
					break;
				case 'email':
						result[key.name] = data[key.name] != null && data[key.name] != undefined ? data[key.name].trim() == '' ? '' : isEmail(data[key.name]) ? data[key.name] : null : null
					break;
				case 'cellphone':
						result[key.name] = data[key.name] != null && data[key.name] != undefined ?  data[key.name].trim() == '' ? '' : isCellPhone(data[key.name]) ? data[key.name] : null : null
					break;
				default: {
					result[key.name] = null
				}
			}
			
			if(key.require && result[key.name] === null || result[key.name] === "") {
				array_errors.push({
					name: key.name,
					error: `${result[key.name] === null ? 'invalid' : 'empty'}_${key.name}`,
					detail: {
						expected_value: key.type,
						received_value: 'unknown'
					}
				})
			}
		}

		resolve({
			success: !array_errors.length > 0,
			data: result,
			errors: array_errors
		})

		return result
	})
}

export {
	validateObjectParameter
}