import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// function Movie(props) {
//   let navigate = useNavigate();

//   let [movie, setMovie] = useState(props.movie);

//   return (
//     <div className="col-md-4">
//       <img
//         src={movie.imageUrl}
//         height="500px"
//         onClick={() => navigate(`/detail/${movie.id}`)}
//       />
//       <h4>Title : {movie.title}</h4>
//       <p>ID : {movie.id}</p>
//     </div>
//   );
// }

// export default Movie;

function Movie(props) {

    let [movie, setMovie] = useState(props.movie);

    const navigate = useNavigate();
  
    const handleReservationClick = () => {
      navigate('/TicketBuying', { state: { movie } });
    };
  
    return (
    <div>
        <div className="inner-div">
        <img src={movie.imageUrl} width="200px" alt={movie.title} />
        <div>
          <span>
            {/* <img src="heart.png" width="15" alt="heart icon" /> */}
            {movie.title}
          </span>
        </div>
        <button onClick={() => handleReservationClick(movie)}>
          예매
        </button>
      </div>
    </div>
      
    );
  };

export default Movie;