function suggestion(base){
    var date = new Date(); 
    return base[date.getDay()]
}

export function todayDay(){
    var days = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']; 
    return suggestion(days);
}

function todayMonth(){
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    return suggestion(months);
}


let index = 1;
function intervalChanger() {    
    return setTimeout(() => {if(index % 2 === 0){todayDay(); intervalChanger()}else{todayMonth(); intervalChanger()}; index++} ,1000)
}

intervalChanger()