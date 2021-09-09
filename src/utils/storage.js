export function setAuthData(data) {
	sessionStorage.setItem('auth', JSON.stringify(data));
}

export function getAuthData() {
	const authData = sessionStorage.getItem('auth');
	return !authData ? null : JSON.parse(authData);
}
