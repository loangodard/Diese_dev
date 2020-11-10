# Environnement de développement & Bases

À la fin de la formation, nous allons avoir ça sur notre téléphone :

*--insérer une image sexy ce que qu'on va proposer--*

## Environnement de développement

Avant d'avoir nos applications à la conquête du monde entier, nous devons d'abord les développer. Pour ça, il nous faut un *environnement de développement*.

Plusieurs outils vont intervenir dans nos formations, donc autant comprendre un peu pourquoi ils sont là pour ne pas se perdre.

### Node.js & npm

#### Node.js ?

> Node.js est un **environnement d'exécution** JavaScript **ouvert**, **multiplateforme** et back-end qui exécute du code JavaScript **en dehors d'un navigateur web**.
> 
> -- [Wikipédia](https://en.wikipedia.org/wiki/Node.js)

- <u>Environnement d'exécution</u> : c'est Node.js qui s'occupe de faire tourner JavaScript sur notre ordinateur en expliquant à l'ordinateur ce qu'il doit faire avec nos lignes de code.

- <u>En dehors d'un navigateur</u> : vous êtes libre d'utiliser le Javascript presque où vous voulez : ce n'est plus un langage exclusivement pour les navigateurs !

> Par conséquent, Node.js représente **un paradigme "JavaScript everywhere"**, unifiant le développement d'applications web autour d'un seul langage de programmation [...].
> 
> -- [Wikipédia](https://en.wikipedia.org/wiki/Node.js)

- <u>JavaScript everywhere</u> : Vous pouvez faire énormément de choses avec JavaScript ! Plus *vraiment* besoin de maîtriser plusieurs langages pour un projet.

#### npm ?

> npm (abréviation de **Node Package Manager**) est **un gestionnaire de paquets** pour le langage de programmation JavaScript. [...] C'est le gestionnaire de paquets **par défaut** pour l'environnement d'exécution JavaScript Node.js.
> 
> -- [Wikipedia](https://en.wikipedia.org/wiki/Npm_(software))

Dans un projet informatique, on évite de réinventer la roue, donc on utilise les outils proposés par d'autres développeurs : ce sont des **paquets** qui sont considérés comme des **dépendances** de notre projet.

Sans ces paquets, plus rien ne fonctionne !

Et React-Native utilise beaucoup de dépendances. [Vraiment beaucoup !](http://npm.anvaka.com/#/view/2d/react-native) Donc, il est vital d'avoir un gestionnaire de paquets qui s'occupe pour nous de gérer les paquets nécessaires : npm !

### Développement mobile

Il y a beaucoup de solutions pour le développement mobile. Alors, pourquoi React Native ?

#### Applications natives

#### Applications cross-platform

### React & React-Native & Expo

#### React ?

> ***React*** (aussi appelé **React.js** ou **ReactJS**) est une [bibliothèque](https://fr.wikipedia.org/wiki/Biblioth%C3%A8que_Logicielle "Bibliothèque Logicielle") JavaScript [libre](https://fr.wikipedia.org/wiki/Logiciel_libre "Logiciel libre") développée par **Facebook** depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de **composants dépendant d'un état** et générant une page [...] à chaque changement d'état.
> 
> -- [Wikipédia](https://fr.wikipedia.org/wiki/React_(JavaScript)

- Développée par Facebook et open-source : c'est robuste et avec de l'avenir. En plus, c'est une technologie très populaire et utilisée partout sur le web !

#### React-Native

> **React Native** est un framework d'applications mobiles open source créé par [Facebook](https://fr.wikipedia.org/wiki/Facebook "Facebook"). Il est utilisé pour développer des applications pour [Android](https://fr.wikipedia.org/wiki/Android "Android"), [iOS](https://fr.wikipedia.org/wiki/IOS "IOS") et [UWP](https://fr.wikipedia.org/wiki/Universal_Windows_Platform "Universal Windows Platform") en permettant aux développeurs d’utiliser [React](https://fr.wikipedia.org/wiki/React_(JavaScript) "React (JavaScript)") avec les fonctionnalités native de ces plateformes.
> 
> -- [Wikipédia](https://fr.wikipedia.org/wiki/React_Native)

[Petite liste d'applications faites avec React Native](https://reactnative.dev/showcase).

#### Expo

## Bases

À partir de là, on suppose que nous avons Node.js, npm (ou yarn) et expo-cli correctement installés sur l'ordinateur.

### Commençons !

### Initialiser un nouveau projet

On ouvre une ligne de commande dans le dossier qui va contenir le dossier `bac-a-sable/` de notre premier projet. Initialisons notre projet avec Expo :

```bash
expo init bac-a-sable
```

et on va choisir le template `blank`. Expo place le dossier `bac-a-sable` avec tout le nécessaire pour bien débuter : fichiers, configurations, dépendances...

### Lancer l'application

Allons dans notre dossier `bac-a-sable` avec la ligne de commande, puis lançons la commande :

```bash
npm start
```

Expo démarre ! Maintenant, on affiche notre application sur le téléphone en scannant le QRCode donné par Expo. Si Expo n'est pas installé sur le téléphone, c'est le moment de le faire - il suffit d'aller regarder sur le store du téléphone.

Attention, le téléphone doit être sur le même réseau que l'ordinateur ! Pourquoi ? Car il a besoin de communiquer avec un serveur qui tourne sur notre ordinateur.

### Il y a quoi dans ce dossier ?

Les fichiers et dossiers peu important pour nous, mais à éviter de toucher :

- Gérés par git : `.git/`, `gitignore`

- Gérés par npm : `package.json`, `package-lock.json`, `node_modules``

- Gérés par Expo : `.expo/`, `.expo-shared/`

## Bricolons !

#### Hot reloading ?

> L'idée derrière le rechargement à chaud est de maintenir l'application en marche et d'injecter de nouvelles versions des fichiers que vous avez édités au moment de l'exécution.
> 
> [Blog React Native](https://reactnative.dev/blog/2016/03/24/introducing-hot-reloading)

Bref, chaque modification enregistrée du projet provoque l'actualisation automatique de l'application sur le mobile !

Modifions un peu le texte affiché dans C'est cool !

#### Composants

React fait de la programmation par composants.

#### JSX

C'est comme du HTML, mais ce n'est pas du HTML ! Pas de HTML en React Native.

#### Un peu de style
