export function loadUsers() {
    return (dispatch) => {
        return dispatch(fetchUsers())
    }
}
function fetchUsers() {
    return {
        type: 'LOAD_USERS',
        payload: fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
    }
}
export function loadAlbums(userID) {
    return (dispatch) => {
        return dispatch(fetchAlbums(userID))
    }
}
function fetchAlbums(userID) {
    return {
        type: 'LOAD_ALBUMS',
        payload: fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
            .then(result => result.json())
    }
}