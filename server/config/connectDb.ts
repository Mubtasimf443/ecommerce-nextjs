/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import mongoose from 'mongoose'
import { DB_URL, DB_URL_SECOND } from '../env'

export const connectDb = async () => {
    try {
        await mongoose.connect(DB_URL_SECOND)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB', error)
    }
}