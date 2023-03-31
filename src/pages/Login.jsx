import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password };
    setIsPending(true);
  };

  return (
    <div className=" flex justify-center items-center bg-primary w-screen h-screen">
      <ToastContainer />
      <form
        className="w-[90%] ss:w-[60%] sm:w-[40%] md:w-[30%] p-16 border-solid border-2 border-secondary rounded-md flex flex-col gap-8 justify-center items-center"
        onSubmit={handleSubmit}>
        <label className="w-full flex flex-col gap-2">
          <p className=" font-poppins text-sm text-secondary tracking-wider">
            Email
          </p>
          <input
            className="w-full p-2 rounded-sm outline-0"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="w-full flex flex-col gap-2">
          <p className=" font-poppins text-sm text-secondary tracking-wider">
            Password
          </p>
          <input
            className="w-full p-2 rounded-sm outline-0"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!isPending && (
          <input
            className=" bg-secondary text-primary pl-8 pr-8 pt-2 pb-2 font-poppins font-medium text-xs tracking-widest rounded-sm w-full"
            type="submit"
            value="Log In"
          />
        )}
        {isPending && (
          <input
            disabled
            className=" bg-secondary text-primary pl-8 pr-8 pt-2 pb-2 font-poppins font-medium text-xs tracking-widest rounded-sm w-full"
            type="submit"
            value="Logging in ..."
          />
        )}
        <Link to="/Sign">
          <p className=" text-xs underline text-secondary">
            Dont have an account? Sign in{' '}
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
