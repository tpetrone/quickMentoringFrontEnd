import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    ajax: Ember.inject.service(),

    beforeModel() {
      console.log(this.get('session.isAuthenticated'))
      if (!this.get('session.isAuthenticated')) { return this.transitionTo('login'); }
    },

    model() {
      const mentorias = this.get('ajax').request('/mentoria', { dataType: 'json' });
      const usuarios = this.get('ajax').request('/usuario', { dataType: 'json' });
      const aplicacoes = this.get('ajax').request('/aplicacao', { dataType: 'json' });
      const categorias = this.get('ajax').request('/categoria', { dataType: 'json' });

      return RSVP.hash({ mentorias, usuarios, aplicacoes, categorias });
    },

    actions: {
      logout() {
        this.get('session').close().then(() => {
          this.transitionTo('login')
        })    
      },
    }
});
