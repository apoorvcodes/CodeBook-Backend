import {model, Schema} from 'mongoose'

export const UserInfo = model("User", new Schema({
 name: {
   type: String,
   maxlength: 24,
   minlength: 4,
   unique: true,
 },
 email: {
	type: String,
	maxlength: 24,
	minlength: 4,
	unique: true,
      },
 UrlImage: {
	type: URL,
	maxlength: 100,
	minlength: 4,
	unique: true,
 },
 Posts: {
    type: Array,
    
    

 }

})
)