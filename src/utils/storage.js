
export function setItem(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function getItem(key) {
	const item = localStorage.getItem(key);
	return !item ? null : JSON.parse(item);
}

export function clear() {
	localStorage.clear();
}
