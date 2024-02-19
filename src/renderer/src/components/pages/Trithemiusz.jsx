import React, { useState, useEffect } from 'react'

let resultMessage = ''

// Function to perform Trithemius encoding or decoding
const performTrithemius = (message, encode = true) => {
	const alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ'
	let resultMessage = ''

	message = message.replace(/\s/g, '')

	for (let i = 0; i < message.length; i++) {
		const char = message[i].toUpperCase()
		if (alphabet.includes(char)) {
			const index = alphabet.indexOf(char)
			let newIndex
			if (encode) {
				newIndex = (index + i) % alphabet.length
			} else {
				newIndex = index - i
				while (newIndex < 0) newIndex += alphabet.length
			}
			resultMessage += alphabet[newIndex]
		} else {
			resultMessage += char
		}
	}

	return resultMessage
}

// Function to generate the Tabula Recta
const generateTabulaRecta = () => {
	const alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ'
	const tabulaRecta = []

	for (let i = 0; i < alphabet.length; i++) {
		const row = []
		for (let j = 0; j < alphabet.length; j++) {
			const newIndex = (j + i) % alphabet.length
			row.push(alphabet[newIndex])
		}
		tabulaRecta.push(row)
	}

	return tabulaRecta
}

const TrithemiusEncoder = () => {
	const [inputMessage, setInputMessage] = useState('')
	const [encodedMessage, setEncodedMessage] = useState('')

	const handleEncode = () => {
		const encoded = performTrithemius(inputMessage)
		setEncodedMessage(encoded)
	}

	return (
		<div className="bg-gray-800 flex items-center justify-center text-2xl font-bold rounded-lg text-white">
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
		</div>
	)
}

const TrithemiusDecoder = () => {
	const [encodedMessage, setEncodedMessage] = useState('')
	const [decodedMessage, setDecodedMessage] = useState('')

	const handleDecode = () => {
		const decoded = performTrithemius(encodedMessage, false)
		setDecodedMessage(decoded)
	}

	return (
		<div className="bg-gray-800 flex items-center justify-center text-2xl font-bold rounded-lg text-white">
			<div className="text-white">
				<h2 className="text-xl font-semibold mb-4">Trithemius Cipher Decoder</h2>
				<div className="mb-4">
					<label htmlFor="encodedMessage" className="block">
						Encoded Message:
					</label>
					<input
						type="text"
						id="encodedMessage"
						value={encodedMessage}
						onChange={(e) => setEncodedMessage(e.target.value)}
						className="block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white p-2"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="decodedMessage" className="block">
						Decoded Message:
					</label>
					<input
						type="text"
						id="decodedMessage"
						value={decodedMessage}
						readOnly
						className="block border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white p-2 cursor-not-allowed"
					/>
				</div>
				<button
					onClick={handleDecode}
					className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				>
					Decode Message
				</button>
			</div>
		</div>
	)
}

const TrithemiusApp = () => {
	const tabulaRecta = generateTabulaRecta()

	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
			<TrithemiusEncoder />
			<TrithemiusDecoder />
			<div
				id="tabulaRectaContainer"
				className="bg-gray-800 flex items-center justify-center text-white font-bold rounded-lg row-span-2 col-start-2 row-start-1 overflow-auto"
			>
				<table id="tabulaRectaTable" className="text-sm w-full mx-4">
					<tbody>
						{tabulaRecta.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{row.map((cell, cellIndex) => (
									<td key={cellIndex}>{cell}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TrithemiusApp
