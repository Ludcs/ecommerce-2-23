import {useContext, useEffect} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';
import {Alert} from '../components/Alert';
import {Link} from 'react-router-dom';

export const RegisterPage = () => {
  const {signup, formRegister, setFormRegister, error, setError} =
    useContext(EcommerceContext);

  useEffect(() => {
    setError();
  }, []);

  const handleChange = ({target: {name, value}}) => {
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    signup(formRegister.email, formRegister.password);
    setFormRegister({
      email: '',
      password: '',
    });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-bl from-gray-600 via-rose-300 to-cyan-600 m-auto flex justify-center items-center">
      {error && <Alert message={error.message} />}
      <div className="w-[360px] h-[400px] font-primary flex flex-col m-auto justify-between items-center">
        <div className="w-full flex justify-center items-center mb-10">
          <h1 className="text-3xl font-primary font-bold text-center tracking-wide font-outline-2">
            Faithfull The Brand
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="font-semibold text-xl">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formRegister.email}
            placeholder="Insert your email..."
            onChange={handleChange}
            className="border rounded text-center mt-3 mb-6 w-full"
          />

          <label htmlFor="password" className="font-semibold text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formRegister.password}
            placeholder="******"
            onChange={handleChange}
            className="border rounded text-center mt-3 mb-6 w-full"
          />

          <button
            type="submit"
            className="w-full bg-transparent text-white border border-solid border-white rounded text-xl hover:text-black hover:border-black"
          >
            Register
          </button>
        </form>
        <p className="font-primary text-base mt-5 ">
          Return to{' '}
          <Link to="/login">
            <span className="underline">Login page</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
