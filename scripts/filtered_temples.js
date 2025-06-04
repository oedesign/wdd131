 // Toggle hamburger menu
const hamburger = document.getElementById("harmburger");
const navigation = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.innerHTML = navigation.classList.contains("show") ? "✖" : "☰";
});

// Footer year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple-lds-wallpaper.webp"
    },
    {
        templeName: "Adelaide Australia",
        location: "Morphett Vale, South Australia, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl: "images/adelaide-australia-temple-lds-wallpaper.webp"
    },
    {
        templeName: "Albuquerque New Mexico",
        location: "Albuquerque, New Mexico, United States",
        dedicated: "2000, March, 5",
        area: 96630,
        imageUrl: "images/albuquerque-temple-lds-wallpaper.webp"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 6861,
        imageUrl: "images/Barranquilla-Columblia-Temple.webp"
    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Brazil",
        dedicated: "2022, November, 20",
        area: 156558,
        imageUrl: "images/belem_brazil_temple_exterior.webp"
    },
    {
        templeName: "Cardston Alberta",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923, August, 26",
        area: 9600,
        imageUrl: "images/cardston-alberta-temple-lds-wallpaper.webp"
    },
    {
        templeName: "Newport Beach California",
        location: "Newport Beach, California, United States",
        dedicated: "2005, August, 28",
        area: 116642,
        imageUrl: "images/newport-beach-temple-wallpaper.webp"
    },
    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 11",
        area: 253015,
        imageUrl: "images/bern-switzerland-temple-lds-wallpaper.webp"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 5259,
        imageUrl: "images/logan-temple-wallpaper.webp"
    }
];

// Function to create and display cards
function displayTemples(templesArray) {
    const container = document.querySelector('.grid');
    container.innerHTML = ''; // Clear the grid

    templesArray.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement('img');
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', temple.templeName);
        image.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    });
}

// Filter functions
function filterOld() {
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900));
}
function filterNew() {
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000));
}
function filterLarge() {
    displayTemples(temples.filter(t => t.area > 90000));
}
function filterSmall() {
    displayTemples(temples.filter(t => t.area < 10000));
}
function filterHome() {
    displayTemples(temples);
}

// Event listeners for nav menu
document.getElementById("home").addEventListener("click", e => { e.preventDefault(); filterHome(); });
document.getElementById("old").addEventListener("click", e => { e.preventDefault(); filterOld(); });
document.getElementById("new").addEventListener("click", e => { e.preventDefault(); filterNew(); });
document.getElementById("large").addEventListener("click", e => { e.preventDefault(); filterLarge(); });
document.getElementById("small").addEventListener("click", e => { e.preventDefault(); filterSmall(); });

// Initial display
displayTemples(temples);

