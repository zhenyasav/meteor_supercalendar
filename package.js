Package.describe({
  name: "zhenya:supercalendar",
  summary: "SuperCalendar",
  version: "0.7.1",
  git: "https://github.com/zhenyasav/meteor_supercalendar"
});

Npm.depends({
  'googleapis': '2.1.1',
  'google-auth-library': '0.9.6'
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.2');

  api.use([
    'underscore',
    'mongo',
    'coffeescript',
    'matb33:collection-hooks',
    'copleykj:mesosphere@0.1.14',
    'anti:modals@0.4.0']);
  
  // Client
  api.use([
    'startup',
    'templating',
    'session',
    'tracker',
    'preserve-inputs',
    'jquery',
    'less'
  ], 'client');

  api.addFiles([
    'client/lib/app.js',
    'client/stylesheets/calendar.less',
    'client/stylesheets/fullcalendar.css',
    'client/stylesheets/fullcalendar.print.css',
    'client/stylesheets/jquery-ui-1.10.3.custom.css',
    'client/views/calendar.html',
    'client/views/calendar.js'
  ], 'client');

  api.addFiles([
    'client/compatibility/fullcalendar.js',
    'client/compatibility/jquery-ui-1.10.3.custom.js'
  ], 'client', {raw: true});



  api.addFiles([
    'lib/models.coffee',
    'lib/forms.js'
  ]);


  // Google Calendar integration
  api.use(['service-configuration'], 'server');

  api.addFiles([
    'server/gcal.coffee'
    ], 'server');
  // end Google Calendar integration
  
  if (typeof api.export !== 'undefined') {
    api.export('Calendar');
    api.export('GoogleCalendarAdapter', ['server']);
    api.export('SuperCalendar', ['client']);
  }

});
