function showSection(id) {
    document.querySelectorAll('section').forEach((section) => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.classList.remove("underline");
    });

    const clickedLink = document.querySelector(`.nav-bar a[href="#"][onclick="showSection('${id}')"]`);

    if (clickedLink) {
        clickedLink.classList.add("underline");
    }
}