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

export function textSplit(text, charCount) {
	if (text.length > charCount) {
		return text.substring(0, charCount) + '...'
	} else {
		return text
	}
}
