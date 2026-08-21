document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            header.style.boxShadow = "0 5px 25px rgba(0,0,0,.12)";
        } else {
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,.06)";
        }

    });

});