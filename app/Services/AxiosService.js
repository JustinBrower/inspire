// @ts-ignore
export const sandboxApiT = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/justinbrower/todos',
    timeout: 5000
})

// @ts-ignore
export const sandboxApiQ = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
    timeout: 5000
})

// @ts-ignore
export const sandboxApiI = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
    timeout: 5000
})

// @ts-ignore
export const sandboxApiW = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
    timeout: 5000
})