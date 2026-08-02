import { useEffect } from 'react';
import { useState } from 'react';
import { getRestaurant } from '../services/restaurantApi';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await getRestaurant();
        setRestaurant(data);
      } catch (error) {
        console.log('Error getting res', error);
      }
    };
    fetchRestaurant();
  }, []);
  return (
    <div>
      <section className='mb-2 text-3xl font-bold'>
        <h1>Explore Restaurant</h1>
        <p className='mb-8 text-stone-600'>
          Order Food from the best place near you
        </p>
        {console.log('From home', restaurant, restaurant.length)}
        {restaurant.length === 0 ? (
          <p>No restaurant yet. restaurant owner can add onece after login</p>
        ) : (
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {restaurant.map((restaurant) => (
              <div>
                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
