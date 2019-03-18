export default {
    setSessionStorage: (key, value) => {
        if (window.sessionStorage) {
            sessionStorage.setItem(key, value)
        } else {
            console.log('Your browser does not support sessionStorage')
        }
    },
    getSessionStorage: (key) => {
        if (window.sessionStorage) {
            sessionStorage.getItem(key)
        } else {
        console.log('Your browser does not support sessionStorage')
        }
    },
    removeSessionStorage: (key) => {
        if (window.sessionStorage) {
            sessionStorage.removeItem(key)
        } else {
        console.log('Your browser does not support sessionStorage')
        }
    }
}