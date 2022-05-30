const fs = require('fs')

// const data = fs.readFileSync('./hello.txt', 'utf8')
// console.log(data);

module.exports = (req, res) => {
	
	fs.writeFileSync('./hello.txt', 'hello world', err => {
	  if (err) {
	    console.error(err)
	    return
	  }
	  //文件写入成功。
	})
	
	const data = fs.readFileSync('./hello.txt', 'utf8')
	
	res.json({
		data
	})
}
