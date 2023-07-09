'use client'

import { useState, useEffect } from 'react';
import { MdOutlineSearchOff, MdOutlineSearch } from 'react-icons/md';

export default function SearchField() {
    const [search, setSearch] = useState(false);

    return (
        <>
            {!search &&
                <div className="rounded-3xl bg-white w-6">
                    <button onClick={() => setSearch(!search)} className='justify-center align-middle content-center'>
                        <MdOutlineSearch size={20} />
                    </button>
                </div>}
            {search &&
                <form>
                    <div className="relative">
                        <input className='rounded-xl w-2/4 p-2' placeholder='Search...' />
                        <button onClick={() => setSearch(!search)} className='justify-center align-middle content-center'>
                            <MdOutlineSearchOff size={20} />
                        </button>
                    </div>
                </form>}
        </>
    )
}