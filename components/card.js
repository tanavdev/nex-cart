import { Star } from 'react-feather';

export default function ProductCard({ product }) {
    return (
      <a href={`/product/${product.id}`}>
      <div className="select-none max-w-xs bg-white h-fit w-fit p-2 overflow-hidden hover:border border-black">
        <img className="w-full border border-2" src={product.thumbnail} alt={product.title} />

        <div className="px-2 pt-2 ">
          <div className="font-bold text-2xl">{product.title}</div>
        </div>
        <div className="flex px-2 items-center content-center">
          <Star color="orange" size={16}/>
          <p className="ml-1 text-gray-700 text-base">{product.rating}</p>
        </div>
        <div className="flex items-center content-center mb-1">
          <span className="px-2 text-lg font-semibold text-gray-700">
          ${product.price}
          </span>
          {product.discountPercentage && <span className="-skew-x-12 bg-red-500 px-2 text-white">{product.discountPercentage}% off</span>}
          
        </div>
      </div>
      </a>
    );
  };