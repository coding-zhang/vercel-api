const users = require('../../mock/user-data.js')

console.log('users', users);

module.exports = (req, res) => {
	
	res.send({
		"data": users
	})
}
