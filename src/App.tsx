import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
import style from './App.module.css'
// import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

interface Props {}
interface State {
	count: number
	robotGallery: any[]
}

const App: React.FC = (props) => {
	const [count, setCount] = useState(0)
	const [robotGallery, setRobotGallery] = useState<any>([])
	useEffect(() => {
		document.title = `点击次数${count}`
	}, [count])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => setRobotGallery(data))
	}, [])

	return (
		<div className={style.app}>
			<div className={style.appHeader}>
				<img src={logo} alt="logo" className={style.appLogo} />
				<h1>罗伯特的购物平台名字很长</h1>
			</div>
			<button
				onClick={() => {
					setCount(count + 1)
				}}
			>
				{count}
			</button>
			<ShoppingCart />
			<div className={style.robotList}>
				{robotGallery.map((r: any) => (
					<Robot key={r.id} id={r.id} name={r.name} email={r.email} />
				))}
			</div>
		</div>
	)
}

export default App
