import dotenv from 'dotenv'
dotenv.config() 

export const URL = {
    URL_BASE_CURSO: process.env.URL_CURSO
}

export const CREDENTIALS = {
    VALID_CREDENTIALS:{
        USER_BASE_CURSO: process.env.USER_CURSO,
        PASS_BASE_CURSO: process.env.PASS_CURSO
     },
     INVALID_CREDENTIALS:{
        INVALID_USER_CURSO: 'Invalid user',
        INVALID_PASS_CURSO: 'Invalid pass'
     }
}

export const MESSAGES = {
   INVALID_USER_AND_PASS: 'Epic sadface: Username and password do not match any user in this service',
   NULL_USER: 'Epic sadface: Username is required',
   NULL_PASS: 'Epic sadface: Password is required',
   NULL_USER_AND_NULL_PASS: 'Epic sadface: Username is required'

}