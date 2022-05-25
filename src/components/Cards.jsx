import { useNavigate } from 'react-router-dom';

export const Cards = ({ pokemon }) => {
  const navigate = useNavigate();

  const { id, name, types, sprites } = pokemon;
  const type = types.map(type => type.type.name);
  return (
    <div
      role='cards'
      className={
        type[0] === 'grass'
          ? 'bg-green-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2 cursor-pointer'
          : type[0] === 'fire'
          ? 'bg-orange-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2 cursor-pointer'
          : type[0] === 'water'
          ? 'bg-blue-500 rounded-lg p-5 flex flex-col justify-between items-center gap-2 cursor-pointer'
          : type[0] === 'bug'
          ? 'bg-lime-600 rounded-lg p-5 flex flex-col justify-between items-center gap-2 cursor-pointer'
          : type[0] === 'normal'
          ? 'bg-slate-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2 cursor-pointer'
          : type[0] === 'poison'
          ? 'bg-purple-800 rounded-lg p-5 flex flex-col justify-between items-center gap-2 cursor-pointer'
          : type[0] === 'electric'
          ? 'bg-yellow-400 rounded-lg p-5 flex flex-col justify-between items-center gap-2 cursor-pointer'
          : null
      }
      onClick={() => navigate(`/pokemon/${id}`)}
    >
      <img src={sprites.other.dream_world.front_default} alt='' className='' />
      <div className=''>
        <p className='text-center text-white'>{id}</p>
        <h1 className='text-white text-2xl capitalize'>{name}</h1>
      </div>
    </div>
  );
};
