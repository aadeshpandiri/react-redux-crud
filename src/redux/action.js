
export const addPlace = (newPlace) => {
  return {
    type: 'ADD_PLACE',
    payload: newPlace,
  };
};

export const editPlace = (index, updatedPlace) => {
  return {
    type: 'EDIT_PLACE',
    payload: { index, updatedPlace },
  };
};

export const deletePlace = (index) => {
  return {
    type: 'DELETE_PLACE',
    payload: index,
  };
};

export const toggleForm = () => {
  return {
    type: 'TOGGLE_FORM',
  };
};