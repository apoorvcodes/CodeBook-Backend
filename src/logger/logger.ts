import chalk from 'chalk';
import dayjs from 'dayjs';


export const logger = (Content:any)  => {
	if(!Content) throw new Error("Please Provide Content for logging");
	
	if(Content) {
		console.log(chalk.cyan(Content), chalk.red(dayjs()))
	}
}




