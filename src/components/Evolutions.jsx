export const Evolutions = ({ evolutions }) => {
  return (
    <div className='w-full mt-5 text-white'>
      <h2 className='mb-5 text-lg'>Evolutions</h2>
      <div className='flex w-full justify-center gap-20'>
        {evolutions
          ? evolutions.map(({ name, image }, index) => (
              <div key={index} className=''>
                <img src={image} alt={name} className='w-20' />
              </div>
            ))
          : 'there are no evolutions'}
      </div>
    </div>
  );
};
