/*const searchPokemon = () => {
  const pokeName = document.querySelector("#pokeSearch").value == null ? "pikachu" : this
}
*/
import Search from "../components/Search";

export default function PokePage() {
  return (
    <>
        <Search/>
        <h1>Abajo deben estar los elementos buscados enves de mandarte a una nueva pagina</h1>
    </>
  );
}
