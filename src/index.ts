import { api } from "./api/api";
export interface UploadImage {
  folderId: string,
  clientId: string,
  privateKey: string,
  clientEmail: string,
  file: File
}

export const uploadImage = async ({ folderId, clientId, privateKey, clientEmail, file }: UploadImage): Promise<string> => {
  try {

    const bodyContent = new FormData(); 
    bodyContent.append('folderId', folderId);
    bodyContent.append('client_id', clientId);
    bodyContent.append('private_key', privateKey);
    bodyContent.append('client_email', clientEmail);
    bodyContent.append('file', file);

    const { data } = await api.post("/upload-image", bodyContent);
    return data;
  } catch (err) {
    return err;
  }
};
