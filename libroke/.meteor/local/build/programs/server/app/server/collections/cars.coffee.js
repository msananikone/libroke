(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collections/cars.coffee.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                       // 1
/*                                                                     // 1
    The cars collection                                                //
 */                                                                    //
var Cars;                                                              // 1
                                                                       //
Cars = new Meteor.Collection("cars");                                  // 1
                                                                       //
Meteor.publish("cars", function() {                                    // 1
  return Cars.find();                                                  // 10
});                                                                    // 9
                                                                       //
Cars.deny({                                                            // 1
  remove: function(userId, doc) {                                      // 15
    return false;                                                      // 16
  }                                                                    //
});                                                                    //
                                                                       //
Cars.allow({                                                           // 1
  insert: function(userId, doc) {                                      // 19
    return true;                                                       // 20
  },                                                                   //
  update: function(userId, doc) {                                      // 19
    return true;                                                       // 22
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.startup(function() {                                            // 1
  if (Cars.find().count() === 0) {                                     // 27
    Cars.insert({                                                      // 28
      make: "Volkswagen",                                              // 28
      model: "Beetle",                                                 // 28
      description: "A very dome shaped car",                           // 28
      coolness: 1                                                      // 28
    });                                                                //
    return Cars.insert({                                               //
      make: "Chevrolet",                                               // 29
      model: "Volt",                                                   // 29
      description: "An electric car!",                                 // 29
      coolness: 2                                                      // 29
    });                                                                //
  }                                                                    //
});                                                                    // 25
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=cars.coffee.js.map
