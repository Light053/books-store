export default class BookStoreService {
	data = [
		{
			title: 'How to Stop Time',
			author: {
				name: 'Matt Haig',
				birthDate: 'July 3, 1975',
				nationality: 'British',
				bio: 'Matt Haig is a British author known for his novels, including "The Humans" and "Reasons to Stay Alive."  He writes fiction and non-fiction that often explores mental health, love, and the human experience.',
				image: 'https://i.guim.co.uk/img/media/095e1174db7595191a81a5f92f5dd9bb65adaf13/0_247_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8d52af27e677086d4632b895ee763633'
			},
			id: 1,
			price: 15,
			coverImage: 'https://m.media-amazon.com/images/I/A1nhYZM9nkL._AC_UF1000,1000_QL80_.jpg',
			description: 'A captivating novel that explores the concept of time and its impact on the human experience.'
		},
		{
			title: 'A Little Life',
			author: {
				name: 'Hanya Yanagihara',
				birthDate: 'September 20, 1974',
				nationality: 'American',
				image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Hanya_crop-4x6-300dpi.tif/lossy-page1-1200px-Hanya_crop-4x6-300dpi.tif.jpg',
				bio: 'Hanya Yanagihara is an American novelist and editor. She is best known for her second novel, "A Little Life," which was shortlisted for the Booker Prize and the National Book Award. Yanagihara is also the editor-in-chief of T Magazine.',
			},
			id: 2,
			price: 12,
			coverImage: 'https://images.squarespace-cdn.com/content/v1/613b5cf167750b42b480da2b/1689944218454-0S6EXB2L0T6FOPE2IX5U/a+little+life.jpeg',
			description: 'An emotionally intense story following the lives of four college friends living in New York City.'
		},
		{
			title: 'The Master and Margarita',
			author: {
				name: 'Mikhail Bulgakov',
				birthDate: 'May 15, 1891',
				deathDate: 'March 10, 1940',
				nationality: 'Russian',
				image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BA%D0%BE%D0%B2.jpg',
				bio: 'Mikhail Bulgakov was a Russian writer and playwright. "The Master and Margarita" is considered one of his masterpieces, blending satire, fantasy, and political commentary. Bulgakov faced censorship during his lifetime and his works were often published posthumously.',
			},
			id: 3,
			price: 10,
			coverImage: 'https://images.penguinrandomhouse.com/cover/9780143108276',
			description: 'A satirical and fantastical masterpiece that weaves together Soviet society, the Devil, and love in Moscow.'
		},
		{
			title: 'To Kill a Mockingbird',
			author: {
				name: 'Harper Lee',
				birthDate: 'April 28, 1926',
				deathDate: 'February 19, 2016',
				nationality: 'American',
				image: 'https://static01.nyt.com/images/2016/02/20/arts/20harperlee3_hp-copy/20harperlee3_hp-copy-superJumbo-v2.jpg',
				bio: 'Harper Lee was an American novelist widely known for her novel "To Kill a Mockingbird." The book addresses racial injustice in the American South during the 1930s. Lee received the Pulitzer Prize for Fiction for her work, which has become a classic of modern American literature.',
			},
			id: 4,
			price: 18,
			coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
			description: 'A classic novel that addresses racial injustice in the American South during the 1930s.'
		},
		{
			title: 'The Great Gatsby',
			author: {
				name: 'F. Scott Fitzgerald',
				birthDate: 'September 24, 1896',
				deathDate: 'December 21, 1940',
				nationality: 'American',
				image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/F._Scott_Fitzgerald_%281929_photo_portrait_by_Nickolas_Muray%29_Cropped.jpg',
				bio: 'F. Scott Fitzgerald was an American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century. "The Great Gatsby" is his most famous work, exploring the American Dream and the decadence of the Jazz Age in 1920s New York.',
			},
			id: 5,
			price: 14,
			coverImage: 'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1',
			description: 'An exploration of the American Dream and the dec adence of the Jazz Age in 1920s New York.'
		},
	];
	getAllBooks = () => {
		return new Promise((resolve, reject) => {
			const random = Math.random();
			if (random > 0.75) {
				setTimeout(() => reject(new Error('ошибка в промисе')), 700);
			}
			else {
				setTimeout(() => resolve(this.data), 700);
			}
		});
	};

}
