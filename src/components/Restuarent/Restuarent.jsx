import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Restuarent = () => {
    const items = useLoaderData();
    const meals = items.meals;
    console.log('its meals -> ', meals)
    
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-4'>Welcome to the Restaurant: {meals.length}</h1>
            <div className='mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>

        </div>
    );
};

export default Restuarent;