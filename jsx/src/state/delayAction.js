export const delayActionMiddleware = (store) => (next) => (action) => {
    if(!action.delay){
        return next(action)
    }
    setTimeout(() => {
        next(action) 
    }, action.delay)
}

export function delayAction(action, delay){
    return {
        ...action,
        delay
    }
}