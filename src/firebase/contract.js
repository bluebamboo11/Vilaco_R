import {db, firebase} from './firebase';
import {getAllEmployee} from "./employee";
import {contractBo} from "../Bo/BoFirebase";

export function addNewContract(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    console.log(contractBo(data));
    return  db.collection('contract').add(contractBo(data))
}
export function updateContract(data) {
    return  db.collection('contract').doc(data.id).update(contractBo(data))
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

export function getAllContractByEmployee(employeeId,callback) {
    db.collection('contract').where('employeeId','==',employeeId).orderBy("timestamp").get().then((documentSnapshots)=>{
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
