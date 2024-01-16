const conf = () => {
    endpoint: String(import.meta.env.VITE_ENDPOINT);
    appwriteprojectid : String(import.meta.env.VITE_APPWRITE_PROJECT-ID);
    appwritedatabseid : String(import.meta.env.VITE_APPWRITE_DATABASE_ID);
    appwritecollectionid : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID);
    appwritebucketid : String(import.meta.env.VITE_APPWRITE_BUCKET_ID);
}

export default conf;