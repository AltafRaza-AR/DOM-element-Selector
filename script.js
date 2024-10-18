var heading = document.getElementById("main-heading");
heading.textContent = "Hello, This Heading is Changed!";
heading.style.color = "blue";

var descriptions = document.getElementsByClassName("description");
for (var i = 0; i < descriptions.length; i++) {
    descriptions[i].style.fontStyle = "italic";
    descriptions[i].classList.add("highlight");
}

var firstParagraph = document.querySelector(".description");
firstParagraph.style.fontSize = "20px";

var allDescriptions = document.querySelectorAll(".description");
allDescriptions.forEach(function(paragraph) {
    paragraph.style.backgroundColor = "lightgray";
});

var image = document.getElementById("sample-image");
image.src = "https://via.placeholder.com/200";
image.alt = "New Image";
