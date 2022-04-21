import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const signIn = async (email,password) => {
return signInWithEmailAndPassword(getAuth(),email,password)
.then(useCredentials=> {
console.log (useCredentials)
}).catch(error => {
    console.log(error.message)
})

}

