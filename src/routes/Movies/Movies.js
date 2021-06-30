import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleMovie from "../../components/SingleMovie/SingleMovie";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genre/Genres";
import useGenres from "../../hooks/useGenres";
import "./Movies.css";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setnoOfPages] = useState(0);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genresForUrl = useGenres(selectedGenres);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`
    );

    console.log(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`
    );

    setContent(data.results);
    setnoOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page, genresForUrl]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="movies">
        {content &&
          content.map((item) => (
            <SingleMovie
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type="movie"
              vote_average={item.vote_average}
            />
          ))}
      </div>
      {noOfPages > 1 && (
        <CustomPagination setPage={setPage} noOfPages={noOfPages} />
      )}
    </div>
  );
};

export default Movies;
