## How to use:
Make sure you have a google account, and you should create a project in https://console.developers.google.com/.

Enter your project's console homepage, and go into APIs & auth -> Credentials, then add a credentials for your project.

Create credentials to GDrive API.

You can see all steps here: https://support.google.com/a/answer/7378726

## Create the folder in gdrive

![image](https://github.com/Dev-Pedrosv/upload-image-gdrive/assets/82785683/c793a01c-0ceb-4e37-829f-53768691e07d)
![image](https://github.com/Dev-Pedrosv/upload-image-gdrive/assets/82785683/09571dbe-3f75-4729-bb47-070ef6d9892b)

## Get the folder id
 
![image](https://github.com/Dev-Pedrosv/upload-image-gdrive/assets/82785683/09d02977-56bb-4a39-b360-f6352e72b828)

## Add the email client as editor

![image](https://github.com/Dev-Pedrosv/upload-image-gdrive/assets/82785683/30f0b8b8-11fe-4df9-ad01-b4ae0f54d520)

## You'll need :
- FolderId - Id folder create in Gdrive 
- client_id: Client Id created by Gdrive API,
- private_key: Private Key created by Gdrive API,
- client_email: Client Email created by Gdrive API,

Add your credentials in .env, example used Nextjs : 

```readme
NEXT_PUBLIC_FOLDER_ID = ""
NEXT_PUBLIC_CLIENT_ID = ""
NEXT_PUBLIC_PRIVATE_KEY = ""
NEXT_PUBLIC_CLIENT_EMAIL = "
```

How use ? 

```shell
  npm i upload-image-gdrive
```

```ts

  import uploadImage from "upload-image-gdrive"
  
  const exampleFunction = async (event: Event<HTMLInputElement>) => {
    const params = {
      folderId: process.env.NEXT_PUBLIC_FOLDER_ID,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    };
  
    const files: File[] = Array.from(event.target.files);
    const images = await Promise.all(
        files.map(
            async (file: File) =>
                await uploadImage({
                    ...params,
                    file,
                }),
        ),
    );
    return images
  }

```
