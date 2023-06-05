import React from 'react';
import Nav from '@components/navbar';
import Card from '@components/card';

export default function Home() {
	return (
		<main>
			<Nav />

			<section className='w-full flex-center flex-col px-5'>
				<h1 className='head_text text-center'>
					Your Flexible
					<br />
					<span className='blue_gradient text-center'>
						Data Management
					</span>{' '}
					<br />
					<span className='blue_gradient text-center'>Solution</span>
				</h1>
				<p className='desc text-center mb-[6rem]'>
					Welcome to Dynamic Tables, your go-to web application that puts the
					power of data management and customization right at your fingertips.
				</p>

				<div className='flex justify-between gap-3 max-md:flex-col'>
					<Card>
						<Card.Header>
							Create, Modify, Organize
							<br />
							All in Real Time
						</Card.Header>
						<Card.Body>
							Add rows, columns, or values dynamically as you see fit. From
							comprehensive data lists to simple checklists, our platform
							provides unparalleled ease of use.
						</Card.Body>
					</Card>

					<Card>
						<Card.Header>
							Multiple Sheets
							<br />
							More Room for Your Ideas
						</Card.Header>
						<Card.Body>
							With Dynamic Tables, you&#39;re not confined to a single table.
							Feel free to add new sheets and organize your data in ways that
							make the most sense to you. Keep your work clean, organized, and
							easy to navigate.
						</Card.Body>
					</Card>

					<Card>
						<Card.Header>
							Cloud Accessibility
							<br />
							Your Data On-The-Go
						</Card.Header>
						<Card.Body>
							Stay connected to your data wherever you go. With Dynamic Tables,
							you can access your tables from any device with an internet
							connection. Your data is always within reach, and always secure.
						</Card.Body>
					</Card>
				</div>
			</section>
		</main>
	);
}
