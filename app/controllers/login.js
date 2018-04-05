import Controller from '@ember/controller';

export default Controller.extend({
    session: Ember.inject.service(),
    
    actions: {
        login() {
            this.get('session').open('jwt', {email: "email", password: "password"}).then(result => {
                console.log("oi", result)
            })       
        }
    }
});
