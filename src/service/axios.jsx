import apiAdmin from "./service";

export const aboutGet = async () => {
    return await apiAdmin.get("/get/acoutUs");
}

export const magazineGet = async () => {
    return await apiAdmin.get("/get/magazines");
}

export const subscriberCreate = async (data) => {
    return apiAdmin.post("/subscribe/create", data);
};

export const checkSubscriber = async (email) => {
    return apiAdmin.get(
        `/subscribe/email/${encodeURIComponent(email)}`
    );
};

export const activityGet = async () => {
    return await apiAdmin.get("/fetch/activity");
}

export const getContactDetails = async () => {
    return await apiAdmin.get("/get/contactDetails");
}

export const heroSlideGet = () => {
    return apiAdmin.get("/hero-slides");
};

export const getNews = () => {
    return apiAdmin.get("/news");
}

export const getNewsById = (id) => {
    return apiAdmin.get(`/news/${id}`);
}

export const createAds = (data) => {
    return apiAdmin.post("/create/ad", data);
}