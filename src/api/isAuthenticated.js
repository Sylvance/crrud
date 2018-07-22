export function isAuthenticated() {
    let token = JSON.parse(localStorage.getItem('token'))

    if (token) {
        return true
    } else {
        return false
    }
}

export default isAuthenticated