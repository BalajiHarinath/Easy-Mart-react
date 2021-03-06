import { Response } from "miragejs";

/**
 * All the routes related to Barns are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all brands in the db.
 * send GET Request at /api/brands
 * */

export const getAllBrandsHandler = function () {
  try {
    return new Response(200, {}, { brands: this.db.brands });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};