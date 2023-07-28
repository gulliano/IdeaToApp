import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase"
 
const handleSubmit = (nom , prenom , email , message) => {
    const ref = collection(firestore, "contact") // Firebase creates this automatically
 
    let data = {
        nom: nom ,
        prenom: prenom ,
        email: email ,
        message: message,

    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit