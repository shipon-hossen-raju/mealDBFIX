import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MealDetail from '../MealDetail/MealDetail';

const Meal = ({ meal }) => {
    const { strArea, strCategory, strMealThumb, strTags, idMeal } = meal;
    const navigate = useNavigate()

    const handleNavigation =()=>{
        navigate(`meal/${idMeal}`)
        }

    return (
        <div className='bg-rose-200'>
            <img className='w-full p-12' src={strMealThumb} alt="" />
            <div className='text-lg font-medium ps-4 px-4 my-2'>
            <p>Continent: {strArea}</p>
            <p>Type: {strCategory}</p>
            <Link to={`/meal/${idMeal}`}><button className='my-2 px-2 py-1 rounded-md bg-green-300'>Add Item</button></Link>
            <Link to={`/meal/${idMeal}`}><p>Details Information</p></Link>
            </div>
        </div>

    );
};

export default Meal;