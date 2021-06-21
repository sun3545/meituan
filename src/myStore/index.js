
const state = {
  position: '北京',
  userName: ''
}

const setPosition = val => { state.position = val }
const setUserName = val => { state.userName = val }
export default {
  state,
  setPosition,
  setUserName
}
