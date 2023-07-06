import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { fetchMeals } from '../redux/slice/meals/mealsSlice';

const MealsDetail = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const selectedCategory = mealsList.find((meal) => meal.idCategory === categoryId);

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div className="table-responsive">
      {/* <h2>Meal Category Details</h2> */}
      <Table striped bordered hover className="mobile-version">
        <tbody>
          <tr>
            <td rowSpan="2" className="table-image-cell">
              <Image
                src={selectedCategory.strCategoryThumb}
                alt={selectedCategory.strCategory}
                className="thumbnail-image"
              />
            </td>
            <td className="left-aligned"><strong>Name</strong></td>
            <td className="left-aligned">{selectedCategory.strCategory}</td>
          </tr>
          <tr>
            <td className="left-aligned"><strong>Description</strong></td>
            <td className="left-aligned">{selectedCategory.strCategoryDescription}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MealsDetail;
