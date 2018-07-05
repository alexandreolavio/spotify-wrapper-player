export default class Helper {
  constructor() {
    throw new Error('A classe Helper não pode ser instanciada');
  }

  static removeDuplicateSpaces(str = '') {
    return str.replace(/\s{2,}/g, ' ');
  }
}
