let navn = ["Elvin","Aki","Jazeel","Olav","Elvdidd","Akiddy","Jaziddy","enda en Olav", "Diddy", "Einstein" ]



for (let i = 0; i < navn.length; i++) {
  if (navn[i].startsWith("Olav")) {
    console.log("Navn som starter med Olav:", navn[i]);
  }
}