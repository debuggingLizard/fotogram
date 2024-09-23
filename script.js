const images = [
    "img/gallery/img_0.png", 
    "img/gallery/img_1.png",
    "img/gallery/img_2.png",
    "img/gallery/img_3.jpg",
    "img/gallery/img_4.jpg",
    "img/gallery/img_5.jpg",
    "img/gallery/img_6.png",
    "img/gallery/img_7.jpg",
    "img/gallery/img_8.jpg",
    "img/gallery/img_9.jpg",
    "img/gallery/img_10.jpg",
    "img/gallery/img_11.jpg",
    "img/gallery/img_12.jpg",
    "img/gallery/img_13.png",
    "img/gallery/img_14.png",
    "img/gallery/img_15.jpg"
]

function render() {
    let galleryRef = document.getElementById('gallery-wrapper');
    for (let i = 0; i < images.length; i++) {
        galleryRef.innerHTML += `
            <div class="image-container" onclick="toggleOverlay('${images[i]}')">
                <img src="${images[i]}" alt="Image ${i+1}">
            </div>`
    }
}

function toggleOverlay(imagePath) {
    showFullscreenImage(imagePath);
    let overlayRef = document.getElementById('overlay-modal');
    overlayRef.classList.toggle('display-none');
}

function showFullscreenImage(imagePath) {
    document.getElementById('fullscreen-image').src = imagePath;
}

function fullscreenPreviousImage() {
    let imageIndex = document.getElementById('fullscreen-image').src.match(/img_(\d+)/)[1];
        // liest den aktuellen Pfad und sucht nach ganzen Zahlen, die nach img_ kommen, s. reguläre Ausdrücke
        // ganze Zahl entspricht dem Index im array images, das Dateien gleich benannt sind
    if (imageIndex == 0) {
        imageIndex = images.length;
    } //wenn imageIndex=0, dann auf 16 (Länge des arrays) setzen, im nächsten Schritt reduzieren und man hat images[15]
    imageIndex--;
    document.getElementById('fullscreen-image').src = images[imageIndex];
}

function fullscreenNextImage() {
    let imageIndex = document.getElementById('fullscreen-image').src.match(/img_(\d+)/)[1];
    imageIndex++;
    if (imageIndex == images.length) {
        imageIndex = 0;
    } //wenn index=16, wieder auf 0 setzen, da es kein images[16] gibt, das max ist images[15], fängt also wieder vorne an
    document.getElementById('fullscreen-image').src = images[imageIndex];
}