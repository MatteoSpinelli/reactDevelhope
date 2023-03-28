export const thankMiddleware = ({dispatch, getState}) => {
    return (next) => {
        return (action) => {
            if (typeof action === "function"){
                return action(dispatch, getState) // the return here just block the propagation of the action (in this case of the function)
            }
            return next(action)
            
        }
    }
}