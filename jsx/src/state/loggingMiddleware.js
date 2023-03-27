export const logginMiddleware = (store) => (next) => (action) => {
    console.log("recived action", action)
    next(action)
}