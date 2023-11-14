// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPlaceForm from './Components/AddPlaceForm';
import Card from './Components/Card';
import { toggleForm } from './redux/action';

function App() {
  const dispatch = useDispatch();
  // const { places, isFormVisible } = useSelector((state) => state);
  const places = useSelector((state) => state.places);
  const isFormVisible = useSelector((state) => state.isFormVisible);

  const handleToggleForm = () => {
    dispatch(toggleForm());
  };

  const renderCards = () => {
    return places.map((place, index) => (
      <Card
        key={index}
        index={index}
        {...place}
      />
    ));
  };

  return (
    <div>
      <div className='add-toggle-button'>
        <button onClick={handleToggleForm}>
          {isFormVisible ? 'DISCARD FORM' : 'WANNA ADD NEW ?'}
        </button>
      </div>

      {isFormVisible && (
        <div className="wrapper">
          <AddPlaceForm />
        </div>
      )}

      <div className="wrapper">
        {places?.length >= 1 && renderCards()}
        {places?.length < 1 && <div className='no-data'>NO DATA TO SHOW</div>}
      </div>
    </div>
  );
}

export default App;
