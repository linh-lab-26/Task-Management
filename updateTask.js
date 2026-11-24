//Funktio päivittää valitun tehtävän statustiedon sekä päivitysajankohdan
function updateTask(tehtavat) {
    let haettuNimi = document.getElementById("updateTaskName").value;
    let uusiTila = document.getElementById("newStatus").value;
    if (haettuNimi != ""){
        for (let i = 0; i < tehtavat.length; i++){
        if (tehtavat[i].nimi == haettuNimi) {
            let pvm = new Date ();
            let paiva = pvm.getDate();
            let kuukausi = pvm.getMonth() + 1;
            let vuosi = pvm.getFullYear();
            let tunnit = pvm.getHours();
            let minuutit = pvm.getMinutes();

            if (tunnit < 10){
                tunnit = "0" + tunnit;
            }
            if (minuutit < 10) {
                minuutit = "0" + minuutit;
            }
        let paivitysaika = paiva + "." + kuukausi + "." + vuosi + " " + tunnit + ":" + minuutit;

        tehtavat[i].tila = uusiTila;
        tehtavat[i].paivitetty = paivitysaika;

        document.getElementById("updateTaskName").value = "";
        refreshList (tehtavat);  
        }
      }    
    }
}
