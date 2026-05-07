import axiosInstance from "../auth/axiosInstance";

export const searchCategory = async (params) => {
    let res;

    try {

        res = await axiosInstance.get(URL.category.list, {
            params: {
                page: params?.page || 0,
                size: params?.size || 10,
                name: params?.name,
            }
        });

        return res;

    } catch (err) {

        return err.response;
    }
};

export const createCategory = async (body) => {
    let res;

    try {

        res = await axiosInstance.post(
            URL.category.create,
            body
        );

        return res;

    } catch (err) {

        return err.response;
    }
};

export const updateCategory = async (id, body) => {
    let res;

    try {

        res = await axiosInstance.put(
            `${URL.category.update}/${id}`,
            body
        );

        return res;

    } catch (err) {

        return err.response;
    }
};

export const deleteCategory = async (id) => {
    let res;

    try {

        res = await axiosInstance.delete(
            `${URL.category.delete}/${id}`
        );

        return res;

    } catch (err) {

        return err.response;
    }
};

export const URL = {

    category: {
        list: "/api/v1/categories",
        create: "/api/v1/categories",
        update: "/api/v1/categories",
        delete: "/api/v1/categories"
    }

}