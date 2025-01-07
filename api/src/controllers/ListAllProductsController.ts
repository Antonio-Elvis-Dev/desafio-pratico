
import { Request, Response } from "express";
import { ListAllProductsServices } from "../services/ListAllProductsService";

class ListAllProductsController{
    async handle(req:Request, res:Response){

        const listAllProducts = new ListAllProductsServices()

        const products = await listAllProducts.execute()

        return res.json(products)
    }
}

export {ListAllProductsController}