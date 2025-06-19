import {db} from "../../../database/db.js";

export async function getUsers(request, reply){
    try{
        const users = new Promise((resolve, reject) => {
            db.all(`SELECT * FROM users order by created_at desc`,
                (err, rows) => {
                    if(err){
                        reject(err);
                    }else{
                        resolve(rows);
                    }
                }
            )
        });

        return users;
    }catch(error){
        if(error){
            return reply.status(500).send({
                message: 'Ocorreu um erro ao tentar buscar os usuários!' + error.message
            });
        }
    }
}
