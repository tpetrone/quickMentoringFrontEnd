import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    ajax: Ember.inject.service(),

    beforeModel() {
      if (!this.get('session.isAuthenticated')) { return this.transitionTo('login'); }
    },

    model() {
      console.log('model')
      const usuarios = this.get('ajax').request('/usuario');
      const mentorias = this.get('ajax').request('/mentoria');
      const aplicacoes = this.get('ajax').request('/aplicacao');
      const categorias = this.get('ajax').request('/categoria');

      return RSVP.hash({ mentorias, usuarios, aplicacoes, categorias, aplicacoes });
    },

    actions: {
      logout() {
        this.get('session').close().then(() => {
          this.transitionTo('login')
        })    
      },
    }
});
