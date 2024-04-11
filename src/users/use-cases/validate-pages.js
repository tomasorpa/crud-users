import usersStore from "../store/users-store";

export const validatePages = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
    const res = await fetch(url);
    const data = await res.json();

    return data;
}
