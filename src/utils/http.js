export function http() {
	return {
		get() {
			return new Promise.resolve([]);
		},
		post() {
			return new Promise.resolve([]);
		}
	};
}