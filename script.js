console.log("hello everybody");


// Constantes de validation du formulaire
const VALID_NAME = /^[A-Za-zÀ-ý][A-Za-zÀ-ý- ]*[A-Za-zÀ-ý]$/;

function handlerDomContentLoaded() {
    console.log( "Dom Chargé");
    //Element du DOM
    const
        elInputFirstname = document.getElementById("input-firstname"),
        elInputLastname = document.getElementById("input-lastname"),
        elInputEmail = document.getElementById("input-email");
    
    // Fonctions
    /**
     * Fabrique un <div> destiner à contenir le message d'erreur donné.
     * 
     * @param {string} texte d'erreur à afficher 
     * 
     * @returns HTMLDivElement <div> du message d'erreur
     */

    function makeErrorElement(message){
        /*<div classe="error-message">[message] <!div>*/
        const elError = document.createElement( 'div');
        elError.classList.add('error-message');
        elError.textContent = message;

        return elError;
    }


    function removeError(elInput){

        //on vide la valeur en cours
        elInput.value = '';
        // On enlève la classe error à la section
        elInput.parentElement.classList.remove('error');

        // On recherche l'élémet juste après l'imput (sensé être le message d'erreur)
        const elMessage = elInput.nextElementSibling;
        if (!elMessage) return;

        elMessage.remove();
    }


    // Gestionnaires d'évenement
    function handlerFormSubmit(evt) {
        // Bloque le comportement par defaut de cet événement
        evt.preventDefault();

        console.log("Formulaire soumis...");


        /* Remise à 0 des Erreurs*/
        const errorInput = this.querySelectorAll('.error > input:not([type="checkbox"])');
        for( let elInput of errorInput) {
            removeError(elInput);
        }

        let hasError = false;


        // Validité des prénoms 
        if(! VALID_NAME.test(elInputFirstname.value) ) {
            // on signal une erreur au code
            hasError = true;

            //on sgnal une erreur à l'utilisateur
            elInputFirstname.parentElement.classList.add('error');
            elInputFirstname.after(makeErrorElement('Format du Prénom invalide'));
        }


        // Validité des prénoms
        if (!VALID_NAME.test(elInputLastname.value)) {
            // on signal une erreur au code
            hasError = true;

            //on sgnal une erreur à l'utilisateur
            elInputLastname.parentElement.classList.add('error');
            elInputLastname.after(makeErrorElement('Format du Nom invalide'));
        }
        // Validité des Email 
        if (!VALID_NAME.test(elInputEmail.value)) {
            // on signal une erreur au code
            hasError = true;

            //on sgnal une erreur à l'utilisateur
            elInputEmail.parentElement.classList.add('error');
            elInputEmail.after(makeErrorElement('Format de Email invalide'));
        }
        
        // Si il y a eu une erreur, on sort
        if(hasError) return;
        
        // Sinon on envoit le formulaire
        this.submit();
    }
    // Gestionnaire du focus sur les <Input> non checkbox
    function handlerFieldFocus (){
        removeError (this)
    }
    // INITIALISATON
    //Ecouteur sur le "submit" du formulaire
    document.forms[0].addEventListener('submit', handlerFormSubmit);

 //Ecouteur sur le focus des inputs
    elInputFirstname.addEventListener('focus' , handlerFieldFocus);
    elInputLastname.addEventListener('focus', handlerFieldFocus);
    elInputEmail.addEventListener('focus', handlerFieldFocus);
}

document.addEventListener('DOMContentLoaded', handlerDomContentLoaded);