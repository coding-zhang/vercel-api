// module.exports = (req, res) => {
//   const {username, age} = req.body
//   res.json(
//     {
//       username,
//       age
//     }
//   )
// }

module.exports.getUserData = (req, res) => {
	const {
		username,
		age
	} = req.body
	res.json({
		username,
		age
	})
}
module.exports.getBookData = (req, res) => {
	const {
		bookname,
		price
	} = req.body
	res.json({
		bookname,
		price
	})
}

