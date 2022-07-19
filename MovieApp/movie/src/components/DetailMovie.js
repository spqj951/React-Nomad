import PropTypes from "prop-types";
function DetailMovie({ coverImg, title, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>

      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

DetailMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
