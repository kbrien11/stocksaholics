// import React, { useState } from 'react';
// import { FontAwesomeIcon } from 'react-icons/fa';
// import { faStar } from 'react-icons/fa';
// import { faStar as faStarReg } from 'react-icons/fa';

// function FavoriteIcon() {
//   const [isFavorited, setIsFavorited] = useState(false);

//   const renderFavoritedStar = () => (
//     <FontAwesomeIcon className="favorite-icon" icon={faStar} />
//   );

//   const renderNonFavoritedStar = () => (
//     <FontAwesomeIcon className="favorite-icon" icon={faStarReg} />
//   );

//   const handleFavoriteChange = () => {
//     setIsFavorited(!isFavorited);
//   };

//   return (
//     <div onClick={handleFavoriteChange}>
//       {isFavorited ? renderFavoritedStar() : renderNonFavoritedStar()}
//     </div>
//   );
// }

// export default FavoriteIcon;
