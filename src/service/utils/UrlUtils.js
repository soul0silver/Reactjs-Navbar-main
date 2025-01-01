const auth = {
  login: '/api/v1/auth/login',
  register: '/api/v1/auth/register',
  userInfo: '/api/v1/users'
}
const keys = {
  list: "/api/v1/keys",
  addCate: "api/sv2/private/category/add-cate",
  listCate: "api/sv2/category/get-list"
}

const product = {
  
  list: '/api/v1/products'
}

const homepage = {
  course: "/api/sv2/course/get-all",
}
const course = {
  getById: "/api/sv2/course/get-course?id=",
  getImage: "/api/sv2/course/get-image",
  getCourseDetail: '/api/sv2/route/get-list-route-detail?id=',
  myLearning: "api/sv2/course/mylearning?uid=",
  myCourse: "api/sv2/course/mycourse?uid=",
  courseManage: 'api/sv2/private/course/manage',
  courseDt: 'api/sv2/private/course/distance?uid=',
  createCourse: 'api/sv2/private/course/save',
  activeCourse: 'api/sv2/private/course/active',
  getCourse: 'api/sv2/private/course/find?id=',
  updateCourse: 'api/sv2/private/course/update',
  getAllClass: 'api/v1/auth/getAll?uid=',
  createClass:'api/v1/auth/class'
}

const proxy = {
  list: '/api/v1/proxies/rand',
}
const order = {
  create: "/api/v1/order",
  recharge: "/api/v1/order/recharge"
  
}
export const URL = { auth, keys, product, proxy, order }