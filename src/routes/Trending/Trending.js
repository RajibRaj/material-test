import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleMovie from "../../components/SingleMovie/SingleMovie";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="movies">
        {content &&
          content.map((item) => (
            <SingleMovie
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
