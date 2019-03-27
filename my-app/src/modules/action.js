 export function changeText(text){
    return {
        type: "CHANGE_TEXT",
        text
    }
};

export function incrementNumber(number){
    return {
        type: "INCREMENT",
        number
    }
};
export function decrementNumber(number){
    return {
        type: "DECREMENT",
        number
    }
};
export function changeSurname(surName,name){
    return{
        type:"Change_Surname",
        surName,
        name
    }
}
 