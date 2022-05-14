// module.exports = (req, res) => {
  
//   res.json(
//     {
//       username: 'tom',
//       age: 30
//     }
//   )
// }

const Mock = require('mockjs')

const {
	users
} = Mock.mock({
	"users|5": [{			
			"_id": "@id()",
			"username": "@cname()",
			"age|20-30": 30
		}]
})


// console.log('mock', users);

module.exports = (req, res) => {
	
	res.json(users)
}
