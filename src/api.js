import axios from 'axios';

import { API_URL } from './config.js'

const api = axios.create({
    baseURL: API_URL
});

export async function login(credentials) {
    let response
    try {
        response = await api.post('/login', credentials)
    } catch(_) {
        response = {}
    }

    return response
}

export async function signup(credentials) {
    let response
    console.warn(credentials)
    try {
        response = await api.post('/users', credentials)
    } catch(_) {
        response = {}
    }

    return response
}

export async function getUser(token) {
    let response
    try {
        response = await api.get('/users', {
            params: {
                token: token,
            }
        })
    } catch(_) {
        response = {}
    }

    return response
}

export async function getPastes(token) {
    let response
    try {
        response = await api.get('/pastes', {
            params: {
                token: token,
            }
        })
    } catch(_) {
        response = {}
    }

    return response
}

export async function getPaste(token, id) {
    let response
    try {
        response = await api.get('/pastes/' + id, {
            params: {
                token: token,
            }
        })
    } catch(_) {
        response = {}
    }

    return response
}

export async function addPaste(token, text) {
    let response
    try {
        response = await api.post('/pastes?token=' + token, {
            text: text
        })
    } catch(_) {
        response = {}
    }

    return response
}

export async function editPaste(token, id, text) {
    let response
    try {
        response = await api.put('/pastes/' + id + '?token=' + token, {
            text: text
        })
    } catch(_) {
        response = {}
    }

    return response
}

export async function deletePaste(token, id) {
    let response
    try {
        response = await api.delete('/pastes/' + id + '?token=' + token)
    } catch(_) {
        response = {}
    }

    return response
}
