Calendar = new Mongo.Collection('calendar');

Calendar.allow({
	insert: function() { return true; }
});
