console.log("hello everybody");
/*<div classe="error-message">Non valde! <!div>*/

function handlerDomContentLoaded() {
    console.log( "Dom Chargé");
    //Element du DOM
    const
        elInputFirstname = document.getElementById("input-firstname"),
        elInputLastname = document.getElementById("input-lastname"),
        elInputEmail = document.getElementById("input-email");
    
    //Fonctions
    //gestionnaires d'évenement
    function handlerFormSubmit(evt){
        //Bloque le comportement par defaut de cet événement
        evt.preventDefault();

        console.log("Formulaire soumis...");
        
    }

    // INITIALISATON
    //Ecouteur sur le "submit" du formulaire
    document.forms[0].addEventListener('submit', handlerFormSubmit);
}

document.addEventListener('DOMContentLoaded', handlerDomContentLoaded);