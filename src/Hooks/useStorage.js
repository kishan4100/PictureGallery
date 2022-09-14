import { useState,useEffect } from "react";
import { projectStorage,projectFireStore } from "../firebase/config";
import firebase from "firebase";


const useStorage = (file) =>{
    const [progress,setProgress] = useState(0)
    const [error,setError] = useState(null)
    const [url,setUrl] = useState(null)

    useEffect(() =>{
        //reference
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFireStore.collection("images")

        storageRef.put(file).on("state_changed",(snap)=>{
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100
            setProgress(percentage)
        },(err)=>{
            setError(err)
        },async ()=>{
            let url = await storageRef.getDownloadURL()
            const createdAt = firebase.firestore.FieldValue.serverTimestamp()
            collectionRef.add({url:url , createdAt  })
            setUrl(url)
        })
    },[file])

    return{ progress, url , error }

}

export default useStorage