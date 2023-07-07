import Image from 'next/image'
import data from '../../public/data.json'

export default function Home() {
  return (
    <main className="w-screen flex flex-column justify-center bg-gradient-to-r bg-opacity-30 bg-[#8BC6EC] from-[#8BC6EC] to-[#9599E2]">
      <div className="md:w-3/4 w-screen m-2 sm:m-0">
        <div className="w-full flex justify-center my-10">
          <Image src="/logo.png" alt="food" width={200} height={200} />
        </div>
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 md:rounded-lg rounded-md" placeholder="Search Vienna's Sausage Places" required></input>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>
        <ul className='flex flex-row justify-between [&>li]:p-2'>
          <li>
            <a href="https://www.google.com" className="hover:underline">Vegan</a>
          </li>
          <li>
            <a className="hover:underline">Vegetarian</a>
          </li>
          <li>
            <a className="hover:underline">Glutenfree</a>
          </li>
          <li>
            <a className="hover:underline">District</a>
          </li>
        </ul>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
          {data.hotdog_stands.map(stand => (
            <a key={stand.name} href="#" className="block md:w-sm p-6 bg-white bg-opacity-80 shadow rounded-lg">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{stand.name}</h5>
              <p className="font-normal">Location: {stand.location}</p>
              <p className="font-normal">Review: {stand.review}</p>
              <div className="flex flex-row space-x-2 mt-4">
                {stand.gluten_free_options && <div className="rounded-full bg-lime-600 p-2"><Image
                  priority
                  src="/icons/wheat.svg"
                  height={18}
                  width={18}
                  alt="Glutenfree options available"
                /></div>}
                {stand.vegan_options && <div className="rounded-full bg-lime-600 p-2"><Image
                  src="/icons/vegan.svg"
                  height={18}
                  width={18}
                  alt="Vegan options available"
                /></div>}
              </div>
            </a>))}
        </div>
        <div className='flex justify-center m-10'>
          Mahlzeit!
        </div>
      </div >
    </main >
  )
}