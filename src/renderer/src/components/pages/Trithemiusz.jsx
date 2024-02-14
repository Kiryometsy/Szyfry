import React, { useState } from 'react'

// Trithemius encoder function
const encodeTrithemius = (message) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let encodedMessage = ''

	for (let i = 0; i < message.length; i++) {
		const char = message[i].toUpperCase()
		if (alphabet.includes(char)) {
			const index = alphabet.indexOf(char)
			const newIndex = (index + i) % alphabet.length
			encodedMessage += alphabet[newIndex]
		} else {
			encodedMessage += char
		}
	}

	return encodedMessage
}

const TrithemiusEncoder = () => {
	const [inputMessage, setInputMessage] = useState('')
	const [encodedMessage, setEncodedMessage] = useState('')

	const handleEncode = () => {
		const encoded = encodeTrithemius(inputMessage)
		setEncodedMessage(encoded)
	}

	return (
		<div className="text-white">
			<h2 className="text-xl font-semibold mb-4">Trithemius Cipher Encoder</h2>
			<div className="mb-4">
				<label htmlFor="inputMessage" className="block">
					Message:
				</label>
				<input
					type="text"
					id="inputMessage"
					value={inputMessage}
					onChange={(e) => setInputMessage(e.target.value)}
					className="block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white p-2"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="encodedMessage" className="block">
					Encoded Message:
				</label>
				<input
					type="text"
					id="encodedMessage"
					value={encodedMessage}
					readOnly
					className="block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white p-2 cursor-not-allowed"
				/>
			</div>
			<button
				onClick={handleEncode}
				className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				Encode Message
			</button>
		</div>
	)
}

const CardOne = () => {
	return (
		<div className="bg-gray-800 flex items-center justify-center text-2xl font-bold rounded-lg">
			<TrithemiusEncoder />
		</div>
	)
}

const TrithemiusApp = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
			<CardOne />
			<div className="bg-gray-800 flex items-center justify-center text-2xl font-bold rounded-lg col-start-1 row-start-2">
				2
			</div>
			<div className="bg-gray-800 flex items-center justify-center text-2xl font-bold rounded-lg row-span-2 col-start-2 row-start-1">
				3
			</div>
		</div>
	)
}

export default TrithemiusApp
