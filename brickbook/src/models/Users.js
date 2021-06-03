import { api } from "./myFetch"


export async function AddUser(firstName, lastName, email, handle, password){
    return api("users/register", {firstName, lastName, email, handle, password})
}