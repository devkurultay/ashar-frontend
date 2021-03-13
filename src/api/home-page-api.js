import axios from 'axios'

export const homePageApi = {
  getHomePage: async () => {
    const data = await axios.get('https://example.com/home')
    return data.data
  },

  postHomePage: async (data) => {
   await axios.post('https://example.com/home', data)
  }
}