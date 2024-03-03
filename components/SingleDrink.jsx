import React from 'react';

const SingleDrink = ({ strDrink, strDrinkThumb }) => {
	return (
		<div>
			<img
				src={strDrinkThumb}
				alt={strDrink}
			/>
		</div>
	);
};

export default SingleDrink;
