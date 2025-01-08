import { prismaClient } from "../prisma";

class ListAllProductsServices{
    async execute(){
        const finfManyProducts = await prismaClient.product.findMany({
            orderBy: {
                createdAt:"desc"
            }
        })

        return finfManyProducts
    }
}

export {ListAllProductsServices}