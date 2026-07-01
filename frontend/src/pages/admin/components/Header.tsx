import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='flex items-center justify-between flex-col sm:flex-row gap-4'>
			<div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8 w-full sm:w-auto justify-center sm:justify-start'>
				<Link to='/' className='rounded-lg'>
					<img src='/spotify.png' className='size-8 sm:size-10 text-black' />
				</Link>
				<div className='text-center sm:text-left'>
					<h1 className='text-xl sm:text-3xl font-bold'>Music Manager</h1>
					<p className='text-xs sm:text-sm text-zinc-400 mt-1'>Manage your music catalog</p>
				</div>
			</div>
			<UserButton />
		</div>
	);
};
export default Header;
