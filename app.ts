import * as Koa from "koa";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";
import * as cors from "@koa/cors";

import messageRouter from "./routes/message-router";

class App {

    app: Koa;

    constructor() {
        this.app = new Koa();

        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(json({ pretty: false, param: 'pretty' }));
        this.app.use(bodyParser());
        this.app.use(cors());
        this.app.use((ctx: Koa.Context, next: Function) => {
            ctx.set('Access-Control-Allow-Origin', '*');
            ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
            ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

            next();
        });
    }

    private routes(): void {
        this.app.use(messageRouter.routes());
    }
}

export default new App().app;