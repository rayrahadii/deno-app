import {Application, Router} from "https://deno.land/x/oak@v5.3.1/mod.ts";
import {home} from "./routes.ts";

const app = new Application();

const router = new Router();

router.get('/', home);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Server Started on Port : 8000");