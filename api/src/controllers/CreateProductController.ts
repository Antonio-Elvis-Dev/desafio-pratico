import { CreateProductService } from "../services/CreateProductService";
import { Request, Response } from "express";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price,description, avaliable } = req.body;

    const createProductService = new CreateProductService();

    try {
      const product = await createProductService.execute({
        name,
        description,
        price,
        avaliable,
      });

      return res.status(201).json(product);

    } catch (error) {
      console.log("error", error);
      return res.status(400).json({ 
        message: error instanceof Error ? error.message : "Erro desconhecido",

      });
    }
  }
}

export { CreateProductController };
