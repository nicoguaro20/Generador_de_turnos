import server from "./server";
import "reflect-metadata";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then( res => {
        console.log("Conexión a la base de datos realizada con exito");
        server.listen(PORT, ()=> {
            console.log(`server listening on port ${PORT}`)
            })
});