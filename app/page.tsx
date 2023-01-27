import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div>
        <p>
          Get started by editing;
        </p>
      </div>
      <h1 className="m-2 text-4xl font-bold text-cyan-500">With Tailwind CSS</h1>
      <button className='btn btn-primary'> hola gente</button>



    </main>
  )
}
