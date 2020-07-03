import express from 'express';
import routes from './routes';

class App {
    constructor() {
        this.server = express();

        this.applyMiddlewares();
        this.applyRoutes();
    }

    applyMiddlewares() {
        this.server.use(express.json());
    }

    applyRoutes() {
        this.server.use(routes);
    }
}

export default App;
