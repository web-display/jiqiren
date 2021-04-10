import React, { useContext } from 'react'
import { appContext, appSetStateContext } from '../AppState'
import { RobotProps } from './Robot'

export const withAddToCart = (
	ChildComponent: React.ComponentType<RobotProps>,
) => {
	return (props) => {
		const value = useContext(appContext)
		const setState = useContext(appSetStateContext)
		const addToCart = (id, name) => {
			if (setState) {
				setState((state) => {
					return {
						...state,
						shoppingCart: {
							items: [...state.shoppingCart.items, { id, name }],
						},
					}
				})
			}
		}

		return <ChildComponent {...props} value={value} addToCart={addToCart} />
	}
}
export const useAddToCart = () => {
	const value = useContext(appContext)
	const setState = useContext(appSetStateContext)
	const addToCart = (id, name) => {
		if (setState) {
			setState((state) => {
				return {
					...state,
					shoppingCart: {
						items: [...state.shoppingCart.items, { id, name }],
					},
				}
			})
		}
	}
	return {
		value,
		addToCart,
	}
}
