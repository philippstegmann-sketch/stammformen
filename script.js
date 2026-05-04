const verbs = [
  [
    "backen",
    "Der Bäcker ___ gestern frisches Brot.",
    [
      "backte",
      "buk"
    ],
    [
      "gebacken"
    ],
    "«buk» ist korrekt, aber heute eher veraltet/gehoben; «backte» ist üblich."
  ],
  [
    "befehlen",
    "Der Offizier ___ den Rückzug.",
    [
      "befahl"
    ],
    [
      "befohlen"
    ],
    ""
  ],
  [
    "beginnen",
    "Der Unterricht ___ um acht Uhr.",
    [
      "begann"
    ],
    [
      "begonnen"
    ],
    ""
  ],
  [
    "beissen",
    "Der Hund ___ den Briefträger.",
    [
      "biss"
    ],
    [
      "gebissen"
    ],
    "Schweizer Schreibweise: «beissen» statt «beißen»."
  ],
  [
    "bergen",
    "Die Rettungskräfte ___ die Verletzten aus dem Auto.",
    [
      "bargen"
    ],
    [
      "geborgen"
    ],
    ""
  ],
  [
    "bersten",
    "Das Glas ___ durch die Hitze.",
    [
      "barst"
    ],
    [
      "geborsten"
    ],
    ""
  ],
  [
    "betrügen",
    "Der Händler ___ seine Kunden.",
    [
      "betrog"
    ],
    [
      "betrogen"
    ],
    ""
  ],
  [
    "bewegen",
    "Seine Rede ___ viele Menschen.",
    [
      "bewegte"
    ],
    [
      "bewegt"
    ],
    "Hier bedeutet «bewegen» emotional berühren. Nicht: «bewog» = veranlassen."
  ],
  [
    "bewegen",
    "Der Trainer ___ ihn zum Weitermachen.",
    [
      "bewog"
    ],
    [
      "bewogen"
    ],
    "Hier bedeutet «bewegen» veranlassen/überzeugen."
  ],
  [
    "biegen",
    "Der Fahrer ___ nach links ab.",
    [
      "bog"
    ],
    [
      "gebogen"
    ],
    ""
  ],
  [
    "bieten",
    "Die Firma ___ ihm eine Stelle an.",
    [
      "bot"
    ],
    [
      "geboten"
    ],
    ""
  ],
  [
    "binden",
    "Sie ___ das Paket mit einer Schnur.",
    [
      "band"
    ],
    [
      "gebunden"
    ],
    ""
  ],
  [
    "bitten",
    "Er ___ seine Kollegin um Hilfe.",
    [
      "bat"
    ],
    [
      "gebeten"
    ],
    ""
  ],
  [
    "blasen",
    "Der Wind ___ stark durch die Gassen.",
    [
      "blies"
    ],
    [
      "geblasen"
    ],
    ""
  ],
  [
    "bleiben",
    "Wir ___ den ganzen Abend zu Hause.",
    [
      "blieben"
    ],
    [
      "geblieben"
    ],
    ""
  ],
  [
    "braten",
    "Sie ___ die Kartoffeln in der Pfanne.",
    [
      "briet"
    ],
    [
      "gebraten"
    ],
    ""
  ],
  [
    "brechen",
    "Das Kind ___ sich den Arm.",
    [
      "brach"
    ],
    [
      "gebrochen"
    ],
    ""
  ],
  [
    "brennen",
    "Die Kerze ___ die ganze Nacht.",
    [
      "brannte"
    ],
    [
      "gebrannt"
    ],
    ""
  ],
  [
    "bringen",
    "Er ___ die Unterlagen ins Büro.",
    [
      "brachte"
    ],
    [
      "gebracht"
    ],
    ""
  ],
  [
    "denken",
    "Sie ___ lange über die Lösung nach.",
    [
      "dachte"
    ],
    [
      "gedacht"
    ],
    ""
  ],
  [
    "dreschen",
    "Die Bauern ___ früher das Getreide von Hand.",
    [
      "droschen"
    ],
    [
      "gedroschen"
    ],
    ""
  ],
  [
    "dringen",
    "Wasser ___ in den Keller.",
    [
      "drang"
    ],
    [
      "gedrungen"
    ],
    ""
  ],
  [
    "dürfen",
    "Die Lernenden ___ früher gehen.",
    [
      "durften"
    ],
    [
      "gedurft"
    ],
    ""
  ],
  [
    "empfehlen",
    "Die Ärztin ___ ihm mehr Bewegung.",
    [
      "empfahl"
    ],
    [
      "empfohlen"
    ],
    ""
  ],
  [
    "erlöschen",
    "Das Feuer ___ nach einigen Stunden.",
    [
      "erlosch"
    ],
    [
      "erloschen"
    ],
    "Intransitiv: Das Feuer erlosch. Nicht: löschte."
  ],
  [
    "erschrecken",
    "Das Kind ___ wegen des lauten Knalls.",
    [
      "erschrak"
    ],
    [
      "erschrocken"
    ],
    "Intransitiv: selbst Angst bekommen."
  ],
  [
    "erschrecken",
    "Der Knall ___ das Kind.",
    [
      "erschreckte"
    ],
    [
      "erschreckt"
    ],
    "Transitiv: jemanden erschrecken."
  ],
  [
    "essen",
    "Wir ___ gestern sehr spät.",
    [
      "assen",
      "aßen"
    ],
    [
      "gegessen"
    ],
    "Schweizer Schreibweise: «assen»; «aßen» ebenfalls akzeptiert."
  ],
  [
    "fahren",
    "Er ___ mit dem Zug nach Bern.",
    [
      "fuhr"
    ],
    [
      "gefahren"
    ],
    ""
  ],
  [
    "fallen",
    "Das Glas ___ vom Tisch.",
    [
      "fiel"
    ],
    [
      "gefallen"
    ],
    ""
  ],
  [
    "fangen",
    "Der Torhüter ___ den Ball.",
    [
      "fing"
    ],
    [
      "gefangen"
    ],
    ""
  ],
  [
    "finden",
    "Sie ___ den Schlüssel im Auto.",
    [
      "fand"
    ],
    [
      "gefunden"
    ],
    ""
  ],
  [
    "flechten",
    "Sie ___ ihrer Tochter einen Zopf.",
    [
      "flocht"
    ],
    [
      "geflochten"
    ],
    ""
  ],
  [
    "fliessen",
    "Der Fluss ___ ruhig durch das Tal.",
    [
      "floss",
      "floß"
    ],
    [
      "geflossen"
    ],
    "Schweizer Schreibweise: «fliessen/floss»; «floß» ebenfalls akzeptiert."
  ],
  [
    "fliegen",
    "Das Flugzeug ___ über die Alpen.",
    [
      "flog"
    ],
    [
      "geflogen"
    ],
    ""
  ],
  [
    "fliehen",
    "Die Katze ___ vor dem Hund.",
    [
      "floh"
    ],
    [
      "geflohen"
    ],
    ""
  ],
  [
    "frieren",
    "Wir ___ trotz warmer Jacken.",
    [
      "froren"
    ],
    [
      "gefroren"
    ],
    ""
  ],
  [
    "geben",
    "Sie ___ ihm einen guten Rat.",
    [
      "gab"
    ],
    [
      "gegeben"
    ],
    ""
  ],
  [
    "gedeihen",
    "Die Pflanzen ___ im milden Klima.",
    [
      "gediehen"
    ],
    [
      "gediehen"
    ],
    ""
  ],
  [
    "gehen",
    "Er ___ gestern zu Fuss zur Schule.",
    [
      "ging"
    ],
    [
      "gegangen"
    ],
    ""
  ],
  [
    "gelingen",
    "Das Experiment ___ beim zweiten Versuch.",
    [
      "gelang"
    ],
    [
      "gelungen"
    ],
    ""
  ],
  [
    "gelten",
    "Diese Regel ___ früher für alle.",
    [
      "galt"
    ],
    [
      "gegolten"
    ],
    ""
  ],
  [
    "genesen",
    "Der Patient ___ schneller als erwartet.",
    [
      "genas"
    ],
    [
      "genesen"
    ],
    ""
  ],
  [
    "geniessen",
    "Wir ___ die Ferien sehr.",
    [
      "genossen"
    ],
    [
      "genossen"
    ],
    "Schweizer Schreibweise: «geniessen»."
  ],
  [
    "geschehen",
    "Das Unglück ___ am frühen Morgen.",
    [
      "geschah"
    ],
    [
      "geschehen"
    ],
    ""
  ],
  [
    "gewinnen",
    "Unser Team ___ das Finale.",
    [
      "gewann"
    ],
    [
      "gewonnen"
    ],
    ""
  ],
  [
    "giessen",
    "Sie ___ die Blumen jeden Morgen.",
    [
      "goss",
      "goß"
    ],
    [
      "gegossen"
    ],
    "Schweizer Schreibweise: «giessen/goss»; «goß» ebenfalls akzeptiert."
  ],
  [
    "gleichen",
    "Das Kind ___ seinem Vater sehr.",
    [
      "glich"
    ],
    [
      "geglichen"
    ],
    ""
  ],
  [
    "gleiten",
    "Der Schlitten ___ über den Schnee.",
    [
      "glitt"
    ],
    [
      "geglitten"
    ],
    ""
  ],
  [
    "graben",
    "Der Hund ___ ein Loch im Garten.",
    [
      "grub"
    ],
    [
      "gegraben"
    ],
    ""
  ],
  [
    "greifen",
    "Sie ___ nach dem Seil.",
    [
      "griff"
    ],
    [
      "gegriffen"
    ],
    ""
  ],
  [
    "haben",
    "Wir ___ gestern keine Zeit.",
    [
      "hatten"
    ],
    [
      "gehabt"
    ],
    ""
  ],
  [
    "halten",
    "Der Bus ___ an der Haltestelle.",
    [
      "hielt"
    ],
    [
      "gehalten"
    ],
    ""
  ],
  [
    "hängen",
    "Das Bild ___ schief an der Wand.",
    [
      "hing"
    ],
    [
      "gehangen"
    ],
    "Intransitiv: etwas hängt irgendwo."
  ],
  [
    "hängen",
    "Er ___ das Bild an die Wand.",
    [
      "hängte"
    ],
    [
      "gehängt"
    ],
    "Transitiv: jemand hängt etwas auf."
  ],
  [
    "heben",
    "Der Arbeiter ___ die schwere Kiste.",
    [
      "hob"
    ],
    [
      "gehoben"
    ],
    ""
  ],
  [
    "heissen",
    "Das Hotel ___ früher «Sternen».",
    [
      "hiess",
      "hieß"
    ],
    [
      "geheissen",
      "geheißen"
    ],
    "Schweizer Schreibweise: «heissen/hiess/geheissen»."
  ],
  [
    "helfen",
    "Die Nachbarin ___ uns beim Umzug.",
    [
      "half"
    ],
    [
      "geholfen"
    ],
    ""
  ],
  [
    "kennen",
    "Ich ___ die Antwort sofort.",
    [
      "kannte"
    ],
    [
      "gekannt"
    ],
    ""
  ],
  [
    "klingen",
    "Die Musik ___ sehr traurig.",
    [
      "klang"
    ],
    [
      "geklungen"
    ],
    ""
  ],
  [
    "kommen",
    "Sie ___ pünktlich zum Termin.",
    [
      "kam"
    ],
    [
      "gekommen"
    ],
    ""
  ],
  [
    "können",
    "Er ___ die Aufgabe ohne Hilfe lösen.",
    [
      "konnte"
    ],
    [
      "gekonnt"
    ],
    ""
  ],
  [
    "kriechen",
    "Die Schnecke ___ über den Weg.",
    [
      "kroch"
    ],
    [
      "gekrochen"
    ],
    ""
  ],
  [
    "laden",
    "Er ___ die Kisten ins Auto.",
    [
      "lud"
    ],
    [
      "geladen"
    ],
    ""
  ],
  [
    "lassen",
    "Sie ___ die Tür offen.",
    [
      "liess",
      "ließ"
    ],
    [
      "gelassen"
    ],
    "Schweizer Schreibweise: «liess»; «ließ» ebenfalls akzeptiert."
  ],
  [
    "laufen",
    "Das Kind ___ schnell nach Hause.",
    [
      "lief"
    ],
    [
      "gelaufen"
    ],
    ""
  ],
  [
    "leiden",
    "Viele Menschen ___ unter der Hitze.",
    [
      "litten"
    ],
    [
      "gelitten"
    ],
    ""
  ],
  [
    "leihen",
    "Er ___ mir sein Fahrrad.",
    [
      "lieh"
    ],
    [
      "geliehen"
    ],
    ""
  ],
  [
    "lesen",
    "Sie ___ den Roman in zwei Tagen.",
    [
      "las"
    ],
    [
      "gelesen"
    ],
    ""
  ],
  [
    "liegen",
    "Das Buch ___ auf dem Tisch.",
    [
      "lag"
    ],
    [
      "gelegen"
    ],
    ""
  ],
  [
    "lügen",
    "Der Zeuge ___ vor Gericht.",
    [
      "log"
    ],
    [
      "gelogen"
    ],
    ""
  ],
  [
    "meiden",
    "Sie ___ die gefährliche Strasse.",
    [
      "mied"
    ],
    [
      "gemieden"
    ],
    ""
  ],
  [
    "melken",
    "Der Bauer ___ die Kuh am Morgen.",
    [
      "melkte",
      "molk"
    ],
    [
      "gemolken",
      "gemelkt"
    ],
    "«molk» und «gemolken» sind traditionell; «melkte/gemelkt» wird ebenfalls verwendet."
  ],
  [
    "messen",
    "Der Arzt ___ den Blutdruck.",
    [
      "mass",
      "maß"
    ],
    [
      "gemessen"
    ],
    "Schweizer Schreibweise: «mass»; «maß» ebenfalls akzeptiert."
  ],
  [
    "misslingen",
    "Der Versuch ___ trotz guter Vorbereitung.",
    [
      "misslang"
    ],
    [
      "misslungen"
    ],
    ""
  ],
  [
    "mögen",
    "Als Kind ___ sie keinen Spinat.",
    [
      "mochte"
    ],
    [
      "gemocht"
    ],
    ""
  ],
  [
    "müssen",
    "Wir ___ lange warten.",
    [
      "mussten",
      "mußten"
    ],
    [
      "gemusst",
      "gemußt"
    ],
    "Schweizer Schreibweise: «mussten/gemusst»."
  ],
  [
    "nehmen",
    "Er ___ den falschen Bus.",
    [
      "nahm"
    ],
    [
      "genommen"
    ],
    ""
  ],
  [
    "nennen",
    "Sie ___ ihn einen Helden.",
    [
      "nannte"
    ],
    [
      "genannt"
    ],
    ""
  ],
  [
    "pfeifen",
    "Der Schiedsrichter ___ das Spiel ab.",
    [
      "pfiff"
    ],
    [
      "gepfiffen"
    ],
    ""
  ],
  [
    "raten",
    "Ich ___ ihm zur Vorsicht.",
    [
      "riet"
    ],
    [
      "geraten"
    ],
    ""
  ],
  [
    "reiben",
    "Sie ___ den Käse über die Pasta.",
    [
      "rieb"
    ],
    [
      "gerieben"
    ],
    ""
  ],
  [
    "reissen",
    "Das Seil ___ plötzlich.",
    [
      "riss",
      "riß"
    ],
    [
      "gerissen"
    ],
    "Schweizer Schreibweise: «reissen/riss»."
  ],
  [
    "reiten",
    "Sie ___ über die Wiese.",
    [
      "ritt"
    ],
    [
      "geritten"
    ],
    ""
  ],
  [
    "rennen",
    "Die Kinder ___ zum Bus.",
    [
      "rannten"
    ],
    [
      "gerannt"
    ],
    ""
  ],
  [
    "riechen",
    "Die Blumen ___ wunderbar.",
    [
      "rochen"
    ],
    [
      "gerochen"
    ],
    ""
  ],
  [
    "rufen",
    "Er ___ laut um Hilfe.",
    [
      "rief"
    ],
    [
      "gerufen"
    ],
    ""
  ],
  [
    "saufen",
    "Das Tier ___ aus dem Bach.",
    [
      "soff"
    ],
    [
      "gesoffen"
    ],
    "Umgangssprachlich/derb bei Menschen; bei Tieren neutraler."
  ],
  [
    "saugen",
    "Der Staubsauger ___ den Staub auf.",
    [
      "saugte",
      "sog"
    ],
    [
      "gesaugt",
      "gesogen"
    ],
    "«sog/gesogen» ist bei Luft/Sog üblich; «saugte/gesaugt» beim Staubsauger sehr gebräuchlich."
  ],
  [
    "schaffen",
    "Der Künstler ___ ein neues Werk.",
    [
      "schuf"
    ],
    [
      "geschaffen"
    ],
    "Bedeutung: erschaffen."
  ],
  [
    "schaffen",
    "Sie ___ die Prüfung beim ersten Versuch.",
    [
      "schaffte"
    ],
    [
      "geschafft"
    ],
    "Bedeutung: bewältigen/erreichen."
  ],
  [
    "scheiden",
    "Das Gericht ___ die Ehe.",
    [
      "schied"
    ],
    [
      "geschieden"
    ],
    ""
  ],
  [
    "scheinen",
    "Die Sonne ___ den ganzen Tag.",
    [
      "schien"
    ],
    [
      "geschienen"
    ],
    ""
  ],
  [
    "schelten",
    "Der Lehrer ___ den Schüler wegen der Störung.",
    [
      "schalt"
    ],
    [
      "gescholten"
    ],
    "Seltene, gehobene Form."
  ],
  [
    "schieben",
    "Er ___ den Wagen in die Garage.",
    [
      "schob"
    ],
    [
      "geschoben"
    ],
    ""
  ],
  [
    "schiessen",
    "Die Spielerin ___ das entscheidende Tor.",
    [
      "schoss",
      "schoß"
    ],
    [
      "geschossen"
    ],
    "Schweizer Schreibweise: «schiessen/schoss»."
  ],
  [
    "schlafen",
    "Das Baby ___ die ganze Nacht.",
    [
      "schlief"
    ],
    [
      "geschlafen"
    ],
    ""
  ],
  [
    "schlagen",
    "Die Uhr ___ Mitternacht.",
    [
      "schlug"
    ],
    [
      "geschlagen"
    ],
    ""
  ],
  [
    "schleichen",
    "Die Katze ___ durchs Zimmer.",
    [
      "schlich"
    ],
    [
      "geschlichen"
    ],
    ""
  ],
  [
    "schleifen",
    "Der Handwerker ___ das Messer.",
    [
      "schliff"
    ],
    [
      "geschliffen"
    ],
    "Bedeutung: schärfen/glätten."
  ]
];

let state = JSON.parse(localStorage.getItem("missionStammformenState")) || {
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

  localStorage.setItem("missionStammformenState", JSON.stringify(state));
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
