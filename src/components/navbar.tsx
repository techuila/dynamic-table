import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type NavbarProps = {
	hideCTA?: boolean;
};

function Navbar({ hideCTA }: NavbarProps) {
	return (
		<nav className='pt-3 px-5 max-w-screen-xl mx-auto flex justify-between mb-6 h-[80px] items-center'>
			<Image
				src='/assets/icons/icon.png'
				alt='Logo'
				width={40}
				height={40}
				className='object-cover'
			/>

			{!hideCTA && (
				<Link href='/sign-in' className='blue_btn'>
					Sign In
				</Link>
			)}
		</nav>
	);
}

export default Navbar;
