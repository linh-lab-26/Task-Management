//Funktio koostaa tiedon, kuinka moni tehtävistä on
//Not started
//In progress ja
//Done tilassa
//Tieto palautetaan sitä kutsuneelle taholle
function showReportByStatus(allTasks) {
let notStartedCount = 0;
let inProgressCount = 0;
let doneCount = 0;

for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].tila == "Not Started"){
        notStartedCount = notStartedCount + 1;}
    else if (allTasks[i].tila == "In Progress"){
        inProgressCount = inProgressCount + 1;}
    else if (allTasks[i].tila == "Done"){
        doneCount = doneCount + 1;}
}
let reportText = "";
reportText = reportText + "<p>";
  reportText = reportText + "<strong>Not started:</strong> " + notStartedCount + "<br>";
  reportText = reportText + "<strong>In progress:</strong> " + inProgressCount + "<br>";
  reportText = reportText + "<strong>Done:</strong> " + doneCount;
  reportText = reportText + "</p>";

  return reportText;
}