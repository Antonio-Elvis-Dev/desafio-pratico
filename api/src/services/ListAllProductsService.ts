import { prismaClient } from "../prisma";

class ListAllProductsServices{
    async execute(){
        const finfManyProducts = await prismaClient.product.findMany()

        return finfManyProducts
    }
}

export {ListAllProductsServices}