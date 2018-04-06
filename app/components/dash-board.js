import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  nomeCategoria: "",

  didInsertElement() {
    return $('.collapsible').collapsible();
  },

  actions: {
    criarCategoria() {
      this.get('criarCategoria')(this.get('nomeCategoria')).then((categoria) => {
        this.set('nomeCategoria', "");
        this.get('model.categorias').pushObject(categoria);
        console.log(this.get('model.categorias'))
      });
    }    
  }
});
