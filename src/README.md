# Red Social de Lectores: Gestión de Publicaciones y Comentarios

## Descripción del Proyecto

Este proyecto es una aplicación web diseñada para conectar a los amantes de los libros y las historias, brindándoles una plataforma interactiva donde puedan gestionar publicaciones y comentarios relacionados con sus lecturas. La aplicación permite a los usuarios expresar sus opiniones, descubrir recomendaciones de libros y participar activamente en discusiones con otros lectores.

Se ha desarrollado utilizando tecnologías modernas como HTML, CSS, JavaScript ES6+ y jQuery, con un enfoque en la programación modular, la manipulación avanzada del DOM y un diseño visual responsivo.

---

## Objetivo Principal

Desarrollar una aplicación web funcional que permita:

* Crear, editar y eliminar publicaciones relacionadas con libros.
* Agregar, modificar y eliminar comentarios para cada publicación.
* Filtrar publicaciones por palabras clave en tiempo real.
* Brindar una experiencia de usuario atractiva y adaptable a cualquier dispositivo.
---

## Características Principales

1. Gestión de Publicaciones:
* Crear publicaciones con título, descripción y fecha.
* Editar y eliminar publicaciones existentes.
* Renderizado dinámico de las publicaciones en la interfaz.

2. Gestión de Comentarios:
* Agregar comentarios a publicaciones específicas.
* Editar y eliminar comentarios de forma sencilla.
* Relación clara entre cada publicación y sus comentarios.

3. Filtrado de Publicaciones:
* Buscar publicaciones mediante palabras clave en el título.
* Actualización dinámica de los resultados en la interfaz.

4. Diseño Responsivo:
* Interfaz adaptable a dispositivos móviles, tablets y escritorios.
* Estética visual coherente utilizando Flexbox y Grid.

5. Separación Modular:
* Código organizado en múltiples archivos para mejorar la legibilidad.
* Módulos independientes para la gestión de publicaciones y comentarios.
---

## Estructura del Proyecto
```
/index.html          --> Archivo principal con la estructura HTML.
/css/style.css       --> Archivo de estilos para el diseño visual y responsivo.
/js/posts.js         --> Módulo que gestiona las publicaciones.
/js/comments.js      --> Módulo que gestiona los comentarios.
/js/main.js          --> Archivo principal que integra la lógica y el renderizado.
/README.md           --> Documentación del proyecto.
/imagen/imagen1.jpg  --> Imagen utilizada como fondo de la aplicación.
```
## Fragmentos de Código Relevantes
1. Crear una Publicación

```posts.js
export const addPost = (title, description, date) => 
    posts.push({ id: Date.now(), title, description, date, comments: [] });
```

2. Renderizado Dinámico de Publicaciones

```main.js
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
            </div>
        `);
        postsContainer.append(postElement);
    });
};
```
3. Gestión de Comentarios 

   
```comments.js
export const addComment = (post, text) => post.comments.push({ id: Date.now(), text });

export const editComment = (post, commentId, newText) => {
    const comment = post.comments.find(c => c.id === commentId);
    if (comment) comment.text = newText;
};

export const deleteComment = (post, commentId) => {
    post.comments = post.comments.filter(c => c.id !== commentId);
};
```
---
## Cómo Usar la Aplicación

1. Abrir la aplicación: Clona o descarga este repositorio y abre index.html en tu navegador.
2. Crear una publicación: Llena los campos de título y descripción y haz clic en "Publicar".
3. Agregar un comentario: Escribe un comentario en el campo de texto y presiona "Agregar comentario".
4. Editar o eliminar: Usa los botones correspondientes para modificar publicaciones o comentarios.
5. Filtrar publicaciones: Usa el buscador para encontrar publicaciones específicas por título.
---
## Requisitos Técnicos
* Navegador moderno compatible con HTML5, CSS3 y JavaScript.
* Resolución mínima: 320px (móviles).
* Conexión a internet para cargar librerías externas como jQuery.
---
## Equipo de Desarrollo
Este proyecto fue desarrollado como parte de una actividad académica. Los integrantes del equipo son:

Julio Cesar Paguay Bonilla
Tiffani Nathalia Torres Díaz
Yampuezan Burbano Verónica Janeth

## FIN

