import db from '../utils/db';
import  {ObjectId} from "mongodb";
import mongoose from "mongoose";
import MonitaGroup from '../models/MonitaGroup';


export async function getSingleMonita(groupId: string) {
    await db.connect();
    const monitaGroup = await MonitaGroup.findById(groupId);
    await db.disconnect();
    return monitaGroup;
}