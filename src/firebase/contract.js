import {db, firebase} from './firebase';
import {getAllEmployee} from "./employee";

export function addNewContract(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return  db.collection('contract').add(data)
}
export function getAllContract(callback) {
    getAllEmployee((listEmployee)=>{
        db.collection('contract').orderBy("timestamp").get().then((documentSnapshots)=>{
            let list = [];
            documentSnapshots.forEach(function (doc) {
                let contract = doc.data();
                contract.id = doc.id;
                list.push(contract);
            });
            callback(list,listEmployee);
        })
    })

}

export function getAllContractOpen(isOpen,callback) {
        db.collection('contract').where('open','==',isOpen).orderBy("timestamp").get().then((documentSnapshots)=>{
            let list = [];
            documentSnapshots.forEach(function (doc) {
                let contract = doc.data();
                contract.id = doc.id;
                list.push(contract);
            });
            callback(list);
        })

}
export function getContractById(id) {
  return   db.collection('contract').doc(id).get()
}
