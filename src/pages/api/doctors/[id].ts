import {NextApiRequest, NextApiResponse} from 'next'
import {connectDB, deleteData, getDoctorsById} from '@/utils/db.util'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query
    const {id} = query

    // get method
    if (req.method === 'GET') {
        let client
        try {
            client = await connectDB()
        } catch (e) {
            res.status(500).json({message: 'Could not connect to database!'})

            return
        }

        // get data by id
        try {
            const doctor = await getDoctorsById({client, collection: 'message', id: id as string})
            res.status(200).json({message: 'successfully get data!', data: doctor})
        } catch (e) {
            res.status(500).json({error: 'Get data failed!'})
        } finally {
            await client.close()
        }

        return

        // delete method
    } else if (req.method === 'DELETE') {
        let client
        try {
            client = await connectDB()
        } catch (e) {
            res.status(500).json({message: 'Could not connect to database!'})

            return
        }

        // delete data by id
        try {
            await deleteData({client, collection: 'message', id: id as string})
            res.status(200).json({message: 'successfully delete data!'})
        } catch (e) {
            res.status(500).json({message: 'Delete data failed!'})
        } finally {
            client.close()
        }

        return
    }

    res.status(405).json({message: 'Method is not allowed for this api!'})
}

export default handler
