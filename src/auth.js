export function saveToken(token) {
    localStorage.setItem('token', token)
}

export function getTokenOrRedirect() {
    try {
        const token = localStorage.getItem('token')
        if (!isTokenValid(token)) throw Error
        return token
    } catch (_) {
        window.location.href = '/login'
    }
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function isTokenValid(token) {
    try {
        const exp = parseJwt(token).exp
        const currentUnixTime = Math.floor(Date.now() / 1000);
        return currentUnixTime < exp
    } catch (_) {
        return false
    }
}
