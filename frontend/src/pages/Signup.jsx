import { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleChange = (event) => {
    console.log(event.target.value, 'name is', event.target.name);
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='rounded bg-white shadow-md w-[40%] m-auto p-8'>
      <h1 className='mb-4 text-2xl font-bold'>Create your account</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='font-medium block text-sm'>Name</label>
          <input
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            placeholder='Enter your name'
            type='text'
            required
            name='name'
            onClick={handleChange}
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
            onClick={handleChange}
          />
        </div>
        <div>
          <label className='font-medium block text-sm'>Password</label>
          <input
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            placeholder='Enter your password'
            type='password'
            required
            name='password'
            onClick={handleChange}
          />
        </div>
        <div>
          <label className='font-medium block text-sm'>Role</label>
          <select
            className='mt-1 w-full rounded border border-stone-300 px-3 py-2 focus:border-amber-600 focus:outline-none'
            onClick={handleChange}
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
