// entity/Product.ts

// Enum representing the possible product types
/*export enum ProductType {
  Maison = 'maison',
  Jardin = 'jardin',
  Usine = 'usine',
  Informatique = 'informatique',
}
*/
export class Product {
  id!: number;
  name!: string;
  price!: number;
  description!: string;
  //type: { [key in ProductType]?: boolean } = {}; // Initialize product type property
  option?: string;
  genre?: string;
  checkBoxOption?: boolean;
}
