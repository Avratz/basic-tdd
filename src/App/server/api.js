const url = 'https://the-one-api.dev/v2/book'
export default {
	async getBook() {
		return await fetch(url).then((data) => data.json())
	},
}
