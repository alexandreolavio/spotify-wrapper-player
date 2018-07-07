import { describe, it } from 'mocha';
import 'jsdom-global/register';
import { expect } from 'chai';

import AlbumTracksView from '../app/js/views/AlbumTracksView';
import TimeHelper from '../app/js/helpers/TimeHelper';
import Helper from '../app/js/helpers/Helper';

describe('AlbumTracks', () => {
  const data = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
  ];

  const data2 = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
  ];

  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">${TimeHelper.convertToTime(238733)}</p>
    </div>`;

  const markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">${TimeHelper.convertToTime(238733)}</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Around The World</p>
      <p class="music-duration">${TimeHelper.convertToTime(238733)}</p>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    const albumTracksView = new AlbumTracksView(element);
    albumTracksView.update(data);

    expect(Helper.removeDuplicateSpaces(element.innerHTML))
      .to.be.eql(Helper.removeDuplicateSpaces(markup));
  });

  it('should create and append the markup when more than 1 item', () => {
    const element2 = document.createElement('div');
    const albumTracksView = new AlbumTracksView(element2);
    albumTracksView.update(data2);

    expect(Helper.removeDuplicateSpaces(element2.innerHTML))
      .to.be.eql(Helper.removeDuplicateSpaces(markup2));
  });
});
