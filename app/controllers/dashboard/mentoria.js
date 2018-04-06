import Controller from '@ember/controller';

export default Controller.extend({
  ajax: Ember.inject.service(),

  actions: {
    apagar() {
      return this.get('ajax').
      request(`/mentoria/${this.get('model.id')}`, { dataType: 'json', method:'delete' }).
      then(() => {
        alert("Apagado com sucesso");
        this.transitionToRoute('dashboard');
      })
    }
  }
});
