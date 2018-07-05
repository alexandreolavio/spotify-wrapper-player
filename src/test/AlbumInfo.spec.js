import 'jsdom-global/register';
import { describe, it } from 'mocha';
import { expect } from 'chai';

import AlbumInfoView from '../app/js/views/AlbumInfoView';
import Helper from '../app/js/helpers/Helper';

describe('AlbumInfo', () => {
  const data = {
    id: '6peEdPVO73WtgGah5sEhX4',
    album_type: 'album',
    name: 'The Essential Incubus',
    type: 'album',
    artists: [{
      name: 'Incubus',
    }],
    images: [{
      height: 640,
      url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
      width: 640,
    }, {
      height: 300,
      url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
      width: 300,
    }, {
      height: 64,
      url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
      width: 64,
    }],
    tracks: {
      total: 18,
    },
  };

  const markup = `
    <img class="album-image" src="https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757" alt="The Essential Incubus">
    <p class="album-title">The Essential Incubus</p>
    <p class="album-artist">Incubus</p>
    <p class="album-counter">18 Músicas</p>
  `;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    const albumInfoView = new AlbumInfoView(element);
    albumInfoView.update(data);

    expect(Helper.removeDuplicateSpaces(element.innerHTML))
      .to.be.eql(Helper.removeDuplicateSpaces(markup));
  });

  it('should return the data', () => {
    const element = document.createElement('div');
    const albumInfoView = new AlbumInfoView(element);

    expect(albumInfoView.update(data)).to.be.eql(data);
  });
});
