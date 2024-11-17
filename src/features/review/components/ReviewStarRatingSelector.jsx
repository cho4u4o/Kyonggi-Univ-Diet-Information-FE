import React from 'react'
import { FaStar } from 'react-icons/fa'

function StarRatingSelector({ totalstars = 5 }) {
  const [selectedStars, setSelectedStars] = React.useState(3)
  const createArray = (totalStars) => Array.from({ length: totalStars })

  const Star = ({ selected = false, index }) => (
    <>
      <FaStar
        onClick={() => setSelectedStars(index + 1)}
        color={selected ? '#00abaa' : 'grey'}
      />
    </>
  )

  return (
    <div className="star-rating-selector">
      {createArray(totalstars).map((_, i) => (
        <Star key={i} index={i} selected={selectedStars > i} />
      ))}
    </div>
  )
}

export default StarRatingSelector
