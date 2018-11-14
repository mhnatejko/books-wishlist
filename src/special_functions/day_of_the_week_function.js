function todayDay(){
	const days = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']; 
	let date = new Date(); 
	return days[date.getDay()]
}

function todayMonth(){
	const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
	let date = new Date(); 
	return months[date.getMonth()]
}

let index = 1;
export function dayOrMonth(){
	index++;
	if(index % 2 === 0){
		return todayDay();
	}else{
		return todayMonth();
	}
}
