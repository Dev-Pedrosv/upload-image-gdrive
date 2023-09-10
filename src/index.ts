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
    const formattedParams = {
      folderId: folderId,
      client_id: clientId,
      private_key: privateKey,
      client_email: clientEmail,
      file
    }

    const { data } = await api.post('/upload-image', formattedParams);
    return data;
  } catch (err) {
    return err;
  }
};
