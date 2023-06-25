export const fetchData = async (url, headers, setData) => {
	try {
		const response = await performFetch(url, 'GET', headers)

		const data = await response.json()
		setData(data)
	} catch (err) {
		console.error(err)
	}
}

export async function performFetch(url, method, headers, data) {
	const response = await fetch(url, {
		method: method,
		body: data,
		headers: headers,
	})

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response
}

export function currencyFormat(number) {
	return new Intl.NumberFormat('fr-FR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(number)
}

export function textSplit(text, charCount) {
	if (text.length > charCount) {
		return text.substring(0, charCount) + '...'
	} else {
		return text
	}
}

export function calculateExpiration(createdAt, expiration, kind) {
	const today = new Date()
	const createdDate = new Date(createdAt)
	const expiredDate = new Date(
		createdDate.getTime() + expiration * 24 * 60 * 60 * 1000
	)
	const timeDifference = expiredDate - today

	const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
	const hours = Math.floor((timeDifference / (60 * 60 * 1000)) % 24)
	const minutes = Math.floor((timeDifference / (60 * 1000)) % 60)

	if (days > 0) {
		return kind
			? days
			: `Обявата изтича след ${days}  ${days === 1 ? 'ден' : 'дни'}`
	} else if (hours > 0) {
		return kind
			? hours
			: `Обявата изтича след ${hours}  ${hours === 1 ? 'час' : 'часа'}`
	} else {
		return kind
			? minutes
			: `Обявата изтича след ${minutes}  ${
					minutes === 1 ? 'минута' : 'минути'
			  }`
	}
}
