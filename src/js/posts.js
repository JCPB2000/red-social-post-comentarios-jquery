export const posts = [];

export const addPost = (title, description, date) => 
    posts.push({ id: Date.now(), title, description, date, comments: [] });

export const editPost = (postId, newTitle, newDescription) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.title = newTitle;
        post.description = newDescription;
    }
};

export const deletePost = postId => {
    const index = posts.findIndex(p => p.id === postId);
    if (index !== -1) posts.splice(index, 1);
};

export const getPosts = () => posts;
