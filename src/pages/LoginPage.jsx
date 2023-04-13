import {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';
import {Alert} from '../components/Alert';
import {Link} from 'react-router-dom';

export const LoginPage = () => {
  const {
    login,
    formRegister,
    setFormRegister,
    error,
    setError,
    loginWithGoogle,
  } = useContext(EcommerceContext);

  const handleChange = ({target: {name, value}}) => {
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const handleLoginWithGoogle = () => {
    setError();
    loginWithGoogle();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    login(formRegister.email, formRegister.password);
    setFormRegister({
      email: '',
      password: '',
    });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-stone-100 via-violet-200 to-blue-300 relative">
      {/* {error && <p>{error.message}</p>} */}
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

        <div className="w-full flex flex-col justify-between gap-4">
          <button
            type="submit"
            className="bg-transparent text-white border border-solid border-white rounded text-xl hover:text-black hover:border-black"
          >
            Login
          </button>
          <button
            onClick={handleLoginWithGoogle}
            className="bg-transparent text-white border border-solid border-white rounded text-xl hover:text-black hover:border-black"
          >
            Login with Google
          </button>
          <p className="font-primary text-lg">
            Don't have an account?{' '}
            <Link to="/register">
              <span className="underline">Register here!</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
