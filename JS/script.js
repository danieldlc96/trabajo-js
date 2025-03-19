//MANTENER FIJA LA BARRA DE NAVEGACION AL HACER SCROLL

window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) { 
        navbar.style.position = 'fixed'; // Fija la barra en la parte superior cuando se hace scroll
        navbar.style.top = '0'; // Asegura que esté en la parte superior
    } else {
        navbar.style.position = 'relative'; // Vuelve a su posición original cuando no se hace scroll
    }
};

    //NOTICIAS DEL ANIME EN ARCHIVO JSON
fetch('json/noticias.json')
.then(response => response.json())
.then(data => {
    const newsContainer = document.getElementById('noticias');
    data.noticias.forEach(noticia => {
        const article = document.createElement('article');
        article.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.contenido}</p>`;
        newsContainer.appendChild(article);
    });
})
/* .catch(error => console.error('Error cargando noticias:', error)); */