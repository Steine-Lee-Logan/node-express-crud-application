import * as Bluebird from 'bluebird';
global.Promise = Bluebird;

import * as dotenv from 'dotenv';
dotenv.config();

import app from "./app";
import { logger } from "./logger";
const PORT = process.env.PORT;

app.listen(PORT, () => {
    logger.info(`Express server listening on port ${ PORT }`);
});