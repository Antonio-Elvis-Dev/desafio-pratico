import { Router, Request, Response } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { ListAllProductsController } from "../controllers/ListAllProductsController";

const router = Router();

router.post("/product",(req,res) => {new CreateProductController().handle(req,res)});
router.get("/products",(req,res) => {new ListAllProductsController().handle(req,res)});

export { router };
