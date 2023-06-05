import React from 'react';

function Header({ children }: React.PropsWithChildren) {
	return (
		<div className='mb-3'>
			<h3 className='text-2xl text-center'>{children}</h3>
		</div>
	);
}

function Body({ children }: React.PropsWithChildren) {
	return <p className='text-center'>{children}</p>;
}

function Card({ children }: React.PropsWithChildren) {
	return (
		<div className='px-5 w-[400px] min-h-[270px] rounded-md py-5 flex flex-col justify-center gap-3 items-center hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1.5 transition-all'>
			{children}
		</div>
	);
}

Card.Header = Header;
Card.Body = Body;

export default Card;
