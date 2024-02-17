import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineLock } from 'react-icons/ai'
import { BiKey, BiCodeAlt, BiAbacus } from 'react-icons/bi'

const Apps = [
	{ id: 1, name: '', icon: <AiOutlineHome size={24} />, tooltipText: 'Home' },
	{ id: 2, name: 'Cezar', icon: <BiKey size={24} />, tooltipText: 'Cezar' },
	{ id: 3, name: 'Polibiusz', icon: <BiCodeAlt size={24} />, tooltipText: 'Polibiusz' },
	{ id: 4, name: 'Trithemiusz', icon: <AiOutlineLock size={24} />, tooltipText: 'Trithemiusz' },
	{ id: 5, name: 'Vigenere', icon: <BiAbacus size={24} />, tooltipText: 'Vigenere' }
]

const Sidebar = () => {
	const [tooltipText, setTooltipText] = useState('')
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

	const handleNavLinkMouseEnter = (event, text) => {
		const ulRect = event.target.closest('ul').getBoundingClientRect()
		const liRect = event.target.closest('li').getBoundingClientRect()
		const tooltipHeight = liRect.height
		const liCenterY = liRect.top + liRect.height / 2
		const tooltipY = liCenterY - tooltipHeight / 2

		setTooltipText(text)
		setTooltipPosition({ x: ulRect.right - 10, y: tooltipY })
	}

	const handleNavLinkMouseLeave = () => {
		setTooltipText('')
	}

	return (
		<div className="relative w-20 text-white mx-2 p-0 grid grid-rows-[auto,1fr,auto]">
			<div className="text-center py-2">
				<h3>Szyfr</h3>
			</div>
			<div className="overflow-y-auto overflow-x-hidden">
				<ul>
					{Apps.map((app) => (
						<li key={app.id} className="relative mb-4 flex justify-center items-center">
							<span className="relative">
								<NavLink
									to={'/' + app.name}
									className="inline-block p-2 border border-gray-300 rounded-full bg-gray-200 text-gray-700 hover:border-radius-4px active:bg-yellow-200"
									onMouseEnter={(e) => handleNavLinkMouseEnter(e, app.tooltipText)}
									onMouseLeave={handleNavLinkMouseLeave}
								>
									{app.icon}
								</NavLink>
							</span>
						</li>
					))}
				</ul>
			</div>
			{tooltipText && (
				<span
					className="absolute z-50 bg-red-600 p-2 text-xs text-white rounded"
					style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
				>
					{tooltipText}
				</span>
			)}
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
