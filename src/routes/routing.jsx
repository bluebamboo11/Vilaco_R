/*--------------------------------------------------------------------------------*/
/*                                  Dashboards                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/dashboards/dashboard1.jsx';
import SecondDashboard from '../views/dashboards/dashboard2.jsx';
import ThirdDashboard from '../views/dashboards/dashboard3.jsx';
import FourthDashboard from '../views/dashboards/dashboard4.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Breadcrumbs from '../views/ui-components/breadcrumb.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Dropdowns from '../views/ui-components/dropdown.jsx';
import BtnGroups from '../views/ui-components/btn-group.jsx';
import Cards from '../views/ui-components/cards.jsx';
import CollapseComponent from '../views/ui-components/collapse.jsx';
import CarouselComponent from '../views/ui-components/carousel.jsx';
import JumbotronComponent from '../views/ui-components/jumbotron.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import ListComponent from '../views/ui-components/listgroup.jsx';
import MediaComponent from '../views/ui-components/media.jsx';
import ModalComponent from '../views/ui-components/modal.jsx';
import NavbarComponent from '../views/ui-components/navbar.jsx';
import NavsComponent from '../views/ui-components/navs.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import ProgressComponent from '../views/ui-components/progress.jsx';
import TableComponent from '../views/ui-components/table.jsx';
import TabsComponent from '../views/ui-components/tabs.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
/*--------------------------------------------------------------------------------*/
/*                          Sample Pages Dropdown                                 */
/*--------------------------------------------------------------------------------*/
import Starterkit from '../views/sample-pages/starter-kit.jsx';
import Profile from '../views/sample-pages/profile.jsx';
import Searchresult from '../views/sample-pages/search-result.jsx';
import Gallery from '../views/sample-pages/gallery.jsx';
import Helperclass from '../views/sample-pages/helperclass.jsx';
import Chat from '../views/chat/chat.jsx';
import Email from '../views/email/email.jsx';
import Widgets from '../views/widget/widget.jsx';
import AuthRoutes from './authroutes.jsx';
/*--------------------------------------------------------------------------------*/
/*                              Calendar Page                                     */
/*--------------------------------------------------------------------------------*/
import Calendar from '../views/calendar/calendar.jsx';
/*--------------------------------------------------------------------------------*/
/*                          Chart Pages Dropdown                                  */
/*--------------------------------------------------------------------------------*/
import Chartjs from '../views/charts/chartjs.jsx';
import Chartc3 from '../views/charts/c3chart.jsx';
/*--------------------------------------------------------------------------------*/
/*                          Icon Pages Dropdown                                   */
/*--------------------------------------------------------------------------------*/
import Materialicon from '../views/icons/material.jsx';
import FontAwesome from '../views/icons/fontawesome.jsx';
import Themify from '../views/icons/themify.jsx';
import Weather from '../views/icons/weather.jsx';
import Simpleline from '../views/icons/simpleline.jsx';
import FlagIcon from '../views/icons/flag.jsx';
/*--------------------------------------------------------------------------------*/
/*                          Form Layout Pages Dropdown                            */
/*--------------------------------------------------------------------------------*/
import Basicform from '../views/form-layouts/basic.jsx';
import FormInputs from '../views/form-layouts/form-inputs.jsx';
import FormGroups from '../views/form-layouts/form-groups.jsx';
import FormGrids from '../views/form-layouts/form-grids.jsx';
import MaterialForm from '../views/form-layouts/material.jsx';
/*--------------------------------------------------------------------------------*/
/*                          Form-pickers Pages Dropdown                           */
/*--------------------------------------------------------------------------------*/
import Datepicker from '../views/form-pickers/datetimepicker.jsx';
import Tagselect from '../views/form-pickers/tag-select.jsx';
/*--------------------------------------------------------------------------------*/
/*                          Form Validation Page                                  */
/*--------------------------------------------------------------------------------*/
import FormValidate from '../views/form-validation/form-validation.jsx';
/*--------------------------------------------------------------------------------*/
/*                            Form Wizard Page                                    */
/*--------------------------------------------------------------------------------*/
import FormSteps from '../views/steps/steps.jsx';
/*--------------------------------------------------------------------------------*/
/*                            Table Pages Dropdown                                */
/*--------------------------------------------------------------------------------*/
import Basictable from '../views/tables/tablebasic.jsx';
import Reacttable from '../views/tables/reacttable.jsx';
import Datatable from '../views/tables/react-bootstrap-table.jsx';
/*--------------------------------------------------------------------------------*/
/*                               Map Page                                         */
/*--------------------------------------------------------------------------------*/
import Vectormap from '../views/maps/vectormap.jsx';
import Student from "../views/student/Student";
import Teacher from "../views/teacher/Teacher";
import Japan from "../views/employees/Japan";
import Contract from "../views/Contract/Contract";
import LearningClass from "../views/class/LearningClass";
var auths = [].concat(AuthRoutes);

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
    path: '/',
    pathTo: '/profile',
    name: 'Cá nhân',
    redirect: true
  }
];
export default ThemeRoutes;
