import express from 'express';
import { Request, Response, NextFunction,Express } from 'express'; 
import { Port,Host } from './constant';
import {logger } from './logger/logger'
const app:Express = express()
import { MongoConnect } from './Database/main'


const ExpressRun = () => {
app.get('/', function (req:Request, res:Response , next:NextFunction) {
req
next
  res.send('Hello World')
})

app.listen(Port, Host, () => {
logger('Working')
})
}


MongoConnect();
ExpressRun();