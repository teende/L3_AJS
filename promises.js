function fetchUsersWithPromises() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        })));
}

function fetchTodosWithPromises() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => todos.filter(todo => !todo.completed));
}

fetchUsersWithPromises()
    .then(users => console.log('Filtered users:', users))
    .catch(error => console.error('Error fetching users:', error));

fetchTodosWithPromises()
    .then(todos => console.log('Filtered todos (completed falsy):', todos))
    .catch(error => console.error('Error fetching todos:', error));
