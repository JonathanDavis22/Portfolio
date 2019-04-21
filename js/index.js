$(document).ready(function () {
    $(".navbar-burger").on("click", () => {
        console.log("clicked");
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    })
});