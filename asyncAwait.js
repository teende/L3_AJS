async function fetchPostsAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
        console.log('Posts sorted by title length (descending) - async/await:', sortedPosts);
        return sortedPosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

async function fetchCommentsAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await response.json();
        const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
        console.log('Comments sorted by author name - async/await:', sortedComments);
        return sortedComments;
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

async function fetchUsersAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const filteredUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        console.log('Filtered users - async/await:', filteredUsers);
        return filteredUsers;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

async function fetchTodosAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        const filteredTodos = todos.filter(todo => !todo.completed);
        console.log('Filtered todos (completed falsy) - async/await:', filteredTodos);
        return filteredTodos;
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

fetchPostsAsync();
fetchCommentsAsync();
fetchUsersAsync();
fetchTodosAsync();
