
const url = 'http://localhost:5057';
// const url = 'https://munchrapiv1-fdh6cpdzffe6b5fg.westus3-01.azurewebsites.net/';
const blobURL = "https://munchrblobstorage.blob.core.windows.net/pfpstorage"

export const blobUpload = async (params: FormData)=> {
        const response = await fetch(url + '/Blob/Upload', {
            method: 'POST',
            body: params, 
        });

        if (response.ok) {
            const fileName = params.get('fileName') as string;
            
            const uploadedFileUrl = `${blobURL}/${fileName}`;
            
            return uploadedFileUrl;
        } else {
            console.log('Failed to upload file.');
            return null;
        }
};