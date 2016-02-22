(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collections/colors.coffee.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                       // 1
/*                                                                     // 1
    The colors collection                                              //
 */                                                                    //
var Colors;                                                            // 1
                                                                       //
Colors = new Meteor.Collection("colors");                              // 1
                                                                       //
Meteor.publish("colors", function() {                                  // 1
  return Colors.find();                                                // 10
});                                                                    // 9
                                                                       //
Colors.deny({                                                          // 1
  remove: function(userId, doc) {                                      // 15
    return false;                                                      // 16
  },                                                                   //
  update: function(userId, doc) {                                      // 15
    return false;                                                      // 18
  }                                                                    //
});                                                                    //
                                                                       //
Colors.allow({                                                         // 1
  insert: function(userId, doc) {                                      // 21
    return true;                                                       // 22
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.startup(function() {                                            // 1
  if (Colors.find().count() === 0) {                                   // 27
    Colors.insert({                                                    // 28
      name: "red"                                                      // 28
    });                                                                //
    return Colors.insert({                                             //
      name: "blue"                                                     // 29
    });                                                                //
  }                                                                    //
});                                                                    // 25
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=colors.coffee.js.map
