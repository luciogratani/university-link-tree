export type MenuItem = {
  name: string
  description?: string
  price: string
  // TODO(dev): in una fase successiva aggiungere anche allergenCodes: number[]
  frozen?: boolean
}

export type MenuSectionNotice = {
  title: string
  lines: string[]
}

export type MenuSection = {
  id: string
  title: string
  items: MenuItem[]
  notice?: MenuSectionNotice
}

export type MenuNotice = {
  title: string
  description: string
}

export const MENU_NOTICES: MenuNotice[] = [
  {
    title: "Menù Pizza",
    description: "1 pizza + 1 condimento + 1 bibita a 9 €",
  },
  {
    title: "Menù Fainè",
    description: "1 porzione fainè + 1 condimento + 1 bibita a 9 €",
  },
  {
    title: "Validità promo",
    description: "Offerte valide dal martedì al giovedì e la domenica",
  },
  {
    title: "Offerta solo per asporto",
    description: "Bibite e birra Tuborg da 33cl solo 2 €",
  },
  {
    title: "Convenzione enti & aziende",
    description: "Sconto 15%",
  },
]

/** Testo sotto il menù: coperto e disclaimer. */
export const MENU_FOOTER_TEXT =
  "Coperto 2 € a persona. Le informazioni potrebbero variare; fare sempre riferimento al menù aggiornato in locale."

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      {
        name: "Zuppetta di cozze",
        description: "Cozze, aglio, prezzemolo, pomodoro, olio, sale e pepe",
        price: "12 €",
      },
      {
        name: "Moscardini in umido",
        description: "Moscardini, pomodori, aglio, peperoncino, olio, sale e pepe",
        price: "12 €",
        frozen: true,
      },
      {
        name: "Pescatrice alla catalana",
        description: "Rana pescatrice, cipolle e pomodorini",
        price: "12 €",
      },
      {
        name: "Tagliere sardo",
        description: "Selezione di salumi e formaggi tipici",
        price: "12 €",
      },
    ],
  },
  {
    id: "primi",
    title: "Primi",
    items: [
      {
        name: "Carbonara",
        description: "Pasta, uovo, formaggio, guanciale, sale e pepe",
        price: "12 €",
      },
      {
        name: "Amatriciana",
        description: "Pasta, pomodoro, guanciale, cipolle, sale e pepe",
        price: "12 €",
      },
      {
        name: "Gnocchi alla campidanese",
        description: "Gnocchi, pomodoro e salsiccia, cipolle, olio, sale e pepe",
        price: "10 €",
      },
      {
        name: "Risotto ai frutti di mare (min. 2 porzioni)",
        description: "Riso, vongole, cozze, calamari, aglio, sale e pepe",
        price: "15 €",
        frozen: true,
      },
    ],
  },
  {
    id: "secondi-pesce",
    title: "Secondi di pesce",
    notice: {
      title: "Contorno incluso nel prezzo",
      lines: [
        "Patatine fritte · Insalata verde · Insalata mista · Verdure grigliate",
      ],
    },
    items: [
      {
        name: "Calamari alla griglia",
        price: "19 €",
        frozen: true,
      },
      {
        name: "Tonno alla griglia",
        price: "19 €",
        frozen: true,
      },
      {
        name: "Pesce spada alla griglia",
        price: "19 €",
        frozen: true,
      },
    ],
  },
  {
    id: "secondi-carne",
    title: "Secondi di carne",
    notice: {
      title: "Contorno incluso nel prezzo",
      lines: [
        "Patatine fritte · Insalata verde · Insalata mista · Verdure grigliate",
      ],
    },
    items: [
      {
        name: "Tagliata di bue rosso 400 gr",
        price: "24 €",
      },
      {
        name: "Cavallo 300 gr",
        price: "16 €",
      },
      {
        name: "Hamburger 250 gr",
        price: "13 €",
      },
      {
        name: "Hamburger 150 gr",
        price: "11 €",
      },
      {
        name: "Hamburger vegetariano 250 gr",
        price: "14 €",
      },
      {
        name: "Spinacine vegetariane 300 gr",
        price: "14 €",
      },
      {
        name: "Uova con cipolle (3 uova)",
        price: "9 €",
      },
    ],
  },
  {
    id: "contorni",
    title: "Contorni",
    items: [
      {
        name: "Patatine fritte piccole",
        price: "3,5 €",
      },
      {
        name: "Patatine fritte grandi",
        price: "5 €",
      },
      {
        name: "Insalata verde",
        price: "4 €",
      },
      {
        name: "Insalata mista",
        price: "5 €",
      },
      {
        name: "Verdure grigliate",
        price: "6 €",
      },
    ],
  },
  {
    id: "panini",
    title: "Panini",
    notice: {
      title: "Personalizza il panino",
      lines: [
        "Puoi aggiungere cipolle, patate fritte o uovo al tuo panino.",
        "Supplemento: +1 € per ingrediente.",
      ],
    },
    items: [
      {
        name: "Hamburger 150",
        description: "Pane, hamburger, insalata e salsa rosa",
        price: "6 €",
      },
      {
        name: "Hamburger 250",
        description: "Pane, hamburger, insalata e salsa rosa",
        price: "9 €",
      },
      {
        name: "Hambovo 150",
        description: "Pane, hamburger, uovo, insalata e salsa rosa",
        price: "8 €",
      },
      {
        name: "Cavallo",
        description: "Pane, carne di cavallo, pomodoro, insalata e salsa rosa",
        price: "7 €",
      },
      {
        name: "Vegetariano",
        description: "Pane, pomodoro, zucchine grigliate e patate",
        price: "7 €",
      },
    ],
  },
  {
    id: "pizze",
    title: "Pizze",
    items: [
      {
        name: "Margherita",
        description: "Pomodoro e mozzarella",
        price: "5 €",
      },
      {
        name: "Completa",
        description: "Pomodoro, mozzarella, acciughe e capperi",
        price: "7 €",
      },
      {
        name: "Veneziana",
        description: "Pomodoro, mozzarella, funghi e prosciutto",
        price: "7 €",
      },
      {
        name: "Cardinale",
        description: "Pomodoro, mozzarella, prosciutto e wurstel",
        price: "7 €",
      },
      {
        name: "4 Stagioni",
        description: "Pomodoro, mozzarella, acciughe, prosciutto, funghi e olive",
        price: "8 €",
      },
      {
        name: "Capricciosa",
        description: "Pomodoro, mozzarella, prosciutto, funghi, carciofi e olive",
        price: "8 €",
      },
      {
        name: "Tucano",
        description: "Pomodoro, mozzarella, tonno e cipolle",
        price: "8 €",
      },
      {
        name: "Ortolana",
        description: "Pomodoro, mozzarella, peperoni e zucchine",
        price: "8 €",
      },
      {
        name: "University",
        description: "Pomodoro, mozzarella, gorgonzola e bacon",
        price: "10 €",
      },
      {
        name: "4 Formaggi",
        description: "Mozzarella, provola, gorgonzola e grana",
        price: "9 €",
      },
      {
        name: "Patatosa",
        description: "Pomodoro, mozzarella e patatine fritte",
        price: "7 €",
      },
      {
        name: "Profumosa",
        description: "Pomodoro, mozzarella, gorgonzola, salsiccia e cipolle",
        price: "10 €",
      },
      {
        name: "Gorgonzola",
        description: "Pomodoro, mozzarella e gorgonzola",
        price: "8 €",
      },
      {
        name: "Parmigiana",
        description: "Pomodoro, mozzarella e melanzane alla parmigiana",
        price: "9 €",
      },
      {
        name: "Primavera",
        description: "Pomodoro e basilico",
        price: "5 €",
      },
    ],
  },
  {
    id: "faine",
    title: "Fainè",
    items: [
      {
        name: "Fainè piccola",
        price: "7 €",
      },
      {
        name: "Fainè media",
        price: "11 €",
      },
      {
        name: "Fainè grande",
        price: "15 €",
      },
      {
        name: "Condimenti base",
        description: "Verdure, salsiccia, cipolle o acciughe",
        price: "1/1,5/2 €",
      },
      {
        name: "Condimenti special",
        description: "Gorgonzola o antunna",
        price: "2/3/4 €",
      },
    ],
  },
  {
    id: "finger-food",
    title: "Finger food & fritti",
    items: [
      {
        name: "Nuggets di pollo",
        price: "5 €",
      },
      {
        name: "Calamaro fritto",
        price: "16 €",
      },
      {
        name: "Cotoletta di pollo (cad.)",
        price: "6 €",
      },
      {
        name: "Olive all’ascolana",
        price: "5 €",
      },
      {
        name: "Verdure in pastella",
        price: "5 €",
      },
      {
        name: "Alette di pollo e contorno",
        price: "14 €",
      },
      {
        name: "Mozzarelline fritte",
        price: "5 €",
      },
      {
        name: "Uova con cipolle (cad.)",
        price: "3,5 €",
      },
      {
        name: "Patatine fritte piccole",
        price: "3,5 €",
      },
      {
        name: "Patatine fritte grandi",
        price: "5 €",
      },
      {
        name: "Misto fritto",
        description: "Nuggets, mozzarelline e olive",
        price: "8 €",
      },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    items: [
      {
        name: "Tiramisù",
        price: "5 €",
      },
      {
        name: "Cheesecake frutti di bosco",
        price: "5 €",
      },
      {
        name: "Cheesecake cioccolato",
        price: "5 €",
      },
      {
        name: "Soufflé al cioccolato",
        price: "5 €",
      },
      {
        name: "Croccante all’amarena",
        price: "6,5 €",
      },
    ],
  },
  {
    id: "bibite",
    title: "Bibite",
    items: [
      { name: "Acqua 0,5 L", price: "1,5 €" },
      { name: "Coca Cola", price: "3 €" },
      { name: "Coca Cola Zero", price: "3 €" },
      { name: "Fanta", price: "3 €" },
      { name: "Sprite", price: "3 €" },
      { name: "Aranciata amara", price: "3 €" },
      { name: "The freddo", price: "3 €" },
      { name: "Succhi di frutta", price: "3 €" },
      { name: "Ginger Ale", price: "3,5 €" },
      { name: "Ginger Beer", price: "3,5 €" },
      { name: "Red Bull", price: "3,5 €" },
    ],
  },
  {
    id: "birre-spina",
    title: "Birre alla spina",
    items: [
      { name: "Nastro Azzurro 0,25 L", price: "2,5 €" },
      { name: "Spina 0,30 L", price: "3,5 €" },
      { name: "Spina 0,50 L", price: "5 €" },
      { name: "Caraffa 1 L", price: "9 €" },
    ],
  },
  {
    id: "birre-bottiglia",
    title: "Birre in bottiglia",
    items: [
      { name: "Franziskaner", price: "5 €" },
      { name: "Daura", price: "4 €" },
      { name: "Corona", price: "3,5 €" },
      { name: "Beck's", price: "3 €" },
      { name: "Heineken", price: "3 €" },
    ],
  },
  {
    id: "vini-rossi",
    title: "Vini rossi",
    items: [
      { name: "Perdera", price: "22 € | 3,5 €" },
      { name: "Costera", price: "22 € | 3,5 €" },
      { name: "Grotta Rossa", price: "25 € | 4 €" },
      { name: "Rocca Rubia", price: "33 € | 5 €" },
      { name: "Be & Mo", price: "33 € | 5 €" },
    ],
  },
  {
    id: "vini-bianchi",
    title: "Vini bianchi",
    items: [
      { name: "Blu Pariglia Crizia", price: "16 €" },
      { name: "Karmis", price: "25 €" },
      { name: "Funtanaliras Oro", price: "30 €" },
      { name: "Tuvaoes", price: "28 €" },
      { name: "Karagnanj", price: "35 €" },
    ],
  },
  {
    id: "bollicine",
    title: "Bollicine",
    items: [
      { name: "Berlucchi", price: "30 € | 5 €" },
      { name: "Akenta", price: "22 € | 4 €" },
      { name: "Mionetto", price: "20 € | 3,5 €" },
      { name: "Ferrari Brut", price: "30 € | 5 €" },
      { name: "Ferrari Perlè", price: "60 € | 9 €" },
      { name: "Bellavista", price: "60 € | 10 €" },
    ],
  },
  {
    id: "digestivi",
    title: "Digestivi & amari",
    items: [
      { name: "Amari", price: "4 €" },
      { name: "Mirto", price: "3,5 €" },
      { name: "Limoncino", price: "3,5 €" },
      { name: "Grappa bianca", price: "4 €" },
      { name: "Grappa barricata", price: "4 €" },
      { name: "Grappa bianca 18 lune", price: "6 €" },
      { name: "Grappa barricata 18 lune", price: "6 €" },
    ],
  },
  {
    id: "caffe",
    title: "Caffè",
    items: [
      { name: "Caffè", price: "1,3 €" },
      { name: "Caffè decafeinato", price: "1,3 €" },
      { name: "Ginseng", price: "1,3 €" },
    ],
  },
  {
    id: "cocktail",
    title: "Cocktail",
    items: [
      { name: "Gin Tonic", price: "6 €" },
      { name: "Gin Tonic Premium", price: "9 €", description: "Tanqueray o Bombay" },
      { name: "Gin Tonic Special", price: "11 €", description: "Gin Mare o Hendrick's" },
      { name: "Vodka Lemon/Tonic", price: "7 €" },
      { name: "Rum & Cola", price: "6 €" },
      { name: "Vodka Red Bull", price: "8 €" },
      { name: "Jack & Cola", price: "7 €" },
      { name: "Jäger & Cola", price: "7 €" },
      { name: "Bloody Mary", price: "6 €" },
      { name: "Negroni", price: "7 €" },
      { name: "Americano", price: "7 €" },
      { name: "Negroni sbagliato", price: "7 €" },
      { name: "Jägerbomb", price: "8 €" },
      { name: "Espresso Martini", price: "7 €" },
      { name: "Long Island", price: "7 €" },
      { name: "Mojito", price: "7 €" },
    ],
  },
]

