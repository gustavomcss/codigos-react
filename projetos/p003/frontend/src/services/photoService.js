// Import API URL and HTTP requestConfig 
import { api, requestConfig } from "../utils/config";

// Function to Publish an User Photo
const publishPhoto = async (data, token) => {
    const config = requestConfig("POST", data, token, true);

    try {
        const res = await fetch(api + "/photos", config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Get User Photos
const getUserPhotos = async (id, token) => {
    const config = requestConfig("GET", null, token);

    try {
        const res = await fetch(api + "/photos/user/" + id, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Delete Photo
const deletePhoto = async (id, token) => {
    const config = requestConfig("DELETE", null, token);

    try {
        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Update Photo
const updatePhoto = async (id, data, token) => {
    const config = requestConfig("PUT", data, token);

    try {
        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Get Photo by ID
const getPhoto = async (id, token) => {
    const config = requestConfig("GET", null, token);

    try {
        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Like Photo
const likePhoto = async (id, token) => {
    const config = requestConfig("PUT", null, token);

    try {
        const res = await fetch(api + "/photos/like/" + id, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }PUT
};

// Function to Add Comment to Photo
const commentPhoto = async (id, data, token) => {
    const config = requestConfig("PUT", data, token);

    try {
        const res = await fetch(api + "/photos/comment/" + id, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Get All Photos
const getPhotos = async (token) => {
    const config = requestConfig("GET", null, token);

    try {
        const res = await fetch(api + "/photos", config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
}

// Function to Get Photo by Title
const searchPhotos = async (query, token) => {
    const config = requestConfig("GET", null, token);

    try {
        const res = await fetch(api + "/photos/search?q=" + query, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
}

// Exporting Method Functions
const photoService = {
    publishPhoto,
    getUserPhotos,
    deletePhoto,
    updatePhoto,
    getPhoto,
    likePhoto,
    commentPhoto,
    getPhotos,
    searchPhotos
};

export default photoService;