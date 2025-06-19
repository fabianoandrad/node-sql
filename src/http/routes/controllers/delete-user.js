import {db} from "../../../database/db.js";

export async function deleteUser(request, reply){
    try{
        const {id} = request.params;

        //db.delete(id, reply);
        db.run(`
            DELETE FROM users WHERE id = ?`,
            [id]
        );

        return reply.status(200).send({
            message: "Usuário deletado com sucesso!"
        });

    }catch(error){
        if(error){
            return reply.status(500).send({
                message: 'Ocorreu um erro ao tentar deletar o usuário!' + error.message
            });
        }
    }
};