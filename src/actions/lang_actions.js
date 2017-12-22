import translations from '../constants/languages'

export function getTranslation (lang, text) {
  return translations[lang][text]
}

export function changeLang (lang) {
  return function (dispatch) {
    dispatch({type: 'CHANGE_LANGUAGE', lang})
  }
}
