import { CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./actionType";

export function createPost( post ) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function fetchPost () {
   return function (dispatch) {
        try {
            dispatch(showLoader());
            setTimeout(()=> {
                return new Promise ((resolve, reject) => {
                    const xhr = new XMLHttpRequest()
                    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/?_limit=5')
        
                    xhr.onload = () => {
                        if (xhr.status === 200) {
                            resolve(JSON.parse(xhr.response))
                        } else {
                            reject(new Error (xhr.statusText))
                        }
                    }
                    xhr.onerror = () => {
                        return new Error('Ошибка в загрузке')
                    }
                    xhr.send()
                }).then((data)=> {
                        dispatch({
                            type: FETCH_POST,
                            payload: data
                        });
                        dispatch(hideLoader())
                })
            }, 1500) 
        } catch (err) {
            dispatch(showAlert('Что-то пошло не так'))
            dispatch(hideLoader())
        }      
   }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
        loading: true
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
        loading: false
    }
}
export function showAlert(text) {
    return function (dispatch) {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(()=> {
            dispatch(hideAlert())
        },2000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}