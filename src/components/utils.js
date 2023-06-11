export const fetchData = async (url, headers, setData) => {
	try {
		const response = await performFetch(url, 'GET', headers)

		if (!response.ok) {
			throw new Error(response.statusText)
		}

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

	return response
}
