import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRatingSelector({ totalstars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);
  const createArray = (totalStars) => Array.from({ length: totalStars });

  const Star = ({ selected = false, index }) => (
    <>
      <FaStar
        onClick={setSelectedStars(index + 1)}
        color={selected ? '#00abaa' : 'grey'}
      />
    </>
  );

  return (
    <div className="star-rating-selector" style={{ marginBottom: '4px' }}>
      {createArray(totalstars).map((_, i) => (
        <Star key={i} index={i} selected={selectedStars > i} />
      ))}
    </div>
  );
}
