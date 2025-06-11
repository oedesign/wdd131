// Array of product objects
const products = [
    { id: "p001", name: "EcoToothbrush" },
    { id: "p002", name: "SolarFlashlight" },
    { id: "p003", name: "SmartKettle" },
    { id: "p004", name: "AquaFilter Bottle" },
    { id: "p005", name: "GreenMat Yoga Mat" },
];

// Populate the product dropdown
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
  