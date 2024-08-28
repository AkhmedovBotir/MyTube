import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'
const RAPID_API_KEY = '042c80691fmshaa2b05659d7a301p1746a9jsncf76ca7ca79a'

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': '042c80691fmshaa2b05659d7a301p1746a9jsncf76ca7ca79a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
}

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URI}/${url}`, options)
		return response.data
	},
}
