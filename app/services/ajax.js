// app/services/ajax.js
 
import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
 
export default AjaxService.extend({
  session: Ember.inject.service(),

  host: "http://private-be39f-incube.apiary-mock.com/api",
  
  headers: Ember.computed('session.currentUser.accessToken', {
    get() {
      let headers = {};
      const authToken = this.get('session.currentUser.accessToken');
      if (authToken) {
        headers['auth-token'] = authToken;
      }
      return headers;
    }
  })
});