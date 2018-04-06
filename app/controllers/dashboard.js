import Controller from '@ember/controller';
import Materialize from 'materialize';

export default Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    userClick(id) {
      this.transitionToRoute('dashboard.usuario', id)
    },
    mentoriaClick(id) {
      this.transitionToRoute('dashboard.mentoria', id)
    },
    categoriaClick(id) {
      this.transitionToRoute('dashboard.categoria', id)
    },
    criarCategoria(nome) {
      return this.get('ajax').
      request("/categoria", { 
        dataType: 'json', 
        method:'post', 
        data: { nome } 
      }).then((categoria) => { 
        alert("Criado com sucesso"); 
        return categoria;
      });
    }
  }
});
