// RodaRoad Form — Main Entry Point

import { euCountries } from "./countries.js";

lucide.createIcons();

// Fill the per-diem country select with EU countries
const perDiemCountry = document.getElementById("perDiemCountry");

for (const country of euCountries) {
  const option = document.createElement("option");
  option.value = country.code;
  option.textContent = country.name;
  perDiemCountry.appendChild(option);
}

// Helper: show/hide an element by toggling the "visible" class
function setVisible(element, visible) {
  if (visible) {
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
  }
}

// Refueling: show/hide the refuel section
const refueledSelect = document.getElementById("refueled");
const refuelSection = document.getElementById("refuelSection");

refueledSelect.addEventListener("change", () => {
  setVisible(refuelSection, refueledSelect.value === "yes");
});

// Dual driving: show/hide second driver fields
const dualDrivingCheckbox = document.getElementById("dualDriving");
const secondDriverInfo = document.getElementById("secondDriverInfo");
const secondDriverFields = document.getElementById("secondDriverFields");

dualDrivingCheckbox.addEventListener("change", () => {
  setVisible(secondDriverInfo, dualDrivingCheckbox.checked);
  setVisible(secondDriverFields, dualDrivingCheckbox.checked);
});

// Total kilometers: automatic calculation
// Subtracts start km from end km and shows the result
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
