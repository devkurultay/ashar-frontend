import instance from './axios-api'

export const homePageApi = {
  terms: async () => {
    const data = await instance.get('/terms/')
    return data.data
  },

  getTerm: async (id) => {
    const data = await instance.get(`/term-detail/${id}/`)
    return data.data
  },

  addNewTerm: async (data) => {
   return await instance.post('/terms/', data)
  },

  getSuggestion: async (id) => {
    return await instance.get(`/suggestion/${id}/`)
  },

  addNewSuggestion: async (data) => {
    return await instance.post('/suggestion/', data)
  }
}