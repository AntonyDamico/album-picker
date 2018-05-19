const lastfm = new Lastfm();
const ui = new UI();

ui.searchBtn.addEventListener("click", e => {
  e.preventDefault();
  lastfm.searchAlbum({ album: ui.albumInput.value }, res => {
    ui.showAlbums(res);
  });
});

ui.results.addEventListener("click", e => {
  if (e.target.classList.contains("add-album")) {
    const selectedAlbum = e.target.parentElement;
    ui.addAlbum(selectedAlbum);
    lastfm.postAlbum(parseAlbumHTML(selectedAlbum));
  }
});

function parseAlbumHTML(elements) {
  let obj = {};
  obj.name = elements.querySelector('.album-name').textContent;
  obj.artist = elements.querySelector('.artist').textContent;
  obj.image = elements.querySelector('.album-image').getAttribute("src");
  return obj;
}
