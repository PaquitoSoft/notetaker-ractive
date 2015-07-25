import lscache from 'lscache';

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
	return new Promise((resolve) => {
		res.json().then(data => {
			resolve({
				json: data,
				url: res.url
			});
		});
	});
}

function cacheResponse(shouldCache, ttl, key) {
	return (data) => {
		if (shouldCache) {
			console.log('Ajax::cacheResponse# Caching response with key:', key, 'for', ttl, 'minutes.');
			lscache.set(data.url, data.json, ttl); // Last parameter is TTL in minutes
		}
		return data.json;
	}
}

export function getJson(url, options = {cache: false}) {
	let data = lscache.get(url);
	if (data) {
		return Promise.resolve(data);
	} else {
		return fetch(url)
			.then(checkResponseStatus)
			.then(parseJson)
			.then(cacheResponse(options.cache, options.ttl, url));
	}
}

export function put(url, data) {
	return fetch(url, {
			method: 'put',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(checkResponseStatus);
}
