document.addEventListener("DOMContentLoaded", function (event) {
    getPicture();
})

function getPicture() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=iYYHrcPBpvnXTgiuoWYsw0Yn9yvkiIWJiU9eQJA7")
    .then(response => response.json())
    .then(object => {
        console.log(object);
        document.getElementById('api_picture').src = object.url;
        document.querySelector('.text_title').innerText = object.title;
        document.querySelector('.text_explanation').innerText = object.explanation;
        document.querySelector('.text_copyright').innerText = object.copyright;
        document.querySelector('.text_date').innerText = object.date;
    })
    .catch(error => console.log(error));
}
