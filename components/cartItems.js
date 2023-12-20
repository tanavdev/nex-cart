"use client";
import { useState } from "react";

export default function CartItems({ product }) {
    const [quantity, setQuatity] = useState(1)
    return (
        <li class="pb-3 select-none sm:pb-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                    <img class="w-[10rem]" src={product.image} alt="cart image" />
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-xl font-medium text-black">
                        {product.name}
                    </p>
                    <p class="text-sm my-2 bg-yellow-400 text-white w-fit px-3">
                        {product.category}
                    </p>
                    <p class="text-2xl font-semibold text-gray-800">
                        ${product.price}
                    </p>
                </div>
                <div class="items-center text-base text-gray-900">
                    <div className="border b rounded-full flex flex-col items-center">
                        <button onClick={() => {setQuatity(quantity+1)}} className="duration-100 hover:bg-green-200 w-8 h-8 rounded-full">+</button>
                        <p>{quantity}</p>
                        <button onClick={() => {
                            if(quantity > 1) {
                                setQuatity(quantity-1)
                            }
                            }} className="duration-100 hover:bg-red-200 w-8 h-8 rounded-full">{quantity>1 ? ("-") : ("d")}</button>
                    </div>
                </div>
            </div>
        </li>
    );
};