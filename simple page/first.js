let button = document.querySelector("button");
button.addEventListener("click", counter);
let clicks = 0;

function counter() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

}