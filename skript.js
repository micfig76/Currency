const amountInput = document.getElementById("amount");
const rateSelect = document.getElementById("rate");
const conversionOutput = document.getElementById("conversion");
const convertButton = document.getElementById("convert-button");
const newConversion = document.getElementById("new-conversion");
//exchange rates 
const exchangeRates = {
  USD: 4.27,
  EUR: 4.67,
  GBP: 5.33,
  DKK: 0.62,
};
//convert button updates the conversion rate accordingly to choosen currency
convertButton.addEventListener("click", updateConversion);
//reset-ready for new conversion
newConversion.addEventListener("click", resetForm);
//rate selection function
function updateConversion() {
  const selectedRate = rateSelect.value;
  const conversion = amountInput.value * exchangeRates[selectedRate];
  conversionOutput.textContent = conversion.toFixed(2);
  lastConversion = conversion;
}
//resets the form to be ready for new convertion and stops with result before new conversion is requested 
function resetForm(event) {
  event.preventDefault();
  amountInput.value = "0.00";
  rateSelect.selectedIndex = 0;
  conversionOutput.textContent = "";
}