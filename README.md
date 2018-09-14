Node à installer et inclut maintenant NPM . Vous devriez pouvoir exécuter la commande suivante après la procédure d'installation ci-dessous.

https://nodejs.org/en/

Installation du noeud sur OS X

Vous devrez utiliser un terminal. Sous OS X, vous pouvez trouver le terminal par défaut dans /Applications/Utilities/Terminal.app.

S'il vous plaît installer Homebrew si ce n'est pas déjà fait avec la commande suivante.

$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
Si tout va bien, vous devriez courir
brew install node

Installation du noeud sur Linux

sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

Installation du noeud sur Windows

Allez sur le site officiel de Node.js et récupérez l'installateur. Aussi, assurez-vous d'avoir gitdisponible dans votre PATH, npmpeut en avoir besoin.

Demarrer le Project

cd project_ynov
npm install
npm run serve