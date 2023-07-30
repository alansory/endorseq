import clsx from 'clsx';
import '../styles/globals.css';
import EndorseCard from '@/features/endorse-list/endorse-card';
import EndorseListFilter from '@/features/endorse-list/endorse-list';

export default function Home() {
  return (
    <>
      {/* <div className="sticky-section"> */}
        {/* <EndorseListFilter /> */}
      {/* </div> */}
      {/* <hr className="-mx-6 mb-8 hidden lg:block" />
      <div className={clsx('endorse-card-container')}> */}
        {/* {pokemons.map((pokemon) => ( */}
          {/* <EndorseCard />
          <EndorseCard />
          <EndorseCard />
          <EndorseCard />
          <EndorseCard />
          <EndorseCard /> */}
        {/* ))} */}
        {/* {!isFetching && pokemons.length === 0 && 'No result'}
        {isFetchingNextPage && <PokemonCardsShimmer />} */}

        {/* Add 2 empty div to enforce 3 columns layout even when just displaying 1 card */}
        {/* <div />
        <div /> */}
      {/* </div> */}
      <div className="page-wrap">
        <div className="grid-halves">
          <div className="bg-[#FF9800] border-r-2 border-black">
            <div className="column-padding">
              <div className="tablet-centered">
                <div className="content-grid home-hero">
                  <h1>Dari yang ribet <span className="whitespace-nowrap block">ke yang simpel</span></h1>
                  <p className="section-sub-head">
                    Jadwalkan konten Anda dengan mudah, jangkau audiens lebih luas, dan post konten ke platfrom kesayangan Anda secara otomatis. <br/>Mulai perjalanan sosial media Anda sekarang dengan Starlet!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
