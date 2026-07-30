import { useState } from 'react';
import { signupUser } from '../services/authApi';
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signupUser(formData);
      toast.success('Signup sucessfully');
      console.log('Signup sucessfully', data);
    } catch (error) {
      toast.error('Signup failed');
      console.log('Signup failed', error);
    }
  };

  return (
    <section className='rounded bg-white shadow-md w-[50%] m-auto p-8'>
      <h1 className='mb-4 text-2xl font-bold text-center'>
        Create your account
      </h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='font-medium block text-sm'>Name</label>
          <input
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            placeholder='Enter your name'
            type='text'
            required
            name='name'
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label className='font-medium block text-sm'>Email</label>
          <input
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            placeholder='Enter your email'
            type='email'
            required
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label className='font-medium block text-sm'>Password</label>
          <input
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none '
            placeholder='Enter your password'
            type='password'
            required
            name='password'
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='font-medium block text-sm'>Role</label>
          <select
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            onChange={handleChange}
            name='role'
          >
            <option value='customer'>Customer</option>
            <option value='restuarant'>Restuarant</option>
          </select>
        </div>
        <button
          type='submit'
          className='bg-orange-600 px-4 py-2 hover:bg-orange-700 rounded w-full text-white'
        >
          Signup
        </button>
      </form>
    </section>
  );
};

export default Signup;
