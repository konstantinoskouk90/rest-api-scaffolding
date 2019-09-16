import { Context } from "koa";

export default class MessageController {

    static getMessages = async (ctx: Context, next: Function) => {
        ctx.body = {
            messages: [{
                title: 'First Message',
                content: 'This is the first message!'
            }]
        };

        ctx.status = 200;
    }

    static postMessage = async (ctx: Context, next: Function) => {
        const title = ctx.request.body.title;
        const content = ctx.request.body.content;

        // 1. Create message in database
        /* TODO */

        // 2. Send a response to the client
        ctx.body = {
            label: 'Message created successsfully!',
            message: { id: new Date().toISOString(), title: title, content: content }
        };

        ctx.status = 201;
    }
}