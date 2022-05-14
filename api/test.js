module.exports = (req, res) => {
  const {username, age} = req.body
  res.send(`username: ${username},age: ${age}`)
}