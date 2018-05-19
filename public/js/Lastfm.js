// const querystring = require("querystring");

class Lastfm {
  constructor() {
    this.apiKey = "a171ec3fcfd66f5a44df363482f9caf0";
    this.baseUrl = "https://ws.audioscrobbler.com/2.0/";
  }

  async searchAlbum(info, callback) {
    const params = {
      method: "album.search",
      album: info.album
    };
    let url = this._buildQuery(params);
    const response = await fetch(url);
    const responseData = await response.json();
    callback(responseData.results.albummatches.album);
  }

  async postAlbum(data) {
    const rawResponse = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  _buildQuery(params) {
    Object.assign(params, {
      api_key: this.apiKey,
      format: "json"
    });
    const query = this._joinParams(params);
    return `${this.baseUrl}?${query}`;
  }

  _joinParams(params) {
    return Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
  }
}
