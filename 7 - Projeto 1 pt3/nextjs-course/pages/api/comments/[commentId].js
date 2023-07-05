export default function handler (req, res) {
    const commentId = req.query.commentId
    if(req.method === 'POST') {
        const {email, name, text} = req.body

        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === "") {
            res.status(422).json({message: 'Algo deu errado! Verifique seus dados e tente novamente'})
            return;
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }

        res.status(201).json({message: 'Comentário adicionado!', comment: newComment})

        console.log(newComment)

    } else if (req.method === 'GET') {

        const dummyList = [
            {id: 'c1', name: 'Caio', text: 'Meu primeiro comentário!', email: 'caioagralemos@live.com'},
            {id: 'c2', name: 'Caioba', text: 'Sim sim!', email: 'cais1337@hotmail.com'},
        ]

        res.status(200).json({comments: dummyList})
    }
}