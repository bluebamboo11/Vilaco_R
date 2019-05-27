//Hàm kiểm tra các mẫu đăng ký(email.pass)

const validator = {

  'email': {
    'errors': [],
    'rules': [
      {
        'message': 'Vui lòng nhập chính xác email',
        'test': /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i
      }
    ],
    'state': '',
    'valid': false
  },
  'password': {
    'errors': [],
    'rules': [
      {
        'message': 'Mật khẩu phải có ít nhất 6 ký tự',
        'test': value => value.length >= 6
      },
      {
        'message': 'Mật khẩu không hợp lệ',
        'test': /^[a-z0-9A-Z_]+$/
      }
    ],
    'state': '',
    'valid': false
  },
  'username': {
    'errors': [],
    'rules': [
      {
        'message': 'number not allowed',
        'test': /^[a-zA-Z_]+$/i
      }
    ],
    'state': '',
    'valid': false
  },
  'passwordOld': {
    'errors': [],
    'rules': [
      {
        'message': 'Mật khẩu phải có ít nhất 6 ký tự',
        'test': value => value.length >= 6
      },
      {
        'message': 'Mật khẩu không hợp lệ',
        'test': /^[a-z0-9A-Z_]+$/
      }
    ],
    'state': '',
    'valid': false
  },

};

export default validator;
