export default Ember.Object.extend({
  open: function(authentication){
    console.log(authentication)
    return new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax({
        url: 'http://private-8ab80-incube.apiary-mock.com/api/usuario/login',
        data: { email: "email", password: "password" },
        dataType: 'json',
        method: 'post',
        success: function(result) {
          console.log(result)
          resolve
        },
        error: Ember.run.bind(null, reject)
      });
    }).then(function(user){
      console.log(user)
      return user;
    });
  }
});