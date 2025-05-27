// script.js
const data = {
  characters: [
    {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
},
{
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
}
  ]
};
// script.js
const charactersContainer = document.getElementById("characters-container");
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
        <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
      `;
      charactersContainer.appendChild(card);
    });
  });
