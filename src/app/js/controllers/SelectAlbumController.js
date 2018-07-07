import SpotifyWrapper from '../services/SpotifyWrapper';
import AlbumInfoView from '../views//AlbumInfoView';
import AlbumTracksView from '../views/AlbumTracksView';

class SelectAlbumTrigger {
  constructor() {
    const $ = document.querySelector.bind(document);
    this.listAlbums = $('#album-list');
    this.albumInfoView = new AlbumInfoView($('#album-info'));
    this.albumTracksView = new AlbumTracksView($('#album-tracks'));
  }

  makeRequest(albumId) {
    SpotifyWrapper.instance()
      .album(albumId)
      .then(data => this.albumInfoView.update(data))
      .then(data => this.albumTracksView.update(data.tracks.items));
  }

  selectAlbumTrigger() {
    this.listAlbums.addEventListener('click', (e) => {
      const target = e.target;
      this.makeRequest(target.getAttribute('data-album-id'));
    });
  }
}

export default new SelectAlbumTrigger();
