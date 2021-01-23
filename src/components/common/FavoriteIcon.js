import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';

function FavoriteIcon() {
  const [isFavorited, setIsFavorited] = useState(false);

  const renderFavoritedStar = () => (
    <FontAwesomeIcon className="favorite-icon" icon={faStar} />
  );

  const renderNonFavoritedStar = () => (
    <FontAwesomeIcon className="favorite-icon" icon={faStarReg} />
  );

  const handleFavoriteChange = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div onClick={handleFavoriteChange}>
      {isFavorited ? renderFavoritedStar() : renderNonFavoritedStar()}
    </div>
  );
}

export default FavoriteIcon;
