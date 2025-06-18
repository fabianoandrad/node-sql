import { db } from "../../../database/db";

export async function createUser(request, reply){
    try{
        const {name, eamil} = request.body;

        db.run(
            `INSERT INTO users (name, email) VALUES (?, ?)`, [name, email]
        );

        return reply.status(201).send({
            message: 'Usuário criado com sucesso!'
        });
    }catch(error){
        if(error){
            return reply.status(500).send({
                message: 'Ocorreu um erro ao tentar criar o usuário!'
            });
        }
    }
}