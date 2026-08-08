import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRestaurant, getRestaurantById } from '../services/restaurantApi';

const RestaurantDetails = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurantData = await getRestaurantById({ id });
        const foodData = await getRestaurant();
        setRestaurant(restaurantData);
        setFood(foodData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {}, [restaurant]);

  return (
    <section>
      <Link to='/' className='mb-4 inline-block text-orange-600'>
        Back to restaurant
      </Link>
      <div className='mb-8 overflow-hidden rounded-lg bg-white shadow-md'>
        <img className='h-56 w-full object-cover' src={restaurant?.image} />
        <div className='p-6'>
          <h1>{restaurant?.name}</h1>
          <p>{restaurant?.address}</p>
          <p>{restaurant?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantDetails;
