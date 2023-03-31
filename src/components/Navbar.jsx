import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="h-full w-[90%] flex items-center justify-around border-b-solid border-b-2 border-b-secondary">
      <p className=" font-mont uppercase text-secondary tracking-widest hover:text-blue-300">
        Username
      </p>

      <ul className="h-full flex gap-12 justify-center items-center ">
        <Link to="/Market">
          <li className=" font-poppins font-medium tracking-wide text-secondary hover:text-blue-300 cursor-pointer">
            Market
          </li>
        </Link>

        <Link to="/Collection">
          <li className=" font-poppins font-medium tracking-wide text-secondary hover:text-blue-300 cursor-pointer">
            Collection
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
