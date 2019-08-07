const apiEndpoint = 'http://localhost:3003';
const petsUrl = `${apiEndpoint}/pets`;
const petsTypeUrl = `${apiEndpoint}/pets?type=`;

export const getAllPets = () => fetch(petsUrl).then(res => res.json());
export const getPetsOfType = (type) => fetch(petsTypeUrl + type).then(res => res.json());

export default {
    getAllPets,
    getPetsOfType
};