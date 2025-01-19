export const addComment = (post, text) => post.comments.push({ id: Date.now(), text });

export const editComment = (post, commentId, newText) => {
    const comment = post.comments.find(c => c.id === commentId);
    if (comment) comment.text = newText;
};

export const deleteComment = (post, commentId) => {
    post.comments = post.comments.filter(c => c.id !== commentId);
};
