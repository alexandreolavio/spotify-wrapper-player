import SpotifyWrapper from '../services/SpotifyWrapper';
import AlbumList from '../views/AlbumListView';

class SearchController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this.searchInput = $('#search-input');
    this.searchForm = $('#search-form');
    this.albumListView = new AlbumList($('#album-list'));
  }

  makeRequest() {
    SpotifyWrapper.instance()
      .searchAlbums(this.searchInput.value)
      .then(data => this.albumListView.update(data.albums.items));
  }

  searchEnterTrigger() {
    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.makeRequest();
    });
  }
}

export default new SearchController();
