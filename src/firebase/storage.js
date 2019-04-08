import {storage} from './firebase';

export const upAvatar = (uid, file,call) => {
    let ref = storage.ref();
     ref.child('avatar/' + uid).put(file).then(()=>{
         ref.child('avatar/' + uid).getDownloadURL().then((downloadURL)=>{
             call(downloadURL)
         })

     }).catch((err)=>{
         console.log(err)
     })
};
