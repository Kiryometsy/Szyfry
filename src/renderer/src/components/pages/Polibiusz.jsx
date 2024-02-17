import React, { useEffect, useState } from 'react'

const Polibiusz = () => {
	const LAlfa = 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż'
	const [seed, setSeed] = useState(0)
	const [jagged, setJagged] = useState([])
	const [jaggedDict, setJaggedDict] = useState({})

	useEffect(() => {
		const newJagged = keying(seed)
		setJagged(newJagged)
		convertToDictionary(newJagged)
	}, [seed])

	function keying(seed) {
		let availableChars = LAlfa.split('')
		let k = 0
		let newJagged = []

		for (let i = 0; i < 5; i++) {
			newJagged[i] = []
			for (let j = 0; j < 7; j++) {
				k = (k + seed) % availableChars.length
				newJagged[i][j] = []
				newJagged[i][j][0] = availableChars[k]
				newJagged[i][j][1] = String.fromCharCode(i + 49)
				newJagged[i][j][2] = String.fromCharCode(j + 49)
				availableChars.splice(k, 1)
			}
		}
		return newJagged
	}

	function Encryption() {
		let sentence = document.querySelector('input[name="keyOne"]').value.toLowerCase()
		let code = ''

		for (let k = 0; k < sentence.length; k++) {
			if (sentence[k] == ' ') {
			} else {
				var p = sentence[k]
				let i = jaggedDict[sentence[k]]
				code += jaggedDict[p].i + jaggedDict[p].j
			}
		}

		code = SecEncryption(code)
		document.querySelector('input[name="workedOne"]').value = code
	}

	function SecEncryption(encrypt) {
		let en = ''
		const duos = encrypt.length / 2
		const parity = seed % 2 == 0 ? true : false

		for (let i = 0; i < duos; i++) {
			// petla po parach
			var index = i * 2
			let temp = `${encrypt[index]}${encrypt[index + 1]}`

			if (i % 2 == 0 && parity) {
				temp = `${temp[1]}${temp[0]}`
			}
			if (i % 2 == 1 && !parity) {
				temp = `${temp[1]}${temp[0]}`
			}
			en += temp
		}
		return en
	}

	function Decryption() {
		let code = document.querySelector('input[name="keyTwo"]').value.toLowerCase()
		code = SecEncryption(code)
		let uncode = ''

		const duos = code.length / 2

		for (let i = 0; i < duos; i++) {
			// pętla po parach
			let index = i * 2
			let ind1 = parseInt(code[index]) - 1
			let ind2 = parseInt(code[index + 1]) - 1
			console.log(ind1)
			uncode += jagged[ind1][ind2][0]
		}

		document.querySelector('input[name="workedTwo"]').value = uncode
	}

	function convertToDictionary(jaggedArray) {
		let dict = {}
		jaggedArray.forEach((row, i) => {
			row.forEach((cell) => {
				dict[cell[0]] = { i: cell[1], j: cell[2] }
			})
		})
		setJaggedDict(dict)
	}

	const handleKeyChange = (event) => {
		const value = parseInt(event.target.value)
		setSeed(value)
	}

	const jaggedString = jagged.map((row) => row.map((cell) => cell.join(', ')).join('\n')).join('\n')

	const jaggedArray = jagged.map((row) => row.map((cell) => cell.at(0)))
	return (
		<div className="m-3">
			<div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
				<div className="bg-blue-200 items-center justify-center text-2xl p-6 grid grid-rows-3 font-bold rounded-lg row-start-1">
					<label className="block mb-2 align-top text-sm font-medium text-gray-900 dark:text-white row-start-1">
						Message
					</label>
					<input type="text" name="keyOne" className="row-start-1 " />
					<label className="block mb-2 align-top text-sm font-medium text-gray-900 dark:text-white row-start-2">
						Encrypted Message
					</label>
					<input type="text" name="workedOne" className="row-start-2 " />
					<button
						type="button"
						onClickCapture={Encryption}
						id="Encrpyt"
						className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 row-start-3 col-span-2"
					>
						Szyfruj
					</button>
				</div>
				<div className="bg-green-200 items-center justify-center text-2xl p-6 grid grid-rows-3 font-bold rounded-lg row-start-2">
					<label className="block mb-2 align-top text-sm font-medium text-gray-900 dark:text-white row-start-1">
						Encrypted Message
					</label>
					<input type="text" name="keyTwo" className="row-start-1 " />

					<label className="block mb-2 align-top text-sm font-medium text-gray-900 dark:text-white row-start-2">
						Decrypted Message
					</label>
					<input type="text" name="workedTwo" className="row-start-2 " />

					<button
						type="button"
						onClickCapture={Decryption}
						id="Encrpyt"
						className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 row-start-3 col-span-2"
					>
						Szyfruj
					</button>
				</div>
				<div className="bg-yellow-200 items-center justify-center text-2xl font-bold rounded-lg p-6 row-span-2 col-start-2 row-start-1 grid grid-cols-3 grid-rows-2 ">
					<label
						htmlFor="steps-range"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white row-start-1"
					>
						Klucz
					</label>
					<input
						type="number"
						name="keyValue"
						className="col-span-2 col-start-2 row-start-1"
						defaultValue={0}
						onChange={handleKeyChange}
					/>
					{/* {jaggedArray} */}
					<pre className="row-start-2 col-span-3 text-3xl">
						<h1 className="text-center">Klucz</h1>
						<table id="tabulaRectaTable" className="text-sm w-full table">
							<tbody>
								{jagged.map((row, rowIndex) => (
									<tr className="table-row" key={rowIndex}>
										{row.map((cell, cellIndex) => (
											<td className="w-8 text-center text-3xl" key={cellIndex}>
												{cell[0]}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</pre>
				</div>
			</div>
		</div>
	)
}

export default Polibiusz
