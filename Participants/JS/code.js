/*
Auteur : Kevin Vaucher
Date : 04.11.2019
Description : Page internet pour le module ICT-120
Version : 1.0
 */

document.addEventListener("DOMContentLoaded", init)

function init(){
    cmdTransports.addEventListener("click", fnAlert)
    cmdActivites.addEventListener("click", fnAlert)
    cmdHebergement.addEventListener("click", fnAlert)
    cmdInfos.addEventListener("click", fnAlert)
}

function fnAlert(){
    alert("Désolé, cette partie du site n'est pas encore disponible !");
}

