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