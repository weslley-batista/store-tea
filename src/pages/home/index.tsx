import { Car, NavBar, Product } from "@/components";
import { CartHook } from "@/hooks/cartHook";
import products from "@/mock";

function Home() {
  const { cart, addToCart } = CartHook();

  return (
    <>
      <div className="flex items-center justify-between px-20 py-10">
        <NavBar />
        
        <Car cart={cart} />
      </div>
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
            addToCart={addToCart}
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
