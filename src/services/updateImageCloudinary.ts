const updateImageCloudinary = async (file: any, imageUrl?: string) => {

    // -hyQMmXzv39XesnkIbLt2I9Av4s
    let public_id = imageUrl?.split("/")[7].split(".")[0];

    const data = new FormData();
    data.append("file", file);
    data.append(
        "upload_preset",
        "ml_default"
    );
    data.append("cloud_name", "dbcdnlxle");

    try {

        if (public_id) {
            const delete_data = new FormData();
            const timestamp = Math.floor(new Date().getTime() / 1000);

            delete_data.append("public_id", public_id ? public_id : '');
            delete_data.append("api_key", "974584537917941");
            delete_data.append("api_secret", "-hyQMmXzv39XesnkIbLt2I9Av4s");
            delete_data.append("cloud_name", "dbcdnlxle");

            const toSign = `public_id=${public_id}&timestamp=${timestamp}-hyQMmXzv39XesnkIbLt2I9Av4s`;

            async function sha1(message) {
                const encoder = new TextEncoder();
                const data = encoder.encode(message);
                const hash = await crypto.subtle.digest('SHA-1', data);
                return Array.from(new Uint8Array(hash))
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
            }
        
            const signature = await sha1(toSign);
            delete_data.append("signature", signature);
            delete_data.append("timestamp", timestamp.toString());

            const deleteResponse = await fetch(
                `https://api.cloudinary.com/v1_1/dbcdnlxle/image/destroy`,
                {
                    method: "POST",
                    body: delete_data
                }
            );
            const deleteResult = await deleteResponse.json();
            console.log(deleteResult);

            if (deleteResult.result !== 'ok') {
                throw new Error('Error al borrar la imagen antigua');
            }
        }

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/dbcdnlxle/image/upload`,
            {
                method: "POST",
                body: data,
            }
        );
        const res = await response.json();
        return [true, res];
    } catch (error) {
        return [false, error];
    }
    

}

export default updateImageCloudinary;
