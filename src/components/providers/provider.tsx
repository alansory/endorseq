import { ReactNode } from 'react';


type Props = {
  children: ReactNode;
};

export default function Provider({ children }: Props) {
  // const [myPokemons, setMyPokemons] = useLocalStorage<MyPokemon[]>({
  //   key: 'myPokemons',
  //   initialValue: [],
  //   validator: validateLocalStorageData,
  // });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const value = useMemo(() => ({ myPokemons, setMyPokemons }), [myPokemons]);

  return (
    <>
      {children}
    </>
  );
}