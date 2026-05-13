import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        collection: 'albumes',
        timestamps: false
    }
})

export class Album {
    @prop({ required: true, trim: true })
    public nombre_album!: string;

    @prop({ required: true, trim: true })
    public artista!: string;

    @prop({ required: true })
    public año_lanzamiento!: number;
}

export const AlbumModel = getModelForClass(Album);
