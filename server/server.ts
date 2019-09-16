import app from "../app";

const port: number = 3000;

(() => {
    try {
        app.listen(port, () => {
            console.info(`Koa server listening on port ${port}`);
        });
    } catch (err) {
        console.error(`Unable to connect to mongoose database!`, err);
    }
})();