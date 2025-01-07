import { prismaClient } from "../prisma";

interface ProductResquest {
  name: string;
  price: string;

  avaliable: boolean;
}

class CreateProductService {
  async execute({ name, price, avaliable }: ProductResquest) {
   
    try {

      const product = await prismaClient.product.create({
        data: {
          name,
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
