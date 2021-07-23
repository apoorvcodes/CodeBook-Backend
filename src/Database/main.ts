import { connect }from 'mongoose'
import { mongoPass, Port } from 'src/constant'
import { logger } from 'src/logger/logger'


export const MongoConnect = async() => {
  await connect(mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => logger(`Connected to Database at Port ${Port}`))
}