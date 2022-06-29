import osh from "../assets/img/osh.jpg";
import somsa from "../assets/img/somsa.jpg";
import shashlik from "../assets/img/shashlik.jfif";
import pizza from "../assets/img/pizza.jpeg";
import cocaCola from "../assets/img/cocaCola.jpg";
import pepsi from "../assets/img/pepsi.jpg";
const initialState = {
  products: [
    {
      id: 1,
      img: osh,
      name: "OSH",
      price: 20000,
      amount: 0,
    },
    {
      id: 2,
      img: somsa,
      name: "SOMSA",
      price: 10000,
      amount: 0,
    },
    {
      id: 3,
      img: shashlik,
      name: "SHASHLIK",
      price: 25000,
      amount: 0,
    },
    {
      id: 4,
      img: pizza,
      name: "PIZZA",
      price: 60000,
      amount: 0,
    },
    {
      id: 5,
      img: cocaCola,
      name: "COCA-COLA",
      price: 20000,
      amount: 0,
    },
    {
      id: 6,
      img: pepsi,
      name: "PEPSI",
      price: 15000,
      amount: 0,
    },
  ],
  basket: 0,
  sum: 0,
};

export default initialState;
