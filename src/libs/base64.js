import base64 from 'base-64'
import utf8 from 'utf8'

const encrypt64 = (data) => {
	return base64.encode(utf8.encode(JSON.stringify(data)))
}

const decrypt64 = (data) => {
	return utf8.decode(base64.decode(data))
}

export {
	encrypt64,
	decrypt64
}