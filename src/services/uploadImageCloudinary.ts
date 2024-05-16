const uploadImageCloudinary = async (file: any) => {

        const data = new FormData();
        data.append("file", file);
        data.append(
            "upload_preset",
            "ml_default"
        );
        data.append("cloud_name", "dbcdnlxle");

        try {
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

export default uploadImageCloudinary;
