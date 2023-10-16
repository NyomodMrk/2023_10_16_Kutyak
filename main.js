import dogs from './dogs.json';

const eletkor = Array.from(dogs).sort((a,b) =>{
  if(a.eletkor < b.eletkor){
    return -1;
  } else if (a.eletkor > b.eletkor) {
    return 1;
  } else {
    return a.nev.localeCompare(b.nev);
  }
});

const labrador = dogs.filter( kutya => kutya.fajta == "Labrador").map(kutya => `${kutya.nev}(${kutya.eletkor} éves)`);

const labrador2 = dogs.filter( kutya => kutya.fajta == "Labrador").map(kutya => ({Nev:kutya.nev, Eletkor:kutya.eletkor}));

const idosebbmint10 = dogs.filter ( kutya => kutya.eletkor > 10).map(kutya => `${kutya.gazda_neve}`);


console.log(eletkor);
console.log(labrador);
console.log(idosebbmint10);

function init(){
  tableletrehoza();
  document.getElementById("gomb1").addEventListener("click", megjelenites);
  document.getElementById("gomb2").addEventListener("click", megjelenites2);
  document.getElementById("gomb3").addEventListener("click", megjelenites3);
  document.getElementById("gomb2/b").addEventListener("click", megjelenites4);
}

function megjelenites() {
  table2.innerHTML = "<thead><tr><td>id</td><td>Név </td><td>Életkor </td><td>Fajta </td><td>Gazda neve</td></tr></thead>";
  const tbody = document.createElement("tbody");
  for(const t of eletkor){
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const celltext1 = document.createTextNode(t.id);
    const celltext2 = document.createTextNode(t.nev);
    const celltext3 = document.createTextNode(t.eletkor.toString());
    const celltext4 = document.createTextNode(t.fajta);
    const celltext5 = document.createTextNode(t.gazda_neve);
    cell.appendChild(celltext1);
    cell2.appendChild(celltext2);
    cell3.appendChild(celltext3);
    cell4.appendChild(celltext4);
    cell5.appendChild(celltext5);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    tbody.appendChild(row)
  }
  table2.appendChild(tbody);
}

function megjelenites2() {
  table2.innerHTML = "<thead><tr><td>Labradorok</td></tr></thead>";
  const tbody = document.createElement("tbody");
  for(const t of labrador) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const celltext = document.createTextNode(t);
    cell.appendChild(celltext);
    row.appendChild(cell);
    tbody.appendChild(row);
  }
  table2.appendChild(tbody);
}

function megjelenites3() {
  table2.innerHTML = "<thead><tr><td>Gazdi nevek</td></tr></thead>";
  const tbody = document.createElement("tbody");
  for(const t of idosebbmint10) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const celltext = document.createTextNode(t);
    cell.appendChild(celltext);
    row.appendChild(cell);
    tbody.appendChild(row);
  }
  table2.appendChild(tbody);
}

function megjelenites4() {
  table2.innerHTML = "<thead><tr><td>Kutya Nev</td><td>Eletkor</td></tr></thead>";
  const tbody = document.createElement("tbody");
  for (const t of labrador2){
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const cell2 = document.createElement("td");
    const celltext = document.createTextNode(t.Nev);
    const celltext2 = document.createTextNode(t.Eletkor);
    cell.appendChild(celltext);
    cell2.appendChild(celltext2);
    row.appendChild(cell);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table2.appendChild(tbody);
}

function tableletrehoza(){
  const tbody = document.createElement("tbody");
  for(const t of dogs){
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const celltext1 = document.createTextNode(t.id);
    const celltext2 = document.createTextNode(t.nev);
    const celltext3 = document.createTextNode(t.eletkor.toString());
    const celltext4 = document.createTextNode(t.fajta);
    const celltext5 = document.createTextNode(t.gazda_neve);
    cell.appendChild(celltext1);
    cell2.appendChild(celltext2);
    cell3.appendChild(celltext3);
    cell4.appendChild(celltext4);
    cell5.appendChild(celltext5);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    tbody.appendChild(row)
  }
  table.appendChild(tbody);
}
document.addEventListener("DOMContentLoaded",init);