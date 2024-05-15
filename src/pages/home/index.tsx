import { NavBar, Product } from "@/components";
import products from "@/mock";

function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full flex flex-wrap gap-10 justify-around p-8">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id as never}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
            origin={product.origin}
            addToCart={() => {
              alert("Adicionado ao carrinho");
            }}
            viewMore={() => {
              alert("Ver mais");
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
