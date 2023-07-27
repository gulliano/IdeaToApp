import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase"
 
const handleSubmit = (testdata) => {
    const ref = collection(firestore, "contact") // Firebase creates this automatically
 
    let data = {
        nom: testdata ,
        prenom: testdata ,
        email: testdata ,
        message: testdata ,

    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit