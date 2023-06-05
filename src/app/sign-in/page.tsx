import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Nav from '@components/navbar';

import GoogleIcon from '@assets/google.svg';
import GithubIcon from '@assets/github.svg';

type ButtonProps = {
	icon?: string;
	className?: string;
};

function Button({
	icon,
	children,
	className
}: React.PropsWithChildren<ButtonProps>) {
	return (
		<button
			className={twMerge(
				'flex gap-3 justify-center items-center rounded border border-gray-300 px-5 py-1.5 w-80 transition-all',
				className
			)}
		>
			{icon && (
				<Image
					className='object-contain'
					src={icon}
					alt='Icon'
					height={14}
					width={14}
				/>
			)}
			<span className='text-sm'>{children}</span>
		</button>
	);
}

function SignIn() {
	return (
		<main>
			<Nav hideCTA />

			<section className='flex items-center flex-col w-[960px] justify-center mx-auto'>
				<h1 className='text-[50px] font-bold font-inter mt-[12vh] mb-5'>
					Sign In
				</h1>

				<div className='h-[400px] w-[520px] flex flex-col items-center justify-between mb-[16vh]'>
					<div className='w-80 flex flex-col items-stretch h-[444px]'>
						<div className='flex flex-col justify-center gap-3'>
							<Button icon={GoogleIcon} className='hover:bg-gray-200'>
								Continue with Google
							</Button>
							<Button icon={GithubIcon} className='hover:bg-gray-200'>
								Continue with Github
							</Button>
						</div>
						<hr className='my-5' />
						<div className='flex flex-col justify-center gap-3'>
							<div className='flex flex-col'>
								<label htmlFor='email' className='text-xs mb-1 text-gray-500'>
									Email
								</label>
								<input
									type='email'
									className='rounded border border-back shadow-sm px-2 py-2.5 h-8 text-[15px] bg-neutral-50'
									placeholder='Enter your email address...'
								/>
							</div>

							<Button className='bg-red-50 border-red-200 text-red-500 hover:bg-red-100'>
								Continue with email
							</Button>

							<u className='text-sm text-gray-500 text-center mt-3 shadow-sm hover:cursor-pointer'>
								Forgot password?
							</u>
						</div>
					</div>

					<p className='text-xs text-gray-500 text-center leading-normal'>
						By clicking “Continue with Apple/Google/Email/SAML” above, you
						acknowledge that you
						<br />
						have read and understood, and agree to Dynamic Table&#39;s{' '}
						<u>Terms & Conditions</u> and{' '}
						<u>
							Privacy
							<br />
							Policy
						</u>
					</p>
				</div>
			</section>
		</main>
	);
}

export default SignIn;
