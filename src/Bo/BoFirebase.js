export const userBo = (data) => {
    if (data.type === 'student') {
        return {
            email: data.email,
            avatar: data.avatar,
            name: data.name,
            phone: data.phone,
            address: data.address,
            gender: data.gender,
            code: data.code,
            hobby: data.hobby,
            forte: data.forte,
            weakness: data.weakness,
            birthday: data.birthday,
            district: data.district,
            city: data.city,
            town: data.town,
            type: data.type,
            classId:data.classId||null,
            contractId:data.contractId||null,
            validate: data.validate,
            timestamp: data.timestamp,
        }
    }
    return {
        email: data.email,
        avatar: data.avatar,
        name: data.name,
        phone: data.phone,
        gender: data.gender,
        skype: data.skype,
        type: data.type,
        validate: data.validate,
        timestamp: data.timestamp,
    }

};

export function employeeBo(data) {
    return {name: data.name, gender: data.gender, phone: data.phone, skype: data.skype, timestamp: data.timestamp}
}

export function contractBo(data) {
    return {
        name: data.name,
        employeeId: data.employeeId,
        syndication: data.syndication,
        company: data.company,
        salary: data.salary,
        city: data.city,
        departureDate: data.departureDate,
        examDay: data.examDay,
        timestamp: data.timestamp,
        open: data.open
    }
}

export function classBo(data) {
    return {
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        teacherId:data.teacherId,
        timestamp: data.timestamp,
        open: data.open
    }
}

export  function transcriptBo(data) {
    return {
        uid:data.uid||null,
        classId:data.classId||null,
        month:data.month||null,
        listen:data.listen||null,
        write:data.write||null,
        conversation:data.conversation||null,
        push:data.push||null,
        bendBack:data.bendBack||null,
        bellySticks:data.bellySticks||null,
        squat:data.squat||null,
        education:data.education||null,
        japanese:data.japanese||null,
        health:data.health||null,
    }
}
