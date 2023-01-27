import Link from "next/link";

const enlaces = [
  {
    label: "Posts",
    route: "/posts",
  },
  {
    label: "Acerca de",
    route: "/about",
  },
  {
    label: "Pokemon",
    route: "/pokemons",
  },
];

export default function Navigation() {
  return (
    <header>
      <div className="navbar bg-red-400">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Nombre Pendiente
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {enlaces.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}> {label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
