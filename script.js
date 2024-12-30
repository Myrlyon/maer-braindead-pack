let batter = document.getElementById("batter");
let valerie = document.getElementById("valerie");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    batter.style.left = value * 2.0 + "px";
    valerie.style.top = value * 1.0 + "px";
    });

    window.addEventListener("click", () => {
    document.getElementById("song").play();
    });

    window.onscroll = function () {
    scrollFunction();
    };

    function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("btn").style.display = "block";
    } else {
        document.getElementById("btn").style.display = "block";
    }
    }
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
