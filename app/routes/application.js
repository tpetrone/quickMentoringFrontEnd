import Route from '@ember/routing/route';

export default Route.extend({
    session: Ember.inject.service(),

    beforeModel() {
        console.log(1)
        return this.get("session").fetch().catch(() => {});
    }
});
