
import Student from "../views/student/Student";
import Teacher from "../views/teacher/Teacher";
import Japan from "../views/employees/Japan";
import Contract from "../views/Contract/Contract";
import LearningClass from "../views/class/LearningClass";
import Profile from "../views/sample-pages/profile";
import Transcript from "../views/Transcript/Transcript";
import Ranking from "../views/ranking/Ranking";


var ThemeRoutes = [
  {
    navlabel: true,
    name: 'Cá nhân',
    icon: 'mdi mdi-dots-horizontal'
  },
  {
    path: '/profile',
    name: 'Thông tin cá nhân',
    icon: 'mdi mdi-account',
    component: Profile
  },
  {
    navlabel: true,
    name: 'Quản lý tài khoản',
    icon: 'mdi mdi-dots-horizontal'
  },
  {
    path: '/quan-ly-hoc-vien',
    name: 'Học viên',
    icon: 'mdi mdi-account-multiple',
    component: Student
  },
  {
    path: '/quan-ly-giao-vien',
    name: 'Giáo viên',
    icon: 'mdi mdi-account-multiple',
    component: Teacher
  },
  {
    navlabel: true,
    name: 'Quản lý đơn hàng',
    icon: 'mdi mdi-dots-horizontal'
  },
  {
    path: '/nhan-vien-nhat',
    name: 'NV phòng nhật',
    icon: 'mdi mdi-account-multiple',
    component: Japan
  },
  {
    path: '/quan-ly-don-hang',
    name: 'Đơn hàng',
    icon: 'mdi mdi-account-multiple',
    component: Contract
  },
  {
    navlabel: true,
    name: 'Quản lý lớp học',
    icon: 'mdi mdi-dots-horizontal'
  },
  {
    path: '/quan-ly-lop',
    name: 'Lớp học',
    icon: 'mdi mdi-account-multiple',
    component: LearningClass
  },
  {
    path: '/quan-ly-bang-diem',
    name: 'Bảng điểm',
    icon: 'mdi mdi-account-multiple',
    component: Transcript
  },
  {
    path: '/xep-hang-diem',
    name: 'Xếp hạng điểm',
    icon: 'mdi mdi-account-multiple',
    component: Ranking
  },
  {
    path: '/',
    pathTo: '/profile',
    name: 'Cá nhân',
    redirect: true
  }
];
export default ThemeRoutes;
