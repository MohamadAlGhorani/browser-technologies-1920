# browser-technologies-1920
[Online demo](https://enquete-web-dev.herokuapp.com/)
screenshot here van het uiteindelijk resultaat.

## [opdracht 1.1](https://github.com/MohamadAlGhorani/browser-technologies-1920/wiki/Opdracht-1.1-Breek-het-web)
## [opdracht 1.2](https://github.com/MohamadAlGhorani/browser-technologies-1920/wiki/Opdracht-1.2---Fork-je-OBA)

## Case -1-

Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Wireflow

![WhatsApp Image 2020-03-18 at 13 39 59](https://user-images.githubusercontent.com/45425087/76961846-63a64d80-691e-11ea-9871-e3a731c2ee6a.jpeg)

- Mijn core functionlieteit is als de gebruiker het enquete niet afkrijgt, kan de gebruiker later terugkomen en weer verder gaan met waar hij/zij gebelven is.
- Goed symantische HTML.

## [Conclusie](https://github.com/MohamadAlGhorani/browser-technologies-1920/wiki/Conclusie-van-opdracht-3)

## Functional/Reliable
Voor het functioneel laagje heb ik ervoor gezorgd dat iedereen in elke situatie op elke device via elke browser het core functionlieteit krijgt. Iedereen kan het enquete invullen en iedreen kan het enquete opslaan om het later terug af te krijgen. Omdat het alleen HTMl is en door het server side rendering is het mogelijk om data op de server op te slaan van elke user die het uniqe id heeft namelijk het student nummer. door het mogelijkheid van inlog functionlieteit krijgt elke gebruiker zijn eigen data te zien.

Het oplossing met code die ik bedacht heb voor deze probleem is de volgende:
-  eerts heb ik twee Arrays aangemaakt voor het opslaan van de data op de server.
```js
const dataStapEen = [];
const dataStapTwee = [];
```
Daarna door het get methode op de server kan ik het data van het formulier krijgen die een action heeft naar deze pagina ```"/stap-twee"``` lees verder de code met de comments.
```js
router.get("/stap-twee", function(req, res) {
  console.log(req.query);
  // check if the requist has a student number if yes add this number to the array dataStapEen(the login page) if no add the 
  // data to the other array dataStapTwee(the data from the form on the form page) 
  if (req.query.studentNummer) {
    dataStapEen.push(req.query);
  } else {
    dataStapTwee.push(req.query);
  }
  //check if there is user number on the page of the form and a student number from the log in page
  if (req.query.user || req.query.studentNummer) {
    console.log("user", dataStapEen);
    console.log("info", dataStapTwee);
  //check of there is a match between the student number from the log in and the user number form the data of the form that 
  //have been saved before to give back the data of that specific user.
    let infoData = dataStapTwee.filter(student => {
      if (req.query.studentNummer) {
        return student.user == req.query.studentNummer;
      } else {
        return student.user == req.query.user;
      }
    });
    console.log("data to give back", infoData);
    //render the page with the data of the user that have been loged in with a student number
    res.render("stapTwee", {
      title: "enquete invullen",
      data: infoData,
      user: req.query.studentNummer
    }); 
    //if there is no student number or user number then stay on the page log in. i dont wanna anybody go to 
    //https://enquete-web-dev.herokuapp.com/enquete/stap-twee.  with out writing down his student number.
  } else {
    res.render("stapEen", {
      title: "Inloggen"
    });
  }
});
```
<img width="1280" alt="Screenshot 2020-03-25 at 15 26 47" src="https://user-images.githubusercontent.com/45425087/77547223-2fe29f00-6ead-11ea-84aa-ed8f7dbd901c.png">

<img width="1280" alt="Screenshot 2020-03-25 at 15 27 00" src="https://user-images.githubusercontent.com/45425087/77547239-36711680-6ead-11ea-866d-8b312b39509a.png">

<img width="1280" alt="Screenshot 2020-03-25 at 15 27 10" src="https://user-images.githubusercontent.com/45425087/77547381-68827880-6ead-11ea-9662-905d813ae08a.png">

<img width="1280" alt="Screenshot 2020-03-30 at 10 15 25" src="https://user-images.githubusercontent.com/45425087/77890364-a39af800-726f-11ea-9060-138e0ed689d3.png">


## Usable

Het usable laagje is het laagje waar het web-site opgemaakt wordt, kleurtjes en layout krijgt. Zodat het web-site bereikbaar wordt Daarnaast zorgt deze laagje op gebruik vreindelijkheid.
<img width="1280" alt="Screenshot 2020-03-25 at 15 30 12" src="https://user-images.githubusercontent.com/45425087/77547616-b7c8a900-6ead-11ea-8de6-f9c8c3b22652.png">
<img width="617" alt="Screenshot 2020-03-25 at 15 31 14" src="https://user-images.githubusercontent.com/45425087/77547627-bbf4c680-6ead-11ea-9e54-689fcb5292b8.png">
<img width="1280" alt="Screenshot 2020-03-25 at 15 31 23" src="https://user-images.githubusercontent.com/45425087/77547631-bdbe8a00-6ead-11ea-8b30-bae9c9a70636.png">
<img width="1280" alt="Screenshot 2020-03-30 at 10 15 04" src="https://user-images.githubusercontent.com/45425087/77890419-b6153180-726f-11ea-81c1-f3b3613a78d0.png">

### Feature detection

IE11 ondersteund linar-gradiant niet om het probleem op te lossen heb ik @supports toegevoegd
```
section {
    background: #00b2f1 no-repeat;
}

@supports (background: linear-gradient(#01cd82, #00b2f1)) {
    section {
        background: linear-gradient(#00b2f1, #01cd82) no-repeat;
    }
}
```
```
@supports (animation: normal) {
    .progressbar li.active::before {
        animation-name: scale;
        animation-duration: 1s;
    }
```

## Pleasurable

Voor mijn pleasurable laag heb ik bedacht om van mijn form progressive disclosure  te maken. Dat de gebruiker stap per stap het enquete kan invullen en wanneer hij/zij alle vragen heeft beantwoordt kan hij/zij het formulier versturen. omdat de knop versturen wordt zictbaar pas alle vragen zijn beantwoordt.
In deze laag wordt alles door Javascript toegevoegd en ik heb ervoor gezorgd met keyfream animatie in css en js duidelijk feedback aan de gebruiker te geven door in welke vraag de gebruiker zich zelf bevindt en en welke vragen nog niet beantowoord zijn. Het enquete kan prima ingevuld worden zonder js zoals je gezien hebt bij het Usable laag.

<img width="1280" alt="Screenshot 2020-03-30 at 10 28 25" src="https://user-images.githubusercontent.com/45425087/77891514-5e77c580-7271-11ea-8065-bda5e0584502.png">
<img width="1280" alt="Screenshot 2020-03-30 at 10 28 57" src="https://user-images.githubusercontent.com/45425087/77891533-620b4c80-7271-11ea-9dbe-c43236aa99e8.png">

## Testen op de 8 features

## Ik heb de website getest op 4 browsers getest op mijn eigen laptop macbook 2015 macOS Catalina 10.15

1- ```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36``` dit is chrome browser op de macbook 2015 macOS Catalina 10.15 en de web-site werkt helemaal prima daar.

2- ```Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:73.0) Gecko/20100101 Firefox/73.0``` dit is firefox op macbook 2015 macOS Catalina 10.15 en de web-site doet het prima erop.

3- ```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15``` dit is safari op macbook 2015 macOS Catalina 10.15 en de web-site werkt daar prima.

4- 

## Screenreader ChromeVox:

## Test op 8 features

1- Afbeeldingen uitzetten. 
Ik heb de afbeeldingen uitgezet en de website doet het prima de layout is prima.
Alleen de logo wordt niet zichtbaar maar dat is niet erg omdat ik ook een title heb naast de logo staan.

2- Custom fonts uitzetten
ik heb uBlock origin chrome extension gebruikt om te testen.
Mijn website werkt prima omdat ik system fonts gebruik.

3- Kleur uitzetten & kleurblindheid instellen
Het gaat helemaal prima met kleuren ik heb alle mogelijkheden van kleur blind gebruikt en het is prima.
Contrast is goed de tekst is zwart op een bluowe achtergrond of een wite achtergrond.

4- Muis/trackpad werkt niet 
Als je muis of je trackpad niet werken kan je de tap gebruiken om te navigeren.

5- Breedband internet uitzetten 
De website werkt prima op trage internet slow 3G de gebruiker krijgt altijd de form te zien omdat het html is.

6- Javascript uitzetten
Als ik de javascript uitzet werkt het prima en de gebruiker kan nog steeds alles doen.

7- Cookies & localStorage uitzetten 
Als ik Cookies en localStorage uitzet werkt de site prima omdat ik geen gebruik maak van localStorage.

## Installation
- Download [Node.js](https://nodejs.org/en/) if you don't have it. 
- Clone this repository.
- Navigate to the folder of the repository using your terminal.
- Write in your terminal ```npm install``` to download the node modules.
- Run ``` npm run dev ``` in your terminal to open the porject in your brwoser using localhost:4000/

## License
License is [MIT](https://github.com/MohamadAlGhorani/browser-technologies-1920/blob/master/LICENSE)
