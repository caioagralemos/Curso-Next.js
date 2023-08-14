import {MongoClient} from 'mongodb'

export default async function handler (req, res) {
    const eventId = req.query.eventId

    const client = await MongoClient.connect('mongodb+srv://caio:8501@nextjs-course.zwmahox.mongodb.net/events?retryWrites=true&w=majority')

    if(req.method === 'POST') {
        const {email, name, text} = req.body

        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === "") {
            res.status(422).json({message: 'Algo deu errado! Verifique seus dados e tente novamente'})
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        }

        const database = client.db();

        const result = await database.collection('comments').insertOne(newComment)

        console.log(result)

        newComment.id = result.insertedId

        res.status(201).json({message: 'Comentário adicionado!', comment: newComment})

    } else if (req.method === 'GET') {
        
        const db = client.db();

        const documents = await db.collection('comments').find().sort({_id: -1}).toArray();

        res.status(200).json({comments: documents})
    }

    client.close();
}