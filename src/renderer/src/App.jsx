import { Routes, Route, HashRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/pages/Home.jsx'
import Cezar from './components/pages/Cezar'
import Polibiusz from './components/pages/Polibiusz'
import Trithemiusz from './components/pages/Trithemiusz'
// import Vigenere from './components/pages/Vigenere';

function App() {
	return (
		<HashRouter>
			<div className="flex h-full bg-gray-800">
				<Sidebar />
				<div className="bg-white w-full">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Cezar" element={<Cezar />} />
						<Route path="/Polibiusz" element={<Polibiusz />} />
						<Route path="/Trithemiusz" element={<Trithemiusz />} />
						{/* <Route path="/Vigenere" element={<Vigenere />} /> */}
					</Routes>
				</div>
			</div>
		</HashRouter>
	)
}

export default App
