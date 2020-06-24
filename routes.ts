import {RouterContext} from "https://deno.land/x/oak@v5.3.1/mod.ts";

export const home = (ctx: RouterContext) => {
    ctx.response.body = 'Selamat Datang';
}