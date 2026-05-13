import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import { AlbumModel } from "../modelsNOSQL/Album";

export default class AlbumController extends AbstractController {
    // Singleton
    private static _instance: AlbumController;

    public static get instance(): AlbumController {
        return this._instance ||
            (this._instance = new this("Album"));
    }

    protected initRoutes(): void {
        this.router.get('/listarAlbumes',
            this.getListarAlbumes.bind(this));
        this.router.post('/crearAlbum',
            this.postCrearAlbum.bind(this));
    }

    private async getListarAlbumes(req: Request, res: Response): Promise<void> {
        try {
            const albumes = await AlbumModel.find().sort({ createdAt: -1 });
            res.status(200).json(albumes);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    private async postCrearAlbum(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await AlbumModel.create(req.body);
            res.status(200).json({ message: "Registro de album exitoso" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}
