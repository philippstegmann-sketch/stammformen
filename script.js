const verbs = [
  {
    "infinitive": "backen",
    "sentence": "Der Bäcker ___ gestern frisches Brot.",
    "preterite": [
      "backte",
      "buk"
    ],
    "participle": [
      "gebacken"
    ],
    "hint": "«buk» ist korrekt, aber heute eher veraltet/gehoben; «backte» ist üblich."
  },
  {
    "infinitive": "befehlen",
    "sentence": "Der Offizier ___ den Rückzug.",
    "preterite": [
      "befahl"
    ],
    "participle": [
      "befohlen"
    ],
    "hint": ""
  },
  {
    "infinitive": "beginnen",
    "sentence": "Der Unterricht ___ um acht Uhr.",
    "preterite": [
      "begann"
    ],
    "participle": [
      "begonnen"
    ],
    "hint": ""
  },
  {
    "infinitive": "beissen",
    "sentence": "Der Hund ___ den Briefträger.",
    "preterite": [
      "biss"
    ],
    "participle": [
      "gebissen"
    ],
    "hint": "Schweizer Schreibweise: «beissen» statt «beißen»."
  },
  {
    "infinitive": "bergen",
    "sentence": "Die Rettungskräfte ___ die Verletzten aus dem Auto.",
    "preterite": [
      "bargen"
    ],
    "participle": [
      "geborgen"
    ],
    "hint": ""
  },
  {
    "infinitive": "bersten",
    "sentence": "Das Glas ___ durch die Hitze.",
    "preterite": [
      "barst"
    ],
    "participle": [
      "geborsten"
    ],
    "hint": ""
  },
  {
    "infinitive": "betrügen",
    "sentence": "Der Händler ___ seine Kunden.",
    "preterite": [
      "betrog"
    ],
    "participle": [
      "betrogen"
    ],
    "hint": ""
  },
  {
    "infinitive": "bewegen",
    "sentence": "Seine Rede ___ viele Menschen.",
    "preterite": [
      "bewegte"
    ],
    "participle": [
      "bewegt"
    ],
    "hint": "Hier bedeutet «bewegen» emotional berühren. Nicht: «bewog» = veranlassen."
  },
  {
    "infinitive": "bewegen",
    "sentence": "Der Trainer ___ ihn zum Weitermachen.",
    "preterite": [
      "bewog"
    ],
    "participle": [
      "bewogen"
    ],
    "hint": "Hier bedeutet «bewegen» veranlassen/überzeugen."
  },
  {
    "infinitive": "biegen",
    "sentence": "Der Fahrer ___ nach links ab.",
    "preterite": [
      "bog"
    ],
    "participle": [
      "gebogen"
    ],
    "hint": ""
  },
  {
    "infinitive": "bieten",
    "sentence": "Die Firma ___ ihm eine Stelle an.",
    "preterite": [
      "bot"
    ],
    "participle": [
      "geboten"
    ],
    "hint": ""
  },
  {
    "infinitive": "binden",
    "sentence": "Sie ___ das Paket mit einer Schnur.",
    "preterite": [
      "band"
    ],
    "participle": [
      "gebunden"
    ],
    "hint": ""
  },
  {
    "infinitive": "bitten",
    "sentence": "Er ___ seine Kollegin um Hilfe.",
    "preterite": [
      "bat"
    ],
    "participle": [
      "gebeten"
    ],
    "hint": ""
  },
  {
    "infinitive": "blasen",
    "sentence": "Der Wind ___ stark durch die Gassen.",
    "preterite": [
      "blies"
    ],
    "participle": [
      "geblasen"
    ],
    "hint": ""
  },
  {
    "infinitive": "bleiben",
    "sentence": "Wir ___ den ganzen Abend zu Hause.",
    "preterite": [
      "blieben"
    ],
    "participle": [
      "geblieben"
    ],
    "hint": ""
  },
  {
    "infinitive": "braten",
    "sentence": "Sie ___ die Kartoffeln in der Pfanne.",
    "preterite": [
      "briet"
    ],
    "participle": [
      "gebraten"
    ],
    "hint": ""
  },
  {
    "infinitive": "brechen",
    "sentence": "Das Kind ___ sich den Arm.",
    "preterite": [
      "brach"
    ],
    "participle": [
      "gebrochen"
    ],
    "hint": ""
  },
  {
    "infinitive": "brennen",
    "sentence": "Die Kerze ___ die ganze Nacht.",
    "preterite": [
      "brannte"
    ],
    "participle": [
      "gebrannt"
    ],
    "hint": ""
  },
  {
    "infinitive": "bringen",
    "sentence": "Er ___ die Unterlagen ins Büro.",
    "preterite": [
      "brachte"
    ],
    "participle": [
      "gebracht"
    ],
    "hint": ""
  },
  {
    "infinitive": "denken",
    "sentence": "Sie ___ lange über die Lösung nach.",
    "preterite": [
      "dachte"
    ],
    "participle": [
      "gedacht"
    ],
    "hint": ""
  },
  {
    "infinitive": "dreschen",
    "sentence": "Die Bauern ___ früher das Getreide von Hand.",
    "preterite": [
      "droschen"
    ],
    "participle": [
      "gedroschen"
    ],
    "hint": ""
  },
  {
    "infinitive": "dringen",
    "sentence": "Wasser ___ in den Keller.",
    "preterite": [
      "drang"
    ],
    "participle": [
      "gedrungen"
    ],
    "hint": ""
  },
  {
    "infinitive": "dürfen",
    "sentence": "Die Lernenden ___ früher gehen.",
    "preterite": [
      "durften"
    ],
    "participle": [
      "gedurft"
    ],
    "hint": ""
  },
  {
    "infinitive": "empfehlen",
    "sentence": "Die Ärztin ___ ihm mehr Bewegung.",
    "preterite": [
      "empfahl"
    ],
    "participle": [
      "empfohlen"
    ],
    "hint": ""
  },
  {
    "infinitive": "erlöschen",
    "sentence": "Das Feuer ___ nach einigen Stunden.",
    "preterite": [
      "erlosch"
    ],
    "participle": [
      "erloschen"
    ],
    "hint": "Intransitiv: Das Feuer erlosch."
  },
  {
    "infinitive": "erschrecken",
    "sentence": "Das Kind ___ wegen des lauten Knalls.",
    "preterite": [
      "erschrak"
    ],
    "participle": [
      "erschrocken"
    ],
    "hint": "Intransitiv: selbst Angst bekommen."
  },
  {
    "infinitive": "erschrecken",
    "sentence": "Der Knall ___ das Kind.",
    "preterite": [
      "erschreckte"
    ],
    "participle": [
      "erschreckt"
    ],
    "hint": "Transitiv: jemanden erschrecken."
  },
  {
    "infinitive": "essen",
    "sentence": "Wir ___ gestern sehr spät.",
    "preterite": [
      "assen",
      "aßen"
    ],
    "participle": [
      "gegessen"
    ],
    "hint": "Schweizer Schreibweise: «assen»; «aßen» ebenfalls akzeptiert."
  },
  {
    "infinitive": "fahren",
    "sentence": "Er ___ mit dem Zug nach Bern.",
    "preterite": [
      "fuhr"
    ],
    "participle": [
      "gefahren"
    ],
    "hint": ""
  },
  {
    "infinitive": "fallen",
    "sentence": "Das Glas ___ vom Tisch.",
    "preterite": [
      "fiel"
    ],
    "participle": [
      "gefallen"
    ],
    "hint": ""
  },
  {
    "infinitive": "fangen",
    "sentence": "Der Torhüter ___ den Ball.",
    "preterite": [
      "fing"
    ],
    "participle": [
      "gefangen"
    ],
    "hint": ""
  },
  {
    "infinitive": "finden",
    "sentence": "Sie ___ den Schlüssel im Auto.",
    "preterite": [
      "fand"
    ],
    "participle": [
      "gefunden"
    ],
    "hint": ""
  },
  {
    "infinitive": "flechten",
    "sentence": "Sie ___ ihrer Tochter einen Zopf.",
    "preterite": [
      "flocht"
    ],
    "participle": [
      "geflochten"
    ],
    "hint": ""
  },
  {
    "infinitive": "fliessen",
    "sentence": "Der Fluss ___ ruhig durch das Tal.",
    "preterite": [
      "floss",
      "floß"
    ],
    "participle": [
      "geflossen"
    ],
    "hint": "Schweizer Schreibweise: «fliessen/floss»; «floß» ebenfalls akzeptiert."
  },
  {
    "infinitive": "fliegen",
    "sentence": "Das Flugzeug ___ über die Alpen.",
    "preterite": [
      "flog"
    ],
    "participle": [
      "geflogen"
    ],
    "hint": ""
  },
  {
    "infinitive": "fliehen",
    "sentence": "Die Katze ___ vor dem Hund.",
    "preterite": [
      "floh"
    ],
    "participle": [
      "geflohen"
    ],
    "hint": ""
  },
  {
    "infinitive": "frieren",
    "sentence": "Wir ___ trotz warmer Jacken.",
    "preterite": [
      "froren"
    ],
    "participle": [
      "gefroren"
    ],
    "hint": ""
  },
  {
    "infinitive": "geben",
    "sentence": "Sie ___ ihm einen guten Rat.",
    "preterite": [
      "gab"
    ],
    "participle": [
      "gegeben"
    ],
    "hint": ""
  },
  {
    "infinitive": "gedeihen",
    "sentence": "Die Pflanzen ___ im milden Klima.",
    "preterite": [
      "gediehen"
    ],
    "participle": [
      "gediehen"
    ],
    "hint": ""
  },
  {
    "infinitive": "gehen",
    "sentence": "Er ___ gestern zu Fuss zur Schule.",
    "preterite": [
      "ging"
    ],
    "participle": [
      "gegangen"
    ],
    "hint": ""
  },
  {
    "infinitive": "gelingen",
    "sentence": "Das Experiment ___ beim zweiten Versuch.",
    "preterite": [
      "gelang"
    ],
    "participle": [
      "gelungen"
    ],
    "hint": ""
  },
  {
    "infinitive": "gelten",
    "sentence": "Diese Regel ___ früher für alle.",
    "preterite": [
      "galt"
    ],
    "participle": [
      "gegolten"
    ],
    "hint": ""
  },
  {
    "infinitive": "genesen",
    "sentence": "Der Patient ___ schneller als erwartet.",
    "preterite": [
      "genas"
    ],
    "participle": [
      "genesen"
    ],
    "hint": ""
  },
  {
    "infinitive": "geniessen",
    "sentence": "Wir ___ die Ferien sehr.",
    "preterite": [
      "genossen"
    ],
    "participle": [
      "genossen"
    ],
    "hint": "Schweizer Schreibweise: «geniessen»."
  },
  {
    "infinitive": "geschehen",
    "sentence": "Das Unglück ___ am frühen Morgen.",
    "preterite": [
      "geschah"
    ],
    "participle": [
      "geschehen"
    ],
    "hint": ""
  },
  {
    "infinitive": "gewinnen",
    "sentence": "Unser Team ___ das Finale.",
    "preterite": [
      "gewann"
    ],
    "participle": [
      "gewonnen"
    ],
    "hint": ""
  },
  {
    "infinitive": "giessen",
    "sentence": "Sie ___ die Blumen jeden Morgen.",
    "preterite": [
      "goss",
      "goß"
    ],
    "participle": [
      "gegossen"
    ],
    "hint": "Schweizer Schreibweise: «giessen/goss»; «goß» ebenfalls akzeptiert."
  },
  {
    "infinitive": "gleichen",
    "sentence": "Das Kind ___ seinem Vater sehr.",
    "preterite": [
      "glich"
    ],
    "participle": [
      "geglichen"
    ],
    "hint": ""
  },
  {
    "infinitive": "gleiten",
    "sentence": "Der Schlitten ___ über den Schnee.",
    "preterite": [
      "glitt"
    ],
    "participle": [
      "geglitten"
    ],
    "hint": ""
  },
  {
    "infinitive": "graben",
    "sentence": "Der Hund ___ ein Loch im Garten.",
    "preterite": [
      "grub"
    ],
    "participle": [
      "gegraben"
    ],
    "hint": ""
  },
  {
    "infinitive": "greifen",
    "sentence": "Sie ___ nach dem Seil.",
    "preterite": [
      "griff"
    ],
    "participle": [
      "gegriffen"
    ],
    "hint": ""
  },
  {
    "infinitive": "haben",
    "sentence": "Wir ___ gestern keine Zeit.",
    "preterite": [
      "hatten"
    ],
    "participle": [
      "gehabt"
    ],
    "hint": ""
  },
  {
    "infinitive": "halten",
    "sentence": "Der Bus ___ an der Haltestelle.",
    "preterite": [
      "hielt"
    ],
    "participle": [
      "gehalten"
    ],
    "hint": ""
  },
  {
    "infinitive": "hängen",
    "sentence": "Das Bild ___ schief an der Wand.",
    "preterite": [
      "hing"
    ],
    "participle": [
      "gehangen"
    ],
    "hint": "Intransitiv: etwas hängt irgendwo."
  },
  {
    "infinitive": "hängen",
    "sentence": "Er ___ das Bild an die Wand.",
    "preterite": [
      "hängte"
    ],
    "participle": [
      "gehängt"
    ],
    "hint": "Transitiv: jemand hängt etwas auf."
  },
  {
    "infinitive": "heben",
    "sentence": "Der Arbeiter ___ die schwere Kiste.",
    "preterite": [
      "hob"
    ],
    "participle": [
      "gehoben"
    ],
    "hint": ""
  },
  {
    "infinitive": "heissen",
    "sentence": "Das Hotel ___ früher «Sternen».",
    "preterite": [
      "hiess",
      "hieß"
    ],
    "participle": [
      "geheissen",
      "geheißen"
    ],
    "hint": "Schweizer Schreibweise: «heissen/hiess/geheissen»."
  },
  {
    "infinitive": "helfen",
    "sentence": "Die Nachbarin ___ uns beim Umzug.",
    "preterite": [
      "half"
    ],
    "participle": [
      "geholfen"
    ],
    "hint": ""
  },
  {
    "infinitive": "kennen",
    "sentence": "Ich ___ die Antwort sofort.",
    "preterite": [
      "kannte"
    ],
    "participle": [
      "gekannt"
    ],
    "hint": ""
  },
  {
    "infinitive": "klingen",
    "sentence": "Die Musik ___ sehr traurig.",
    "preterite": [
      "klang"
    ],
    "participle": [
      "geklungen"
    ],
    "hint": ""
  },
  {
    "infinitive": "kommen",
    "sentence": "Sie ___ pünktlich zum Termin.",
    "preterite": [
      "kam"
    ],
    "participle": [
      "gekommen"
    ],
    "hint": ""
  },
  {
    "infinitive": "können",
    "sentence": "Er ___ die Aufgabe ohne Hilfe lösen.",
    "preterite": [
      "konnte"
    ],
    "participle": [
      "gekonnt"
    ],
    "hint": ""
  },
  {
    "infinitive": "kriechen",
    "sentence": "Die Schnecke ___ über den Weg.",
    "preterite": [
      "kroch"
    ],
    "participle": [
      "gekrochen"
    ],
    "hint": ""
  },
  {
    "infinitive": "laden",
    "sentence": "Er ___ die Kisten ins Auto.",
    "preterite": [
      "lud"
    ],
    "participle": [
      "geladen"
    ],
    "hint": ""
  },
  {
    "infinitive": "lassen",
    "sentence": "Sie ___ die Tür offen.",
    "preterite": [
      "liess",
      "ließ"
    ],
    "participle": [
      "gelassen"
    ],
    "hint": "Schweizer Schreibweise: «liess»; «ließ» ebenfalls akzeptiert."
  },
  {
    "infinitive": "laufen",
    "sentence": "Das Kind ___ schnell nach Hause.",
    "preterite": [
      "lief"
    ],
    "participle": [
      "gelaufen"
    ],
    "hint": ""
  },
  {
    "infinitive": "leiden",
    "sentence": "Viele Menschen ___ unter der Hitze.",
    "preterite": [
      "litten"
    ],
    "participle": [
      "gelitten"
    ],
    "hint": ""
  },
  {
    "infinitive": "leihen",
    "sentence": "Er ___ mir sein Fahrrad.",
    "preterite": [
      "lieh"
    ],
    "participle": [
      "geliehen"
    ],
    "hint": ""
  },
  {
    "infinitive": "lesen",
    "sentence": "Sie ___ den Roman in zwei Tagen.",
    "preterite": [
      "las"
    ],
    "participle": [
      "gelesen"
    ],
    "hint": ""
  },
  {
    "infinitive": "liegen",
    "sentence": "Das Buch ___ auf dem Tisch.",
    "preterite": [
      "lag"
    ],
    "participle": [
      "gelegen"
    ],
    "hint": ""
  },
  {
    "infinitive": "lügen",
    "sentence": "Der Zeuge ___ vor Gericht.",
    "preterite": [
      "log"
    ],
    "participle": [
      "gelogen"
    ],
    "hint": ""
  },
  {
    "infinitive": "meiden",
    "sentence": "Sie ___ die gefährliche Strasse.",
    "preterite": [
      "mied"
    ],
    "participle": [
      "gemieden"
    ],
    "hint": ""
  },
  {
    "infinitive": "melken",
    "sentence": "Der Bauer ___ die Kuh am Morgen.",
    "preterite": [
      "melkte",
      "molk"
    ],
    "participle": [
      "gemolken",
      "gemelkt"
    ],
    "hint": "«molk» und «gemolken» sind traditionell; «melkte/gemelkt» wird ebenfalls verwendet."
  },
  {
    "infinitive": "messen",
    "sentence": "Der Arzt ___ den Blutdruck.",
    "preterite": [
      "mass",
      "maß"
    ],
    "participle": [
      "gemessen"
    ],
    "hint": "Schweizer Schreibweise: «mass»; «maß» ebenfalls akzeptiert."
  },
  {
    "infinitive": "misslingen",
    "sentence": "Der Versuch ___ trotz guter Vorbereitung.",
    "preterite": [
      "misslang"
    ],
    "participle": [
      "misslungen"
    ],
    "hint": ""
  },
  {
    "infinitive": "mögen",
    "sentence": "Als Kind ___ sie keinen Spinat.",
    "preterite": [
      "mochte"
    ],
    "participle": [
      "gemocht"
    ],
    "hint": ""
  },
  {
    "infinitive": "müssen",
    "sentence": "Wir ___ lange warten.",
    "preterite": [
      "mussten",
      "mußten"
    ],
    "participle": [
      "gemusst",
      "gemußt"
    ],
    "hint": "Schweizer Schreibweise: «mussten/gemusst»."
  },
  {
    "infinitive": "nehmen",
    "sentence": "Er ___ den falschen Bus.",
    "preterite": [
      "nahm"
    ],
    "participle": [
      "genommen"
    ],
    "hint": ""
  },
  {
    "infinitive": "nennen",
    "sentence": "Sie ___ ihn einen Helden.",
    "preterite": [
      "nannte"
    ],
    "participle": [
      "genannt"
    ],
    "hint": ""
  },
  {
    "infinitive": "pfeifen",
    "sentence": "Der Schiedsrichter ___ das Spiel ab.",
    "preterite": [
      "pfiff"
    ],
    "participle": [
      "gepfiffen"
    ],
    "hint": ""
  },
  {
    "infinitive": "raten",
    "sentence": "Ich ___ ihm zur Vorsicht.",
    "preterite": [
      "riet"
    ],
    "participle": [
      "geraten"
    ],
    "hint": ""
  },
  {
    "infinitive": "reiben",
    "sentence": "Sie ___ den Käse über die Pasta.",
    "preterite": [
      "rieb"
    ],
    "participle": [
      "gerieben"
    ],
    "hint": ""
  },
  {
    "infinitive": "reissen",
    "sentence": "Das Seil ___ plötzlich.",
    "preterite": [
      "riss",
      "riß"
    ],
    "participle": [
      "gerissen"
    ],
    "hint": "Schweizer Schreibweise: «reissen/riss»."
  },
  {
    "infinitive": "reiten",
    "sentence": "Sie ___ über die Wiese.",
    "preterite": [
      "ritt"
    ],
    "participle": [
      "geritten"
    ],
    "hint": ""
  },
  {
    "infinitive": "rennen",
    "sentence": "Die Kinder ___ zum Bus.",
    "preterite": [
      "rannten"
    ],
    "participle": [
      "gerannt"
    ],
    "hint": ""
  },
  {
    "infinitive": "riechen",
    "sentence": "Die Blumen ___ wunderbar.",
    "preterite": [
      "rochen"
    ],
    "participle": [
      "gerochen"
    ],
    "hint": ""
  },
  {
    "infinitive": "rufen",
    "sentence": "Er ___ laut um Hilfe.",
    "preterite": [
      "rief"
    ],
    "participle": [
      "gerufen"
    ],
    "hint": ""
  },
  {
    "infinitive": "schaffen",
    "sentence": "Der Künstler ___ ein neues Werk.",
    "preterite": [
      "schuf"
    ],
    "participle": [
      "geschaffen"
    ],
    "hint": "Bedeutung: erschaffen."
  },
  {
    "infinitive": "schaffen",
    "sentence": "Sie ___ die Prüfung beim ersten Versuch.",
    "preterite": [
      "schaffte"
    ],
    "participle": [
      "geschafft"
    ],
    "hint": "Bedeutung: bewältigen/erreichen."
  },
  {
    "infinitive": "schiessen",
    "sentence": "Die Spielerin ___ das entscheidende Tor.",
    "preterite": [
      "schoss",
      "schoß"
    ],
    "participle": [
      "geschossen"
    ],
    "hint": "Schweizer Schreibweise: «schiessen/schoss»."
  },
  {
    "infinitive": "schliessen",
    "sentence": "Sie ___ die Tür leise.",
    "preterite": [
      "schloss",
      "schloß"
    ],
    "participle": [
      "geschlossen"
    ],
    "hint": "Schweizer Schreibweise: «schliessen/schloss»."
  },
  {
    "infinitive": "schmelzen",
    "sentence": "Das Eis ___ in der Sonne.",
    "preterite": [
      "schmolz"
    ],
    "participle": [
      "geschmolzen"
    ],
    "hint": "Intransitiv: Eis schmilzt."
  },
  {
    "infinitive": "schmelzen",
    "sentence": "Der Goldschmied ___ das Metall.",
    "preterite": [
      "schmelzte"
    ],
    "participle": [
      "geschmelzt"
    ],
    "hint": "Transitiv: jemand schmilzt etwas; hier wird die schwache Form geübt."
  },
  {
    "infinitive": "senden",
    "sentence": "Der Journalist ___ den Bericht am Abend.",
    "preterite": [
      "sendete",
      "sandte"
    ],
    "participle": [
      "gesendet",
      "gesandt"
    ],
    "hint": "«sandte/gesandt» wirkt formeller; «sendete/gesendet» ist sehr gebräuchlich."
  },
  {
    "infinitive": "wiegen",
    "sentence": "Das Paket ___ drei Kilo.",
    "preterite": [
      "wog"
    ],
    "participle": [
      "gewogen"
    ],
    "hint": "Bedeutung: Gewicht haben."
  },
  {
    "infinitive": "wiegen",
    "sentence": "Die Mutter ___ das Kind in den Schlaf.",
    "preterite": [
      "wiegte"
    ],
    "participle": [
      "gewiegt"
    ],
    "hint": "Bedeutung: hin und her bewegen."
  }
];

let state = JSON.parse(localStorage.getItem("missionStammformenStateV2")) || {
  score: 0,
  streak: 0,
  totalForms: 0,
  correctForms: 0,
  xp: 0,
  level: 1
};

let currentTask = null;
let answerAlreadyChecked = false;
let currentMode = "both";

const $ = (id) => document.getElementById(id);

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[’`´]/g, "'")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, " ");
}

function normalizeList(list) {
  return list.map(item => normalize(item));
}

function chooseMode() {
  const selected = $("modeSelect").value;
  if (selected === "mixed") {
    const modes = ["both", "preterite", "participle"];
    return modes[Math.floor(Math.random() * modes.length)];
  }
  return selected;
}

function newTask() {
  currentMode = chooseMode();
  currentTask = verbs[Math.floor(Math.random() * verbs.length)];
  answerAlreadyChecked = false;

  $("infinitive").textContent = currentTask.infinitive;
  $("sentence").textContent = currentTask.sentence;
  $("preteriteInput").value = "";
  $("participleInput").value = "";
  $("feedback").className = "feedback";
  $("feedback").textContent = "Gib die Form(en) ein und drücke Enter.";
  $("hint").className = "hint";
  $("hint").textContent = "";

  $("preteriteBox").classList.toggle("hidden", currentMode === "participle");
  $("participleBox").classList.toggle("hidden", currentMode === "preterite");

  if (currentMode === "participle") {
    $("participleInput").focus();
  } else {
    $("preteriteInput").focus();
  }
}

function updateStats() {
  $("score").textContent = state.score;
  $("streak").textContent = state.streak;
  $("level").textContent = state.level;

  const accuracy = state.totalForms === 0 ? 0 : Math.round((state.correctForms / state.totalForms) * 100);
  $("accuracy").textContent = accuracy + "%";

  $("xpText").textContent = `${state.xp} / 100 XP`;
  $("xpBar").style.width = state.xp + "%";

  localStorage.setItem("missionStammformenStateV2", JSON.stringify(state));
}

function addXp(points) {
  state.xp += points;
  while (state.xp >= 100) {
    state.xp -= 100;
    state.level += 1;
  }
}

function formatSolutions(list) {
  return list.join(" / ");
}

function checkAnswer() {
  if (!currentTask || answerAlreadyChecked) return;

  let possible = 0;
  let correct = 0;
  let details = [];

  if (currentMode === "both" || currentMode === "preterite") {
    possible += 1;
    const answer = normalize($("preteriteInput").value);
    const accepted = normalizeList(currentTask.preterite);
    if (answer && accepted.includes(answer)) {
      correct += 1;
      details.push("Präteritum richtig");
    } else {
      details.push(`Präteritum: ${formatSolutions(currentTask.preterite)}`);
    }
  }

  if (currentMode === "both" || currentMode === "participle") {
    possible += 1;
    const answer = normalize($("participleInput").value);
    const accepted = normalizeList(currentTask.participle);
    if (answer && accepted.includes(answer)) {
      correct += 1;
      details.push("Partizip II richtig");
    } else {
      details.push(`Partizip II: ${formatSolutions(currentTask.participle)}`);
    }
  }

  answerAlreadyChecked = true;
  state.totalForms += possible;
  state.correctForms += correct;
  state.score += correct;
  addXp(correct);

  if (correct === possible) {
    state.streak += 1;
    $("feedback").className = "feedback good";
    $("feedback").textContent = `Perfekt! +${correct} Punkt(e). Enter = nächste Frage.`;
  } else {
    state.streak = 0;
    $("feedback").className = "feedback bad";
    $("feedback").textContent = `${correct} von ${possible} richtig. ${details.join(" · ")}. Enter = nächste Frage.`;
  }

  if (currentTask.hint) {
    $("hint").textContent = currentTask.hint;
    $("hint").className = "hint visible";
  }

  updateStats();
}

$("answerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (answerAlreadyChecked) {
    newTask();
  } else {
    checkAnswer();
  }
});

$("newTaskBtn").addEventListener("click", newTask);

$("showSolutionBtn").addEventListener("click", () => {
  if (!currentTask) return;
  answerAlreadyChecked = true;

  const parts = [];
  if (currentMode === "both" || currentMode === "preterite") {
    parts.push(`Präteritum: ${formatSolutions(currentTask.preterite)}`);
  }
  if (currentMode === "both" || currentMode === "participle") {
    parts.push(`Partizip II: ${formatSolutions(currentTask.participle)}`);
  }

  $("feedback").className = "feedback";
  $("feedback").textContent = `Lösung: ${parts.join(" · ")}. Enter = nächste Frage.`;

  if (currentTask.hint) {
    $("hint").textContent = currentTask.hint;
    $("hint").className = "hint visible";
  }
});

$("resetBtn").addEventListener("click", () => {
  state = {
    score: 0,
    streak: 0,
    totalForms: 0,
    correctForms: 0,
    xp: 0,
    level: 1
  };
  updateStats();
  newTask();
});

$("modeSelect").addEventListener("change", newTask);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && document.activeElement.tagName !== "BUTTON") {
    // Das Formular übernimmt Enter in den Eingabefeldern.
    // Diese Zeile verhindert kein normales Tippen, sorgt aber für sauberes Verhalten.
  }
});

updateStats();
newTask();
