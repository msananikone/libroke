(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/server.coffee.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                       // 1
/*                                                                     // 1
    The main server file, general server side code should go here      //
 */                                                                    //
Meteor.users.allow({                                                   // 1
  update: function(userId, doc) {                                      // 9
    return userId === this.userId;                                     // 10
  }                                                                    //
});                                                                    //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=server.coffee.js.map
