export default class Basket {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;

  constructor() {
    this.id = 0
    this.title = ""
    this.image = ""
    this.price = 0
    this.quantity = 1
    this.totalPrice = 0;
  }

}