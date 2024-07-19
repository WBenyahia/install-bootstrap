import Route from "./Route.js";

//Définir ici vos routes

export const allRoutes = [

new Route("/", "Accueil", "/pages/home.html"),
new Route("/promo","Les promos","/pages/promo.html"),
new Route("/signin","Connexion","/pages/auth/signin.html","/js/auth/signin.js"),
new Route("/signup","Inscription","/pages/auth/signup.html", "/js/auth/signup.js"),
new Route("/account","Mon compte","/pages/auth/account.html"),
new Route("/editPassword","Changement de mot de passe","/pages/auth/editPassword.html"),
new Route("/achat","Panier","/pages/panier/achat.html","/js/shopping.js"),
new Route("/commandes","Mes commandes","/pages/commandes/commandes.html"),
new Route("/jeux","Jeux","/pages/jeux.html","/js/ajout.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "Gamestore";