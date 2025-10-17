function fetchPostsWithCallbacks(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);
            const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
            callback(sortedPosts);
        }
    };
    xhr.send();
}

function fetchCommentsWithCallbacks(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const comments = JSON.parse(xhr.responseText);
            const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
            callback(sortedComments);
        }
    };
    xhr.send();
}

fetchPostsWithCallbacks((posts) => {
    console.log('Posts sorted by title length (descending):', posts);
});

fetchCommentsWithCallbacks((comments) => {
    console.log('Comments sorted by author name:', comments);
});
