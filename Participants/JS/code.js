/*
Auteur : Kevin Vaucher
Date : 04.11.2019
Description : Page internet pour le module ICT-120
Version : 1.0
 */

document.addEventListener("DOMContentLoaded", init)

// On initialise des "écoutes" d'évènement
function init(){
    cmdTransports.addEventListener("click", fnAlert)
    cmdActivites.addEventListener("click", fnAlert)
    cmdHebergement.addEventListener("click", fnAlert)
    cmdInfos.addEventListener("click", fnAlert)
    cmdKill1.addEventListener("click", killLine)
    cmdAddLine.addEventListener("click",addLine)
}

function fnAlert(){
    alert("Désolé, cette partie du site n'est pas encore disponible !");
}

function addLine()
{
    newtr = document.createElement('tr')
    newtd1 = document.createElement('td')
    newtd1.innerText = 'Ma'
    newtd2 = document.createElement('td')
    newtd2.innerText = 'Dalton'
    newtd3 = document.createElement('td')
    newdiv = document.createElement('div')
    newdiv.innerText = 'Supprimer'
    newdiv.className = 'btn btn-danger'
    newdiv.addEventListener('click',killLine)
    newtd3.appendChild(newdiv)
    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    tableBody.appendChild(newtr)
}
// Cette fonction est appelée au click sur un élément

function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
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