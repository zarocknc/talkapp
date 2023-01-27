"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/pokemons/${inputValue}`);
  };
  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Pokemon Nombre o ID"
          className="input input-bordered"
        />
        <button className="btn btn-square" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </form>
  );
};
