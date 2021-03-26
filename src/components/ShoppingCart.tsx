import React from 'react'
import style from './ShoppingCart.module.css'

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
    this.clickHandle=this.clickHandle.bind(this)
	}
  clickHandle(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({
			isOpen: !this.state.isOpen,
		})
	}
	render() {
		return (
			<div className={style.cartContainer}>
				<button className={style.button} onClick={this.clickHandle}>
					购物车 (2件)
				</button>
				<div
					className={style.cartDropDown}
					style={{ display: this.state.isOpen ? 'block' : 'none' }}
				>
					<ul>
						<li>robot1</li>
						<li>robot2</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default ShoppingCart
