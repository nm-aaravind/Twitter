import express from "express";
import v1ApiRoutes from "./v1/routes.js";
export const router=express.Router()
router.use('/v1',v1ApiRoutes)