import { useEffect, useState } from 'react';
import Back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [apiData , setApiData] = useState({
    name : "",
    key : "",
    published_at : "",
    type : ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM0ZjQ3Y2M0OGUwYzdjYjJkM2VlZjI3ZTVjY2NiMyIsIm5iZiI6MTczMTEzODA1NC4yMTU4NjYsInN1YiI6IjY3MmYxMDc4NTdiMzAxZjNjOTMxODYwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kNTdPQHUkip8aHsBHV5nrCDBgukZoB93Pj9vfpYlIs'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className="Player h-[100vh] flex flex-col justify-center items-center">
      <img src={Back_arrow_icon} alt="" className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer' onClick={()=> navigate(-2)}/>
      <iframe  width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen className='rounded-[10px]'></iframe>
      <div className="player-Info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
