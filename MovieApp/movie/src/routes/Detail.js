import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import { Link } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [Loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  console.log(movie);
  return (
    <div>
      {Loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <DetailMovie
            coverImg={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
          />
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
