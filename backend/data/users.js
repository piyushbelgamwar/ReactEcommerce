import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Piyush Belgamwar',
    email: 'piyush@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tejas Belgamwar',
    email: 'tejas@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
