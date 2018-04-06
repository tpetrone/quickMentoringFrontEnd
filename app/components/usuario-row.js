import Component from '@ember/component';

export default Component.extend({
  tagName: "tr",

  click() {
    this.get('userClick')(this.get('usuario.id'));
  }
});
