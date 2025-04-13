export default defineEventHandler(async (event) => {
    try {
      const response = await $fetch('https://api.currencyapi.com/v3/latest', {
        method: 'GET',
        query: {
          apikey: process.env.CURRENCY_API_KEY 
        }
      })
  
      return response
    } catch (error) {
      console.error('Currency API Error:', error)
      return {
        error: 'Failed to fetch currency data'
      }
    }
  })
  