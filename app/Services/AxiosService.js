
export const NasaApi = new axios.create({
    baseURL: 'https://api.nasa.gov/planetary/',
    timeout: 8000,
    params: { api_key: 'Bf0UuMoJQn1iZtYzPJZP1QqS0IlBI6KBoppDFOmx' }
})

export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com',
    timeout: 8000
})