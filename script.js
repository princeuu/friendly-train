window.onload = function () {
    alert("Welcome to the King James Fan Page!");
};

const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", () => {
    myButton.textContent = "Click me to see the GOAT!";
});

myButton.addEventListener("mouseout", () => {
    myButton.textContent = "Lebron Raymone James";
});

// Redirect when clicked
myButton.addEventListener("click", () => {
    window.open("https://en.wikipedia.org/wiki/LeBron_James", "_blank");
});