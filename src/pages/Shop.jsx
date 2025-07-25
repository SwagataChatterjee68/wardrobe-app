import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncUpdateUser } from '../store/actions/UserAction';
import { toast } from "react-toastify";

const ShopPage = () => {
  const { category } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  const onAddToCart = (product) => {
    if (!user) return;

    const copyUser = { ...user, cart: [...user.cart] };
    const index = copyUser.cart.findIndex((c) => c?.product?.id === product.id);
    if (index === -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        product,
        quantity: copyUser.cart[index].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
    toast.success("Added to Cart");
  };

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
          <div
            key={product.id}
            className="bg-[#111111] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition transform duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <h2 className="text-white font-semibold text-lg line-clamp-2 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                  <i className="ri-money-rupee-circle-line text-lg"></i>{product.price}
                </p>
                <p className="text-yellow-400 text-sm">⭐ {product.rating?.rate ?? "N/A"}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <Link
                  to={`/products/${product.id}`}
                  className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-md text-center text-sm"
                >
                  Know More
                </Link>

                {user && (
                  <button
                    onClick={() => onAddToCart(product)}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-black rounded-md text-center text-sm"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
