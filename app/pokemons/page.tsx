/*const searchPokemon = () => {
  const pokeName = document.querySelector("#pokeSearch").value == null ? "pikachu" : this
}
*/
import Search from "../components/Search";

export default function PokePage() {
  return (
    <>
      <h1>
        Aqui va a ir una barra de busqueda de pokemon y las busquedas recientes
      </h1>
        
        <Search/>
    </>
  );
}
