import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./Rate.css";

const Rate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='Rate'>
      <div className="stars-container">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={currentRating}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={50}
                color={currentRating <= (hover || rating) ? "#FFE100" : "#e4e5e9"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      {/* Display rating text just below the stars */}
      {rating && <p>Your Rating is {rating} out of 5.</p>}
    </div>
  );
}

export default Rate;
