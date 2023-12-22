document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelectorAll(".btn-secondary");
    console.log(btn)
    let firstSection = document.querySelectorAll("#firstRow");
    console.log(firstSection)
    let secondSection = document.querySelectorAll("#secondRow");
    console.log(secondSection)
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
    // btn.forEach(elBtn => {
    //     section.forEach(element => {
    //         elBtn.addEventListener("click", () => {
    //             element.classList.toggle("collapsed")
    //         })
    //     });
    // });
    btn[0].addEventListener("click", () => {
        firstSection.forEach(element => {
            element.classList.toggle("collapsed")
        });
    })
    btn[1].addEventListener("click", () => {
        secondSection.forEach(element => {
            element.classList.toggle("collapsed")
        });
    })
})
