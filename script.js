function counter() {
    // counter of cards in DOM
    let totalCards = document.getElementsByClassName("card");
    let result = [];
    for (let i = 0; i < totalCards.length; i++) {
        let total = totalCards[i];
        result.push(total)
    }
    console.log(result)
    let newEl = document.createElement("span");
    newEl.innerText = result.length;
    newEl.style.color = "white";
    let numCardsParent = document.querySelector(".tot-cards");
    console.log(numCardsParent);
    numCardsParent.appendChild(newEl)
}

function removeCards() {
    let totCards = document.querySelectorAll(".card");
    console.log(totCards)
    totCards.forEach(element => {
        element.classList.add("collapsed")
    });

}

document.addEventListener("DOMContentLoaded", function () {
    counter()
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

    // On click sections collapse
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
    // Dark-Mode
    let body = document.body;
    let hour = (new Date).getHours();
    let week = document.querySelectorAll(".card-custom")
    let welcome = document.querySelectorAll(".welcome-custom")
    console.log(hour)
    if (hour >= 18 || hour <= 6) {
        body.classList.toggle("dark");
        body.classList.toggle("jumbotron2");
        week.forEach(element => {
            element.classList.toggle("dark-welcome")
        });
        welcome.forEach(element => {
            element.classList.toggle("dark-welcome")
        });
    }
})
