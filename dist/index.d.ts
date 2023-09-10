export interface UploadImage {
    folderId: string;
    clientId: string;
    privateKey: string;
    clientEmail: string;
    file: File;
}
export declare const uploadImage: ({ folderId, clientId, privateKey, clientEmail, file }: UploadImage) => Promise<string>;
