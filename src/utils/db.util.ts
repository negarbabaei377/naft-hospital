import {MongoClient} from 'mongodb'
import {DoctorT} from '@/types/doctorT'

interface RegisterDoctorI {
    client: MongoClient
    collection: string
    doctor: DoctorT
}

interface GetAllDoctorsI {
    client: MongoClient
    collection: string
    id?: string
}

export const connectDB = async () => {
    return await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.hgjmxmc.mongodb.net/?retryWrites=true&w=majority`
    )
}

export const insertDoctor = async ({client, collection, doctor}: RegisterDoctorI) => {
    const db = client.db()
    const Collection = db.collection(collection)
    await Collection.insertOne(doctor)
}

export const getAllDoctors = async ({client, collection}: GetAllDoctorsI) => {
    const db = client.db()
    const Collection = db.collection(collection)

    return await Collection.find({}).toArray()
}

export const getDoctorsById = async ({client, collection, id}: GetAllDoctorsI) => {
    const db = client.db()
    const Collection = db.collection(collection)

    return Collection.findOne({"coNumber": Number(id)})
}

export const deleteData = async ({client, collection, id}: GetAllDoctorsI) => {
    const db = client.db()
    const Collection = db.collection(collection)
    await Collection.deleteOne({"coNumber": Number(id)})
}
