Package.describe({
  name: "zhenya:supercalendar",
  summary: "SuperCalendar",
  version: "0.7.1",
  git: "https://github.com/zhenyasav/meteor_supercalendar"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.2');

  // Other packages
  api.use('copleykj:mesosphere@0.1.14');
  api.use('anti:modals@0.4.0');
  // Client
  api.use([
    'startup',
    'templating',
    'session',
    'tracker',
    'preserve-inputs',
    'jquery',
    'less',
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

  // Both
  api.use([
    'underscore'
  ]);

  api.addFiles([
    'lib/models.js',
    'lib/forms.js'
  ]);

  if (typeof api.export !== 'undefined') {
    api.export('Calendar');
    api.export('SuperCalendar', ['client']);
  }

});
