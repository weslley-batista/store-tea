import type ProductType from "@/types/product";

const products: ProductType[] = [
  {
    id: 1,
    name: "Café Arábica Gourmet",
    description:
      "Café arábica de alta qualidade, cultivado em altitude e torrado artesanalmente para uma experiência única de sabor.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhfGVufDB8fDB8fHww",
    category: "Café",
    origin: "Brasil",
  },
  {
    id: 2,
    name: "Chá Verde Matcha Orgânico",
    description:
      "Chá verde matcha de origem orgânica, rico em antioxidantes e com um sabor suave e refrescante.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhfGVufDB8fDB8fHww",
    category: "Chá",
    origin: "Japão",
  },
  {
    id: 3,
    name: "Cafeteira French Press",
    description:
      "Cafeteira de vidro resistente com prensa francesa, ideal para preparar café gourmet em casa de forma prática e elegante.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1573784540576-21ddeff9479b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Acessórios",
    origin: "França",
  },
  {
    id: 4,
    name: "Chá de Hibisco Orgânico",
    description:
      "Chá de hibisco orgânico, feito com flores naturais, conhecido por suas propriedades antioxidantes e sabor refrescante.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1504382103100-db7e92322d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Chá",
    origin: "Brasil",
  },
  {
    id: 5,
    name: "Cápsulas de Café Espresso Intenso",
    description:
      "Cápsulas de café espresso intenso, compatíveis com máquinas Nespresso, produzido a partir de grãos selecionados para um sabor encorpado e marcante.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1597481499666-130f8eb2c9cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Café",
    origin: "Itália",
  },
  {
    id: 6,
    name: "Infusor de Chá em Silicone",
    description:
      "Infusor de chá em forma de silicone, ideal para preparar chá solto de forma prática e sem desperdício.",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Acessórios",
    origin: "China",
  },
];

export default products;
