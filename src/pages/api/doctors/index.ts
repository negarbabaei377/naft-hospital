import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB, getAllDoctors, insertDoctor } from '@/utils/db.util'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // post method
  if (req.method === 'POST') {
    const { fullName, avatar, education, experience, coNumber, rating, about, dutyHours, field, experienceList } =
      req.body

    // if (!fullName || fullName.trim() === '' || !avatar || avatar === '' || !education || education.trim() === '' || !experience || experience.trim() === '' || !about || about.trim() === '' || !field || field.trim() === '' || !rating || isNaN(rating) || !experienceList || !experienceList.length || !Array.isArray(experienceList) || !dutyHours || !Array.isArray(dutyHours) || !dutyHours.length  || isNaN(coNumber)) {
    //     res.status(422).json({message: 'Invalid Input'})
    //     return
    // }
    let client
    try {
      client = await connectDB()
    } catch (e) {
      res.status(500).json({ message: 'Could not connect to database!' })

      return
    }
    const newUser = {
      fullName,
      avatar,
      education,
      experience,
      coNumber,
      rating,
      about,
      dutyHours,
      field,
      experienceList
    }
    try {
      await insertDoctor({ client, collection: 'message', doctor: newUser })
      res.status(200).json({ message: 'Successfully stored new user!', doctor: newUser })
    } catch (e) {
      res.status(500).json({ message: 'Storing new user failed!' })
    } finally {
      await client.close()
    }

    return

    // get method
  } else if (req.method === 'GET') {
    let client
    try {
      client = await connectDB()
    } catch (e) {
      res.status(500).json({ message: 'Could not connect to database!' })

      return
    }
    try {
      const allData = await getAllDoctors({ client, collection: 'message' })
      res.status(200).json({ message: 'successfully get data!', data: allData })
    } catch (e) {
      res.status(500).json({ error: 'Get data failed!' })
    } finally {
      await client.close()
    }

    return
  }
  res.status(405).json({ message: 'Method is not allowed for this api!' })
}

export default handler
