import instance from './axios-api'

export const homePageApi = {
  terms: async () => {
    const data = await instance.get('/terms')
    return data.data
  },

  addNewTerm: async (data) => {
   await instance.post('/terms', data)
  }
}