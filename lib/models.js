Calendar = new Mongo.Collection('calendar');

Calendar.allow({
	insert: function() { return true; },
	remove: function() { return true; },
	update: function() { return true; }
});
