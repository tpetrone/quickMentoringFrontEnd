import Component from '@ember/component';

export default Component.extend({
  tagName: "tr",

  click() {
    this.get('mentoriaClick')(this.get('mentoria.id'));
  }
});
