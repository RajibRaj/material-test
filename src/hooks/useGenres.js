const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  return selectedGenres.map((item) => item.id).join(",");
};

export default useGenres;
