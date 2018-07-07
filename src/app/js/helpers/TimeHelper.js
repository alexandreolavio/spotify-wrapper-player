export default class TimeHelper {
  constructor() {
    throw new Error('A classe TimeHelper não pode ser instanciada');
  }

  static convertToTime(duration) {
    let s = parseInt((duration / 1000) % 60, 10);
    const m = parseInt((duration / (1000 * 60)) % 60, 10);

    s = (s < 10) ? `0${s}` : s;

    return `${m}:${s}`;
  }
}
