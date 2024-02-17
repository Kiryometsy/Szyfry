import React, { useEffect } from 'react'

const Cezar = () => {
	let LAlfa = 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż'

	function Szyfrowanie() {
		var src = document.querySelector('input[name="keyOne"]').value.replace(/\s/g, '')
		const key = parseInt(document.querySelector('input[name="keyValue"]').value)
		let result = ''
		src = src.toLowerCase()

		for (let j = 0; j < src.length; j++) {
			let char = src.charAt(j)

			let i = LAlfa.indexOf(char)
			if (i !== -1) {
				let newIndex = (i + key) % 34
				if (newIndex < 0) newIndex += 34 // Zapewnienie, że indeks nie będzie ujemny
				let newChar = LAlfa.charAt(newIndex)
				result += newChar
			}
		}

		document.querySelector('input[name="workedOne"]').value = result
		document.querySelector('input[name="keySec"]').value = key
	}

	function Deszyfrowanie() {
		var src = document.querySelector('input[name="keyTwo"]').value.replace(/\s/g, '')
		const key = parseInt(document.querySelector('input[name="keyValue"]').value)
		src = src.toLowerCase()

		var result = ''

		for (var j = 0; j < src.length; j++) {
			var i = LAlfa.indexOf(src.charAt(j))
			if (i - key < 0) {
				var tem = key - i
				i = 34 - tem
			} else {
				i = i - key
			}
			result += LAlfa.charAt(i)
		}

		document.querySelector('input[name="workedTwo"]').value = result
	}

	function changeVal(value) {
		document.querySelector('input[name="keyValue"]').value = value
	}
	const handleKeyChange = (event) => {
		const { value } = event.target
		changeVal(value)
	}
	useEffect(() => {
		const defaultValue = '0' // Domyślna wartość
		handleKeyChange({ target: { value: defaultValue } }) // Wywołanie funkcji handleKeyChange z domyślną wartością
	}, [])
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
						onClickCapture={Szyfrowanie}
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
						onClickCapture={Deszyfrowanie}
						id="Encrpyt"
						className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 row-start-3 col-span-2"
					>
						Szyfruj
					</button>
				</div>

				<div className="bg-yellow-200 items-center justify-center text-2xl font-bold rounded-lg p-6 row-span-2 col-start-2 row-start-1 grid grid-cols-2 grid-rows-2 ">
					<label
						for="steps-range"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white row-start-1"
					>
						Klucz
					</label>

					<input readonly name="keyValue" className="row-start-1" />

					<input
						name="Key"
						type="range"
						className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200 row-start-2 col-span-2"
						min="0"
						max="33"
						step="1"
						defaultValue={0}
						id="customRange3"
						onChange={handleKeyChange}
						onLoad={handleKeyChange}
					/>
				</div>
			</div>
			<div>
				<h1 className="text-3xl font-bold underline">Welcome to Cezar Page</h1>
				<p className="text-base">Cezar strona główna</p>
			</div>
		</div>
	)
}

export default Cezar
