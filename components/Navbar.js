import navList from '../utils/requests'
import {useRouter} from 'next/router'
function Navbar() {
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20  overflow-x-scroll scrollbar-hide">
                {Object.entries(navList).map(([key,{title,url}])=>(
                    <h2 key={key} className="last:pr-24 cursor-pointer active:text-red-500 transition duration-100 hover:scale-120" onClick={
                        ()=>router.push(`/?genre=${key}`)
                    }>{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#192a56] h-10 w-1/12"/>
        </nav>
    )
}

export default Navbar
 