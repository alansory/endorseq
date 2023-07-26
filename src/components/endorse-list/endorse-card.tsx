import Link from "next/link";

export default function EndorseCard(){
  return(
    <Link href={`/endorse/{name}`} className={`enodorse-card group`}>
      <b className="col-span-3 text-xl">{`Sopyan Alansory`}</b>
      <b className="col-span-2 pt-3.5">Type:</b>
      <div className="col-span-2 -mr-5 capitalize">{}</div>
      {/* <PokemonImage
        idPokemon={id}
        alt={name}
        size={128}
        className="group-hover:scale-125"
        priority={id < 7}
      /> */}
      <div className="endorse-number">{}</div>
      <div className="pokeball-flat" />
    </Link>
  )
}