import { MdMenuOpen } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function Header() {

    const [toggle, setToggle] = useState(false);

    return (
        <div className="bg-[#476bf8] p-4">
            <div className="max-w-[1240px] mx-auto flex flex-row justify-between items-center py-[15px] ">
                <div className="text-3xl font-bold font-serif">
                    eDUCATION pOINT
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <MdMenuOpen onClick={() => setToggle(!toggle)} className=' text-white text-2xl md:hidden block' />
                }

                <ul className='hidden md:flex text-white'>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Resources</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contact</li>
                </ul>

                {/* Responsive menu */}
                <ul className={`duration-300 md:hidden p-2 gap-7 text-white fixed bg-black top-[97px] 
                ${toggle ? 'left-[0]' : 'left-[-100%]'}`
                }>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Resources</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contact</li>
                </ul>

            </div>

        </div>

    )
}

export default Header;