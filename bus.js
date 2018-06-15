//선택이 되지 않았을 때 열리는 경고창
function search(event){
	var d = document.reservationForm;
	if(d.Start.selectedIndex == 0){
		alert('출발지를 선택하세요');
		d.Start.focus();
		event.preventDefault();
	}else if(d.Destination.selectedIndex == 0){
		alert('도착지를 선택하세요');
		d.Destination.focus();
		event.preventDefault();
	}else if(d.Month.selectedIndex == 0){
		alert('출발 달을 선택하세요');
		d.Month.focus();
		event.preventDefault();
	}else if(d.Day.selectedIndex == 0){
		alert('출발 날짜를 선택하세요');
		d.Day.focus();
		event.preventDefault();
	}else if(d.Time.selectedIndex == 0){
		alert('출발 시간을 선택하세요');
		d.Time.focus();
		event.preventDefault();
	}
	return true;
}

//출발지에 따라 목적지를 바꿔주는 함수
function changeTransfer(event){
	var d = document.reservationForm;
	if(d.Start.options[d.Start.selectedIndex].value != "000"){
		if(d.Start.options[d.Start.selectedIndex].value == "100"){
			d.Destination.length = 4;
			d.Destination.selectedIndex = 0;

			d.Destination.options[0].value = "000";
			d.Destination.options[0].text = "선택";
			d.Destination.options[1].value = "200";
			d.Destination.options[1].text = "속초";
			d.Destination.options[2].value = "210";
			d.Destination.options[2].text = "여수";
			d.Destination.options[3].value = "220";
			d.Destination.options[3].text = "김포";						
		}else if(d.Start.options[d.Start.selectedIndex].value == "110"){
			d.Destination.length = 4;
			d.Destination.selectedIndex = 0;

			d.Destination.options[0].value = "000";
			d.Destination.options[0].text = "선택";
			d.Destination.options[1].value = "230";
			d.Destination.options[1].text = "전주";
			d.Destination.options[2].value = "240";
			d.Destination.options[2].text = "대구";
			d.Destination.options[3].value = "250";
			d.Destination.options[3].text = "울산";					
		}
	}else{
		d.Destination.length = 1;
		d.Destination.selectedIndex = 0;

		d.Destination.options[0].value = "000";
		d.Destination.options[0].text = "선택";
	}
}

//달에 따라 날짜를 바꾸는 함수
function changeDate(event){
	var d = document.reservationForm;
	if(d.Month.options[d.Month.selectedIndex].value == '00'){
		d.Day.length = 1;
		d.Day.selectedIndex = 0;

		d.Day.options[0].value = "00";
		d.Day.options[0].text = "선택";		
	}else if(d.Month.options[d.Month.selectedIndex].value == "02"){
		d.Day.length = 29;
		d.Day.selectedIndex = 0;

		d.Day.options[0].value = "00";
		d.Day.options[0].text = "선택";
		d.Day.options[1].value = "01";
		d.Day.options[1].text = "1";
		d.Day.options[2].value = "02";
		d.Day.options[2].text = "2";
		d.Day.options[3].value = "03";
		d.Day.options[3].text = "3";
		d.Day.options[4].value = "04";
		d.Day.options[4].text = "4";
		d.Day.options[5].value = "05";
		d.Day.options[5].text = "5";
		d.Day.options[6].value = "06";
		d.Day.options[6].text = "6";
		d.Day.options[7].value = "07";
		d.Day.options[7].text = "7";
		d.Day.options[8].value = "08";
		d.Day.options[8].text = "8";
		d.Day.options[9].value = "09";
		d.Day.options[9].text = "9";
		d.Day.options[10].value = "10";
		d.Day.options[10].text = "10";
		d.Day.options[11].value = "11";
		d.Day.options[11].text = "11";
		d.Day.options[12].value = "12";
		d.Day.options[12].text = "12";
		d.Day.options[13].value = "13";
		d.Day.options[13].text = "13";
		d.Day.options[14].value = "14";
		d.Day.options[14].text = "14";
		d.Day.options[15].value = "15";
		d.Day.options[15].text = "15";
		d.Day.options[16].value = "16";
		d.Day.options[16].text = "16";
		d.Day.options[17].value = "17";
		d.Day.options[17].text = "17";
		d.Day.options[18].value = "18";
		d.Day.options[18].text = "18";
		d.Day.options[19].value = "19";
		d.Day.options[19].text = "19";
		d.Day.options[20].value = "20";
		d.Day.options[20].text = "20";
		d.Day.options[21].value = "21";
		d.Day.options[21].text = "21";
		d.Day.options[22].value = "22";
		d.Day.options[22].text = "22";
		d.Day.options[23].value = "23";
		d.Day.options[23].text = "23";
		d.Day.options[24].value = "24";
		d.Day.options[24].text = "24";
		d.Day.options[25].value = "25";
		d.Day.options[25].text = "25";
		d.Day.options[26].value = "26";
		d.Day.options[26].text = "26";
		d.Day.options[27].value = "27";
		d.Day.options[27].text = "27";
		d.Day.options[28].value = "28";
		d.Day.options[28].text = "28";
	}else if(d.Month.options[d.Month.selectedIndex].value == "01" || d.Month.options[d.Month.selectedIndex].value == "03" ||
		d.Month.options[d.Month.selectedIndex].value == "05" || d.Month.options[d.Month.selectedIndex].value == "07" ||
		d.Month.options[d.Month.selectedIndex].value == "08" || d.Month.options[d.Month.selectedIndex].value == "10" ||
		d.Month.options[d.Month.selectedIndex].value == "11"){

		d.Day.length = 32;
		d.Day.selectedIndex = 0;

		d.Day.options[0].value = "00";
		d.Day.options[0].text = "선택";
		d.Day.options[1].value = "01";
		d.Day.options[1].text = "1";
		d.Day.options[2].value = "02";
		d.Day.options[2].text = "2";
		d.Day.options[3].value = "03";
		d.Day.options[3].text = "3";
		d.Day.options[4].value = "04";
		d.Day.options[4].text = "4";
		d.Day.options[5].value = "05";
		d.Day.options[5].text = "5";
		d.Day.options[6].value = "06";
		d.Day.options[6].text = "6";
		d.Day.options[7].value = "07";
		d.Day.options[7].text = "7";
		d.Day.options[8].value = "08";
		d.Day.options[8].text = "8";
		d.Day.options[9].value = "09";
		d.Day.options[9].text = "9";
		d.Day.options[10].value = "10";
		d.Day.options[10].text = "10";
		d.Day.options[11].value = "11";
		d.Day.options[11].text = "11";
		d.Day.options[12].value = "12";
		d.Day.options[12].text = "12";
		d.Day.options[13].value = "13";
		d.Day.options[13].text = "13";
		d.Day.options[14].value = "14";
		d.Day.options[14].text = "14";
		d.Day.options[15].value = "15";
		d.Day.options[15].text = "15";
		d.Day.options[16].value = "16";
		d.Day.options[16].text = "16";
		d.Day.options[17].value = "17";
		d.Day.options[17].text = "17";
		d.Day.options[18].value = "18";
		d.Day.options[18].text = "18";
		d.Day.options[19].value = "19";
		d.Day.options[19].text = "19";
		d.Day.options[20].value = "20";
		d.Day.options[20].text = "20";
		d.Day.options[21].value = "21";
		d.Day.options[21].text = "21";
		d.Day.options[22].value = "22";
		d.Day.options[22].text = "22";
		d.Day.options[23].value = "23";
		d.Day.options[23].text = "23";
		d.Day.options[24].value = "24";
		d.Day.options[24].text = "24";
		d.Day.options[25].value = "25";
		d.Day.options[25].text = "25";
		d.Day.options[26].value = "26";
		d.Day.options[26].text = "26";
		d.Day.options[27].value = "27";
		d.Day.options[27].text = "27";
		d.Day.options[28].value = "28";
		d.Day.options[28].text = "28";
		d.Day.options[29].value = "29";
		d.Day.options[29].text = "29";
		d.Day.options[30].value = "30";
		d.Day.options[30].text = "30";
		d.Day.options[31].value = "31";
		d.Day.options[31].text = "31";
	}else{
		d.Day.length = 31;
		d.Day.selectedIndex = 0;

		d.Day.options[0].value = "00";
		d.Day.options[0].text = "선택";
		d.Day.options[1].value = "01";
		d.Day.options[1].text = "1";
		d.Day.options[2].value = "02";
		d.Day.options[2].text = "2";
		d.Day.options[3].value = "03";
		d.Day.options[3].text = "3";
		d.Day.options[4].value = "04";
		d.Day.options[4].text = "4";
		d.Day.options[5].value = "05";
		d.Day.options[5].text = "5";
		d.Day.options[6].value = "06";
		d.Day.options[6].text = "6";
		d.Day.options[7].value = "07";
		d.Day.options[7].text = "7";
		d.Day.options[8].value = "08";
		d.Day.options[8].text = "8";
		d.Day.options[9].value = "09";
		d.Day.options[9].text = "9";
		d.Day.options[10].value = "10";
		d.Day.options[10].text = "10";
		d.Day.options[11].value = "11";
		d.Day.options[11].text = "11";
		d.Day.options[12].value = "12";
		d.Day.options[12].text = "12";
		d.Day.options[13].value = "13";
		d.Day.options[13].text = "13";
		d.Day.options[14].value = "14";
		d.Day.options[14].text = "14";
		d.Day.options[15].value = "15";
		d.Day.options[15].text = "15";
		d.Day.options[16].value = "16";
		d.Day.options[16].text = "16";
		d.Day.options[17].value = "17";
		d.Day.options[17].text = "17";
		d.Day.options[18].value = "18";
		d.Day.options[18].text = "18";
		d.Day.options[19].value = "19";
		d.Day.options[19].text = "19";
		d.Day.options[20].value = "20";
		d.Day.options[20].text = "20";
		d.Day.options[21].value = "21";
		d.Day.options[21].text = "21";
		d.Day.options[22].value = "22";
		d.Day.options[22].text = "22";
		d.Day.options[23].value = "23";
		d.Day.options[23].text = "23";
		d.Day.options[24].value = "24";
		d.Day.options[24].text = "24";
		d.Day.options[25].value = "25";
		d.Day.options[25].text = "25";
		d.Day.options[26].value = "26";
		d.Day.options[26].text = "26";
		d.Day.options[27].value = "27";
		d.Day.options[27].text = "27";
		d.Day.options[28].value = "28";
		d.Day.options[28].text = "28";
		d.Day.options[29].value = "29";
		d.Day.options[28].text = "29";
		d.Day.options[30].value = "30";
		d.Day.options[30].text = "30";		
	}
}

//각 함수에 대한 이벤트리스너
var changetransfer = document.getElementById('Start');
changetransfer.addEventListener('click', changeTransfer);

var searching = document.getElementById('btn');
searching.addEventListener('click', search);

var changeDay = document.getElementById('Month');
changeDay.addEventListener('click', changeDate);

//테이블 클릭시 테이블이 사라지도록 하는 JQuery-Mobile Event
$(document).on("pagecreate","#wrapper",function(){
  $("table").on("click",function(){
    $(this).hide();
  });                       
});

//화면이 회전되었음을 알려주는 JQuery-Mobile Event
$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(event){
    alert("화면이 회전되었습니다.");
  });                     
});