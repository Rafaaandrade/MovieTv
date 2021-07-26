// Verifica se a lista de genêro está preenchida,
// e separa os genêros por id, adiciona-se a lista de ids com uma vírgula
// para montar a query que filtra filmes por gênero.

const useGenresQuery = (selectedGenres) => {

  if (selectedGenres.length < 1) return "";

  const idList = selectedGenres.map((g) => g.id);
  return idList.reduce((acc, current) => acc + "," + current);
};

export default useGenresQuery;
