/*
Auteur : Kevin Vaucher
Date : 04.11.2019
Description : Page internet pour le module ICT-120
Version : 1.0
 */

document.addEventListener("DOMContentLoaded", init)

// On initialise des "écoutes" d'évènement
function init() {
    cmdTransports.addEventListener("click", fnAlert)
    cmdActivites.addEventListener("click", fnAlert)
    cmdHebergement.addEventListener("click", fnAlert)
    cmdInfos.addEventListener("click", fnAlert)
    cmdAddLine.addEventListener("click", addLine)
}

function fnAlert() {
    alert("Désolé, cette partie du site n'est pas encore disponible !");
}

function addLine() {
    // Fonction pour ajouter une ligne au tableau
    newtr = document.createElement("tr")
    newtd1 = document.createElement("td")
    newtd1.innerText = (addPrenom.value)
    newtd2 = document.createElement("td")
    newtd2.innerText = (addNom.value)
    newtd3 = document.createElement("td")
    newtd3.innerText = (addClasse.value)
    linkmail = document.createElement("a")
    linkmail.text = addEmail.value
    linkmail.href = "mailto:" + addEmail.value
    newtd4 = document.createElement("td")
    newtd4.appendChild(linkmail)
    newtd5 = document.createElement("td")
    newbtn = document.createElement("div")
    newtd5.appendChild(newbtn)
    newbtn.classList = "btn btn-danger"
    newbtn.innerText = "Supprimer"


    newdiv = document.createElement("div")
    newbtn.addEventListener("click", killLine)
    newtd3.appendChild(newdiv)
    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    newtr.appendChild(newtd4)
    newtr.appendChild(newtd5)
    tableBody.appendChild(newtr)

    // Remise des valeurs des champs textes à 0 une fois que la ligne est ajoutée
    addPrenom.value = ("")
    addNom.value = ("")
    addClasse.value = ("")
    addEmail.value = ("")
}

// Cette fonction est appelée au clic sur un élément

function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
    // Fonction pour supprimer une ligne
    button = event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
    td = button.parentNode  // td est la cellule dans laquelle le bouton se trouve
    tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
    table = tr.parentNode   // table est la table dans laquelle la ligne se trouve
    table.removeChild(tr)   // On enlève la ligne de la table
}


/*
Fonction pour ajouter une colonne
function addCol()
{
    rows = tblBody.children
    for (i=0; i<rows.length ; i++)
    {
        tr = rows[i]
        newtd = document.createElement('td')
        newtd.innerText = 'Nouvelle ligne '+i
        tr.appendChild(newtd)
    }
}
*/