import { connections } from "$lib/scripts/stores";

export function getByIds(ids){
    let arr = [];
    connections.update( (conFromStore) => {
        
        conFromStore.forEach( (value) => {
            for(let i = 0; i < ids.length; i++){
                
                if(ids[i] === value.id){
                    arr.push(value);
                }
            }
        });
        return conFromStore;
    });
    return arr;
}


export function getBlockValues(id, obj){
    connections.update();
    
}   