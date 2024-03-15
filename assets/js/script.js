const burgerMenuButton = document.getElementById("burgermenu");

burgerMenuButton.addEventListener("click", function () {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");

    toggleIcon();
});

function toggleIcon() {
    const icon = document.getElementById("burger-icon");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

    toggleRotation(icon);
}

function toggleRotation(icon) {
    icon.style.transition = "all 0.5s";
    icon.style.transform =
        icon.style.transform === "rotate(180deg)"
            ? "rotate(0deg)"
            : "rotate(180deg)";
}
