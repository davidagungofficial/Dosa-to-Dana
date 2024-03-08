// script.js

async function calculate() {
  const inputNumber = document.getElementById("inputNumber").value;

  try {
    const response = await fetch(`/calculate?number=${inputNumber}`);
    const result = await response.text();
    document.getElementById("result").innerText =
      `Hasil perkalian dengan 2: ${result}`;
  } catch (error) {
    console.error("Error:", error);
  }
}
