gapi = Npm.require 'googleapis'
gauth = Npm.require 'google-auth-library'
calendar = gapi.calendar 'v3'

Meteor.methods

	testGcal: ->
		if not @userId
			throw new Meteor.Error "not logged in"

		{clientId, secret} = ServiceConfiguration.configurations.find
			service: 'google'
		.fetch()

		redirectUrl = "http://localhost:3000/_oauth/google"

		user = Meteor.users.findOne @userId

		auth = new gauth()
		oauth2 = new auth.OAuth2 clientId, secret, redirectUrl
		
		# todo: resume token!
		oauth2.credentials = 
			access_token: user.services.google.accessToken

		calendar.events.list 
			auth: oauth2
			calendarId: 'primary'
			timeMin: (new Date()).toISOString()
			maxResults: 10
			singleEvents: true
			orderBy: 'startTime'
		, (err, response) ->
			return console.log 'calendar api error', err if err
			console.log 'calendar api response', response

			