import { Link } from 'react-router-dom';
const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <Link
        className='block overflow-hidden rounded-lg border-stone-200 bg-white transition shadow-sm hover:shadow-md '
        to={`/restaurant/${restaurant._id}`}
      >
        <img className='h-48 w-full object-cover' src={restaurant.image} />
        <div className='p-4'>
          <h2 className='text-xl '>{restaurant.name}</h2>
          <p className='text-sm font-md mt-2 line-clamp-2 text-stone-500'>
            {restaurant.address}
          </p>
          <p className='text-sm font-light mt-2 line-clamp-2 text-stone-500'>
            {restaurant.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
