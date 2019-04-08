export const userBo = (data)=>{
    if(data.type ==='student'){
        return {
            name:data.name,
            phone: data.phone,
            address: data.address,
            gender:data.gender,
            code: data.code,
            hobby: data.hobby,
            forte: data.forte,
            weakness: data.weakness,
            birthday: data.birthday,
            district: data.district,
            city: data.city,
            town:data.town,
        }
    }
    return {
        name:data.name,
        phone: data.phone,
        gender:data.gender,
        skype:data.skype

    }

};
