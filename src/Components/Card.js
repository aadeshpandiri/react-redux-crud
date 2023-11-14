// Card.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPlace, deletePlace } from '../redux/action';

function Card(props) {
  const dispatch = useDispatch();
  const { index, imgUrl, imgName, imgLocation, imgRating } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedPlace, setEditedPlace] = useState({ imgUrl, imgName, imgLocation, imgRating });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editPlace(index, editedPlace));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset editedPlace to original values
    setEditedPlace({ imgUrl, imgName, imgLocation, imgRating });
  };

  const handleDelete = () => {
    dispatch(deletePlace(index));
  };

  return (
    <div className="card">
      <img src={imgUrl} className="card__img" alt={imgName} />
      <div className="card__body">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedPlace.imgName}
              onChange={(e) => setEditedPlace({ ...editedPlace, imgName: e.target.value })}
            />
            <input
              type="text"
              value={editedPlace.imgLocation}
              onChange={(e) => setEditedPlace({ ...editedPlace, imgLocation: e.target.value })}
            />
            <button className="card__btn" onClick={handleSaveEdit}>Save</button>
            <button className="card__btn" onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <h2 className="card__title">{imgName}</h2>
            <p className="card__description">{imgLocation}</p>
            <h3 className="card__price">☆ {imgRating}</h3>
            <button className="card__btn" onClick={handleEdit}>Edit</button>
            <button className="card__btn" onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
