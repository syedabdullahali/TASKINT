import { Outlet, useNavigate } from 'react-router-dom';

function Page() {
    const navigation = useNavigate()

    return (
        <div className="  bg-blue-300 min-h-screen w-screen flex justify-center content-center  ">
            <div className='w-96 min-h-96 bg-white' >
                <nav className='bg-blue-500 p-1 flex '>
                    <button onClick={() => { navigation("/") }} className='px-4 py-2 bg-white  w-1/2 rounded'>Subjects</button>
                    <button className='px-4 py-2  w-1/2 text-white '>Student</button>
                </nav>
                <div >
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default Page;
