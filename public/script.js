console.log("poopfart");
const showCrafts = async () => {
    let response = await fetch("/api/crafts");
    let craftJSON = await response.json();
    let craftDiv = document.getElementById("craft-list");

    craftJSON.forEach((craft) => {
        let section = document.createElement("section");
        craftDiv.append(section);

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = craft.name;

        let img = document.createElement("img");
        img.src = craft.image;
        img.onclick = () => showModal(craft);
        section.append(img);
    });
};

function showModal(craft) {
    const modal = document.getElementById('myModal');
    const craftName = modal.querySelector('#craft-name');
    const craftImage = modal.querySelector('#craft-image');
    const craftInfo = modal.querySelector('#craft-info');

    craftName.textContent = craft.name;
    craftImage.src = craft.image;
    craftInfo.innerHTML = `
        <p><strong>Description:</strong> ${craft.description}</p>
        <p><strong>Supplies Needed:</strong></p>
        <ul>
            ${craft.supplies.map(supply => `<li>${supply}</li>`).join('')}
        </ul>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.onload = () => {
    showCrafts();
};
