import { useEffect, useRef, useState } from 'react';
// import cards_data from '../../assets/cards/Cards_data.ts'
import './TitleCars.css'
import { Link } from 'react-router-dom';
const TitleCards = ({title,category}) => {


  const [apiData , setApiData] = useState([])

  const cardsRef = useRef<HTMLDivElement| null>(null);


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM0ZjQ3Y2M0OGUwYzdjYjJkM2VlZjI3ZTVjY2NiMyIsIm5iZiI6MTczMTEzODA1NC4yMTU4NjYsInN1YiI6IjY3MmYxMDc4NTdiMzAxZjNjOTMxODYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kNTdPQHUkip8aHsBHV5nrCDBgukZoB93Pj9vfpYlIs'
    }
  };
  
  

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    if(cardsRef.current){
      cardsRef.current.scrollLeft += e.deltaY;
    }
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category ? category :"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    const cardElement = cardsRef.current
    if (cardElement) {
      cardElement.addEventListener('wheel',handleWheel);
    }

    // Cleanup on component unmount
    return () => {
      if (cardElement) {
        cardElement.removeEventListener("wheel", handleWheel);
      }
    };
  },[])


   return (
    <div className="title-cards mt-[50px] mb-[30px]">
      <h2 className="mb-[8px]">{title ? title : "Popular on Netflix"}</h2>
      {/* Enable horizontal scroll by using flex-nowrap and setting overflow-x-auto */}
      <div className="card_List flex space-x-[10px] overflow-x-auto flex-nowrap w-full" ref={cardsRef}>
        {apiData.map((card, index) => {
          return  <Link to={`/player/${card.id}`} className="card relative" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" className="w-[240px] custom-image rounded-[4px] cursor-pointer" />
              <p className="absolute bottom-[10px] text-white ">{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  );
};

export default TitleCards;
