import { prismaClient } from "../prisma";

interface ProductResquest {
  name: string;
  price: string;
  description:string;
  avaliable: boolean;
}

class CreateProductService {
  async execute({ name, price, avaliable, description }: ProductResquest) {
   
    try {

      const product = await prismaClient.product.create({
        data: {
          name,
          description,
          price: Number(price),
          avaliable,
          
        },
      });

      return product;
    } catch (error) {
      console.log("error ", error);
    }
  }
}

export { CreateProductService };
