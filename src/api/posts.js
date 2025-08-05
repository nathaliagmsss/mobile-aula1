import axios from "axios";

export default fetchUsers = async () => {
    const response = axios.get("https://68920b56447ff4f11fbeedc2.mockapi.io/users")
    return response.data //Retorna os dados (array de users)
}