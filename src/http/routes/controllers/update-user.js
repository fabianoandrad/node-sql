import {db} from "../../../database/db.js";

export async function updateUser(request, reply) {
    try{
        const { id } = request.params;
        const { name, email } = request.body;

        db.run(`
            UPDATE users SET name = ?, email = ? WHERE id = ?`,
            [name, email, id]
        )

        return reply.status(200).send({
            message: 'Usuário atualizado com sucesso!'
        })

    }catch(error){
        if(error){
            return reply.status(500).send({
                message: 'Ocorreu um erro ao tentar atualizar o usuário!' + error.message
            });
        }
    }
};
