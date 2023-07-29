import clsx from 'clsx';
import '../styles/globals.css';
import EndorseCard from '@/features/endorse-list/endorse-card';
import EndorseListFilter from '@/features/endorse-list/endorse-list';

export default function Home() {
  return (
    <>
      <div className="sticky-section">
        <EndorseListFilter />
      </div>
      <hr className="-mx-6 mb-8 hidden lg:block" />
      <div className={clsx('endorse-card-container')}>
        {/* {pokemons.map((pokemon) => ( */}
          <EndorseCard />
          <EndorseCard />
          <EndorseCard />
          <EndorseCard />
          <EndorseCard />
          <EndorseCard />
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
