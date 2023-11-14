// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPlaceForm from './Components/AddPlaceForm';
import Card from './Components/Card';

function App() {
  const dispatch = useDispatch();
  // const { places, isFormVisible } = useSelector((state) => state);
  const places = useSelector((state) => state.places);
  const isFormVisible  = useSelector((state) => state.isFormVisible);

  const handleToggleForm = () => {
    dispatch({
      type: 'TOGGLE_FORM',
    });
  };

  const handleAddPlace = (newPlace) => {
    dispatch({
      type: 'ADD_PLACE',
      payload: newPlace,
    });
  };

  const handleEditPlace = (index, updatedPlace) => {
    dispatch({
      type: 'EDIT_PLACE',
      payload: { index, updatedPlace },
    });
  };

  const handleDeletePlace = (index) => {
    dispatch({
      type: 'DELETE_PLACE',
      payload: index,
    });
  };

  const renderCards = () => {
    return places.map((place, index) => (
      <Card
        key={index}
        index={index}
        {...place}
        onEditPlace={handleEditPlace}
        onDeletePlace={handleDeletePlace}
      />
    ));
  };

  return (
    <div>
      <div className='add-toggle-button'>
        <button onClick={handleToggleForm}>
          {isFormVisible ? 'DISCARD CHANGES' : 'WANNA ADD NEW ?'}
        </button>
      </div>

      {isFormVisible && (
        <div className="wrapper">
          <AddPlaceForm onAddPlace={handleAddPlace} />
        </div>
      )}

      <div className="wrapper">
        {places.length>=1  &&  renderCards()}
        {places.length<1  &&  <div className='no-data'>NO DATA TO SHOW</div>}
        </div>
    </div>
  );
}

export default App;
