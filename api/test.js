module.exports = (req, res) => {
  const {username, age} = req.body
  res.json(
    {
      username,
      age
    }
  )
}
