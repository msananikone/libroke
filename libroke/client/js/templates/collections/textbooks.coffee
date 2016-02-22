Meteor.startup ->

    Template.collectionTextbooks.helpers
        cars: ->
            return Textbooks.find({})
