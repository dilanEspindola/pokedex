/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { Evolutions } from '../components/Evolutions';

test('debe renderizarse el componente evoluciones con sus props', () => {
  const pokemon = [
    {
      id: 1,
      name: 'Bulbasaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
  ];

  const component = render(<Evolutions evolutions={pokemon} />);
  component.getByText(/evolutions/i);
  //   component.debug();
  //   expect(component.container).toHaveTextContent(/evolutions/i);
});
