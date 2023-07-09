import Image from 'next/image';
import data from '../../public/data.json';
import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
import District from './districts';
import { MdOutlineSearchOff, MdOutlineSearch } from 'react-icons/md';
import SearchField from './searchfield';

export interface District {
  district_name: string;
  id: string;
  district: number;
  hotdog_stands: HotdogStand[];
}

export interface HotdogStand {
  id: string;
  name: string;
  district: District;
}

export default function Home() {
  return (
    <main className="w-screen flex flex-column justify-center bg-vermilion-500 bg-opacity-60">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="flex w-3/4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
          {data.hotdog_stands.map(stand => (
            <a key={stand.name} href="#" className="block md:w-sm p-6 bg-vermilion-100 shadow-lg rounded-lg">
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
        </div>
        <div className="flex w-1/4">
        <District /></div>
      </div>
      <div className="md:w-3/4 hidden w-screen m-2 sm:m-0">
        <div className="w-full flex justify-center my-10">
        </div>
        <SearchField />
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" />
            <input type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 md:rounded-lg rounded-md" placeholder="Search Vienna's Sausage Places" required></input>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>
        <ul className='flex flex-row flex-wrap justify-between [&>li]:p-2'>
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
        <District />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
          {data.hotdog_stands.map(stand => (
            <a key={stand.name} href="#" className="block md:w-sm p-6 bg-white shadow rounded-lg">
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
