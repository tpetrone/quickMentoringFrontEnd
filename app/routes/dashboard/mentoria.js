import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  ajax: Ember.inject.service(),
  
  model(params) {
    const mentoria = this.get('ajax').request(`/mentoria/${params.mentoria_id}`, { dataType: 'json' });
    const aplicacoes = this.get('ajax').request(`mentoria/${params.mentoria_id}/aplicacoes`, { dataType: 'json' });

    return RSVP.hash({mentoria, aplicacoes})
  }
});
