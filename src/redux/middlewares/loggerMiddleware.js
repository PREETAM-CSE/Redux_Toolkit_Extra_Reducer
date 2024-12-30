// Every middleware has these three values  : store, next and action

export const loggerMiddleware = (store)=>{
    return function(next) {
        return function(action){
            console.log("[LOG]:"+action.type+" "+ new Date().toString);
            // Call next middleware in pipeline : 
            next(action);
            //Log the modified state of the app
            console.log(store.getState());
        }
    }
}