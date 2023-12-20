export default function Navbar() {
  return (
    <nav className="bg-blue-500 w-scren py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a className="text-white text-xl font-semibold" href="/">NexCart</a>
          <ul className="flex space-x-4">
            <li><a className="text-white" href="/">Home</a></li>
            <li><a className="text-white" href="/cart">Cart</a></li>
            <li><a className="text-white" href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};