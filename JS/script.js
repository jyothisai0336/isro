// Data about ISRO rockets
const rockets = [
    {
        name: "PSLV",
        type: "Polar Satellite Launch Vehicle",
        description: "The highly reliable workhorse of ISRO. It has launched missions like Mangalyaan and Chandrayaan-1.",
        tag: "Workhorse"
    },
    {
        name: "GSLV",
        type: "Geosynchronous Satellite Launch Vehicle",
        description: "Equipped with a cryogenic upper stage, this rocket is built to lift 2-tonne class communication satellites.",
        tag: "Communication"
    },
    {
        name: "LVM3",
        type: "Launch Vehicle Mark-III",
        description: "The large carrying machine. It can carry massive 8,000 kg payloads to Low Earth Orbit. It successfully launched Chandrayaan-3.",
        tag: "Heavy Lifter"
    },
    {
        name: "SSLV",
        type: "Small Satellite Launch Vehicle",
        description: "Designed for quick launches of small satellites up to 500 kg. It requires minimal infrastructure and very little turnaround time.",
        tag: "Quick Launch"
    }
];

// Target the container in the HTML
const container = document.getElementById('rocket-container');

// Loop through the data and create 3D cards
rockets.forEach(rocket => {
    const card = document.createElement('div');
    card.className = 'rocket-card';
    
    card.innerHTML = `
        <h2>${rocket.name}</h2>
        <p><strong>Type:</strong> ${rocket.type}</p>
        <p>${rocket.description}</p>
        <div class="tag">${rocket.tag}</div>
    `;
    
    container.appendChild(card);
});
