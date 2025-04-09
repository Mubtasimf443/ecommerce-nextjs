/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import { z } from 'zod';
import { ObjectId } from 'mongodb'; // Import for BSON ObjectId support

// Custom validator for MongoDB ObjectId
const objectIdValidator = z.custom<ObjectId>((val) => {
  try {
    // Check if it's already an ObjectId
    if (val instanceof ObjectId) return true;
    
    // Check if it can be converted to a valid ObjectId
    if (typeof val === 'string' && ObjectId.isValid(val)) return true;
    
    return false;
  } catch (error) {
    return false;
  }
}, {
  message: 'Invalid MongoDB ObjectId'
});

export default objectIdValidator