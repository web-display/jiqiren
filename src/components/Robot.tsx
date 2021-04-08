import React, { useContext } from 'react'
import style from './Robot.module.css'
import { appContext } from '../AppState'

interface RobotProps {
	id: number
	name: string
	email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
	const value = useContext(appContext)
	return (
		<div className={style.cardContainer}>
			<img src={`https://robohash.org/${id}`} alt="robot" />
			<h2>{name}</h2>
			<p>{email}</p>
			<p>作者{value.username}</p>
		</div>
	)
}

export default Robot
