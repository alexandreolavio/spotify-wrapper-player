import TimeHelper from '../helpers/TimeHelper';
import View from './View';

export default class AlbumTracks extends View {
  constructor(element) {
    super(element);
  }

  template(tracks) {
    return tracks.map(track => `
      <div class="music" data-track-preview="${track.preview_url}">
        <p class="music-number">${track.track_number}</p>
        <p class="music-title">${track.name}</p>
        <p class="music-duration">${TimeHelper.convertToTime(track.duration_ms)}</p>
      </div>`).join('');
  }
}
