import ExpertsPic from '../assest/image/experts.png';
function Experts() {
    return (
        <div className="max-w-[1240px] mx-auto my-4 h-[200px] md:grid grid-cols-2 p-2  ">
            <div className='col-span-1 md:w-[80%] t'>
                <img src={ExpertsPic} alt='image'  className='inline'/>
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold text-xl mt-2'>LEARN FROM EXPERTS</h1>
                <p className='my-2 text-justify'>"Discover a world of knowledge at Learn with Experts. Our platform connects you with
                    industry-leading professionals who share their expertise through immersive courses. Whether you're
                    passionate about business, art, technology, or more, unlock your full potential with expert-guided
                    learning experiences. Join us on a journey of continuous growth today!"</p>
                <button className='bg-black rounded p-2 text-white w-[30%]'>Get Started</button>
            </div>
        </div>
    )
}
export default Experts;