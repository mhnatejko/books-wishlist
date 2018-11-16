import React from 'react';

const About = () => {
	return (
		<section className='main about'>
			<h1>About application</h1>
			<p> usage </p>
			<p> search & sort panel allaws you for browsing books in goodreads base and in your private list of wishes
			suggestions are based on todays date. you can check if any interestig positions contains actual date.
			every single card with publication record have ability to fetch more detailed information. 
			and the most important - you can add or remove books from your wishlist by +/- button.
			Youre interested of some topic or you really want to receive one of them or just buy for your self ?
			Create your private collection of books you desired!
			every author have its own component so go ahead and check it!

			finally you can download short version of your list on your hard drive and send it to your friends
			</p>
			<p>This application was made for non-comercial usage.
			No *** 
			idea and all elements designed and ... by author
			use React technology
			data suported by goodreads application
			pictures from: </p>
			<p> https://fontawesome.com </p>
			<p> https://unsplash.com </p>
			<p> all data are storing in localstore of browser or in *.txt file if youll download list</p>
		</section>
	);
};

export default About;