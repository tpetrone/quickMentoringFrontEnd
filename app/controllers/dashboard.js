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
    adminClick(id) {
      this.transitionToRoute('dashboard.admin', id)
    },
    criarCategoria(nome) {
      return this.get('ajax').
      request("/categoria", { 
        contentType: 'application/json', 
        method:'post', 
        data: { nome } 
      }).then((categoria) => { 
        alert("Criado com sucesso"); 
        return categoria;
      });
    },
    criarAdmin(email) {
      return this.get('ajax').
      request("/usuario/admin", { 
        dataType: 'json', 
        method:'post', 
        data: { email } 
      }).then((admin) => { 
        alert("Criado com sucesso"); 
        return admin;
      });
    }
  }
});
