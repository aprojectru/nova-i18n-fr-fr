Package.describe({
  name: "nova:i18n-ru-ru",
  summary: "Telescope i18n package (ru_RU)",
  version: "0.26.2-nova",
  git: "https://github.com/TelescopeJS/telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");
  
  api.use([
    'nova:core@0.26.2-nova'
  ]);

  api.use([
    'softwarerero:accounts-t9n'
  ], {weak: true});

  api.addFiles([
    'lib/ru_RU.js'
  ], ["client", "server"]);
});
