module.exports = () => ({
  "strapi-csv-import-export": {
    config: {
      authorizedExports: [
        "api::about.about",
        "api::article.article",
        "api::author.author",
        "api::category.category",
        "api::global.global"
      ],
      authorizedImports: [
        "api::about.about",
        "api::article.article",
        "api::author.author",
        "api::category.category",
        "api::global.global"
      ]
    }
  }
});
