import { useState } from 'react';
import { signinUser } from '../services/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signinUser(formData);
      toast.success('Login Sucesful');
      navigate('/');
    } catch (error) {
      toast.error('Login Failed', error);
    }
  };
  return (
    <section className='rounded bg-white shadow-md w-[50%] m-auto p-8'>
      <h1 className='mb-4 text-2xl font-bold text-center'>Login to Zwiggy</h1>
      {/* <div> */}
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='font-medium block text-sm'>Email</label>
          <input
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            required
          />
        </div>
        <div>
          <label className='font-medium block text-sm'>Password</label>
          <input
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            type='password'
            name='password'
            onChange={handleChange}
            value={formData.password}
            placeholder='Enter your password'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-orange-600 px-4 py-2 hover:bg-orange-700 rounded w-full text-white'
        >
          Login
        </button>
      </form>
      {/* </div> */}
    </section>
  );
};

export default Signin;
