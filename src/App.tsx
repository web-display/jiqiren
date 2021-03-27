import React from 'react'
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

class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			count: 0,
			robotGallery: [],
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => this.setState({ robotGallery: data }))
	}
	render() {
		return (
			<div className={style.app}>
				<div className={style.appHeader}>
					<img src={logo} alt="logo" className={style.appLogo} />
					<h1>罗伯特的购物平台名字很长</h1>
				</div>
				<button
					onClick={() => {
						this.setState(
							(preState, preProps) => {
								return { count: preState.count + 1 }
							},
							() => {
								console.log('正确', this.state.count)
							},
						)
						this.setState(
							(preState, preProps) => {
								return { count: preState.count + 1 }
							},
							() => {
								console.log('正确', this.state.count)
							},
						)
					}}
				>
					{this.state.count}
				</button>
				<ShoppingCart />
				<div className={style.robotList}>
					{this.state.robotGallery.map((r) => (
						<Robot key={r.id} id={r.id} name={r.name} email={r.email} />
					))}
				</div>
			</div>
		)
	}
}

export default App
