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

export function getBulgarianTime(time) {
	const currentDate = new Date()
	const date = new Date(time)
	date.setHours(date.getUTCHours() + 3)

	const hour = date.getHours()
	const minutes = date.getMinutes()
	const diffInHours = Math.floor((currentDate - date) / (1000 * 60 * 60))

	let timeString = ''

	if (diffInHours >= 24) {
		const yesterday = new Date(currentDate)
		yesterday.setDate(currentDate.getDate() - 1)

		if (
			date.getDate() === yesterday.getDate() &&
			date.getMonth() === yesterday.getMonth() &&
			date.getFullYear() === yesterday.getFullYear()
		) {
			timeString = 'От вчера, '
		} else {
			const day = date.getDate()
			const month = getMonthName(date.getMonth())
			const formattedDate = `${day} ${month}`
			timeString = formattedDate + ', '
		}
	}

	let hourString = hour.toString()
	let minuteString = minutes.toString()

	if (hour < 10) {
		hourString = '0' + hourString
	}

	if (minutes < 10) {
		minuteString = '0' + minuteString
	}

	return timeString + hourString + ':' + minuteString + 'ч.'
}

export function getMonthName(monthIndex) {
	const monthNames = [
		'Яну',
		'Фев',
		'Мар',
		'Апр',
		'Май',
		'Юни',
		'Юли',
		'Авг',
		'Сеп',
		'Окт',
		'Ное',
		'Дек',
	]
	return monthNames[monthIndex]
}
