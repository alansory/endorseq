import Link from "next/link";
import EndorseImage from "@/components/commons/endorse-image";

export default function EndorseCard(){
  return(
    <Link href={`/endorse/{name}`} className={`endorse-card group bg-endorse-card`}>
      <b className="col-span-3 text-xl">Sopyan Alansory</b>
      <b className="col-span-2 pt-3.5">Package:</b>
      <div className="col-span-2 -mr-5 capitalize">Instagram (24 hours)</div>
      <div className="col-span-2 -mr-5 capitalize">1 day of work</div>
      <EndorseImage
        idPokemon={1}
        alt={`sopyan-alansory`}
        size={128}
        className="group-hover:scale-125"
        priority={true}
      />
      <div className="endorse-card-number">Rp. 200.000</div>
    </Link>
  )
}