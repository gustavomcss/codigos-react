// Import API URL and HTTP requestConfig 
import { api, requestConfig } from "../utils/config";

// Function to Register an User
const register = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(api + "/users/register", config).then((res) => res.json()).catch((err) => err);

        if (res._id) {
            localStorage.setItem("user", JSON.stringify(res));
        }

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Function to Logout an User
const logout = () => {
    localStorage.removeItem("user");
};

// Function to Login an User
const login = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(api + "/users/login", config).then((res) => res.json()).catch((err) => err);

        if (res._id) {
            localStorage.setItem("user", JSON.stringify(res));
        }

        return res;
    } catch (error) {
        console.log(error);
    }
};

// Exporting Method Functions
const authService = {
    register,
    logout,
    login
};

export default authService;