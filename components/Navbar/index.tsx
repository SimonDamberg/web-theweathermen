const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 pl-8">
      <ul className="flex space-x-10">
        <li>
          <a href="/" className="text-white hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="/progress" className="text-white hover:text-gray-300">Progress</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

