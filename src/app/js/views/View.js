export default class View {
  constructor(element) {
    this.element = element;
  }

  update(data) {
    this.element.innerHTML = this.template(data);
    return data;
  }
}
