const configs = {
	api: {
		local: {
			url: 'http://localhost:4500/unauto',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer $argon2id$v=19$m=65536,t=3,p=4$G3pGLttD87t12qh7Ec3DKg$atkP9EthtJS2BeE7/HJVb0raeqd453x/Yjs5Q4kxoOQ',
            }
		},
		qa: {
			url: 'http://api-qa.1auto.mx/unauto',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer $argon2id$v=19$m=65536,t=3,p=4$G3pGLttD87t12qh7Ec3DKg$atkP9EthtJS2BeE7/HJVb0raeqd453x/Yjs5Q4kxoOQ',
            }
		},
		production: {
			url: 'https://api-qa.1auto.mx/unauto',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer $argon2id$v=19$m=65536,t=3,p=4$G3pGLttD87t12qh7Ec3DKg$atkP9EthtJS2BeE7/HJVb0raeqd453x/Yjs5Q4kxoOQ',
            }
		}
	}
}

export default configs