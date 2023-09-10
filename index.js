const { api } = require('./src/api/api.js')

/**
 * Params to upload images to GDrive
 *
 * @param   {string} folderId - Folder id to upload images in GDrive
 * @param   {string} clientId - Client Id, get in json GDrive
 * @param   {string} privateKey - Private Key, get in json GDrive
 * @param   {string} clientEmail - Client Email, get in json GDrive
 * @param   {File} file - File objects to upload
 * @returns {Promise<string>} - Image URL or error message
 */

const uploadImages = async ({ folderId, clientId, privateKey, clientEmail, file }) => {
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

module.exports = {
  uploadImages
}
