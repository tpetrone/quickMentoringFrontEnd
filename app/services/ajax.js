// app/services/ajax.js
 
import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
 
export default AjaxService.extend({
  session: Ember.inject.service(),

  host: "http://quickmentoring-001-site1.htempurl.com/api/",
  
  headers: Ember.computed('session.currentUser.accessToken', {
    get() {
      let headers = {
        'Content-Type': 'application/vnd.api+json',
      };
      const authToken = this.get('session.accessToken');
      if (authToken) {
        headers['Authorization'] = "Bearer " + authToken;
      }
      return headers;
    }
  })
});