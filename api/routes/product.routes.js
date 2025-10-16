import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeaturedProduct,
} from "../controllers/product.controllers.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { adminRoute } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/recommendations", getRecommendedProducts);
router.get("/category/:category", getProductsByCategory);

router.post("/", protectRoute, adminRoute, createProduct);

router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);

router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
