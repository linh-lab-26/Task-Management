//Funktio päivittää tehtävälistan (task list)
function refreshList(tehtavat) {
    let teksti = "";
    // Tarkistetaan if-lauseella, onko tehtäviä listassa
    if (tehtavat.length == 0) {
        teksti = "Tasks are...";
    } else {
    // Käydään läpi kaikki tehtävät for-silmukalla
    for (let i = 0; i < tehtavat.length; i++){
    teksti = teksti + "<p>";
    teksti = teksti + "<strong> Tehtävä: </strong> " + tehtavat[i].nimi + "<br>";
    teksti = teksti + "<strong> Tila: </strong> " + tehtavat[i].tila + "<br>";
    teksti = teksti + "<strong> Luotu: </strong>" + tehtavat[i].luotu + "<br>";
    teksti = teksti + "<strong> Päivitetty: </strong> " + tehtavat[i].paivitetty;
    teksti = teksti + "</p>"; }
    }
    // Tulostetaan lista HTML-sivun tasksList-elementtiin
    document.getElementById("tasksList").innerHTML = teksti;
}
