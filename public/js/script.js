const lastfm = new Lastfm();
const ui = new UI();

ui.searchBtn.addEventListener("click", e => {
  e.preventDefault();
  lastfm.searchAlbum({ album: ui.albumInput.value }, res => {
    ui.showAlbums(res);
  });
});

ui.results.addEventListener("click", e => {
  if (e.target.className === "result-image") {
    const selectedAlbum = e.target.parentElement;
    ui.addAlbum(selectedAlbum);
    lastfm.postAlbum(parseAlbumHTML(selectedAlbum.childNodes));
  }
});

function parseAlbumHTML(elements) {
  let obj = {};
  obj.name = elements[1].textContent;
  obj.image = elements[3].getAttribute("src");
  return obj;
}
