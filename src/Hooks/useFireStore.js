import { useState,useEffect } from "react";
import { projectFireStore } from "../firebase/config";

const UseFireStore = (collection) => {
    const [docs,setDocs] = useState([])

    useEffect(() =>{
         projectFireStore.collection(collection)
        .orderBy("createdAt","desc")
        .onSnapshot((snap)=>{
            let documents = []
            snap.forEach(doc=>{
                documents.push({...doc.data(), id:doc.id })
            })
            setDocs(documents)
        })

    
    },[collection])
    return { docs }

}

export default UseFireStore
