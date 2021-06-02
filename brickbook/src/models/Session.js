import router from "../router";
import { api } from "./myFetch";


const Session = {
    user: null,
    token: null,
    nextRoute: null,
    message: [] // To be used later
    
}
export default Session;

export async function Login(handle, password) {
    const {user, token} = await api('users/login', { handle, password } )
    Session.user = user;
    Session.token = token;

    console.log(Session.user);

    router.push(Session.nextRoute ?? '/feed')
}

export function Logout() {
    Session.user = null
}