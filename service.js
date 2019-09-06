

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
	/* 	products.forEach(productItem => {
			console.log(productItem)
			if (productItem.productName === product) {
				const productId = productItem.productId //222
				const orders = require('./resources/orders.json')
				let orderCountProduct = 0;
				for (order of orders) {
					order.productId === productId ? orderCountProduct++ : orderCountProduct //turned into ternary
				}
				console.log(` orderCount ${orderCountProduct} ${typeof (orderCountProduct)}`)
				return orderCountProduct
			}
		}); */
	return 0
	// return 2
}

const getCustomerNamesForProduct = (product) => { //amend to same format
	//get the userId from users
	const users = require('./resources/users.json')
	users.filter(user => {
		console.log(product)
	})
	const products = require('./resources/products.json')
	const productId = products.find(productItem => {
		const productId = productItem.productName === product ? productItem.productId : 'Item not found'
		console.log(productId)
	})
	productId
	console.log()

	//get the userId and productId from orders
	const orders = require('./resources/orders.json')
	orders.filter(order => {
		console.log(order);
	})

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
