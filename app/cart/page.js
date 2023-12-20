import About from "@/components/about";
import CartItems from "@/components/cartItems";
import Navbar from "@/components/navbar";

export default function Cart() {
    return (
        <>
            <Navbar />
            <nav className="flex bg-gray-100 py-2 border pl-[2vw]" aria-label="Breadcrumb">
                <a className="font-semibold text-blue-500 underline" href="/">Home</a>
                <p className="mx-2 text-gray-400">/</p>
                <a className="font-semibold text-blue-500 underline" href="/cart">Cart</a>
            </nav>
            <div className="container mx-auto px-6 min-h-screen mt-10">
                <h1 className="text-3xl font-bold mb-8">Cart</h1>
                <ul class="divide-y divide-gray-200">
                    <CartItems product={{
                        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        category: "men's clothing",
                        price: 109.95,
                    }} />
                </ul>

                <p className="mt-5 text-center">no more...</p>
            </div>
            <About />
        </>
    )
}