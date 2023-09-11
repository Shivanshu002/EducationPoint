import Typed from 'react-typed';

function Banner() {
    return (
        <div className="bg-[#476bf8] w-full py-[50px]">
            <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
                <div className="md:text-3xl text-xl p-[24px]" >
                    Learn with us
                </div>
                <h2 className="text-white text-5xl md:text-[80px] md:p-[20px] ">Grow with us</h2>
                <div className="md:text-[50px] text-[20px] md:p-[20px] text-white">
                    Learn
                    <Typed className='pl-3'
                        strings={['Web Development', 'Ethical Hacking', 'Digital Marketing']}
                        typeSpeed={100}
                        loop={true}
                        backSpeed={80}
                    />
                </div>
                <button className='bg-black rounded p-2 text-white md:w-[20%] w-[30%] font-normal'>Get Started</button>

            </div>

        </div>
    )
}
export default Banner;