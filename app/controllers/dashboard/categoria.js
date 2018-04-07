import Controller from '@ember/controller';

export default Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    apagar() {
      return this.get('ajax').
      request(`/categoria/${this.get('model.id')}`, { dataType: 'json', method:'delete' }).
      then(() => {
        alert("Apagado com sucesso");
        this.transitionToRoute('dashboard');
      })
    },

    salvar() {
      return this.get('ajax').
      request(`/categoria/${this.get('model.id')}`, { 
        dataType: 'json',
        method:'put',
        data: this.get('model')
      }).then(() => {
        alert("Alterado com sucesso");
        this.transitionToRoute('dashboard');
      })
    },
  }
});
