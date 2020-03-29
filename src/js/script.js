let filedsetElemnts = document.querySelectorAll('.form-stap-twee fieldset')
let fieldsetsArray = Array.from(filedsetElemnts);
let submitBtn = document.querySelector(".versturen");
let stepsContainer = document.querySelector(".container")

let ul = document.createElement("ul")
ul.classList.add('progressbar')

let li1 = document.createElement("li")
li1.classList.add('active');
li1.textContent = "Vraag 1"
let li2 = document.createElement("li")
li2.textContent = "Vraag 2"
let li3 = document.createElement("li")
li3.textContent = "Vraag 3"
let li4 = document.createElement("li")
li4.textContent = "Vraag 4"
let li5 = document.createElement("li")
li5.textContent = "Vraag 5"
let li6 = document.createElement("li")
li6.classList.add("li-six")

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)
ul.appendChild(li6)

if (stepsContainer) {
    stepsContainer.appendChild(ul)
}

let steps = document.querySelectorAll(".container ul li")


if (submitBtn) {
    submitBtn.classList.add("unactive-btn");
}

fieldsetsArray.map(function (item) {
    item.classList.add("hide")
    item.classList.remove("show")
})
if (fieldsetsArray[0]) {
    fieldsetsArray[0].classList.add("show")
    fieldsetsArray[0].classList.remove("hide")
}

for (let i = 0; i < fieldsetsArray.length; i++) {
    filedsetElemnts[i].addEventListener("change", function () {
        if (steps[i].nextElementSibling) {
            steps[i].nextElementSibling.classList.add("active")
            steps[i].classList.add("done")
        }
        filedsetElemnts[i].nextElementSibling.classList.add("show")
        filedsetElemnts[i].nextElementSibling.classList.remove("hide")
        if (filedsetElemnts[i].elements[0].value && Array.from(filedsetElemnts[4].elements).filter(element => {
                if (element.checked == true) {
                    return true
                } else {
                    return false
                }
            }) != "") {
            submitBtn.classList.remove("unactive-btn");
            steps[i].classList.add("done")
        } else if (filedsetElemnts[i].elements[0].value && filedsetElemnts[i].elements[0].value != 'ja' && filedsetElemnts[i].elements[0].value != 'nee') {
            steps[i].classList.add("done")
        } else {
            if (steps[i].nextElementSibling) {
                steps[i].classList.remove("done")
            }
            submitBtn.classList.add("unactive-btn");
        }
    })
}

for (let i = 0; i < fieldsetsArray.length; i++) {
    if (filedsetElemnts[i].elements[0].value != "" && Array.from(filedsetElemnts[4].elements).filter(element => {
            if (element.checked == true) {
                return true
            } else {
                return false
            }
        }) != "") {
        if (steps[i].nextElementSibling) {
            steps[i].classList.add("done")
            steps[i].nextElementSibling.classList.add("active")
        }
        filedsetElemnts[i].nextElementSibling.classList.add("show")
        filedsetElemnts[i].nextElementSibling.classList.remove("hide")
        filedsetElemnts[i].classList.add("show")
        filedsetElemnts[i].classList.remove("hide")
        submitBtn.classList.remove("unactive-btn");
        console.log("laaaa")
    } else if (filedsetElemnts[i].elements[0].value && filedsetElemnts[i].elements[0].value != 'ja' && filedsetElemnts[i].elements[0].value != 'nee') {
        if (steps[i].nextElementSibling) {
            steps[i].classList.add("done")
            steps[i].nextElementSibling.classList.add("active")
        }
        filedsetElemnts[i].nextElementSibling.classList.add("show")
        filedsetElemnts[i].nextElementSibling.classList.remove("hide")
        filedsetElemnts[i].classList.add("show")
        filedsetElemnts[i].classList.remove("hide")
        console.log("mmmmm")
    } else {
        console.log("hiii")
        submitBtn.classList.add("unactive-btn");
        if (steps[i].nextElementSibling) {
            steps[i].classList.remove("done")
        }
    }
}