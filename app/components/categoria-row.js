import Component from '@ember/component';

export default Component.extend({
  tagName: "tr",

  click() {
    this.get('categoriaClick')(this.get('categoria.id'));
  }
});
