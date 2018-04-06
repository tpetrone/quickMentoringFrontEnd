import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    const categoria = this.get('ajax').request(`/categoria/${params.categoria_id}`, { dataType: 'json' });
    return categoria;
  }
});
