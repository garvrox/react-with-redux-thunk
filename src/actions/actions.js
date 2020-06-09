export const onUpAsyn = (val) => {
    return { type: 'UP', val }
}
export const onUp = (val) => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(onUpAsyn(val))
        }, 5000);
    }
}
export const loading = () => {
    return {
        type: 'LOADING'
    }
}
export const onDown = (val) => {
    return { type: 'DOWN', val }
}
export const onDelete = (id) => {
    return { type: 'DEL', id }
}
export const onReset = () => {
    return { type: 'RESET' }
}