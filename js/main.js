// RodaRoad Form — Main Entry Point

console.log("RodaRoad Form loaded!");
lucide.createIcons();

// Repostatge: mostrar/amagar secció
const refueledSelect = document.getElementById("refueled");
const refuelSection = document.getElementById("refuelSection");

refueledSelect.addEventListener("change", () => {
  if (refueledSelect.value === "yes") {
    refuelSection.style.display = "grid";
  } else {
    refuelSection.style.display = "none";
  }
});

// Conducció doble: mostrar/amagar camps del 2n conductor
const dualDrivingCheckbox = document.getElementById("dualDriving");
const secondDriverInfo = document.getElementById("secondDriverFields");

dualDrivingCheckbox.addEventListener("change", () => {
  if (dualDrivingCheckbox.checked) {
    secondDriverInfo.style.display = "grid";
    secondDriverFields.style.display = "grid";
  } else {
    secondDriverInfo.style.display = "none";
    secondDriverFields.style.display = "none";
  }
});

// Quilòmetres totals: càlcul automàtic
// Resta els km finals menos els inicials i mostra el resultat
const kmStart = document.getElementById("kmStart");
const kmEnd = document.getElementById("kmEnd");
const kmTotal = document.getElementById("kmTotal");

function calculateTotalKm() {
  const start = parseFloat(kmStart.value) || 0;
  const end = parseFloat(kmEnd.value) || 0;
  kmTotal.value = end - start;
}

kmStart.addEventListener("input", calculateTotalKm);
kmEnd.addEventListener("input", calculateTotalKm);
