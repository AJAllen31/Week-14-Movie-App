// container made for movies 
import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {

  render() {
    return (
      <div className='movieList container'>
        <Movie {...
          {id: 1,
          key: 1,
          title: 'Princess Mononoke',
          ratingImage: <img src='https://raw.githubusercontent.com/thisLinda/movie-review-app/main/public/assets/ratedR.png' alt='movie rating'/>,
          summary: "Before it ever arrived in the U.S., this epic, animated 1997 fantasy had already made history as the top-grossing domestic feature ever released in Japan.",
          released: '2000',
          image: 'https://m.media-amazon.com/images/I/51KXTH5HPHL.jpg'}
        } />
        <Movie {...
          {id: 2,
          key: 2,
          title: 'Ghost In The Shell',
          ratingImage: <img src='https://raw.githubusercontent.com/thisLinda/movie-review-app/main/public/assets/ratedR.png' alt='movie rating'/>,
          summary: "Cybernetic agent Major Matako Kusanagi races against time to stop a deadly computer virus.",
          released: '1996',
          image: 'https://m.media-amazon.com/images/I/71TEL5Sq8ML._AC_UY436_FMwebp_QL65_.jpg'}
        } />
        <Movie {...
          {id: 3,
          key: 3,
          title: 'Afro Samurai',
          ratingImage: <img src='https://raw.githubusercontent.com/thisLinda/movie-review-app/main/public/assets/ratedR.png' alt='movie rating'/>,
          summary: "Voice acted by the great Samuel L. Jackson.",
          release: '2007',
          image: 'https://m.media-amazon.com/images/I/51fnSt-vKLL._AC_UY436_QL65_.jpg'}
        } />
        <Movie {...
          {id: 4,
          key: 4,
          title: 'Gundam-W: Endless Waltz',
          ratingImage: <img src='https://raw.githubusercontent.com/thisLinda/movie-review-app/main/public/assets/ratedR.png' alt='movie rating'/>,
          summary: "Earth and the Space Colonies have joined to form the Earth Sphere Unified Nation; after a brief reign as Queen of Earth, Relena Peacecraft/Darlian has abdicated and is serving as a government minister.",
          released: '2001',
          image: 'https://m.media-amazon.com/images/I/51YTVCW209L._AC_UY436_FMwebp_QL65_.jpg'}
        } />
        <Movie {...
          {id: 5,
          key: 5,
          title: 'Pokemon: The First Movie',
          ratingImage: <img src='https://raw.githubusercontent.com/thisLinda/movie-review-app/main/public/assets/ratedR.png' alt='movie rating'/>,
          summary: "Pokemon The First Movie, do I need more to say!?",
          released: '1978',
          image: 'https://m.media-amazon.com/images/I/81xO6l1V+5L._AC_UY436_FMwebp_QL65_.jpg'}
        } />
      </div>
    );
  }
}