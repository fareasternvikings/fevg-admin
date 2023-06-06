module.exports = ({ env }) => ({
  //...
  'import-export-entries': {
    enabled: true,
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          // "api::category.category",
          // "api::article.article",
          // "api::global.global",
          // "api::homepage.homepage",
        ],
      },
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },
  // sentry: {
  //   enabled: true,
  //   config: {
  //     dsn: env('SENTRY_DSN'),
  //     sendMetadata: true,
  //   },
  // },

  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 1000000,
      },
    },
  },
  //...
});
