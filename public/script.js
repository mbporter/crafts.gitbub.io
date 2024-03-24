const showCrafts = async () => {
    let response = await fetch("http://localhost:3000/api/crafts");
    let craftJSON = await response.json();
    let craftDiv = document.getElementById("craft-list");

    craftJSON.forEach((craft) => {
        let section = document.createElement("section");
        craftDiv.append(section);

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML= craft.name;

        let img = document.createElement("img");
        section.append(img);
        img.src="http://localhost:3000/"+ craft.img;

    });
};

window.onload = () =>{
    showCrafts();
}; 