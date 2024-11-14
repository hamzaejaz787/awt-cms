"use strict";

/**
 * corporate-profile controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::corporate-profile.corporate-profile",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::corporate-profile.corporate-profile")
        .findOne({
          where: { slug: id },
          populate: {
            CorporateProfile: { fields: ["name", "url", "alternativeText"] },
          },
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
