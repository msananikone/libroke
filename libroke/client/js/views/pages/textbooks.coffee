Meteor.startup ->

    Session.setDefault('textbooksTitle', '')
    Session.setDefault('textbooksPrice', '')

    Template.textbooks.events =
        # Prevent the page reloading for links
        "click a": (e) ->
            App.router.aReplace(e)

        'submit .form-textbook': (event, template) ->
            event.preventDefault()
            title = Session.get('textbooksTitle')
            price = Session.get('textbooksPrice')
            Cars.insert({title: title, price: price});

        'input .title': (event, template) ->
            Session.set('textbooksTitle', event.target.value)

        'input .price': (event, template) ->
            Session.set('textbooksPrice', event.target.value)

    Template.textbooks.helpers
        textbookPending: ->
            return {
                title: Session.get('textbooksTitle')
                price: Session.get('textbooksPrice')
            }
