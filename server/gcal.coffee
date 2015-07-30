g = Npm.require 'googleapis'

Configuration = new Mongo.Collection 'config'

class GoogleCalendarAdapter
	
	defaults:
		scopes: ['https://www.googleapis.com/auth/calendar.readonly']

		constructor: (options) ->
			@options = _.extend {}, @defaults, options

			authorize = (credentials, callback) ->
				clientSecret = credentials.installed.client_secret
				clientId = credentials.installed.client_id
				redirectUrl = credentials.installed.redirect_uris[0]
				auth = new googleAuth
				oauth2Client = new (auth.OAuth2)(clientId, clientSecret, redirectUrl)
				# Check if we have previously stored a token.
				fs.readFile TOKEN_PATH, (err, token) ->
					if err
						getNewToken oauth2Client, callback
					else
						oauth2Client.credentials = JSON.parse(token)
						callback oauth2Client
						return
						return


