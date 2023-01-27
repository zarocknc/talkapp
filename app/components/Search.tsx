"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

type MyPageProps = {
  inputValue: string
}

export default (props: MyPageProps) => {
  const [inputValue, setInputValue] = useState<string>("")
  const router = useRouter()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push({
      pathname: '/pokemons/[prop]',
      query: { prop: inputValue },
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={inputValue} placeholder="ingresar poke name"/>
      <button type="submit">Go to dynamic page</button>
    </form>
  );
};
