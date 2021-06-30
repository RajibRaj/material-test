import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@material-ui/core";

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((item) => genre.id !== item.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((item) => genre.id !== item.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        padding: "6px 0",
      }}
    >
      {selectedGenres &&
        selectedGenres.map((item) => (
          <Chip
            label={item.name}
            style={{ margin: 2 }}
            size="small"
            key={item.id}
            clickable
            onClick={() => handleRemove(item)}
            color="primary"
          />
        ))}
      {genres &&
        genres.map((item) => (
          <Chip
            label={item.name}
            style={{ margin: 2 }}
            size="small"
            key={item.id}
            clickable
            onClick={() => handleAdd(item)}
          />
        ))}
    </div>
  );
};

export default Genres;
