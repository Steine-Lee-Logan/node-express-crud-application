import { Request, Response } from "express";
import MysqlDb from "../db";
import { logger, errorString } from "../logger";

const db = new MysqlDb;

export class Routes {    
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successful.'
            });
        })

        app.route('/testDbConnection')
        .get( async (req: Request, res: Response) => {
            try {
                const rows = await db.sqlRequest(`SELECT * FROM example`);  
                console.log(rows);
                res.status(200).send({
                    message: 'db connection is fine!'
                });
            } catch (error) {
                logger.error(errorString(error));
                res.status(500).send({
                    message: 'db connection failed...'
                });
            }
        })
        
        // Entity 
        app.route('/entity') 
        // GET endpoint 
        .get((req: Request, res: Response) => {
        // Get all entities            
            res.status(200).send({
                message: 'GET request successful.'
            })
        })        
        // POST endpoint
        .post((req: Request, res: Response) => {   
        // Create new entity         
            res.status(200).send({
                message: 'POST request successful.'
            })
        })

        // Entity detail
        app.route('/entity/:entityId')
        // get specific entity
        .get((req: Request, res: Response) => {
        // Get a single entity detail            
            res.status(200).send({
                message: 'GET request successful.'
            })
        })
        .put((req: Request, res: Response) => {
        // Update an entity          
            res.status(200).send({
                message: 'PUT request successful.'
            })
        })
        .delete((req: Request, res: Response) => {       
        // Delete an entity     
            res.status(200).send({
                message: 'DELETE request successful.'
            })
        })
    }
}