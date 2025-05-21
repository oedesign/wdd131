// Function to handle the click event on the hamburger menu
    const hamburger = document.getElementById("harmburger");
    const navigation = document.getElementById("navigation");

    hamburger.addEventListener("click", () => {
        navigation.classList.toggle("show");

    // Toggle hamburger icon to X and back
    if (navigation.classList.contains("show")) {
        hamburger.innerHTML = "✖";
        } else {
        hamburger.innerHTML = "☰";
        }
    });

