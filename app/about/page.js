import Navbar from "@/components/navbar";

export default function Cart() {
    return (
        <>
            <Navbar />
            <nav className="flex bg-gray-100 py-2 border pl-[2vw]" aria-label="Breadcrumb">
                <a className="font-semibold text-blue-500 underline" href="/">Home</a>
                <p className="mx-2 text-gray-400">/</p>
                <a className="font-semibold text-blue-500 underline" href="/about">About</a>
            </nav>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">About Us</h1>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    efficitur aliquam varius. Integer vehicula, justo id pellentesque
                    dapibus, odio arcu viverra felis, eu suscipit purus arcu at lorem.
                    Curabitur at magna a libero viverra dignissim.
                </p>
            </div>
        </>
    )
}