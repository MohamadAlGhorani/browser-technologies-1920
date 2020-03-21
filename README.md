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
<img width="1280" alt="Screenshot 2020-03-21 at 20 21 18" src="https://user-images.githubusercontent.com/45425087/77234837-ac296980-6bb1-11ea-842e-01e5aa7afb35.png">

<img width="1280" alt="Screenshot 2020-03-21 at 20 21 33" src="https://user-images.githubusercontent.com/45425087/77234836-a764b580-6bb1-11ea-9896-f0a1e7f6b0f1.png">

<img width="1280" alt="Screenshot 2020-03-21 at 20 21 51" src="https://user-images.githubusercontent.com/45425087/77234838-adf32d00-6bb1-11ea-89fd-6eb953cfe9ba.png">


## Usable

## Pleasurable

## Installation
- Download [Node.js](https://nodejs.org/en/) if u done have it. 
- Clone this reposotory.
- Navigate to the folder of the reposotory using your terminal
- Write in your terminal ```npm install``` to download the node modules.
- run ``` npm run dev ``` to open the porject in your brwoser using localhost:4000/

## License
Licens is [MIT](https://github.com/MohamadAlGhorani/browser-technologies-1920/blob/master/LICENSE)
