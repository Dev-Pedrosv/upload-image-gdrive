How to use:
Make sure you have a google account, and you should create a project in https://console.developers.google.com/.

Enter your project's console homepage, and go into APIs & auth -> Credentials, then add a credentials for your project.

Create credentials to GDrive API.

Create the folder in gdrive

add the email client as editor

You'll need :
- FolderId - Id folder create in Gdrive 
- client_id: Client Id created by Gdrive API,
- private_key: Private Key created by Gdrive API,
- client_email: Client Email created by Gdrive API,


How use ? 

```shell
  npm i upload-image-gdrive
```

```js 

  const { uploadImages } = require("upload-image-gdrive")

/**
  * @param   {File[]} files - Array of File objects to upload
  * 
*/

const nameFunction = async (files) => {
  const urlImages = await uploadImages({
    folderId: folderId,
    client_id: clientId,
    private_key: privateKey,
    client_email: clientEmail,  
    files
  })

  return urlImages
}

```