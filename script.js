const amountInput = document.getElementById("amount");
const rateSelect = document.getElementById("rate");
const conversionOutput = document.getElementById("conversion");
const convertButton = document.getElementById("convert-button");
const newConversion = document.getElementById("new-conversion");

const exchangeRates = {
  USD: 4.27,
  EUR: 4.67,
  GBP: 5.33,
  DKK: 0.62,
}

convertButton.addEventListener("click", updateConversion);

newConversion.addEventListener("click", resetForm);

function updateConversion() {
  const selectedRate = rateSelect.value;
  const conversion = amountInput.value * exchangeRates[selectedRate];
  conversionOutput.textContent = conversion.toFixed(2);
  lastConversion = conversion;
}
function resetForm(event) {
  event.preventDefault();
  amountInput.value = "0.00";
  rateSelect.selectedIndex = 0;
  conversionOutput.textContent = "";
}