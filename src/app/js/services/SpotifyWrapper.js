import SpotifyWrapperApi from 'api-spotify-wrapper';

let sfr;
const singleton = () => {
  if (!sfr) {
    sfr = new SpotifyWrapperApi(
      'BQBkJs3OIwOlgu2kFndq1CEtzfYwCliAx_KLumiuuLKq_5zq_tYInRnAGMO71Yk1HRvY89tPPKjDDrfer1e6Qf9IoeLdqJU9KqDjTgOrT5ou-du8EYCk_82b8grk31U3-8sDRmAkY3shnuVUtqebSE0PpGBlc-4XhigYcSLFHGi_'
    );
  }

  return sfr;
};

export default class SpotifyWrapper {
  constructor() {
    throw new Error('A classe SpotifyWrapper não pode ser instanciada');
  }

  static instance() {
    return singleton();
  }
}
