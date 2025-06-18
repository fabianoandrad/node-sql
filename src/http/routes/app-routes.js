import { createUser } from "./controllers/create-user";

export async function appRoutes(app){
    app.post('/users', createUser)
}