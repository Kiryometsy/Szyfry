import React from 'react'

const Home = () => {
	return (
		<div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-4xl font-bold text-center mb-6">Welcome to Cryptography Toolbox</h1>
				<div className="bg-white shadow-md rounded-md p-6">
					<h2 className="text-2xl font-semibold mb-4">About this App:</h2>
					<p className="text-lg mb-4">
						Welcome to our cryptography application! This app provides tools for encoding and decoding
						messages using various classical ciphers.
					</p>
					<p className="text-lg mb-4">Below are the ciphers available in this application:</p>
					<ul className="list-disc pl-8 mb-4">
						<li>
							<strong>Cezar Cipher:</strong> A simple letter substitution that shifts the alphabet by a
							fixed number.
						</li>
						<li>
							<strong>Polibiusz Cipher:</strong> Transforms each letter of the plaintext into coordinates
							on a grid.
						</li>
						<li>
							<strong>Trithemius Cipher:</strong> Shifts each letter of the plaintext based on its position
							in the message.
						</li>
						<li>
							<strong>Vigenère Cipher:</strong> A polyalphabetic substitution cipher that uses a keyword
							for shifting letters.
						</li>
					</ul>
					<p className="text-lg">
						Feel free to explore each cipher's functionality by navigating through the corresponding
						pages!
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
