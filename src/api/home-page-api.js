import instance from './axios-api'

export const homePageApi = {
  getHomePage: async () => {
    const data = await instance.get('/home')
    return data.data
  },

  postHomePage: async (data) => {
   await instance.post('/home', data)
  }
}