import {useContext} from 'react';
import {EcommerceContext} from '../context/EcommerceContext';
// import {useNavigate} from 'react-router-dom';

export const RegisterPage = () => {
  const {signup, formRegister, setFormRegister, error} =
    useContext(EcommerceContext);

  const handleChange = ({target: {name, value}}) => {
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formRegister.email, formRegister.password);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form className="font-primary" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formRegister.email}
          placeholder="Insert your email..."
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formRegister.password}
          placeholder="******"
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
