import clsx from 'clsx';
import '../styles/globals.css';
import EndorseListFilter from '@/components/endorse-list/endorse-list';
import EndorseCard from '@/components/endorse-list/endorse-card';

export default function Home() {
  return (
    <>
      <div className="sticky-section">
        <EndorseListFilter />
      </div>
      <hr className="-mx-6 mb-8 hidden lg:block" />
      <div className={clsx('endorse-card-container', 'opacity-60')}>
        {/* {pokemons.map((pokemon) => ( */}
          {/* <EndorseCard /> */}
        {/* ))} */}
        {/* {!isFetching && pokemons.length === 0 && 'No result'}
        {isFetchingNextPage && <PokemonCardsShimmer />} */}

        {/* Add 2 empty div to enforce 3 columns layout even when just displaying 1 card */}
        <div />
        <div />
      </div>
    </>
  )
}
