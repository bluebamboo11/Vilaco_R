
import Student from "../views/student/Student";
import Teacher from "../views/teacher/Teacher";
import Japan from "../views/employees/Japan";
import Contract from "../views/Contract/Contract";
import LearningClass from "../views/class/LearningClass";
import Profile from "../views/sample-pages/profile";
import Transcript from "../views/Transcript/Transcript";
import Ranking from "../views/ranking/Ranking";
import MyContract from "../views/MyContract/MyContract";
import MyClass from "../views/MyClass/MyClass";
import MyTranscript from "../views/MyTranscript/MyTranscript";
import MyTranscriptClass from "../views/MyTranscriptClass/MyTranscriptClass";
import Admin from "../views/admin/Admin";

//Cấu hình đường dẫn của menu quán lý, giáo viên
export const ThemeRoutes = [
  {
    navlabel: true,
    name: 'Cá nhân',
    icon: 'mdi mdi-dots-horizontal'
  },
  {
    path: '/ca-nhan',
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
    path: '/quan-ly',
    name: 'Quản lý',
    icon: 'mdi mdi-account-key',
    component: Admin
  },
  {
    path: '/quan-ly-hoc-vien',
    name: 'Học viên',
    icon: 'mdi mdi-account-edit',
    component: Student
  },
  {
    path: '/quan-ly-giao-vien',
    name: 'Giáo viên',
    icon: 'mdi mdi-account-network',
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
    icon: 'mdi mdi-contact-mail',
    component: Japan
  },
  {
    path: '/quan-ly-don-hang',
    name: 'Đơn hàng',
    icon: 'mdi mdi-file-document-box',
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
    icon: 'mdi mdi-book-open-page-variant',
    component: LearningClass
  },
  {
    path: '/quan-ly-bang-diem',
    name: 'Bảng điểm',
    icon: 'mdi mdi-table-edit',
    component: Transcript
  },
  {
    path: '/xep-hang-diem',
    name: 'Xếp hạng điểm',
    icon: 'mdi mdi-star',
    component: Ranking
  },
  {
    path: '/',
    pathTo: '/ca-nhan',
    name: 'Cá nhân',
    redirect: true
  }
];
//Cấu hình đường dẫn menu hoc viên
export const studentRoutes =
    [
      {
        navlabel: true,
        name: 'Cá nhân',
        icon: 'mdi mdi-dots-horizontal'
      },
      {
        path: '/ca-nhan',
        name: 'Thông tin',
        icon: 'mdi mdi-account',
        component: Profile
      },
      {
        path: '/don-hang-cua-toi',
        name: 'Đơn hàng',
        icon: 'mdi mdi-file-document-box',
        component: MyContract
      },
      {
        path: '/bang-diem-cua-toi',
        name: 'Bảng điểm',
        icon: 'mdi mdi-table',
        component: MyTranscript
      },
      {
        navlabel: true,
        name: 'Lớp học',
        icon: 'mdi mdi-dots-horizontal'
      },
      {
        path: '/lop-cua-toi',
        name: 'Lớp của tôi',
        icon: 'mdi mdi-book-open-variant',
        component: MyClass
      },
      {
        path: '/bang-diem-lop',
        name: 'Bảng điểm lớp',
        icon: 'mdi mdi-book-open',
        component: MyTranscriptClass
      },
      {
        path: '/xep-hang-diem',
        name: 'Xếp hạng điểm',
        icon: 'mdi mdi-star',
        component: Ranking
      },
      {
        path: '/',
        pathTo: '/ca-nhan',
        name: 'Cá nhân',
        redirect: true
      }
    ];


