// AddPlaceForm.js
import React, { useState } from 'react';

function AddPlaceForm(props) {
  const [imageUrl, setImageUrl] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [photoLocation, setPhotoLocation] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    props.onAddPlace({
      imgUrl: imageUrl,
      imgName: photoName,
      imgLocation: photoLocation,
      imgRating: rating,
    });

    // Clear the form fields
    setImageUrl('');
    setPhotoName('');
    setPhotoLocation('');
    setRating('');
  };

  return (
    <form className="add-place-form" onSubmit={handleSubmit}>
      <h2>ADD IT HERE</h2>
      <input
        type="text"
        placeholder='Enter Image URL'
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder='Enter Image Name'
        id="photoName"
        value={photoName}
        onChange={(e) => setPhotoName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder='Enter Image Location'
        id="photoLocation"
        value={photoLocation}
        onChange={(e) => setPhotoLocation(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder='Enter Image Rating'
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />

      <button type="submit">Add Image</button>
    </form>
  );
}

export default AddPlaceForm;
