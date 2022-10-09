import { Link } from 'react-router-dom'

function Cover(){
    return(
        <div className="bg-gradient-to-r from-orange-900 via-yellow-800 to-orange-900 brightness-50 w-screen h-screen border-8 border-[#321414]">
            <div className="absolute left-1/2 -ml-0.5 h-full w-8 bg-gradient-to-r shadow-inner border-2 border-t-0 border-b-0 border-orange-900 from-orange-800 via-yellow-700 to-orange-800">
            </div>
                <div className='absolute font-mono font-bold ml-20  mt-36 p-32'>
                    <h1 className='text-8xl ml-16 text-transparent bg-clip-text bg-gradient-to-b from-red-900 via-yellow-400 to-lime-600'>NOSSO</h1> 
                    <br>
                    </br>
                    <br>
                    </br>
                    <h1 className='text-6xl ml-36 text-transparent bg-clip-text bg-gradient-to-b from-lime-700 via-blue-600 to-purple-900'>DAS</h1>
                </div>
                <div className='absolute  font-mono font-bold ml-20 right-0 mt-36 p-32'>
                    <h1 className='text-8xl ml-5 text-transparent bg-clip-text bg-gradient-to-b from-red-900 via-yellow-400 to-lime-600'>LIVRO</h1> 
                    <br>
                    </br>
                    <br>
                    </br>
                    <h1 className='text-6xl text-transparent bg-clip-text bg-gradient-to-b from-lime-700 via-blue-600 to-purple-900'>AVENTURAS</h1>
                </div>
                <h2 className='text-8xl absolute left-64 bottom-3'>
                    🌎
                </h2>
                <h2 className='text-6xl absolute text-slate-800 font-bold right-80 bottom-0'>
                    Renan 💜
                </h2>
                <h2 className='text-6xl absolute text-purple-900 font-bold right-40 bottom-0'>  Gabs</h2>
            <Link to={'/book'}>
                <button 
                    className="w-0 h-0 absolute bottom-0 right-0 shadow-inner border-[#572307]  border-b-[85px] border-solid border-l-[85px] border-l-transparent" 
                >
                </button>
            </Link>
        </div>
    )
}

export default Cover;