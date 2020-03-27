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
li6.style.display = "none"

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
    submitBtn.style.opacity = "0";
}

fieldsetsArray.map(async function (item) {
    item.style.opacity = "0"
    item.style.height = "0px"
})

function hideElements(item) {
    item.style.opacity = "0"
    item.style.height = "0px"
}
if (fieldsetsArray[0]) {
    fieldsetsArray[0].style.opacity = "1"
    fieldsetsArray[0].style.height = "auto"
}

for (let i = 0; i < fieldsetsArray.length; i++) {
    if (filedsetElemnts[i].elements[0].value && Array.from(filedsetElemnts[4].elements).filter(element => {
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
        filedsetElemnts[i].nextElementSibling.style.opacity = "1";
        filedsetElemnts[i].nextElementSibling.style.height = "auto";
    } else if (filedsetElemnts[i].elements[0].value && filedsetElemnts[i].elements[0].value != 'ja' && filedsetElemnts[i].elements[0].value != 'nee') {
        if (steps[i].nextElementSibling) {
            steps[i].classList.add("done")
            steps[i].nextElementSibling.classList.add("active")
        }
        filedsetElemnts[i].nextElementSibling.style.opacity = "1";
        filedsetElemnts[i].nextElementSibling.style.height = "auto";
    }
}

for (let i = 0; i < fieldsetsArray.length; i++) {
    filedsetElemnts[i].addEventListener("change", function () {
        if (steps[i].nextElementSibling) {
            steps[i].nextElementSibling.classList.add("active")
            steps[i].classList.add("done")
        }
        filedsetElemnts[i].nextElementSibling.style.opacity = "1";
        filedsetElemnts[i].nextElementSibling.style.height = "auto";
    })
}
if (fieldsetsArray[4]) {
    filedsetElemnts[4].addEventListener("change", function () {
        submitBtn.style.opacity = "1";
    })
}
if (fieldsetsArray[4]) {
    if (filedsetElemnts[4].elements[0].checked || filedsetElemnts[4].elements[1].checked) {
        submitBtn.style.opacity = "1";
    }
}