import {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';
import {Alert} from '../components/Alert';
import {Link} from 'react-router-dom';

export const RegisterPage = () => {
  const {signup, formRegister, setFormRegister, error, setError} =
    useContext(EcommerceContext);

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
    <div className="w-full h-screen bg-gradient-to-bl from-gray-600 via-rose-300 to-cyan-600">
      {error && <Alert message={error.message} />}
      <form
        className="w-[400px] h-full font-primary flex flex-col m-auto justify-center items-center"
        onSubmit={handleSubmit}
      >
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
        <p className="font-primary text-lg mt-5 ">
          Go to{' '}
          <Link to="/login">
            <span className="underline">Login Page</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
