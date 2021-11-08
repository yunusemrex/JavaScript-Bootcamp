import {BaseLogger, ElasticLogger, MongoLogger} from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")


let logger1 = new BaseLogger()
let userService = new UserService(logger1) 

let user1 = new User(1,"Emre", "Karakus","İstanbul")
let user2 = new User(2,"Yunus", "Karakus","İstanbul")

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))


userService.add()
userService.getById(2)

userService.list()


let customer = {id:1, firstName:"Emre", }
//prototyping = Sonradan değer ekleme
customer.lastName = "Karakus"
customer.city = "İstanbul"


// console.log(customer)
console.log(customer.lastName)
