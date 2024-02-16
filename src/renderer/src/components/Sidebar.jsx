import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineLock } from 'react-icons/ai'
import { BiKey, BiCodeAlt } from 'react-icons/bi'

const Apps = [
	{ id: 1, name: '', icon: <AiOutlineHome size={24} /> },
	{ id: 2, name: 'Cezar', icon: <BiKey size={24} /> },
	{ id: 3, name: 'Polibiusz', icon: <BiCodeAlt size={24} /> },
	{ id: 4, name: 'Trithemiusz', icon: <AiOutlineLock size={24} /> },
	{ id: 5, name: 'Vigenere', icon: <BiKey size={24} /> }
]

const Sidebar = () => {
	return (
		<div className="w-20 text-white mx-2 p-0 grid grid-rows-[auto,1fr,auto]">
			<div className="text-center py-2">
				<h3>Szyfr</h3>
			</div>
			<div className="overflow-y-auto overflow-x-hidden">
				<ul>
					{Apps.map((app) => (
						<li key={app.id} className="mb-4 flex justify-center items-center">
							<NavLink
								to={'/' + app.name}
								className="inline-block p-2 border border-gray-300 rounded-full bg-gray-200 text-gray-700 hover:border-radius-4px active:bg-yellow-200"
							>
								{app.icon}
							</NavLink>
							<span className="ml-2">{app.name}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="text-center">
				<button
					onClick={() => console.log('Button clicked')}
					className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
					title="Click me"
				>
					Button
				</button>
			</div>
		</div>
	)
}

export default Sidebar
