var full_seat = 1;
var check_seat = 0;
var seat = document.SeatForm;
var result = "";

function isChecked(par){
	if(par.checked == true){
		check_seat++;

		if(check_seat > full_seat){
			check_seat = check_seat - 1;
			alert("더 이상 좌석선택을 하실 수 없습니다.");
			return false;
		}
		result = par.value;
		
		return true;
	}else{
		check_seat = check_seat - 1;
		result = '';
	}
	
}

function submitSeat(){
	if(result == ""){
		alert("좌석을 선택해주세요.");
		return false;
	}else{
		var dialog = confirm(result + " 좌석을 예약하시겠습니까?");
		if(dialog){
			alert(result + " 좌석을 예약했습니다.");
			document.getElementById('isSelect').innerHTML= result;
			return true;
		}else{
			alert("다시 선택해주세요.");
			return false;
		}
	}
}