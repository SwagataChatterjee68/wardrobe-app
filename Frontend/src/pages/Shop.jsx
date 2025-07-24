import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopPage = () => {
  const { category } = useParams();
  const products = useSelector((state) => state.productReducer.products);

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        No products found in this category.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24 px-6 mb-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center capitalize">
        {category.replace(/-/g, " ")}
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-[#111111] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition transform duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <h2 className="text-white font-semibold text-lg line-clamp-2 mb-2">{product.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4">{product.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                  <i className="ri-money-rupee-circle-line text-lg "></i>{product.price}
                </p>
                <p className="text-yellow-400 text-sm mb-10">⭐ {product.rating?.rate ?? "N/A"}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;