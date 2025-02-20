# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  vi har vagt at inddele alt i mapper, med passende navne.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  de ligger inde i mapper også, fx. base.css inde i css mappen

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
  vi laver ingen mellemrum, og bruger enten camelcase eller snakecase i forhold til hvad der passer til strukturen

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Vi har kaldt de filer der hører sammen de samme navne

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Vi placerer det i bunden, nede ved body end tag

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi har navngivet dem (Xhvad vi arvejder på)---feature---navn

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har inddelt arbejdet, og snakket løbende så vi ungår konklikter.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi har skrevet chance/addx så altså, det vi arbejder på eller har ændret/tilføjet

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Vi satser på at være til stede og kunne snakke fysisk, ellers har i skrevet i vores teamgruppe.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi har skrevet dem ud som functions

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Primært bruger vi class

- Skal filer have korte forklaringer som kommentarer?
  Nej det synes vi ikke er nødvendigt, hvis vi har skrevet speciel kode - kan man kommentere for at øje forståelsen.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
  Vi har benytte 2 forskellige API'er et til datasættet og et til billederne.

- Filtrering af produkter baseret på brugerens valg.
  Vi har valgt at bruge 2 forskellige filtre på vores castingsite. Et til alder og et til køn.

- Dynamisk visning af produkter i HTML.

- Log in / sign in

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- https://dummyjson.com/users
- https://randomuser.me/api/portraits/${user.gender}/${user.id}.jpg

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?

Funktionen showList laver HTML-markup for en liste af users og indsætter denne markup. Den tager en liste af users som input og viser informationer for hver bruger; deres navn, alder, adresse, billeder og andre detaljer. Funktionen spiller sammen med resten af koden ved at blive kaldt efter data er hentet fra API'et og bruges til at vise statisternes profiler på sitet.

- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?

I denne funktion er parameteret users, og dens dertilhørende liste af data.

- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.

Funktionen returnerer ikke en værdi. I stedet manipulerer den DOM'en ved at indsætte det hentede data i en containeren grid_1-1.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
function showList(users) {
  console.log("Showing user:", users);
  const markup = users
    .map(
      (user) => `
        <div class="grid_1-1_2-img">
          <div >
            <div class="name_mobile">
              <h2>${user.firstName} ${user.lastName}</h2>
              <h4>${user.age} years, ${user.address.state}</h4>
            </div>

            <img src="https://randomuser.me/api/portraits/${user.gender == "female" ? "women" : "men"}/${user.id % 100}.jpg" alt="" />
          </div>

          <div class="grid_1-1_2">
            <img src="https://randomuser.me/api/portraits/${user.gender == "female" ? "women" : "men"}/${user.id % 100}.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/${user.gender == "female" ? "women" : "men"}/${user.id % 100}.jpg" alt="" />
          </div>
        </div>
        <div>
          <div class="name_mobile2">
              <h2>${user.firstName} ${user.lastName}</h2>
              <h4>${user.age} years, ${user.address.state}</h4>
          </div>
          <div class="div_info">
          <p> <span>Age:</span> ${user.age}</p>
            <p> <span>City:</span>  ${user.address.city}</p>
            <p> <span>Height:</span> ${user.height} cm</p>
            <p> <span>Weight:</span> ${user.weight} kg</p>
            <p> <span>Haircolor, type:</span> ${user.hair.color} ${user.hair.type} </p>
            <p> <span>Eye color:</span> ${user.eyeColor}</p>
          </div>
          <div class="div_contact">
            <div class="add_to_basket">
              <a href="login.html"><h5>Save this profile</h5></a>
            </div>
            <div class="add_to_basket">
              <a href="mailto:"><h5>Send a message</h5></a>
            </div>
            <div class="add_to_basket">
              <a href="login.html"><h5>Book now</h5></a>
            </div>
          </div>
        </div>

        `
    )
    .join("");
  console.log("Generated markup:", markup);
  profileContainers.innerHTML = markup;
}
```
