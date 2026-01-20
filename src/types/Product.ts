export type Product = {
  id: string;
  name: string;
  price: number;
  priceBefore: number;
  image: string;
  gift1: {name: string, desc?: string, price: number};
  gift2: {name: string, desc?: string, price: number};
  gift3: { name: string, desc?: string, price: number };
  freeDelivery: {
    desc: string, price: number
  }
};
