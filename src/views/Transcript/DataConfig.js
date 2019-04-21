export const columns = [
    {
        Header: "Học viên",
        columns: [
            {
                Header: "Tên",
                accessor: "name",
                className: 'font-bold cell-center',
                minWidth: 160
            },
            {
                Header: "Ngày sinh",
                accessor: "birthday",
                className: 'cell-center'
            }
        ]
    },
    {
        Header: "Điểm tiếng nhật",
        columns: [
            {
                Header: "Nghe",
                accessor: 'listen',
                className: 'text-center cell-center'
            },
            {
                Header: "Viết",
                accessor: 'write',
                className: 'text-center cell-center'
            },
            {
                Header: "Hội thoại",
                accessor: 'conversation',
                className: 'text-center cell-center'
            },
            {
                Header: "Trung bình",
                id: 'medium',
                accessor:"Japanese",
                className: 'text-center color-red cell-center'
            }
        ]
    },
    {
        Header: "Điểm thể lực",
        columns: [
            {
                Header: "Chống đẩy",
                accessor: 'push',
                className: 'text-center cell-center'
            },
            {
                Header: "ĐLNX",
                accessor: 'squat',
                className: 'text-center cell-center'
            },
            {
                Header: "Gập lưng",
                accessor: 'bendBack',
                className: 'text-center cell-center'
            },
            {
                Header: "Gập bụng",
                accessor: 'bellySticks',
                className: 'text-center cell-center'
            },
            {
                Header: "Trung bình",
                id: 'medium2',
                accessor: "health",
                className: 'text-center color-red cell-center'
            }
        ]
    }, {
        Header: "GD định hướng",
        accessor: 'education',
        className: 'text-center color-red cell-center'
    },
    {
        Header: "",
        accessor: "actions",
        width: 60,
    }
];

export function medium(list) {
    let rs = 0;
    for (let i = 0; i < list.length; i++) {
        if (!list[i]) {
            return null
        }
        rs = rs + list[i]
    }
    return Math.round(rs / list.length);
}
