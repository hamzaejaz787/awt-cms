"use strict";

/**
 * gallery controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::gallery.gallery", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::gallery.gallery").findOne({
      where: { slug: id },
      populate: {
        cover: { fields: ["name", "url", "alternativeText"] },
        GalleryItems: { fields: ["name", "url", "alternativeText"] },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
