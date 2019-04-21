import {db, firebase} from './firebase';
import {userBo} from "../Bo/BoFirebase";

// User API

export const doCreateAutoUserTest = () => {
    let listUser = createlistUser('teacher').concat(createlistUser('student'));
    listUser.forEach((user) => {
        db.collection("user").add(user).then();
    })
};

function createlistUser(type) {
    let list = [];
    for (let i = 0; i < 30; i++) {
        list.push(createUser(type, i))
    }
    return list
}


function createUser(type, i) {
    if (type === 'student') {
        return userBo({
            email: 'test_email' + i + '@gmail.com',
            avatar: 'http://sohanews.sohacdn.com/thumb_w/660/2018/10/1/photo1538392226601-15383922266012085392896.jpg',
            name: 'Test Student ' + i,
            phone: '012345670' + i,
            address: 'Số 32 Đường hòa bình',
            gender: 1,
            code: 2222333344,
            hobby: 'thích đọc sách, học ngoại ngũ, tham gia các hoạt động ngoài trời',
            forte: 'Sức khỏa tốt. có thể làm các công việc cần thể lực',
            weakness: 'Hay chán hay buồn không chịu được áp lực tâm lý',
            birthday: '23/11/1991',
            district: ' Hà Trung',
            city: 'Thanh hóa',
            town: 'Thị trấn Hà Trung',
            type: type,
            validate: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return userBo({
        avatar: 'http://img.giaoduc.net.vn/w801/Uploaded/2019/wpxlzdjwp/2012_11_18/phan-hong-anh-giao-vien-xinh-dep-truong-amsterdam-ha-noi-giaoduc.net.vn%20(4).jpg',
        email: 'test_email' + i + '@gmail.com',
        name: 'Test Teacher ' + i,
        phone: '012345670' + i,
        gender: 0,
        skype: 'testxxyyzz',
        type: type,
        validate: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
}

