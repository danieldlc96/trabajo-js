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



const imagen = ["./../assets/image/Galeria/onePiece1.png", "./../assets/image/Galeria/onePiece2.png", "./../assets/image/Galeria/onePiece3.png", "./../assets/image/Galeria/onePiece4.png", "./../assets/image/Galeria/onePiece5.png", "./../assets/image/Galeria/onePiece6.png", "./../assets/image/Galeria/onePiece7.png", "./../assets/image/Galeria/onePiece8.png", "./../assets/image/Galeria/onePiece9.png"];
let galeria = 0;

function changeImage(){
    galeria = (galeria + 1) % imagen.length;
    const imgElement = document.getElementById("imageCarrusel");
    if(imgElement){
        imgElement.src = imagen[galeria];
        console.log(`Imagen cambiada a: ${imagen[galeria]}`);
    }else{
        console.error("nose encontro la imagen con id 'imageCarrusel")
    }
  
}
document.addEventListener("DOMContentLoaded", () => {
    setInterval(changeImage, 2000); 
});