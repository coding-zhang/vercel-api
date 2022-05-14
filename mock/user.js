const Mock = require('mockjs')
const fs = require('fs')

const {
	users
} = Mock.mock({
	"users|5": [{			
			"_id": "@id()",
			"username": "@cname()",
			"age|20-30": 30
		}]
})

const res = 'module.exports = ' + JSON.stringify(users)
// 新建文件，写入数据
fs.writeFile('./user-data.js', res, function(error) {
	if (error) {
		console.log('写入失败')
	} else {
		console.log('写入成功了')
	}
})