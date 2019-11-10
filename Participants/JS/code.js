/*
Auteur : Kevin Vaucher
Date : 04.11.2019
Description : Page internet pour le module ICT-120
Version : 1.0
 */

// Permet d'appeler la fonction init dès l'affichage de la page
document.addEventListener("DOMContentLoaded", init)

// On initialise des "écoutes" d'évènement dès l'affichage de la page
function init() {
    cmdTransports.addEventListener("click", fnAlert)
    cmdActivites.addEventListener("click", fnAlert)
    cmdHebergement.addEventListener("click", fnAlert)
    cmdInfos.addEventListener("click", fnAlert)
    cmdAddLine.addEventListener("click", addLine)
}

// Permet d'afficher un message d'alerte lorsqu'on clique sur un autre onglet que "Participants"
function fnAlert() {
    alert("Désolé, cette partie du site n'est pas encore disponible !");
}

// Fonction pour ajouter une ligne au tableau
function addLine() {
            newtr = document.createElement("tr") // On crée un élément "tr"
            newtd1 = document.createElement("td") // On crée un élément "td1"
            newtd1.innerText = (addPrenom.value) // On applique la valeur de ce que l'utilisateur a entré pour la td1 (colonne "prénom")
            newtd2 = document.createElement("td") // On crée un élément "td1"
            newtd2.innerText = (addNom.value) // On applique la valeur de ce que l'utilisateur a entré pour la td1 (colonne "prénom")
            newtd3 = document.createElement("td") // On crée un élément "td1"
            newtd3.innerText = (addClasse.value) // On applique la valeur de ce que l'utilisateur a entré pour la td1 (colonne "prénom")
            linkmail = document.createElement("a") // On crée un élément "linkmail" pour transformer la valeur de la colonne "E-mail" en mailto
            linkmail.text = addEmail.value // On applique la valeur de ce que l'utilisateur a entré pour la td1 (colonne "prénom")
            linkmail.href = "mailto:" + addEmail.value // On indique que la valeur de la colonne "E-mail" est un e-mail
            newtd4 = document.createElement("td") // On crée un élément "td1"
            newtd4.appendChild(linkmail)
            newtd5 = document.createElement("td") // On crée un élément "td1"
            newbtn = document.createElement("div") // On crée un élément "newbtn" qui sera pour supprimer la ligne
            newtd5.appendChild(newbtn)
            newbtn.classList = "btn btn-danger" // On applique la classe bootstrap pour le bouton supprimer
            newbtn.innerText = "Supprimer" // On indique la valeur du texte du bouton supprimer

            newdiv = document.createElement("div")
            newbtn.addEventListener("click", killLine) // On indique qu'il faut appeler la fonction killLine dès qu'on clique sur le bouton supprimer
            newtd3.appendChild(newdiv)
            newtr.appendChild(newtd1)
            newtr.appendChild(newtd2)
            newtr.appendChild(newtd3)
            newtr.appendChild(newtd4)
            newtr.appendChild(newtd5)
            tableBody.appendChild(newtr)

            // Remise des valeurs des champs textes à 0 une fois que la ligne est ajoutée
            addPrenom.value = ("");
            addNom.value = ("");
            addClasse.value = ("");
            addEmail.value = ("");
}

// Fonction pour supprimer une ligne
function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
    button = event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
    td = button.parentNode  // td est la cellule dans laquelle le bouton se trouve
    tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
    table = tr.parentNode   // table est la table dans laquelle la ligne se trouve
    table.removeChild(tr)   // On enlève la ligne de la table
}