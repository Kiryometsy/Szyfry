import React from 'react'

const Polibiusz = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
			<div className="bg-blue-200 flex items-center justify-center text-2xl font-bold rounded-lg">
				1
			</div>
			<div className="bg-green-200 flex items-center justify-center text-2xl font-bold rounded-lg col-start-1 row-start-2">
				2
			</div>
			<div className="bg-yellow-200 flex items-center justify-center text-2xl font-bold rounded-lg row-span-2 col-start-2 row-start-1">
				3
			</div>
		</div>
	)
}

export default Polibiusz
