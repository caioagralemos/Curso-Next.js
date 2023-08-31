import { hashPassword, verifyPassword } from '@/lib/auth'
import { connectToDatabase } from '@/lib/db'
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return 
    }

    const session = await getSession({req: req})

    if (!session) {
        res.status(401).json({message: 'You are not logged in!'})
        return 
    }

    const userEmail = session.user.email
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword

    const client = await connectToDatabase()
    const usersCollection = client.db('auth').collection('accounts')
    const user = usersCollection.findOne({email: userEmail})

    if (!user) {
        res.status(404).json({ message: 'User not found.' })
        client.close()
        return
    }

    const currentPassword = user.password

    const checkPassword = await verifyPassword(oldPassword, currentPassword)

    const hashedPassword = await hashPassword(newPassword, 12)

    if (!checkPassword) {
        res.status(403).json({ message: 'Incorrect credentials.' })
        client.close()
        return
    }

    usersCollection.updateOne({email: userEmail}, { $set: {password: hashedPassword} })
    res.status(200).json({ message: 'Password succesfully updated.' })
    client.close()
}