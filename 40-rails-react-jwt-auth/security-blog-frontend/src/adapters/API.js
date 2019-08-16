const endpoint = 'http://localhost:3000/api/v1'
const signupUrl = `${endpoint}/users`
const loginUrl = `${endpoint}/login`
const postsUrl = `${endpoint}/posts`
const validateUrl = `${endpoint}/validate`


const jsonify = res => {
    if (res.ok)
        return res.json()
    else
        throw res.json()
}
const handleServerError = response => {
    // console.error(response)
    throw response
}

const saveToken = data => {
    localStorage.setItem('token', data.token)
    return data.user
}

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signupUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)


const logIn = (user) => fetch(loginUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)

const validateUser = () => {
    if (!localStorage.getItem('token')) return Promise.resolve({ error: 'no token' })

    return fetch(validateUrl, {
        headers: constructHeaders()
    }).then(jsonify)
        .then(saveToken)
        .catch(handleServerError)
}

const postPost = post => fetch(postsUrl, {
    method: 'POST',
    body: JSON.stringify({ post }),
    headers: constructHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
}).then(jsonify)
    .catch(handleServerError)

const getPosts = () => fetch(postsUrl).then(jsonify)

const clearToken = () => localStorage.removeItem('token')

export default {
    signUp,
    logIn,
    validateUser,
    clearToken,
    postPost,
    getPosts
}