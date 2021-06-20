import Image from 'next/image';
import logo from '../public/logo.png'
import HeaderItem from './HeaderItem';
import {HomeIcon,UserIcon,CalendarIcon,CollectionIcon,LightningBoltIcon} from '@heroicons/react/outline'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-10 h-auto justify-around text-center">
            <div className="flex flex-grow justify-evenly max-w-2xl ">
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Collection" Icon={CollectionIcon}/>
                <HeaderItem title="Random" Icon={LightningBoltIcon}/>
                <HeaderItem title="Watch Calender" Icon={CalendarIcon}/>
                <HeaderItem title="Profile" Icon={UserIcon}/>
            </div>
            <div>
            <Image src={logo} width={200} height={200}/>

            </div>
            
        </header>
    )
}
export default Header
