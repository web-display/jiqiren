import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
import style from './App.module.css'
// import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'
import RobotDiscount from './components/RobotDiscount'

interface Props {}
interface State {
	count: number
	robotGallery: any[]
}

const App: React.FC<Props> = (props) => {
	const [count, setCount] = useState(0)
	const [robotGallery, setRobotGallery] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>('')
	useEffect(() => {
		document.title = `点击次数${count}`
	}, [count])
	// 使用promise请求数据
	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then((response) => response.json())
	// 		.then((data) => setRobotGallery(data))
	// }, [])
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users',
				)
				const data = await response.json()
				setRobotGallery(data)
			} catch (error) {
				setError(error.message)
			}

			setLoading(false)
		}
		fetchData()
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
			{(!error || error !== '') && <div>网站错误{error}</div>}
			{!loading ? (
				<div className={style.robotList}>
					{robotGallery.map((r: any, index: number) =>
						index % 2 === 0 ? (
							<RobotDiscount
								key={r.id}
								id={r.id}
								name={r.name}
								email={r.email}
							/>
						) : (
							<Robot key={r.id} id={r.id} name={r.name} email={r.email} />
						),
					)}
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	)
}

export default App
