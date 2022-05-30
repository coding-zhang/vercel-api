// const users = require('../../mock/user-data.js')

// console.log('users', users);

module.exports = (req, res) => {
	
	res.json([{
	"_id": "540000198212061166",
	"username": "冯霞",
	"age": 28
}, {
	"_id": "360000198410117032",
	"username": "张静",
	"age": 28
}, {
	"_id": "510000198812169757",
	"username": "唐霞",
	"age": 23
}, {
	"_id": "540000201002128195",
	"username": "陆平",
	"age": 24
}, {
	"_id": "990000200708037438",
	"username": "乔涛",
	"age": 23
}])
}
