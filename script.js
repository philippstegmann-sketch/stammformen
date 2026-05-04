const verbs = [
  {
    "infinitive": "backen",
    "preterite": [
      "backte",
      "buk"
    ],
    "participle": [
      "gebacken"
    ],
    "hint": "«buk» ist korrekt, aber heute eher veraltet/gehoben; «backte» ist üblich.",
    "sentencePreterite": "Der Bäcker ___ gestern frisches Brot.",
    "sentencePerfect": "Der Bäcker hat gestern frisches Brot ___."
  },
  {
    "infinitive": "befehlen",
    "preterite": [
      "befahl"
    ],
    "participle": [
      "befohlen"
    ],
    "hint": "",
    "sentencePreterite": "Der Offizier ___ den Rückzug.",
    "sentencePerfect": "Der Offizier hat den Rückzug ___."
  },
  {
    "infinitive": "beginnen",
    "preterite": [
      "begann"
    ],
    "participle": [
      "begonnen"
    ],
    "hint": "",
    "sentencePreterite": "Der Unterricht ___ um acht Uhr.",
    "sentencePerfect": "Der Unterricht hat um acht Uhr ___."
  },
  {
    "infinitive": "beissen",
    "preterite": [
      "biss"
    ],
    "participle": [
      "gebissen"
    ],
    "hint": "Schweizer Schreibweise: «beissen» statt «beißen».",
    "sentencePreterite": "Der Hund ___ den Briefträger.",
    "sentencePerfect": "Der Hund hat den Briefträger ___."
  },
  {
    "infinitive": "bergen",
    "preterite": [
      "bargen"
    ],
    "participle": [
      "geborgen"
    ],
    "hint": "",
    "sentencePreterite": "Die Rettungskräfte ___ die Verletzten aus dem Auto.",
    "sentencePerfect": "Die Rettungskräfte haben die Verletzten aus dem Auto ___."
  },
  {
    "infinitive": "bersten",
    "preterite": [
      "barst"
    ],
    "participle": [
      "geborsten"
    ],
    "hint": "",
    "sentencePreterite": "Das Glas ___ durch die Hitze.",
    "sentencePerfect": "Das Glas ist durch die Hitze ___."
  },
  {
    "infinitive": "betrügen",
    "preterite": [
      "betrog"
    ],
    "participle": [
      "betrogen"
    ],
    "hint": "",
    "sentencePreterite": "Der Händler ___ seine Kunden.",
    "sentencePerfect": "Der Händler hat seine Kunden ___."
  },
  {
    "infinitive": "bewegen",
    "preterite": [
      "bewegte"
    ],
    "participle": [
      "bewegt"
    ],
    "hint": "Hier bedeutet «bewegen» emotional berühren. Nicht: «bewog» = veranlassen.",
    "sentencePreterite": "Seine Rede ___ viele Menschen.",
    "sentencePerfect": "Seine Rede hat viele Menschen ___."
  },
  {
    "infinitive": "bewegen",
    "preterite": [
      "bewog"
    ],
    "participle": [
      "bewogen"
    ],
    "hint": "Hier bedeutet «bewegen» veranlassen/überzeugen.",
    "sentencePreterite": "Der Trainer ___ ihn zum Weitermachen.",
    "sentencePerfect": "Der Trainer hat ihn zum Weitermachen ___."
  },
  {
    "infinitive": "biegen",
    "preterite": [
      "bog"
    ],
    "participle": [
      "gebogen"
    ],
    "hint": "",
    "sentencePreterite": "Der Fahrer ___ nach links ab.",
    "sentencePerfect": "Der Fahrer hat nach links ab ___."
  },
  {
    "infinitive": "bieten",
    "preterite": [
      "bot"
    ],
    "participle": [
      "geboten"
    ],
    "hint": "",
    "sentencePreterite": "Die Firma ___ ihm eine Stelle an.",
    "sentencePerfect": "Die Firma hat ihm eine Stelle an ___."
  },
  {
    "infinitive": "binden",
    "preterite": [
      "band"
    ],
    "participle": [
      "gebunden"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ das Paket mit einer Schnur.",
    "sentencePerfect": "Sie hat das Paket mit einer Schnur ___."
  },
  {
    "infinitive": "bitten",
    "preterite": [
      "bat"
    ],
    "participle": [
      "gebeten"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ seine Kollegin um Hilfe.",
    "sentencePerfect": "Er hat seine Kollegin um Hilfe ___."
  },
  {
    "infinitive": "blasen",
    "preterite": [
      "blies"
    ],
    "participle": [
      "geblasen"
    ],
    "hint": "",
    "sentencePreterite": "Der Wind ___ stark durch die Gassen.",
    "sentencePerfect": "Der Wind hat stark durch die Gassen ___."
  },
  {
    "infinitive": "bleiben",
    "preterite": [
      "blieben"
    ],
    "participle": [
      "geblieben"
    ],
    "hint": "",
    "sentencePreterite": "Wir ___ den ganzen Abend zu Hause.",
    "sentencePerfect": "Wir sind den ganzen Abend zu Hause ___."
  },
  {
    "infinitive": "braten",
    "preterite": [
      "briet"
    ],
    "participle": [
      "gebraten"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ die Kartoffeln in der Pfanne.",
    "sentencePerfect": "Sie hat die Kartoffeln in der Pfanne ___."
  },
  {
    "infinitive": "brechen",
    "preterite": [
      "brach"
    ],
    "participle": [
      "gebrochen"
    ],
    "hint": "",
    "sentencePreterite": "Das Kind ___ sich den Arm.",
    "sentencePerfect": "Das Kind hat sich den Arm ___."
  },
  {
    "infinitive": "brennen",
    "preterite": [
      "brannte"
    ],
    "participle": [
      "gebrannt"
    ],
    "hint": "",
    "sentencePreterite": "Die Kerze ___ die ganze Nacht.",
    "sentencePerfect": "Die Kerze hat die ganze Nacht ___."
  },
  {
    "infinitive": "bringen",
    "preterite": [
      "brachte"
    ],
    "participle": [
      "gebracht"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ die Unterlagen ins Büro.",
    "sentencePerfect": "Er hat die Unterlagen ins Büro ___."
  },
  {
    "infinitive": "denken",
    "preterite": [
      "dachte"
    ],
    "participle": [
      "gedacht"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ lange über die Lösung nach.",
    "sentencePerfect": "Sie hat lange über die Lösung nach ___."
  },
  {
    "infinitive": "dreschen",
    "preterite": [
      "droschen"
    ],
    "participle": [
      "gedroschen"
    ],
    "hint": "",
    "sentencePreterite": "Die Bauern ___ früher das Getreide von Hand.",
    "sentencePerfect": "Die Bauern haben früher das Getreide von Hand ___."
  },
  {
    "infinitive": "dringen",
    "preterite": [
      "drang"
    ],
    "participle": [
      "gedrungen"
    ],
    "hint": "",
    "sentencePreterite": "Wasser ___ in den Keller.",
    "sentencePerfect": "Wasser ist in den Keller ___."
  },
  {
    "infinitive": "dürfen",
    "preterite": [
      "durften"
    ],
    "participle": [
      "gedurft"
    ],
    "hint": "",
    "sentencePreterite": "Die Lernenden ___ früher gehen.",
    "sentencePerfect": "Die Lernenden haben früher gehen ___."
  },
  {
    "infinitive": "empfehlen",
    "preterite": [
      "empfahl"
    ],
    "participle": [
      "empfohlen"
    ],
    "hint": "",
    "sentencePreterite": "Die Ärztin ___ ihm mehr Bewegung.",
    "sentencePerfect": "Die Ärztin hat ihm mehr Bewegung ___."
  },
  {
    "infinitive": "erlöschen",
    "preterite": [
      "erlosch"
    ],
    "participle": [
      "erloschen"
    ],
    "hint": "Intransitiv: Das Feuer erlosch.",
    "sentencePreterite": "Das Feuer ___ nach einigen Stunden.",
    "sentencePerfect": "Das Feuer ist nach einigen Stunden ___."
  },
  {
    "infinitive": "erschrecken",
    "preterite": [
      "erschrak"
    ],
    "participle": [
      "erschrocken"
    ],
    "hint": "Intransitiv: selbst Angst bekommen.",
    "sentencePreterite": "Das Kind ___ wegen des lauten Knalls.",
    "sentencePerfect": "Das Kind ist wegen des lauten Knalls ___."
  },
  {
    "infinitive": "erschrecken",
    "preterite": [
      "erschreckte"
    ],
    "participle": [
      "erschreckt"
    ],
    "hint": "Transitiv: jemanden erschrecken.",
    "sentencePreterite": "Der Knall ___ das Kind.",
    "sentencePerfect": "Der Knall hat das Kind ___."
  },
  {
    "infinitive": "essen",
    "preterite": [
      "assen",
      "aßen"
    ],
    "participle": [
      "gegessen"
    ],
    "hint": "Schweizer Schreibweise: «assen»; «aßen» ebenfalls akzeptiert.",
    "sentencePreterite": "Wir ___ gestern sehr spät.",
    "sentencePerfect": "Wir haben gestern sehr spät ___."
  },
  {
    "infinitive": "fahren",
    "preterite": [
      "fuhr"
    ],
    "participle": [
      "gefahren"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ mit dem Zug nach Bern.",
    "sentencePerfect": "Er ist mit dem Zug nach Bern ___."
  },
  {
    "infinitive": "fallen",
    "preterite": [
      "fiel"
    ],
    "participle": [
      "gefallen"
    ],
    "hint": "",
    "sentencePreterite": "Das Glas ___ vom Tisch.",
    "sentencePerfect": "Das Glas ist vom Tisch ___."
  },
  {
    "infinitive": "fangen",
    "preterite": [
      "fing"
    ],
    "participle": [
      "gefangen"
    ],
    "hint": "",
    "sentencePreterite": "Der Torhüter ___ den Ball.",
    "sentencePerfect": "Der Torhüter hat den Ball ___."
  },
  {
    "infinitive": "finden",
    "preterite": [
      "fand"
    ],
    "participle": [
      "gefunden"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ den Schlüssel im Auto.",
    "sentencePerfect": "Sie hat den Schlüssel im Auto ___."
  },
  {
    "infinitive": "flechten",
    "preterite": [
      "flocht"
    ],
    "participle": [
      "geflochten"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ ihrer Tochter einen Zopf.",
    "sentencePerfect": "Sie hat ihrer Tochter einen Zopf ___."
  },
  {
    "infinitive": "fliessen",
    "preterite": [
      "floss",
      "floß"
    ],
    "participle": [
      "geflossen"
    ],
    "hint": "Schweizer Schreibweise: «fliessen/floss»; «floß» ebenfalls akzeptiert.",
    "sentencePreterite": "Der Fluss ___ ruhig durch das Tal.",
    "sentencePerfect": "Der Fluss ist ruhig durch das Tal ___."
  },
  {
    "infinitive": "fliegen",
    "preterite": [
      "flog"
    ],
    "participle": [
      "geflogen"
    ],
    "hint": "",
    "sentencePreterite": "Das Flugzeug ___ über die Alpen.",
    "sentencePerfect": "Das Flugzeug ist über die Alpen ___."
  },
  {
    "infinitive": "fliehen",
    "preterite": [
      "floh"
    ],
    "participle": [
      "geflohen"
    ],
    "hint": "",
    "sentencePreterite": "Die Katze ___ vor dem Hund.",
    "sentencePerfect": "Die Katze ist vor dem Hund ___."
  },
  {
    "infinitive": "frieren",
    "preterite": [
      "froren"
    ],
    "participle": [
      "gefroren"
    ],
    "hint": "",
    "sentencePreterite": "Wir ___ trotz warmer Jacken.",
    "sentencePerfect": "Wir haben trotz warmer Jacken ___."
  },
  {
    "infinitive": "geben",
    "preterite": [
      "gab"
    ],
    "participle": [
      "gegeben"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ ihm einen guten Rat.",
    "sentencePerfect": "Sie hat ihm einen guten Rat ___."
  },
  {
    "infinitive": "gedeihen",
    "preterite": [
      "gediehen"
    ],
    "participle": [
      "gediehen"
    ],
    "hint": "",
    "sentencePreterite": "Die Pflanzen ___ im milden Klima.",
    "sentencePerfect": "Die Pflanzen haben im milden Klima ___."
  },
  {
    "infinitive": "gehen",
    "preterite": [
      "ging"
    ],
    "participle": [
      "gegangen"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ gestern zu Fuss zur Schule.",
    "sentencePerfect": "Er ist gestern zu Fuss zur Schule ___."
  },
  {
    "infinitive": "gelingen",
    "preterite": [
      "gelang"
    ],
    "participle": [
      "gelungen"
    ],
    "hint": "",
    "sentencePreterite": "Das Experiment ___ beim zweiten Versuch.",
    "sentencePerfect": "Das Experiment ist beim zweiten Versuch ___."
  },
  {
    "infinitive": "gelten",
    "preterite": [
      "galt"
    ],
    "participle": [
      "gegolten"
    ],
    "hint": "",
    "sentencePreterite": "Diese Regel ___ früher für alle.",
    "sentencePerfect": "Diese Regel hat früher für alle ___."
  },
  {
    "infinitive": "genesen",
    "preterite": [
      "genas"
    ],
    "participle": [
      "genesen"
    ],
    "hint": "",
    "sentencePreterite": "Der Patient ___ schneller als erwartet.",
    "sentencePerfect": "Der Patient ist schneller als erwartet ___."
  },
  {
    "infinitive": "geniessen",
    "preterite": [
      "genossen"
    ],
    "participle": [
      "genossen"
    ],
    "hint": "Schweizer Schreibweise: «geniessen».",
    "sentencePreterite": "Wir ___ die Ferien sehr.",
    "sentencePerfect": "Wir haben die Ferien sehr ___."
  },
  {
    "infinitive": "geschehen",
    "preterite": [
      "geschah"
    ],
    "participle": [
      "geschehen"
    ],
    "hint": "",
    "sentencePreterite": "Das Unglück ___ am frühen Morgen.",
    "sentencePerfect": "Das Unglück ist am frühen Morgen ___."
  },
  {
    "infinitive": "gewinnen",
    "preterite": [
      "gewann"
    ],
    "participle": [
      "gewonnen"
    ],
    "hint": "",
    "sentencePreterite": "Unser Team ___ das Finale.",
    "sentencePerfect": "Unser Team hat das Finale ___."
  },
  {
    "infinitive": "giessen",
    "preterite": [
      "goss",
      "goß"
    ],
    "participle": [
      "gegossen"
    ],
    "hint": "Schweizer Schreibweise: «giessen/goss»; «goß» ebenfalls akzeptiert.",
    "sentencePreterite": "Sie ___ die Blumen jeden Morgen.",
    "sentencePerfect": "Sie hat die Blumen jeden Morgen ___."
  },
  {
    "infinitive": "gleichen",
    "preterite": [
      "glich"
    ],
    "participle": [
      "geglichen"
    ],
    "hint": "",
    "sentencePreterite": "Das Kind ___ seinem Vater sehr.",
    "sentencePerfect": "Das Kind hat seinem Vater sehr ___."
  },
  {
    "infinitive": "gleiten",
    "preterite": [
      "glitt"
    ],
    "participle": [
      "geglitten"
    ],
    "hint": "",
    "sentencePreterite": "Der Schlitten ___ über den Schnee.",
    "sentencePerfect": "Der Schlitten ist über den Schnee ___."
  },
  {
    "infinitive": "graben",
    "preterite": [
      "grub"
    ],
    "participle": [
      "gegraben"
    ],
    "hint": "",
    "sentencePreterite": "Der Hund ___ ein Loch im Garten.",
    "sentencePerfect": "Der Hund hat ein Loch im Garten ___."
  },
  {
    "infinitive": "greifen",
    "preterite": [
      "griff"
    ],
    "participle": [
      "gegriffen"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ nach dem Seil.",
    "sentencePerfect": "Sie hat nach dem Seil ___."
  },
  {
    "infinitive": "haben",
    "preterite": [
      "hatten"
    ],
    "participle": [
      "gehabt"
    ],
    "hint": "",
    "sentencePreterite": "Wir ___ gestern keine Zeit.",
    "sentencePerfect": "Wir haben gestern keine Zeit ___."
  },
  {
    "infinitive": "halten",
    "preterite": [
      "hielt"
    ],
    "participle": [
      "gehalten"
    ],
    "hint": "",
    "sentencePreterite": "Der Bus ___ an der Haltestelle.",
    "sentencePerfect": "Der Bus hat an der Haltestelle ___."
  },
  {
    "infinitive": "hängen",
    "preterite": [
      "hing"
    ],
    "participle": [
      "gehangen"
    ],
    "hint": "Intransitiv: etwas hängt irgendwo.",
    "sentencePreterite": "Das Bild ___ schief an der Wand.",
    "sentencePerfect": "Das Bild hat schief an der Wand ___."
  },
  {
    "infinitive": "hängen",
    "preterite": [
      "hängte"
    ],
    "participle": [
      "gehängt"
    ],
    "hint": "Transitiv: jemand hängt etwas auf.",
    "sentencePreterite": "Er ___ das Bild an die Wand.",
    "sentencePerfect": "Er hat das Bild an die Wand ___."
  },
  {
    "infinitive": "heben",
    "preterite": [
      "hob"
    ],
    "participle": [
      "gehoben"
    ],
    "hint": "",
    "sentencePreterite": "Der Arbeiter ___ die schwere Kiste.",
    "sentencePerfect": "Der Arbeiter hat die schwere Kiste ___."
  },
  {
    "infinitive": "heissen",
    "preterite": [
      "hiess",
      "hieß"
    ],
    "participle": [
      "geheissen",
      "geheißen"
    ],
    "hint": "Schweizer Schreibweise: «heissen/hiess/geheissen».",
    "sentencePreterite": "Das Hotel ___ früher «Sternen».",
    "sentencePerfect": "Das Hotel hat früher «Sternen» ___."
  },
  {
    "infinitive": "helfen",
    "preterite": [
      "half"
    ],
    "participle": [
      "geholfen"
    ],
    "hint": "",
    "sentencePreterite": "Die Nachbarin ___ uns beim Umzug.",
    "sentencePerfect": "Die Nachbarin hat uns beim Umzug ___."
  },
  {
    "infinitive": "kennen",
    "preterite": [
      "kannte"
    ],
    "participle": [
      "gekannt"
    ],
    "hint": "",
    "sentencePreterite": "Ich ___ die Antwort sofort.",
    "sentencePerfect": "Ich hat die Antwort sofort ___."
  },
  {
    "infinitive": "klingen",
    "preterite": [
      "klang"
    ],
    "participle": [
      "geklungen"
    ],
    "hint": "",
    "sentencePreterite": "Die Musik ___ sehr traurig.",
    "sentencePerfect": "Die Musik hat sehr traurig ___."
  },
  {
    "infinitive": "kommen",
    "preterite": [
      "kam"
    ],
    "participle": [
      "gekommen"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ pünktlich zum Termin.",
    "sentencePerfect": "Sie sind pünktlich zum Termin ___."
  },
  {
    "infinitive": "können",
    "preterite": [
      "konnte"
    ],
    "participle": [
      "gekonnt"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ die Aufgabe ohne Hilfe lösen.",
    "sentencePerfect": "Er hat die Aufgabe ohne Hilfe lösen ___."
  },
  {
    "infinitive": "kriechen",
    "preterite": [
      "kroch"
    ],
    "participle": [
      "gekrochen"
    ],
    "hint": "",
    "sentencePreterite": "Die Schnecke ___ über den Weg.",
    "sentencePerfect": "Die Schnecke hat über den Weg ___."
  },
  {
    "infinitive": "laden",
    "preterite": [
      "lud"
    ],
    "participle": [
      "geladen"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ die Kisten ins Auto.",
    "sentencePerfect": "Er hat die Kisten ins Auto ___."
  },
  {
    "infinitive": "lassen",
    "preterite": [
      "liess",
      "ließ"
    ],
    "participle": [
      "gelassen"
    ],
    "hint": "Schweizer Schreibweise: «liess»; «ließ» ebenfalls akzeptiert.",
    "sentencePreterite": "Sie ___ die Tür offen.",
    "sentencePerfect": "Sie hat die Tür offen ___."
  },
  {
    "infinitive": "laufen",
    "preterite": [
      "lief"
    ],
    "participle": [
      "gelaufen"
    ],
    "hint": "",
    "sentencePreterite": "Das Kind ___ schnell nach Hause.",
    "sentencePerfect": "Das Kind ist schnell nach Hause ___."
  },
  {
    "infinitive": "leiden",
    "preterite": [
      "litten"
    ],
    "participle": [
      "gelitten"
    ],
    "hint": "",
    "sentencePreterite": "Viele Menschen ___ unter der Hitze.",
    "sentencePerfect": "Viele Menschen haben unter der Hitze ___."
  },
  {
    "infinitive": "leihen",
    "preterite": [
      "lieh"
    ],
    "participle": [
      "geliehen"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ mir sein Fahrrad.",
    "sentencePerfect": "Er hat mir sein Fahrrad ___."
  },
  {
    "infinitive": "lesen",
    "preterite": [
      "las"
    ],
    "participle": [
      "gelesen"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ den Roman in zwei Tagen.",
    "sentencePerfect": "Sie hat den Roman in zwei Tagen ___."
  },
  {
    "infinitive": "liegen",
    "preterite": [
      "lag"
    ],
    "participle": [
      "gelegen"
    ],
    "hint": "",
    "sentencePreterite": "Das Buch ___ auf dem Tisch.",
    "sentencePerfect": "Das Buch hat auf dem Tisch ___."
  },
  {
    "infinitive": "lügen",
    "preterite": [
      "log"
    ],
    "participle": [
      "gelogen"
    ],
    "hint": "",
    "sentencePreterite": "Der Zeuge ___ vor Gericht.",
    "sentencePerfect": "Der Zeuge hat vor Gericht ___."
  },
  {
    "infinitive": "meiden",
    "preterite": [
      "mied"
    ],
    "participle": [
      "gemieden"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ die gefährliche Strasse.",
    "sentencePerfect": "Sie hat die gefährliche Strasse ___."
  },
  {
    "infinitive": "melken",
    "preterite": [
      "melkte",
      "molk"
    ],
    "participle": [
      "gemolken",
      "gemelkt"
    ],
    "hint": "«molk» und «gemolken» sind traditionell; «melkte/gemelkt» wird ebenfalls verwendet.",
    "sentencePreterite": "Der Bauer ___ die Kuh am Morgen.",
    "sentencePerfect": "Der Bauer hat die Kuh am Morgen ___."
  },
  {
    "infinitive": "messen",
    "preterite": [
      "mass",
      "maß"
    ],
    "participle": [
      "gemessen"
    ],
    "hint": "Schweizer Schreibweise: «mass»; «maß» ebenfalls akzeptiert.",
    "sentencePreterite": "Der Arzt ___ den Blutdruck.",
    "sentencePerfect": "Der Arzt hat den Blutdruck ___."
  },
  {
    "infinitive": "misslingen",
    "preterite": [
      "misslang"
    ],
    "participle": [
      "misslungen"
    ],
    "hint": "",
    "sentencePreterite": "Der Versuch ___ trotz guter Vorbereitung.",
    "sentencePerfect": "Der Versuch ist trotz guter Vorbereitung ___."
  },
  {
    "infinitive": "mögen",
    "preterite": [
      "mochte"
    ],
    "participle": [
      "gemocht"
    ],
    "hint": "",
    "sentencePreterite": "Als Kind ___ sie keinen Spinat.",
    "sentencePerfect": "Als Kind hat sie keinen Spinat ___."
  },
  {
    "infinitive": "müssen",
    "preterite": [
      "mussten",
      "mußten"
    ],
    "participle": [
      "gemusst",
      "gemußt"
    ],
    "hint": "Schweizer Schreibweise: «mussten/gemusst».",
    "sentencePreterite": "Wir ___ lange warten.",
    "sentencePerfect": "Wir haben lange warten ___."
  },
  {
    "infinitive": "nehmen",
    "preterite": [
      "nahm"
    ],
    "participle": [
      "genommen"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ den falschen Bus.",
    "sentencePerfect": "Er hat den falschen Bus ___."
  },
  {
    "infinitive": "nennen",
    "preterite": [
      "nannte"
    ],
    "participle": [
      "genannt"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ ihn einen Helden.",
    "sentencePerfect": "Sie hat ihn einen Helden ___."
  },
  {
    "infinitive": "pfeifen",
    "preterite": [
      "pfiff"
    ],
    "participle": [
      "gepfiffen"
    ],
    "hint": "",
    "sentencePreterite": "Der Schiedsrichter ___ das Spiel ab.",
    "sentencePerfect": "Der Schiedsrichter hat das Spiel ab ___."
  },
  {
    "infinitive": "raten",
    "preterite": [
      "riet"
    ],
    "participle": [
      "geraten"
    ],
    "hint": "",
    "sentencePreterite": "Ich ___ ihm zur Vorsicht.",
    "sentencePerfect": "Ich hat ihm zur Vorsicht ___."
  },
  {
    "infinitive": "reiben",
    "preterite": [
      "rieb"
    ],
    "participle": [
      "gerieben"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ den Käse über die Pasta.",
    "sentencePerfect": "Sie hat den Käse über die Pasta ___."
  },
  {
    "infinitive": "reissen",
    "preterite": [
      "riss",
      "riß"
    ],
    "participle": [
      "gerissen"
    ],
    "hint": "Schweizer Schreibweise: «reissen/riss».",
    "sentencePreterite": "Das Seil ___ plötzlich.",
    "sentencePerfect": "Das Seil hat plötzlich ___."
  },
  {
    "infinitive": "reiten",
    "preterite": [
      "ritt"
    ],
    "participle": [
      "geritten"
    ],
    "hint": "",
    "sentencePreterite": "Sie ___ über die Wiese.",
    "sentencePerfect": "Sie sind über die Wiese ___."
  },
  {
    "infinitive": "rennen",
    "preterite": [
      "rannten"
    ],
    "participle": [
      "gerannt"
    ],
    "hint": "",
    "sentencePreterite": "Die Kinder ___ zum Bus.",
    "sentencePerfect": "Die Kinder haben zum Bus ___."
  },
  {
    "infinitive": "riechen",
    "preterite": [
      "rochen"
    ],
    "participle": [
      "gerochen"
    ],
    "hint": "",
    "sentencePreterite": "Die Blumen ___ wunderbar.",
    "sentencePerfect": "Die Blumen hat wunderbar ___."
  },
  {
    "infinitive": "rufen",
    "preterite": [
      "rief"
    ],
    "participle": [
      "gerufen"
    ],
    "hint": "",
    "sentencePreterite": "Er ___ laut um Hilfe.",
    "sentencePerfect": "Er hat laut um Hilfe ___."
  },
  {
    "infinitive": "schaffen",
    "preterite": [
      "schuf"
    ],
    "participle": [
      "geschaffen"
    ],
    "hint": "Bedeutung: erschaffen.",
    "sentencePreterite": "Der Künstler ___ ein neues Werk.",
    "sentencePerfect": "Der Künstler hat ein neues Werk ___."
  },
  {
    "infinitive": "schaffen",
    "preterite": [
      "schaffte"
    ],
    "participle": [
      "geschafft"
    ],
    "hint": "Bedeutung: bewältigen/erreichen.",
    "sentencePreterite": "Sie ___ die Prüfung beim ersten Versuch.",
    "sentencePerfect": "Sie hat die Prüfung beim ersten Versuch ___."
  },
  {
    "infinitive": "schiessen",
    "preterite": [
      "schoss",
      "schoß"
    ],
    "participle": [
      "geschossen"
    ],
    "hint": "Schweizer Schreibweise: «schiessen/schoss».",
    "sentencePreterite": "Die Spielerin ___ das entscheidende Tor.",
    "sentencePerfect": "Die Spielerin hat das entscheidende Tor ___."
  },
  {
    "infinitive": "schliessen",
    "preterite": [
      "schloss",
      "schloß"
    ],
    "participle": [
      "geschlossen"
    ],
    "hint": "Schweizer Schreibweise: «schliessen/schloss».",
    "sentencePreterite": "Sie ___ die Tür leise.",
    "sentencePerfect": "Sie hat die Tür leise ___."
  },
  {
    "infinitive": "schmelzen",
    "preterite": [
      "schmolz"
    ],
    "participle": [
      "geschmolzen"
    ],
    "hint": "Intransitiv: Eis schmilzt.",
    "sentencePreterite": "Das Eis ___ in der Sonne.",
    "sentencePerfect": "Das Eis hat in der Sonne ___."
  },
  {
    "infinitive": "schmelzen",
    "preterite": [
      "schmelzte"
    ],
    "participle": [
      "geschmelzt"
    ],
    "hint": "Transitiv: jemand schmilzt etwas; hier wird die schwache Form geübt.",
    "sentencePreterite": "Der Goldschmied ___ das Metall.",
    "sentencePerfect": "Der Goldschmied hat das Metall ___."
  },
  {
    "infinitive": "senden",
    "preterite": [
      "sendete",
      "sandte"
    ],
    "participle": [
      "gesendet",
      "gesandt"
    ],
    "hint": "«sandte/gesandt» wirkt formeller; «sendete/gesendet» ist sehr gebräuchlich.",
    "sentencePreterite": "Der Journalist ___ den Bericht am Abend.",
    "sentencePerfect": "Der Journalist hat den Bericht am Abend ___."
  },
  {
    "infinitive": "wiegen",
    "preterite": [
      "wog"
    ],
    "participle": [
      "gewogen"
    ],
    "hint": "Bedeutung: Gewicht haben.",
    "sentencePreterite": "Das Paket ___ drei Kilo.",
    "sentencePerfect": "Das Paket hat drei Kilo ___."
  },
  {
    "infinitive": "wiegen",
    "preterite": [
      "wiegte"
    ],
    "participle": [
      "gewiegt"
    ],
    "hint": "Bedeutung: hin und her bewegen.",
    "sentencePreterite": "Die Mutter ___ das Kind in den Schlaf.",
    "sentencePerfect": "Die Mutter hat das Kind in den Schlaf ___."
  }
];

let state = JSON.parse(localStorage.getItem("missionStammformenStateV3")) || {
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

function markBlank(sentence) {
  return sentence.replace("___", "<span class='blank'>___</span>");
}

function renderSentences() {
  const block = $("sentenceBlock");
  if (currentMode === "preterite") {
    block.innerHTML = `<div class="sentenceLine"><strong>Präteritum:</strong> ${markBlank(currentTask.sentencePreterite)}</div>`;
  } else if (currentMode === "participle") {
    block.innerHTML = `<div class="sentenceLine"><strong>Perfekt:</strong> ${markBlank(currentTask.sentencePerfect)}</div>`;
  } else {
    block.innerHTML = `
      <div class="sentenceLine"><strong>Präteritum:</strong> ${markBlank(currentTask.sentencePreterite)}</div>
      <div class="sentenceLine"><strong>Perfekt:</strong> ${markBlank(currentTask.sentencePerfect)}</div>
    `;
  }
}

function newTask() {
  currentMode = chooseMode();
  currentTask = verbs[Math.floor(Math.random() * verbs.length)];
  answerAlreadyChecked = false;

  $("infinitive").textContent = currentTask.infinitive;
  renderSentences();

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

  localStorage.setItem("missionStammformenStateV3", JSON.stringify(state));
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

updateStats();
newTask();
