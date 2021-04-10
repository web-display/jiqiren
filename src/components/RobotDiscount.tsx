import React from 'react'
import style from './Robot.module.css'
import { AppStateValue } from '../AppState'
import { withAddToCart } from './AddToCart'

interface RobotProps {
	id: number
	name: string
	email: string
	addToCart: (id, name) => void
	value: AppStateValue
}

const RobotDiscount: React.FC<RobotProps> = ({
	id,
	name,
	email,
	value,
	addToCart,
}) => {
	return (
		<div className={style.cardContainer}>
			<img src={`https://robohash.org/${id}`} alt="robot" />
			<h2>{name}</h2>
			<h2>打折商品</h2>
			<p>{email}</p>
			<p>作者{value.username}</p>
			<button onClick={() => addToCart(id, name)}>添加购物车</button>
		</div>
	)
}

export default withAddToCart(RobotDiscount)
