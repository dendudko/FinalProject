let loadImages = fetch('images.json');

loadImages.then(response => {
    response.json().then(result => {
        add(result.img1);
        add(result.img2);
        add(result.base64);
    });
});

function add(url) {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('.gallery').append(img);
}
