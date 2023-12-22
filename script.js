document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelectorAll(".btn-secondary");
    console.log(btn)
    let section = document.querySelectorAll(".card");
    console.log(section)

    // btn.addEventListener("click", function () {
    //     if (section.style.display === "flex") {
    //         section.style.display === "none"
    //     } else {
    //         section.style.display === "flex"
    //     }
    // })
    // btn.addEventListener("click", () => {
    //     section.classList.toggle("collapsed")
    // })
    btn.forEach(elBtn => {
        section.forEach(element => {
            elBtn.addEventListener("click", () => {
                element.classList.toggle("collapsed")
            })
        });
    });
})
