// Import API URL and HTTP requestConfig 
import { api, requestConfig } from "../utils/config";

// Function to Get User Profile
const profile = async (data, token) => {
    const config = requestConfig("GET", data, token);

    try {
        const res = await fetch(api + "/users/profile", config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Update User Profile
const updateProfile = async (data, token) => {
    const config = requestConfig("PUT", data, token, true);

    try {
        const res = await fetch(api + "/users/", config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Get User from ID
const getUser = async (id) => {
    const config = requestConfig("GET");

    try {
        const res = await fetch(api + "/users/" + id, config).then((res) => res.json()).catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Exporting Method Functions
const userService = {
    profile,
    updateProfile,
    getUser
};

export default userService;