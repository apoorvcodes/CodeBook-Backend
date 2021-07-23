import {model, Schema, Model} from 'mongoose'

export const UserInfo: Model<unknown, {}, {}> = model("Userinfo", new Schema({
 name: {
   type: String,
   maxlength: 24,
   minlength: 4,
   required: true,
   unique: true,
 },
 email: {
	type: String,
	maxlength: 24,
	minlength: 4,
	unique: true,
	required: true,
      },
 UrlImage: {
	type: URL,
	maxlength: 100,
	minlength: 4,
	unique: true,
	required: true,
 },
 Id: {
	type: String,
	maxlength: 50,
	minlength: 4,
	unique: true,
	required: true,
 }, 
 UpdatedAt: {
required: false,
type: Date,
default: Date.now
	  }

})
)