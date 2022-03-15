import { CategoryModel } from "../category.model";
import { SizeModel } from "../size.model";


export class Product{
    constructor(
        public name: string,
        public quantity: number,
        public price: number,
        public description: string,
        public creationDate: string,
        public category: CategoryModel,
        public size: SizeModel
         ) {}
}