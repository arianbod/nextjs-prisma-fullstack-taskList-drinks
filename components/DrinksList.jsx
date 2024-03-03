import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DrinksList = ({ drinks }) => {
	return (
		<ul className='grid sm:grid-cols-2 gap-6 mt-6'>
			{drinks?.map((item) => {
				const { idDrink, strDrink, strDrinkThumb } = item;
				return (
					<li
						key={idDrink}
						className=''>
						<Link href={`/drinks/${idDrink}`}>
							<div className='text-xl font-medium'>
								<div>
									<h6>{strDrink}</h6>
								</div>
								<div className='relative h-48 mb-4'>
									<Image
										fill // Changed from fill to layout='fill'
										sizes='(max-width:768px) 80vw, (max-width:1200px) 50vw'
										className='rounded-md object-cover'
										src={strDrinkThumb}
										alt={strDrink}
									/>
								</div>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default DrinksList;
