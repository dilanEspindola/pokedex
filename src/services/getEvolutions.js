export const getEvolutions = async id => {
  const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};
