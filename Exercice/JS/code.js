document.addEventListener("DOMContentLoaded", init)


function Blue() { // Fonction exercice 1 - Tracer le texte + background = bleu
    div1.style.backgroundColor = 'lightblue';
    div1.style.textDecoration = 'line-through';
}

function Clean() { // Fonction exercice 2 - Annuler exercice 1
    div1.style.backgroundColor = 'white';
    div1.style.textDecoration = 'none';
}

function Arial() { // Fonction exercice 3 (ajouter la police)
    div3.classList.add('classdiv3');
}

function RemoveArial() { // Fonction exercice 3 (retirer la police)
    div3.classList.remove('classdiv3');
}

function CheckboxCheck() { // Fonction exercice 4 - Changer le texte d'une div + la couleur
    if (div4chk1.checked && div4chk2.checked) {
        div4.style.backgroundColor="Green"
        div4.style.color="White"
        div4.style.border="solid 0px black"
        document.getElementById("div4").innerHTML ="YES";
    }

}

function init() {
    div1.addEventListener('click', Blue)
    div2.addEventListener('click', Clean)
    div3.addEventListener('mouseover', Arial)
    div3.addEventListener('mouseleave', RemoveArial)
    div4chk1.addEventListener('click', CheckboxCheck)
    div4chk2.addEventListener('click', CheckboxCheck)


}