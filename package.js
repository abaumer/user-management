Package.describe({
  name: 'abaumer:user-management',
  summary: 'Basic pages to manage 3 user types: admin, manager, adn staff. Includes pages for: user profiles, user management, admin settings, manager settings. Relies primarily on alanning:roles and accounts-ui and others.',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('abaumer:user-management.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('abaumer:user-management');
  api.addFiles('abaumer:user-management-tests.js');
});
