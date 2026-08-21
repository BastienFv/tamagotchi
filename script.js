// CREATION DES VARIABLES
let energie = 10
let faim = 0
let joie = 5

//BORNES DES STATS
const ENERGIE_MAX = 10
const JOIE_MAX = 10


alert("Bonjour, je suis ton Tamagotchi !")
alert("Voici mes STATS: ENERGIE: " + energie + " FAIM: " + faim + " JOIE: " + joie)

let choix;


//BOUCLE TANT QUE
while (faim <= 5 && joie > 0 && energie > 0 && choix != 3) {
    //DEBUT DE LA PARTIE
    choix = prompt("Que veux-tu faire ? 1: JOUER ou 2: NOURRIR, 3: SORTIR")

    //SI LE JOUEUR FERME LA FENÊTRE OU FAIT ANNULER, ON QUITTE LA PARTIE
    if (choix === null) {
        choix = "3"
    }

    //SI LE JOUEUR ENTRE AUTRE CHOSE QUE 1, 2 OU 3, ON REDEMANDE
    if (choix != 1 && choix != 2 && choix != 3) {
        alert("Choix invalide ! Entre 1, 2 ou 3.")
        continue
    }

    //SI LE JOUEUR JOUE AVEC SON TAMAGOTCHI
    if (choix == 1) {
        energie = energie - 2;
        faim = faim + 2;
        joie = Math.min(joie + 1, JOIE_MAX);
        alert("ENERGIE: " + energie + " FAIM: " + faim + " JOIE: " + joie)
    }

    //SI LE JOUEUR NOURRI SON TAMAGOTCHI
    if (choix == 2) {
        faim = Math.max(faim - 2, 0);
        joie = joie - 1;
        energie = Math.min(energie + 1, ENERGIE_MAX);
        alert("ENERGIE: " + energie + " FAIM: " + faim + " JOIE: " + joie)
    }


    //SI LE JOUEUR ARRÊTE LA PARTIE
    if (choix == 3) {
        alert("La partie est terminée, à bientôt !")
    } else {
        //APPEL FONCTION AUTOPSIE
        autopsie(energie, faim, joie)

        // APPEL FONCTION LIFE
        life(energie, faim, joie)
    }
}


//FONCTION LIFE
function life(energie, faim, joie) {
    if (energie <= 0 || joie <= 0 || faim > 5) {
        alert("Votre Tamagotchi est mort. GAME OVER !!!")
    } else {
        alert("Votre Tamagotchi est toujours en vie.")
    }
}



//FONCTION AUTOPSIE
function autopsie(energie, faim, joie){
    if (energie <= 0) {
        alert("Votre Tamagotchi n'a plus d'énergie ! :'(")
    }

    if (faim > 5) {
        alert("Votre Tamagotchi avait trop faim ! :'(")
    }

    if (joie <= 0) {
        alert("Votre Tamagotchi était trop triste ! :'(")
    }
}
