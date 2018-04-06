import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    const usuario = this.get('ajax').request(`/usuario/${params.usuario_id}`, { dataType: 'json' });
    return usuario
  }
});
