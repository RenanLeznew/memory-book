import { Link } from 'react-router-dom'

function Cover(){
    return(
        <div className="bg-gradient-to-r from-orange-900 via-yellow-800 to-orange-900 brightness-50 w-screen h-screen border-8 border-[#321414]">
            <div className="absolute left-1/2 -ml-0.5 h-full w-8 bg-gradient-to-r shadow-inner border-2 border-t-0 border-b-0 border-orange-900 from-orange-800 via-yellow-700 to-orange-800">
            </div>
                <div className='absolute font-mono font-bold ml-20  mt-36 p-32'>
                    <h1 className='text-2xl lg:text-8xl ml-8 lg:ml-16 text-transparent bg-clip-text bg-gradient-to-b from-red-900 via-yellow-400 to-lime-600'>NOSSO</h1> 
                    <br>
                    </br>
                    <br>
                    </br>
                    <h1 className='text-xl lg:text-6xl ml-9 lg:ml-36 text-transparent bg-clip-text bg-gradient-to-b from-lime-700 via-blue-600 to-purple-900'>DAS</h1>
                </div>
                <div className='absolute  font-mono font-bold ml-10 right-10 p-10 lg:ml-20 lg:right-20 lg:mt-36 lg:p-32'>
                    <h1 className='text-2xl lg:text-8xl ml-16 lg:ml-5 text-transparent bg-clip-text bg-gradient-to-b from-red-900 via-yellow-400 to-lime-600'>LIVRO</h1> 
                    <br>
                    </br>
                    <br>
                    </br>
                    <h1 className='text-xl lg:text-6xl ml-16 text-transparent bg-clip-text bg-gradient-to-b from-lime-700 via-blue-600 to-purple-900'>AVENTURAS</h1>
                </div>
                <h2 className='text-2xl lg:text-8xl absolute left-8 lg:left-64 bottom-3'>
                    🌎
                </h2>
                <h2 className='text-xl lg:text-6xl absolute text-slate-800 right-32 font-bold lg:right-80 bottom-3'>
                    Renan 💜
                </h2>
                <h2 className='text-xl lg:text-6xl absolute text-purple-900 right-20 font-bold lg:right-40 bottom-3'>  Gabs</h2>
            <Link to={'/book'}>
                <button 
                    className="border-b-[45px] lg:border-b-[85px] border-solid border-l-[45px] lg:border-l-[85px] border-l-transparent right-0 w-0 h-0 absolute bottom-0 shadow-inner border-[#572307]" 
                >
                </button>
            </Link>
        </div>
    )
}

export default Cover;