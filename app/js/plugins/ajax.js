function checkResponseStatus(res) {
	if (res.status < 400) {
		return res;
	} else {
		let error = new Error(res.statusText);
		error.statusCode = res.status;
		error.response = res;
		throw error;
	}
}

function parseJson(res) {
	return res.json();
}

export function getJson(url) {
	return fetch(url)
		.then(checkResponseStatus)
		.then(parseJson);
}
