import fs from 'fs';
import path from 'path'

const basePath = path.join(__dirname, '..', '..', '..', '..'); // Voltar dois níveis do diretório atual

const filePath = path.join(basePath, 'contacts.json');

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const {name, message, email} = JSON.parse(req.body)
        let data = fs.readFileSync(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                return data
            }
        })

        data = JSON.parse(data)
        data.push({name: name, email: email, message: message})
        const jsonString = JSON.stringify(data);
        fs.writeFileSync(filePath, jsonString, 'utf-8')
        res.status(201).json({message: 'Mensagem enviada!'})
    } else {
        res.redirect('/contact')
    }
}