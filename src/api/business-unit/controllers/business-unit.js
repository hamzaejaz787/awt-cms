"use strict";

/**
 * business-unit controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::business-unit.business-unit",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::business-unit.business-unit")
        .findOne({
          where: { slug: id },
          populate: {
            Partners: {
              populate: {
                Partner: {
                  populate: {
                    Title: true,
                    Description: true,
                    Image: {
                      fields: ["name", "url", "alternativeText"],
                    },
                  },
                },
              },
            },
            Services: {
              populate: {
                Service: {
                  populate: {
                    Title: true,
                    Description: true,
                    Image: {
                      fields: ["name", "url", "alternativeText"],
                    },
                  },
                },
              },
            },
            CardImage: { fields: ["name", "url", "alternativeText"] },
            BannerImage: { fields: ["name", "url", "alternativeText"] },
            Image1: { fields: ["name", "url", "alternativeText"] },
            Image2: { fields: ["name", "url", "alternativeText"] },
            contact: { populate: true },
          },
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
