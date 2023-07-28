import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase"
 
const handleInscription = (data) => {
    const ref = collection(firestore, "inscription") // Firebase creates this automatically
   
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleInscription