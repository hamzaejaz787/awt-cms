"use strict";

/**
 * newsletter controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::newsletter.newsletter",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::newsletter.newsletter")
        .findOne({
          where: { slug: id },
          populate: {
            CoverImage: { fields: ["name", "url", "alternativeText"] },
            Pages: { fields: ["name", "url", "alternativeText"] },
          },
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
