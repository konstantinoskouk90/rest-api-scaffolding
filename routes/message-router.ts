import * as Router from "koa-router";

import FeedController from "../controllers/message-controller";

class FeedRouter {

    router: Router;

    constructor() {
        this.init();
        this.getRoutes();
        this.postRoutes();
    }

    private init(): void {
        this.router = new Router({
            prefix: '/feed'
        });
    }

    private getRoutes(): void {
        this.router.get('/messages', FeedController.getMessages);
    }

    private postRoutes(): void {
        this.router.post('/message', FeedController.postMessage);
    }
}

export default new FeedRouter().router;