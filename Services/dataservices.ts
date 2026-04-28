
// const url = 'http://localhost:5057';
// const url = 'http://localhost:5174';
const url = 'https://munchrapiv1-fdh6cpdzffe6b5fg.westus3-01.azurewebsites.net/';
const blobURL = "https://munchrblobstorage.blob.core.windows.net/pfpstorage"

export const blobUpload = async (params: FormData) => {
    console.log(params.get("file"));
    console.log(params.get("fileName"));
    const response = await fetch(url + '/Blob/Upload', {
        method: 'POST',
        body: params,
    });


    if (response.ok) {
        const text = await response.text();
        console.log("Response:", text);
        const fileName = params.get('fileName') as string;

        const uploadedFileUrl = `${blobURL}/${fileName}`;

        return uploadedFileUrl;
        // if (response.ok) {
        //     const data = await response.json();

        //     return data.fileUrl; // ← real Azure URL

    } else {
        console.log('Failed to upload file.');
        return null;
    }
};