# Petit point sur la P.O.O (Programmation Orientée Objet)

Avant de reprendre le code, je veux faire un petit point théorie et vous parler d'une des branches de la programmation, la programmation objet. 
C'est un paradigme utilisé par beaucoup de langages, dont ceux les plus connus et les plus répandus dans le monde (Java, C++, React...). Cependant, je ne suis pas sûr 
que tout le monde sait ce que ça veut dire. La preuve, moi non plus je ne sais pas ce que ça veut dire... On va aller chercher la définition ! 

> La programmation orientée objet (POO), ou programmation par objet, est un paradigme de programmation informatique. Il consiste en la définition et l'interaction de briques logicielles appelées objets ; un objet représente un concept, une idée ou toute entité du monde physique, comme une voiture, une personne ou encore une page d'un livre.

C'est une bonne définition, je vais maintenant essayer de faire la mienne. La programmation objet, c'est un état d'esprit de programmation 
dans lequel on va se dire: "Okay, dans mon code, je vais me servir d'un truc que je vais créer. Et je vais m'en servir beaucoup, je vais m'en servir souvent." La POO répond à ce problème en disant "et bien, on va créer ce truc en tant qu'objet". Un objet a ses propriétés,ses variables, ses fonctions (qu'on appelle aussi des méthodes) etc...

# Votre future meilleure amie: la doc ❤

Ok, voici un lien que vous devez jamais oublié. Vous allez toujours avoir envie de l'avoir sous la main. Si vous avez un problème, soit votre solution est sur ce site, soit elle est sur StackOverflow. Le voici: 

[La documentation de React Native](https://reactnative.dev/)

Elle donne toutes les informations des Components fournis par React Native, mais également des tutos, des exemples, des guides etc... La doc, **c'est le S**


# Des composants (a.k.a components)

## View

Une vue (ou *View*) peut être vue comme une sorte de boîte, dans laquelle on va placer tous nos petits objets. Une vue s'ouvre avec la balise `<View>` et se ferme avec la balise `</View>`. Cela veut dire que tout ce qui se trouve entre ces deux balises appartient à la vue. De cette hierarchie, on peut définir le concept d'élément parent et d'élément enfant. L'élément parent (par exemple: une vue) contient des éléments enfants (par exemple: un texte, une image, un objet qu'on a créé nous-même 🙂 )

**/!\**: Dans notre *App.js*, dans la fonction return de la fonction App, il faut toujours TOUJOURS avoir un élément parent dans lequel on va placer nos éléments. Sinon ça va pas compiler et ça va faire une erreur. Pourquoi ? Parce qu'en plaçant nos éléments dans une vue, ça leur explique comment se positionner les uns par rapport aux autres.

[Doc de la View](https://reactnative.dev/docs/view)

## Text 

Le composant *Text* va nous servir... à écrire du texte. Comment ça marche ? Et bien, ce composant a une balise ouvrante `<Text>` et une balise fermante `</Text>`, et le texte qu'on va afficher sera tout le texte compris entre ces deux balises.

Par exemple:
```
<Text> Joli bébé ma douceuh </Text>
```
Cette ligne de code affiche donc le texte "Joli bébé ma douceuh" sur notre application.
Cependant, il y a plein de propriétés qu'un texte peut avoir, et qu'on ne va pas explorer maintenant. Cependant, pour votre curiosité, vous pouvez toujours allez sur le lien ci-dessous pour voir la doc du composant *Text*.

[Doc du Text](https://reactnative.dev/docs/text)

## TextInput

Le composant *TextInput* va faire une petite barre dans laquelle, lorsque l'on va appuyer dessus, notre clavier va s'ouvrir et on va pouvoir rentrer du texte dedans. L'objectif étant notamment d'envoyer des informations à l'application, ou indirectement à une base de données, commme une barre de recherche lambda et avoir des résultats. 

Le TextInput est le premier composant que vous voyez, il me semble, qui ne possède pas de balise fermante. Le composant est formé d'une seul balise qui se ferme toute seule. Et comme toutes les balises du genre, elle se rédige ainsi: `<TextInput />`. Mais dans ce cas-là, comment fait-on pour personnaliser notre composant *TextInput* ? Et bien, toutes les informations d'un *TextInput* seront passées par ses **props**, c'est-à-dire ses propriétés. Ce sont les arguments présents dans la balise, vous l'avez déjà vu pour les *View* notamment.

Exemple: 
```
<Composant prop1 = {} prop2 ={} ... />
```

Donc, pour récupérer le texte d'un *TextInput*, comment fait-on ? On va utiliser la magnifique propriété *onChangeText* ! (vous remarquerez que les composants commencent avec une majuscule, tandis que les propriétés commencent avec une miniscule). Dans la propriété *onChangeText*, on peut spécifier une fonction à notre *TextInput* pour lui dire : quand le texte rentré dans l'input change, tu éxecutes cette fonction avec le nouveau texte. Donc dans cette fonction, on fait ce qu'on veut avec notre nouveau texte. 🙂


[Doc du TextInput](https://reactnative.dev/docs/textinput)

## FlatList 

Comme son nom l'indique, ce composant va nous servir à faire des listes ! On va essayer d'en faire une en suivant la documentation. 

[Doc de la FlatList](https://reactnative.dev/docs/flatlist)


# Comment créer vos propres composants ? 

Il y a deux manières pour créer ses composants en React. Soit en faisant des classes, et dans ce cas-là, notre programmation ressemblera un peu plus à de la programmation objet. Soit en faisant des **composants fonctionnels**, c'est-à-dire des composants déclarés avec des fonctions. C'est ce qu'on a fait depuis le début, et pour faire plaisir à Loan, on va continuer comme ça ! 

```
import React from 'react';
import {View, Text} from 'react-native';

function Composant (props) { //on peut passer des propriétés à notre composant, c'est super utile
    return(
        <View>
            <Text> Je suis le composant Composant ! </Text>
        </View>
    )
}

export default Composant; //ne jamais oublier d'export notre composant, pour que les autres parties de notre code puisse se servir de ce composant, en l'important.
```