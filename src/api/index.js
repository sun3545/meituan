
import urls from './urls'
import request from './request'
const searchWords = () => request.get(urls.searchWords)
const search = () => request.get(urls.search)
const getMenuList = () => request.get(urls.getMenuList)
const gediao = () => request.get(urls.gediao)
const goodsList = () => request.get(urls.goodsList)
const recommend = () => request.get(urls.recommend)
const hotCity = () => request.get(urls.hotCity)
const recentsCity = () => request.get(urls.recentsCity)
const province = () => request.get(urls.province)
const getPosition = () => request.get(urls.getPosition)
const cityList = () => request.get(urls.cityList)
const login = (options) => request.get(urls.login, { params: options })
const register = (options) => request.get(urls.register, { params: options })
const detail = () => request.get(urls.detail)
const areaList = () => request.get(urls.areaList)

export default {
  searchWords,
  search,
  getMenuList,
  gediao,
  goodsList,
  recommend,
  hotCity,
  recentsCity,
  province,
  getPosition,
  cityList,
  login,
  register,
  detail,
  areaList
}
