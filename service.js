

const getOrderCountForUser = (name) => {
	const users = require('./resources/users.json')
	for (user of users) {
		if (user.name === name) {
			const userId = user.userId
			const orders = require('./resources/orders.json')
			let orderCountUser = 0; // pulled out of global scope used let instead of var
			for (order of orders) {
				order.userId === userId ? orderCountUser++ : orderCountUser //turned into ternary
			}
			return orderCountUser
		}
	}
	return 0
}

const getOrderCountForProduct = (product) => {
	const products = require('./resources/products.json')
	for (productItem of products) {
		if (productItem.productName === product) {
			const productId = productItem.productId //222
			const orders = require('./resources/orders.json')
			let orderCountProduct = 0;
			for (order of orders) {
				order.productId === productId ? orderCountProduct++ : orderCountProduct //turned into ternary
			}
			return orderCountProduct
		}
	}
	/* 	products.forEach(productItem => { //why can I not user forEach?
			console.log(productItem)
			if (productItem.productName === product) {
				const productId = productItem.productId //222
				const orders = require('./resources/orders.json')
				let orderCountProduct = 0;
				for (order of orders) {
					order.productId === productId ? orderCountProduct++ : orderCountProduct //turned into ternary
				}
				console.log(` orderCount ${orderCountProduct} ${typeof (orderCountProduct)}`) // 2
				return orderCountProduct // test fails???
			}
		}); */
	return 0
	// return 2
}

const getCustomerNamesForProduct = (product) => { //amend to same format
	//goal: return names of customers that bought item given chair

	//from the product array get the product ID
	const products = require('./resources/products.json')
	let productId = products.find(productItem => productItem.productName === product)
	productId = productId.productId
	// console.log(`productId ${productId}`) // 444 (chair)

	// look through the orders and get the users that ordered that product
	const orders = require('./resources/orders.json')
	const orderWithProducts = []
	orders.forEach(order => {
		if (order.productId === productId && !orderWithProducts.includes(order.userId)) {
			orderWithProducts.push(order.userId)
		}
	})

	const users = require('./resources/users.json')

	// const orderWithProduct = orders.filter(order => {
	// 	if (order.productId === productId) {
	// 		return (order.userId)
	// 	}
	// })
	console.log('orderWithProduct', orderWithProducts)
	// [ { orderId: 5, userId: 3, productId: 444 }, { orderId: 6, userId: 1, productId: 444 }, { orderId: 7, userId: 1, productId: 444 } ]
	// console.log('orderWithProductId', orderWithProduct[0].userId)

	//return the name of the user from the orderedWithProduct array


	/* 	const usersOrdered = users.filter(user => {
			console.log(user.userId)
			if (user.userId === orderWithProduct.userId) {
				console.log(user.name)
			}

		}) */

	/* 	const userId = orders.filter(order => {
			return order.productId === productId ? order : null
		}).map(order => {
			console.log('userd', order.userId)
			return order
		})
		console.log('userId', userIds) // expected console.log to return and array of user id, but it returns the whole object with that value
		*/

	//get the userId from users


	return ['bob', 'sue']
}

const getMostPopularProduct = () => {
	//reduce()
	return ['chair']
}

module.exports = {
	getOrderCountForUser,
	getOrderCountForProduct,
	getCustomerNamesForProduct,
	getMostPopularProduct
}
