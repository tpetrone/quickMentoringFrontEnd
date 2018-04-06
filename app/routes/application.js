import Route from '@ember/routing/route';

export default Route.extend({
    session: Ember.inject.service(),

    beforeModel() {
      return this.get("session").fetch().catch(() => {});
    }
});
