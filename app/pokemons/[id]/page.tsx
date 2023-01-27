'use client'
import Link from "next/link";
import {notFound} from "next/navigation"

const fetchPuchamonPorId = async (url: string, id?: string) => {
  if (id == undefined) {
    try {
      const puchimon = await fetch(`${url}`);
      if (puchimon.ok) {
        const result = await puchimon.json();
        return result;
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const puchimon = await fetch(`${url}${id}`);
      if (puchimon.ok) {
        const result = await puchimon.json();
        //console.log(result);
        return result;
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export default async function PokemonPorId({ params }: any) {
  const { id } = params;
  if (id == "undefined") {
    notFound()
  } 
  const puchamon = await fetchPuchamonPorId(
    "https://pokeapi.co/api/v2/pokemon/",
    id
  );
  const puchamonEspecie = await fetchPuchamonPorId(puchamon.species.url);
  const puchamonEvos = await fetchPuchamonPorId(
    puchamonEspecie.evolution_chain.url
  );
  let evoChain = [];
  let evoData = puchamonEvos.chain;

  do {
    var evoDetails = evoData["evolution_details"][0];
    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoDetails ? 1 : evoDetails.min_level,
      trigger_name: !evoDetails ? null : evoDetails.trigger.name,
      item: !evoDetails ? null : evoDetails.item,
    });
    evoData = evoData["evolves_to"][0];
  } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
  console.log(evoChain)

  return (
    <div className="card w-fit bg-blue-100 shadow-xl">
      <figure>
        <img
          className="object-scale-down"
          src={puchamon.sprites.front_default}
          alt={puchamon.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {puchamon.name}
          {puchamon.types.map((tipo: any) => {
            return (
              <>
                <span className="badge badge-secondary badge-lg">
                  {tipo.type.name}
                </span>
              </>
            );
          })}
        </h2>

        <div className="stats shadow">
          {evoChain.map((chainPart) => {
            return (
              <div className="stat" key={chainPart.species_name}>
                <div className="stat-figure text-primary">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src="https://placeimg.com/128/128/people" />
                    </div>
                  </div>
                </div>
                <Link href={`/pokemons/${chainPart.species_name}`}><div className="stat-value link link-hover">{chainPart.species_name}</div></Link>
                <div className="stat-title">{chainPart.item == null ? "No necesita items" : chainPart.item.name}</div>
                <div className="stat-desc text-secondary">
                  lvl: {chainPart.min_level == null ? "Sin nivel" : chainPart.min_level}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
