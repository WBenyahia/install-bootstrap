import Route from "./Route.js";

//Définir ici vos routes

export const allRoutes = [

new Route("/", "Accueil", "/pages/home.html"),
new Route("/promo","Les promos","/pages/promo.html"),
new Route("/signin","Connexion","/pages/auth/signin.html"),
new Route("/signup","Inscription","/pages/auth/signup.html"),
new Route("/account","Mon compte","/pages/auth/account.html"),
new Route("/editPassword","Changement de mot de passe","/pages/auth/editPassword.html"),
new Route("/achat","Panier","/pages/panier/achat.html"),
new Route("/commandes","Mes commandes","/pages/commandes/commandes.html"),
new Route("/jeux","Jeux","/pages/jeux.html"),
new Route("/modifcommande","Modification des commandes","/pages/commandes/modifcommande.html"),
new Route("/annulercommande","Annulation des commandes","/pages/commandes/annulercommande.html"),
new Route("/demandesupp","Annulation","/pages/commandes/demandesupp.html"),
new Route("/modification","Modification","/pages/auth/modification.html"),
new Route("/suppression","Supprimer mon compte","/pages/auth/suppression.html"),
new Route("/comptesupp","Suppression","/pages/auth/comptesupp.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Gamestore";