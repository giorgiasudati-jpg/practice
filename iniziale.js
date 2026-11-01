/* Practice · il punto di partenza: il piano del Ciclo 1 (novembre 2026) e gli esercizi con i BPM storici dagli appunti di Giorgia
   ("Chitarra — Sistema di Studio", practice-log). L'app li scrive nel database solo al primo accesso, se il piano non c'è ancora:
   da lì in poi si modificano dalla schermata Piano e questo file non conta più. */
window.SEED={
  piano:{
    nome:"Ciclo 1 · Novembre 2026",
    inizio:"2026-11-01",
    minimo:30,      // minuti: la seduta che non salta mai
    slot:"13:00",   // prima di quest'ora la seduta è "nello slot"
    riposi:1,       // giorni di riposo a settimana che non spezzano la catena
    coach:"Prima la costanza, poi il volume. Questo mese non conta quanto studi: conta che il minimo ci sia ogni giorno, entro la mattina (prima delle 13), e che i numeri dicano la verità.",
    blocchi:[
      {k:"riscaldamento",nome:"Riscaldamento",min:5,esercizi:true,
        obiettivo:"Mani sciolte, zero tensione. Lento e pulito.",
        fonte:"Legato 1-3-4 e 1-2-4 · Tom Quayle, Legato Timing / Jake Willson",
        come:"Metronomo basso, crome. Se senti tensione nel polso, rallenta: qui non si corre."},
      {k:"tecnica",nome:"Tecnica",min:15,esercizi:true,
        obiettivo:"Un solo esercizio, a metronomo. Si misura il BPM pulito.",
        fonte:"Frank Gambale, Chop Builder · Round 2",
        come:"Il tuo metodo: trova il BPM dove si rompe, togli 40, poi +10 ogni 5 minuti. A fine blocco segna il BPM più alto suonato pulito."},
      {k:"suonare",nome:"Suonare",min:10,
        obiettivo:"Portare la tecnica dentro la musica.",
        fonte:"Loop funk in La minore · compito di Marco Baldi",
        come:"Solo pentatonica, poi un colore alla volta: ascolta l'effetto. Registra l'ultimo minuto."},
      {k:"vocabolario",nome:"Vocabolario",min:30,
        obiettivo:"Una frase rubata e fatta tua.",
        fonte:"Lista trascrizioni · Charlie Allen, John Mayer",
        come:"15 minuti: trascrivi una frase. 15 minuti: spostala in 3 tonalità, cambiale ritmo, usala."},
      {k:"visualizzazione",nome:"Visualizzazione",min:20,esercizi:true,
        obiettivo:"Un box alla volta, gli occhi sempre sulla tonica.",
        fonte:"Scala maggiore 3nps · i 7 box (appunti PGT)",
        come:"Un box in tante tonalità finché non hai nessun dubbio. A fine box ribatti la tonica."}
    ],
    giornate:{
      minimo:["riscaldamento","tecnica","suonare"],
      normale:["riscaldamento","tecnica","suonare","vocabolario"],
      buona:["riscaldamento","tecnica","suonare","vocabolario","visualizzazione"]
    },
    calendario:[
      {n:1,titolo:"Solo il minimo",giornate:["minimo"],
        obiettivo:"30 minuti ogni giorno, entro la mattina (prima delle 13). Anche se hai più tempo: questa settimana si costruisce l'abitudine, non il volume."},
      {n:2,titolo:"+ Vocabolario",giornate:["minimo","normale"],
        obiettivo:"Il minimo resta sacro. Nei giorni con più tempo si sblocca la giornata normale: si aggiunge il vocabolario."},
      {n:3,titolo:"+ Visualizzazione",giornate:["minimo","normale","buona"],
        obiettivo:"Si sblocca la giornata buona. Il minimo resta sacro: è quello che regge tutto."},
      {n:4,titolo:"Misura",giornate:["minimo","normale","buona"],
        obiettivo:"Stessa struttura. A fine settimana: test del BPM pulito su ogni esercizio e una registrazione di 2 minuti da confrontare. Poi bilancio e Ciclo 2."}
    ]
  },
  esercizi:{
    "legato-134":{nome:"Legato 1-3-4 / 1-2-4",blocco:"riscaldamento",bpm:true,focus:true,ordine:1,
      nota:"Fatica sulla 1-3-4: indipendenza anulare-mignolo (2 aprile 2026)."},
    "gambale-r2":{nome:"Chop Builder · Round 2",blocco:"tecnica",bpm:true,focus:true,ordine:1,
      base:{bpm:110,data:"2026-04-11"},nota:"Da sbloccare: i chop di pentatonica spostati avanti e indietro."},
    "bernth-01":{nome:"Bernth · Shred Lick #01",blocco:"tecnica",bpm:true,ordine:2,
      base:{bpm:105},obiettivo:110,nota:"100 ok; 105/110 da consolidare e rilassare."},
    "bernth-02":{nome:"Bernth · Shred Lick #02",blocco:"tecnica",bpm:true,ordine:3,
      base:{bpm:100},nota:"100 tengo e sciolgo."},
    "bernth-03":{nome:"Bernth · Shred Lick #03",blocco:"tecnica",bpm:true,ordine:4,
      base:{bpm:105},nota:"Ha margine, ma prima pulire."},
    "bernth-arp":{nome:"Bernth · Arpeggio 2 note per corda",blocco:"tecnica",bpm:true,ordine:5,
      base:{bpm:140,data:"2024-08-15"},obiettivo:150,nota:"150 faticoso, il polso si compromette; 140 a proprio agio."},
    "ale-sestine":{nome:"Ale · Sestine",blocco:"tecnica",bpm:true,ordine:6,
      base:{bpm:90},obiettivo:130,nota:"Spingere a 100, obiettivo finale 130."},
    "pgt-3nps":{nome:"PGT · 3nps",blocco:"tecnica",bpm:true,ordine:7,
      base:{bpm:90},obiettivo:100,nota:"Ancora sporco: obiettivo 100 puliti e spensierati."},
    "box-3nps":{nome:"Box 3nps · uno alla volta",blocco:"visualizzazione",bpm:false,focus:true,ordine:1,
      nota:"T6 sx/centro/dx · T5 sx/centro/dx · T4 dx. Esercizio finale: i 7 box di Mi in ordine."}
  }
};
