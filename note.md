<h1 style="color:red">PRIME NOTE NAVBAR </h1>

#### La struttura js della navbar sarà data da un array chiamato navbar che contiene oggetti con:

- TITLE:
- LINK:
- IMAGE:

Usare struttura **v-for** per stampare tanti list item quanto la lunghezza dell'array.
Stampare quindi Title e link per ogni list item della Navbar.
Usare la struttura del **v-if** per visualizzare le immagini solo se la stringa non risulti vuota **(!== '')**.
Usare un operatore ternario per l'aggiunta di classe che crea uno sfondo nero e cambi il colore del testo, solo se questo contiene un immagine.

```
TIPS: Usare -filter:invert- per le image(icone) nella navbar
```

---

#####STRUTTURA LAYOUT:

<small style="color:green">#Header: Navbar dati in javascript + css</small>

```html
Esempio recupero dati da javascript:

<ul class="d-flex g-2">
  <li
    v-for="object in navbar"
    class="mx-2"
    :class="object.image !== ''?'nav-img-content':''"
  >
    <a :href="object.link">
      <img v-if="object.image !== ''" :src="'./img/'+object.image" alt="logo" />
      {{object.title}}
    </a>
  </li>
</ul>
```

Jumbotron: Carousel

---

<h1 style="color:red">PRIME NOTE FOOTER </h1>

###La struttura js del Footer conterrà:

- 1 Oggetto informazioni aziendali.

```javascript
return{
  aziendainfo: {
        logo: imglogo,
        indirizzo: testo,
        tel: testo,
        linkfacebook: link,
        etc....
 },
}
```

- 2 Oggetti con un titolo e una lista di oggetti con titolo e link .

```javascript
  return{
    accountarea:{
      title: "My account",
      linkList:[
        {
          title:My account,
          link: #,
        },
        {
          title: Checkout,
          link: #,
        },
      ]
    }
  }

```

---

<h1 style="color:red">!DA RIVEDERE:! </h1>
#####Header:

- Controllare in lista link (navbar) l'immagine che non viene visualizzata
- Controllare margini Navbar
- Migliorare stile bottoni che contengono icone
- Controllare grandezza font testo Jumbotron
- Aggiungere icone(button) per slider Jumbotron
- Aggiustare padding e dimensioni delle (card auto) nella sezione Auto-list **se rimane tempo lavorare sul box-shadow**
- Rivedere icone sezione (auto info)
- Abbellire un po le Card nella sezione (Testimonial) **lasciare per ultimo**
- Sistemare un po la parte grafica sezione (articles), colore e tipo testo. **lasciare per ultimo**
- Controllare grandezza custom icon (sezione articles).
- Controllare distanza colonne nel Footer

---

<h1 style="color:green">DETTAGLI SVILUPPO </h1>
Utilizzato un box-shadow per gestire bordi nella sezione Auto-categories-search.
