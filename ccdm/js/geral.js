togglenavmobile();

function togglenavmobile() {
    let burger = document.querySelectorAll(".burger");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    let full = document.querySelector("#full");
    for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", burgerclicked);
    }

    function burgerclicked() {
        if (main.style.display === "none") {
            main.style.display = "block";
            footer.style.display = "block";
            full.style.display = "none";
        } else {
            main.style.display = "none";
            footer.style.display = "none";
            full.style.display = "block";
        }
    }
}