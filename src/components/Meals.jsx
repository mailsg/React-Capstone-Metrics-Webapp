import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { fetchMeals, resetSearchQuery } from '../redux/slice/meals/mealsSlice';
import SearchBox from './SearchBox';
import '../App.css';

const Meals = () => {
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.meals);
  const searchQuery = useSelector((state) => state.meals.searchQuery);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(resetSearchQuery());
    }
  }, [location.pathname, dispatch]);

  const filteredMeals = mealsList.filter(
    (meal) => meal.strCategory.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderMeals = searchQuery ? filteredMeals : mealsList;

  return (
    <div className="meals-container">
      <SearchBox />
      {renderMeals.map((meal) => (
        <Card
          key={meal.idCategory}
          className="meal-card"
        >
          <Link to={`/about/${meal.idCategory}`} className="meal-link">

            <Card.Img variant="top" src={meal.strCategoryThumb} />
            <Card.Body>
              <Card.Title>{meal.strCategory}</Card.Title>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Meals;
