import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),
  
  model(params) {
    const mentoria = this.get('ajax').request(`/mentoria/${params.mentoria_id}`, { dataType: 'json' });
    return mentoria;
  }
});
