import { GetStaticPropsResult } from 'next';

export async function getStaticProps() {
  const data = {
    message: "This is a static message fetched at build time.",
  };
  return {
    props: {
      data,
    },
  };
}

export default function EndorseListPage() {
  return (
    <>
      <div className="sticky-section">
        {/* <PokemonListFilter /> */}
      </div>
    </>
  )
}