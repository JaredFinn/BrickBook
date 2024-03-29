import { ToastProgrammatic as toaster } from "buefy";
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
    console.log("here")
    Session.user = user;
    Session.token = token;

    console.log(Session.user);
    toaster.open({
        type: "is-success",
        message: `Welcome ${Session.user.firstName}`
    })

    router.push(Session.nextRoute ?? '/')
}

export async function Logout(handle, password) {
    const {user, token} = await api('users/logout', { handle, password } )
    Session.user = user;
    Session.user = token;

    console.log(Session.user);
}