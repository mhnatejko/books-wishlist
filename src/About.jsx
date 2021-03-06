import React from 'react';

const About = () => {
	return (
		<section className='main about'>
			<h1>About website</h1>
			<h3> Usage </h3>
			<p> 
				<span>Search & sort</span> panel allows you to browse books in the  
				<a href='https://www.goodreads.com/'> goodreads</a> base and sort your private list of wishes.
			</p>
			<p>
				<span>Suggestions</span> are based on todays date (day and month). 
				You can check if any interestig positions contains actual date.
			</p>			
			<p>Every single card with publication record have ability to fetch more <span>detailed information</span>.
			You can checkout <span>authors profile</span> - just open link in his name.
			</p> 
			<p> And the most important - you can add or remove books from your <span>wishlist</span> by +/- button.
			Are you interested of some book? Maybe you really want to receive one for your birthday present or just buy it for yourself?
			Create your private collection of books you desire! Finally you can download short version of your list and send it to your friends.</p>
			

			<h3> Info </h3>
			<p>This application was made for non-comercial usage.
			Project, idea and all elements designed by author and inspired by many websites</p>
			<p>Full project on github: <a href='https://github.com/mhnatejko/books-wishlist'>https://github.com/mhnatejko/books-wishlist</a></p>
			<p>Data suported by goodreads database.</p>
			<p>Authors quotations from <a href='https://goodquotesapi.herokuapp.com'>https://goodquotesapi.herokuapp.com</a></p>
			<p>Picture in background and icons from: </p>
			<p><a href='https://fontawesome.com'>https://fontawesome.com</a></p>
			<p><a href='https://unsplash.com'>https://unsplash.com</a></p>
			<p> All data are collecting in localstore of your browser or in *.txt file if you will download the list.</p>
		</section>
	);
};

export default About;