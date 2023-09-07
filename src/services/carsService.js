import { API } from "../shared/api";

export const getAll = () => {
    return API.get("/cars");
}

export const add = (car) => {
    return API.post("/cars", car);
}

export const getCar = (id) => {
    return API.get(`/cars/${id}`);
}

export const editCar = (car, id) => {
    return API.put(`/cars/${id}`, car);
}

