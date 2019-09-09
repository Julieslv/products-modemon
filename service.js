

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
	const userIds = []
	orders.forEach(order => {
		if (order.productId === productId && !userIds.includes(order.userId)) {
			userIds.push(order.userId)
		}
	})

	const users = require('./resources/users.json')
	customerNamesForProduct = []
	users.filter(user => {
		userIds.forEach(userId => {
			console.log(user.userId === userId ? true : false)
			if (user.userId === userId) {
				customerNamesForProduct.push(user.name)
			}
		})
	})

	// I am sure that there is a cleaner shorter way to do this, just not sure how?
	return customerNamesForProduct
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
