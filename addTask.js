//Funktiolla listätään uusi tehtävä taulukkoon
function addTask() {
// Haetaan uuden tehtävän nimi syöttökentästä
let tehtavanNimi = document.getElementById("taskName").value;
// Tarkistetaan if-lauseella, että nimi ei ole tyhjä
if (tehtavanNimi != "") {
    // Haetaan nykyinen päivämäärä ja kellonaika minuutin tarkkuudella
    let pvm = new Date ();
    let paiva = pvm.getDate();
    let kuukausi = pvm.getMonth() + 1;
    let vuosi = pvm.getFullYear();
    let tunnit = pvm.getHours();
    let minuutit = pvm.getMinutes();
    // Lisätään etunolla, jos tunnit tai minuutit ovat alle 10
    if (tunnit < 10){
        tunnit = "0" + tunnit;
    }
    if (minuutit <10){
        minuutit = "0" + minuutit
    }
    let aikaleima = paiva + "." + kuukausi + "." + vuosi + " " + tunnit + ":" + minuutit;
    // Luodaan tehtävä-olio 
    let uusiTehtava = {
    nimi:tehtavanNimi,
    tila: "Not Started",
    luotu: aikaleima,
    paivitetty: "-"
    };
    // Lisätään olio tasks-taulukkoon ja päivitetään näkymä
    tasks.push(uusiTehtava);
        document.getElementById("taskName").value = "";
        refreshList(tasks);
}
}
