import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("trending");
  const history = useHistory();

  useEffect(() => {
    console.log(value);
    console.log(history);
    if (value === "movies") history.push("/movies");
    else if (value === "series") history.push("/series");
    else if (value === "search") history.push("/search");
    else history.push("/");
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Trending"
        icon={<WhatshotIcon />}
        value="trending"
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Movies"
        icon={<MovieIcon />}
        value="movies"
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="TV Series"
        icon={<TvIcon />}
        value="series"
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Search"
        icon={<SearchIcon />}
        value="search"
      />
    </BottomNavigation>
  );
}
