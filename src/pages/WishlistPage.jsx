import { Trash2 } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } =
    useWishlist();

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        My Wishlist
      </h1>

      <div className="bg-gray-100 rounded-xl p-5">

        <div className="grid grid-cols-4 font-semibold text-center py-4">
          <p>Product</p>
          <p>Details</p>
          <p>Status</p>
          <p>Delete</p>
        </div>

        {wishlistItems.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-4 items-center border-t py-8"
          >
            <img
              src={product.image}
              alt=""
              className="w-40 mx-auto"
            />

            <div className="text-center">
              <h3 className=" text-xs md:text-2xl font-bold">
                {product.title}
              </h3>

              <p>${product.price[0]}</p>
            </div>

            <div className="text-center">
              <button
                className="bg-black text-white px-3 md:px-6 py-3 md:text-xl text-[8px] rounded-full"
              >
                Add To Cart
              </button>
            </div>

            <div className="flex justify-center">
              <Trash2
                className="cursor-pointer text-red-500"
                onClick={() =>
                  removeFromWishlist(product.id)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
