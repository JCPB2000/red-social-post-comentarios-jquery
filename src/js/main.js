import { addPost, editPost, deletePost, getPosts } from './posts.js';
import { addComment, editComment, deleteComment } from './comments.js';

$(() => {
    const renderPosts = () => {
        const postsContainer = $('#posts');
        postsContainer.empty();

        getPosts().forEach(post => {
            const postElement = $(`
                <div class="post" data-id="${post.id}">
                    <small>Título:</small>
                    <p>${post.title}</p>
                    <small>Descripción:</small>
                    <p>${post.description}</p>
                    <small>Fecha:</small>
                    <p>${post.date}</p>
                    <div class="comments-section">
                        <h4>Comentarios</h4>
                        <div class="comments"></div>
                        <div class="new-comment-container">
                            <input type="text" class="new-comment" placeholder="Escribe un comentario">
                            <button class="add-comment">Agregar comentario</button>
                        </div>
                    </div>
                </div>
            `);

            const commentsContainer = postElement.find('.comments');
            post.comments.forEach(comment => {
                const commentElement = $(`
                    <div class="comment">
                        <p>${comment.text}</p>
                        <button class="edit-comment">Editar</button>
                        <button class="delete-comment">Eliminar</button>
                    </div>
                `);

                commentElement.find('.edit-comment').on('click', () => {
                    const newText = prompt('Editar comentario:', comment.text);
                    if (newText) {
                        editComment(post, comment.id, newText);
                        renderPosts();
                    }
                });

                commentElement.find('.delete-comment').on('click', () => {
                    deleteComment(post, comment.id);
                    renderPosts();
                });

                commentsContainer.append(commentElement);
            });

            postElement.find('.add-comment').on('click', function () {
                const commentText = $(this).siblings('.new-comment').val();
                if (commentText) {
                    addComment(post, commentText);
                    renderPosts();
                }
            });

            postsContainer.append(postElement);
        });
    };

    $('#postForm').on('submit', e => {
        e.preventDefault();
        const title = $('#title').val();
        const description = $('#description').val();
        const date = new Date().toLocaleString();
        addPost(title, description, date);
        renderPosts();
        $('#title, #description').val('');
    });

    $('#search').on('input', function () {
        const keyword = $(this).val().toLowerCase();
        $('.post').each(function () {
            const title = $(this).find('p:first').text().toLowerCase();
            $(this).toggle(title.includes(keyword));
        });
    });

    renderPosts();
});
