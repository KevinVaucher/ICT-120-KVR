/*
Auteur : Kevin Vaucher
Projet : Examen ICT-120
Version : 1.0
Date : 15.11.2019
 */

document.addEventListener("DOMContentLoaded", init) // Exécute la fonction init dès le chargement de la page

function init() {
    cmdOk.disabled = "true" // Désactive le bouton ok dès le chargement de la page
    alert(window.location.search) // Permet de récupérer le prénom et nom de famille du formulaire
}

if (nbRestants.value <=114) { // Si la valeur des caractères restants est plus petite ou égale à 114 (144 - 30 = 114), le bouton s'active
    cmdOk.disabled = "false" // On active le bouton d'envoi
}

function calculRestants(txtMotivation) {
    var nbRestants = 144 - txtMotivation.length // Soustrait la taille du texte à la variable des caractères disponibles
    document.getElementById('nbCaracteres').innerHTML = nbRestants

    if(nbRestants <= 114){ // Si la valeur des caractères restants est plus petite ou égale à 114 (144 - 30 = 114) alors on ajoute la classe pour cacher le message d'alerte
        txtMotivationCheck.classList.add("HideCheck") // Ajoute la classe pour cacher le message d'alerte
    }
}

