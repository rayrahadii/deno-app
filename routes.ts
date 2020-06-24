import {RouterContext} from "https://deno.land/x/oak@v5.3.1/mod.ts";
import {renderFileToString} from "https://deno.land/x/dejs@0.7.0/mod.ts"

export const home = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`,
    {});
}