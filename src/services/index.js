import axios from "axios";

export const BASE_URL = "https://sayt.tiiamebb.uz/";
// export const BASE_URL_IMG = "https://api.mineplugins.com";

export const Token = localStorage.getItem("token");
export const Role = localStorage.getItem("role");

export const PostData = async (url, data) => {
    const response = await axios.post(BASE_URL + url, data);
    return response;
};
export const PostDataToken = async (url, data) => {
    const response = await axios.post(BASE_URL + url, data, {
        headers: {
            "Content-Type": "multipart/formData",
            Authorization: `Bearer ${Token}`,
        },
    });
    return response;
};

export const PostDataTokenJson = async (url, data) => {
    const response = await axios.post(BASE_URL + url, data, {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
    return response;
};

export const PutDataToken = async (url, data) => {
    const response = await axios.put(BASE_URL + url, data, {
        headers: {
            "Content-Type": "multipart/formData",
            Authorization: `Bearer ${Token}`,
        },
    });
    return response;
};

export const PutData = async (url, data) => {
    const response = await axios.put(BASE_URL + url, data, {
        headers: {
            "Content-Type": "multipart/formData",
            Authorization: `Bearer ${Token}`,
        },
    });
    return response.data;
};

export const PutDataJson = async (url, data) => {
    const response = await axios.put(BASE_URL + url, data, {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
    return response.data;
};

export const GetDataSimple = async (url) => {
    if (Token) {
        const response = await axios.get(BASE_URL + url, {
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        });
        return response.data;
    } else {
        const response = await axios.get(BASE_URL + url);
        return response.data;
    }
};

// export const GetDataWithData = async (url, data) => {
//     const params = new URLSearchParams(data).toString();
//     const response = await axios.get(`${BASE_URL}${url}?${params}`, {
//         headers: {
//             Authorization: `Bearer ${Token}`,
//         },
//     });
//     return response.data;
// };

export const DeleteData = async (url) => {
    const response = await axios.delete(BASE_URL + url, {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
    return response;
};

export const NewPassword = async (url, data) => {
    const response = await axios.patch(BASE_URL + url, data);
    return response.data;
};

export const ChangeActive = async (url, data) => {
    const response = await axios.patch(BASE_URL + url, data);
    return response.data;
};
