import React from 'react'
import style from './ShoppingCart.module.css'
import { appContext } from '../AppState'

interface Props {}

interface State {
	isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			isOpen: false,
		}
		this.clickHandle = this.clickHandle.bind(this)
	}
	clickHandle(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}
	render() {
		return (
			<appContext.Consumer>
				{(value) => {
					return (
						<div className={style.cartContainer}>
							<button className={style.button} onClick={this.clickHandle}>
								购物车 {value.shoppingCart.items.length}(件)
							</button>
							<div
								className={style.cartDropDown}
								style={{ display: this.state.isOpen ? 'block' : 'none' }}
							>
								<ul>
									{value.shoppingCart.items.map((i) => (
										<li>{i.name}</li>
									))}
								</ul>
							</div>
						</div>
					)
				}}
			</appContext.Consumer>
		)
	}
}

export default ShoppingCart
