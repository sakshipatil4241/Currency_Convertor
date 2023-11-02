function convert(){

    var frm,to,amt;

    frm = document.getElementById("from");
    to = document.getElementById('to');
    amt = document.getElementById('amt');
	res = document.getElementById('result');
	cu = document.getElementById('curr');

    //document.write(frm,"<br>",to,"<br>",amt,"<br>");
    //document.write(frm.value, "<br>", to.value,"<br>",amt.value);
	
	var url='https://v6.exchangerate-api.com/v6/e868a2f5642db51436844ea2/latest/'+frm.value;
    fetch(url)
	
	.then(function(res){
		
		//document.write(res.json());
		return res.json();
	}).then(function(data){
		
		//document.write(data+"<br>");
		//document.write(data['result']+"<br>");
		//document.write(data['base_code']+"<br>");
		var cr=data['conversion_rates'];
		//document.write(cr[to.value]);
		cf=cr[to.value];
		
		var famt=cf*amt.value;
		//document.write("Final Amount:"+famt);
		res.innerHTML=famt;
		cu.innerHTML=to.value;
		
	});
}

