import {app} from "./app.js";

app.listen({
    port: 3333
}).then(() => console.log('HTTP server rodando em http://localhost:3333'));