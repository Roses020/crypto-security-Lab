const users = []
const bcrypt = require('bcryptjs')
module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const { userName, firstName, email, lastName, password } = req.body
        console.log('Registering User')
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)


            const newUser = {
              userName,
              firstName,
              lastName,
              email,
              passwordHash
            }

    
      
      console.log(req.body)
      users.push(newUser)
      let passwordHashToReturn = {... newUser}
      delete passwordHashToReturn.pinHash
      res.status(200).send(passwordHashToReturn)
  }
}
