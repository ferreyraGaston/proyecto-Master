const container = document.querySelector('.container')
const imgPath = 'img/'; // Ruta a tu directorio de imágenes
const totalImages = 9;

for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `${imgPath}imagen${i}.jpeg`;
    img.alt = `Imagen ${i}`;
    container.appendChild(img);
}
