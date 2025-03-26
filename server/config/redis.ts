/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import Redis from 'ioredis'
import { REDIS_URL } from '../env'

export const RedisClient = new Redis(REDIS_URL);
