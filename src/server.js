import {app} from "./app.js";

import './database/db.js'; // importando arquivo do bd
import './database/migrations/create-table.js'; // importamos o arquivo da criação da tabela


app.listen({
    port: 3333
}).then(() => console.log('HTTP server rodando em http://localhost:3333'));