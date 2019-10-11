document.addEventListener("DOMContentLoaded", init)


function Blue() { // Fonction exercice 1 - Tracer le texte + background = bleu
    div1.style.backgroundColor = "lightblue"
    div1.style.textDecoration = "line-through"
}

function Clean() { // Fonction exercice 2 - Annuler exercice 1
    div1.style.backgroundColor = "white"
    div1.style.textDecoration = "none"
}

function Arial() { // Fonction exercice 3 (ajouter la police)
    div3.classList.add("classdiv3")
}

function RemoveArial() { // Fonction exercice 3 (retirer la police)
    div3.classList.remove("classdiv3")
}

function CheckboxCheck() { // Fonction exercice 4 - Changer le texte d'une div + la couleur
    if (div4chk1.checked && div4chk2.checked) {
        div4.style.backgroundColor = "Green"
        div4.style.color = "White"
        div4.style.border = "solid 0px black"
        document.getElementById("div4").innerHTML = "YES"
    }
}

function Delete() {
    div5del.style.display = "none"
}

function Initials() {
    initiales = ""
    longueur = 0
    space = ""
    initiales = txtName.value.substr(0, 1)
    space = txtName.value.lastIndexOf(" ")
    initiales += txtName.value.substr(space + 1, 1)
    longueur = txtName.value.length
    initiales += txtName.value.substr(longueur - 1, 1)
    txtInitials.value = initiales.toUpperCase()
}

function ChangeMarks() {
    image.src = "Images/marks.png"
}

function ChangeSet() {
    image.src = "Images/set.png"
}

function ChangeGo() {
    image.src = "Images/go.png"
}

function init() {
    div1.addEventListener("click", Blue)
    div2.addEventListener("click", Clean)
    div3.addEventListener("mouseover", Arial)
    div3.addEventListener("mouseleave", RemoveArial)
    div4chk1.addEventListener("click", CheckboxCheck)
    div4chk2.addEventListener("click", CheckboxCheck)
    div5.addEventListener("click", Delete)
    txtName.addEventListener("keyup", Initials)
    cmdMarks.addEventListener("click", ChangeMarks)
    cmdSet.addEventListener("click", ChangeSet)
    cmdGo.addEventListener("click", ChangeGo)
}