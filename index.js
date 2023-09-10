import { api } from "./src/api/api.js"

/**
 * Params to upload images to GDrive
 *
 * @param   {string} folderId - Folder id to upload images in GDrive
 * @param   {string} clientId - Client Id, get in json GDrive
 * @param   {string} privateKey - Private Key, get in json GDrive
 * @param   {string} clientEmail - Client Email, get in json GDrive
 * @param   {File[]} files - Array of File objects to upload
 * @returns {Promise<string[]>} - Array of image URLs or error messages
 */
export const uploadImages = async ({ folderId, clientId, privateKey, clientEmail, files }) => {
  const formattedParams = {
    folderId: folderId,
    client_id: clientId,
    private_key: privateKey,
    client_email: clientEmail,
  };

  try {
    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await api.post('/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: formattedParams,
      });

      return data;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
  } catch (err) {
    return err;
  }
};
