const initialState = {
  places: [
    {
      imgUrl: 'https://images.unsplash.com/photo-1595901688281-9cef114adb0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGltZXMlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D',
      imgName: 'Time Square',
      imgLocation: 'New York',
      imgRating: '4.5',
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWZlbCUyMHRvd2VyfGVufDB8fDB8fHww',
      imgName: 'Eiffel Tower',
      imgLocation: 'Paris',
      imgRating: '4',
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGFqJTIwTWFoYWx8ZW58MHx8MHx8fDA%3D',
      imgName: 'Taj Mahal',
      imgLocation: 'Agra',
      imgRating: '5',
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExvbmRvbnxlbnwwfHwwfHx8MA%3D%3D',
      imgName: 'Clock Tower',
      imgLocation: 'London',
      imgRating: '3.5',
    },
  ],
  isFormVisible: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return {
        ...state,
        places: [...state.places, action.payload],
      };

    case 'EDIT_PLACE':
      const { index, updatedPlace } = action.payload;
      const updatedPlaces = [...state.places];
      updatedPlaces[index] = updatedPlace;

      return {
        ...state,
        places: updatedPlaces,
      };

    case 'DELETE_PLACE':
      const filteredPlaces = state.places.filter((element, index) => index !== action.payload);

      return {
        ...state,
        places: filteredPlaces,
      };

    case 'TOGGLE_FORM':
      return {
        ...state,
        isFormVisible: !state.isFormVisible,
      };

    default:
      return state;
  }
};

export default rootReducer;
