class UI {
  constructor() {
    this.albumInput = document.getElementById("album-input");
    this.searchBtn = document.getElementById("search-button");
    this.results = document.getElementById("results");
    this.userAlbums = document.getElementById("user-albums");
  }

  showAlbums(albums) {
    let output = "";
    albums.forEach(album => {
      output += `
      <div class="album">
        <h1 class="album-name">${album.name}</h1>
        <h2 class="artist">${album.artist}</h2>
        <img src="${album.image[3]["#text"]}" class="album-image"></img>
        <button type="submit" class="add-album">Add Album</button>
      </div>
      `;
    });
    this.results.innerHTML = output;
  }

  addAlbum(album) {
    const button = album.querySelector(".add-album");
    button.parentNode.removeChild(button);
    this.userAlbums.appendChild(album);
  }
}
