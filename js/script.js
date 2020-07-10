$(document).ready(function(){
	$("#anita").click(function(){
		$("#annu").toggle();
	});
});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// covid 19 world 
$(document).ready(function(){

fetch('https://api.covid19api.com/summary').then(function(response){
	return response.json();
}).then(function(data){
	console.log(data.Countries[76]);
	document.getElementById('nc').innerHTML = data.Countries[76].NewConfirmed;
	document.getElementById('nd').innerHTML = data.Countries[76].NewDeaths;
	document.getElementById('nr').innerHTML = data.Countries[76].NewRecovered;
	document.getElementById('tc').innerHTML = data.Countries[76].TotalConfirmed;
	document.getElementById('td').innerHTML = data.Countries[76].TotalDeaths;
	document.getElementById('tr').innerHTML = data.Countries[76].TotalRecovered;
}).catch((error)=>{
	console.log(error);
});

});

// let we find it now district wise

var aniruddh = () =>{
		// agra malwa collection

		 fetch('https://api.covid19india.org/state_district_wise.json').then((data) => {
      // console.log(data);
      return data.json();
    }).then((realdata) =>{
     //agar malwa
      var ag1 = (realdata['Madhya Pradesh'].districtData['Agar Malwa'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Agar Malwa'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Agar Malwa'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Agar Malwa'].recovered);
      document.getElementById('ag1').innerHTML = ag1;
      document.getElementById('ag2').innerHTML = ag2;
      document.getElementById('ag3').innerHTML = ag3;
      document.getElementById('ag4').innerHTML = ag4;

     //alirajpur data

     var al1 = (realdata['Madhya Pradesh'].districtData['Alirajpur'].active);
      var al2 = (realdata['Madhya Pradesh'].districtData['Alirajpur'].confirmed);
      var al3 = (realdata['Madhya Pradesh'].districtData['Alirajpur'].deceased);
      var al4 = (realdata['Madhya Pradesh'].districtData['Alirajpur'].recovered);
      document.getElementById('al1').innerHTML = al1;
      document.getElementById('al2').innerHTML = al2;
      document.getElementById('al3').innerHTML = al3;
      document.getElementById('al4').innerHTML = al4;


      //Anuppur data

      var an1 = (realdata['Madhya Pradesh'].districtData['Anuppur'].active);
      var an2 = (realdata['Madhya Pradesh'].districtData['Anuppur'].confirmed);
      var an3 = (realdata['Madhya Pradesh'].districtData['Anuppur'].deceased);
      var an4 = (realdata['Madhya Pradesh'].districtData['Anuppur'].recovered);
      document.getElementById('an1').innerHTML = an1;
      document.getElementById('an2').innerHTML = an2;
      document.getElementById('an3').innerHTML = an3;
      document.getElementById('an4').innerHTML = an4;

      //Ashoknagar

       var as1 = (realdata['Madhya Pradesh'].districtData['Ashoknagar'].active);
      var as2 = (realdata['Madhya Pradesh'].districtData['Ashoknagar'].confirmed);
      var as3 = (realdata['Madhya Pradesh'].districtData['Ashoknagar'].deceased);
      var as4 = (realdata['Madhya Pradesh'].districtData['Ashoknagar'].recovered);
      document.getElementById('as1').innerHTML = as1;
      document.getElementById('as2').innerHTML = as2;
      document.getElementById('as3').innerHTML = as3;
      document.getElementById('as4').innerHTML = as4;


      //Balaghat data
       var ba1 = (realdata['Madhya Pradesh'].districtData['Anuppur'].active);
      var ba2 = (realdata['Madhya Pradesh'].districtData['Anuppur'].confirmed);
      var ba3 = (realdata['Madhya Pradesh'].districtData['Anuppur'].deceased);
      var ba4 = (realdata['Madhya Pradesh'].districtData['Anuppur'].recovered);
      document.getElementById('ba1').innerHTML = ba1;
      document.getElementById('ba2').innerHTML = ba2;
      document.getElementById('ba3').innerHTML = ba3;
      document.getElementById('ba4').innerHTML = ba4;

      //Barwani
       var bw1 = (realdata['Madhya Pradesh'].districtData['Barwani'].active);
      var bw2 = (realdata['Madhya Pradesh'].districtData['Barwani'].confirmed);
      var bw3 = (realdata['Madhya Pradesh'].districtData['Barwani'].deceased);
      var bw4 = (realdata['Madhya Pradesh'].districtData['Barwani'].recovered);
      document.getElementById('bw1').innerHTML = bw1;
      document.getElementById('bw2').innerHTML = bw2;
      document.getElementById('bw3').innerHTML = bw3;
      document.getElementById('bw4').innerHTML = bw4;


      //betul
      var bt1 = (realdata['Madhya Pradesh'].districtData['Betul'].active);
      var bt2 = (realdata['Madhya Pradesh'].districtData['Betul'].confirmed);
      var bt3 = (realdata['Madhya Pradesh'].districtData['Betul'].deceased);
      var bt4 = (realdata['Madhya Pradesh'].districtData['Betul'].recovered);
      document.getElementById('bt1').innerHTML = bt1;
      document.getElementById('bt2').innerHTML = bt2;
      document.getElementById('bt3').innerHTML = bt3;
      document.getElementById('bt4').innerHTML = bt4;


      //bhind
      var bhd1 = (realdata['Madhya Pradesh'].districtData['Bhind'].active);
      var bhd2 = (realdata['Madhya Pradesh'].districtData['Bhind'].confirmed);
      var bhd3 = (realdata['Madhya Pradesh'].districtData['Bhind'].deceased);
      var bhd4 = (realdata['Madhya Pradesh'].districtData['Bhind'].recovered);
      document.getElementById('bhd1').innerHTML = bhd1;
      document.getElementById('bhd2').innerHTML = bhd2;
      document.getElementById('bhd3').innerHTML = bhd3;
      document.getElementById('bhd4').innerHTML = bhd4;

      //bhopal
      var bhp1 = (realdata['Madhya Pradesh'].districtData['Bhopal'].active);
      var bhp2 = (realdata['Madhya Pradesh'].districtData['Bhopal'].confirmed);
      var bhp3 = (realdata['Madhya Pradesh'].districtData['Bhopal'].deceased);
      var bhp4 = (realdata['Madhya Pradesh'].districtData['Bhopal'].recovered);
      document.getElementById('bhp1').innerHTML = bhp1;
      document.getElementById('bhp2').innerHTML = bhp2;
      document.getElementById('bhp3').innerHTML = bhp3;
      document.getElementById('bhp4').innerHTML = bhp4;

      //Burhanpur

      var brh1 = (realdata['Madhya Pradesh'].districtData['Burhanpur'].active);
      var brh2 = (realdata['Madhya Pradesh'].districtData['Burhanpur'].confirmed);
      var brh3 = (realdata['Madhya Pradesh'].districtData['Burhanpur'].deceased);
      var brh4 = (realdata['Madhya Pradesh'].districtData['Burhanpur'].recovered);
      document.getElementById('brh1').innerHTML = brh1;
      document.getElementById('brh2').innerHTML = brh2;
      document.getElementById('brh3').innerHTML = brh3;
      document.getElementById('brh4').innerHTML = brh4;


      //Chhatarpur
      var chht1 = (realdata['Madhya Pradesh'].districtData['Chhatarpur'].active);
      var chht2 = (realdata['Madhya Pradesh'].districtData['Chhatarpur'].confirmed);
      var chht3 = (realdata['Madhya Pradesh'].districtData['Chhatarpur'].deceased);
      var chht4 = (realdata['Madhya Pradesh'].districtData['Chhatarpur'].recovered);
      document.getElementById('chht1').innerHTML = chht1;
      document.getElementById('chht2').innerHTML = chht2;
      document.getElementById('chht3').innerHTML = chht3;
      document.getElementById('chht4').innerHTML = chht4;


     //chhindwara
      var chhi1 = (realdata['Madhya Pradesh'].districtData['Chhindwara'].active);
      var chhi2 = (realdata['Madhya Pradesh'].districtData['Chhindwara'].confirmed);
      var chhi3 = (realdata['Madhya Pradesh'].districtData['Chhindwara'].deceased);
      var chhi4 = (realdata['Madhya Pradesh'].districtData['Chhindwara'].recovered);
      document.getElementById('chhi1').innerHTML = chhi1;
      document.getElementById('chhi2').innerHTML = chhi2;
      document.getElementById('chhi3').innerHTML = chhi3;
      document.getElementById('chhi4').innerHTML = chhi4;


      //Damoh
      var damh1 = (realdata['Madhya Pradesh'].districtData['Damoh'].active);
      var damh2 = (realdata['Madhya Pradesh'].districtData['Damoh'].confirmed);
      var damh3 = (realdata['Madhya Pradesh'].districtData['Damoh'].deceased);
      var damh4 = (realdata['Madhya Pradesh'].districtData['Damoh'].recovered);
      document.getElementById('damh1').innerHTML = damh1;
      document.getElementById('damh2').innerHTML = damh2;
      document.getElementById('damh3').innerHTML = damh3;
      document.getElementById('damh4').innerHTML = damh4;

      //Datia
      var dt1 = (realdata['Madhya Pradesh'].districtData['Datia'].active);
      var dt2 = (realdata['Madhya Pradesh'].districtData['Datia'].confirmed);
      var dt3 = (realdata['Madhya Pradesh'].districtData['Datia'].deceased);
      var dt4 = (realdata['Madhya Pradesh'].districtData['Datia'].recovered);
      document.getElementById('dt1').innerHTML = dt1;
      document.getElementById('dt2').innerHTML = dt2;
      document.getElementById('dt3').innerHTML = dt3;
      document.getElementById('dt4').innerHTML = dt4;


      //Dewas
      var dws1 = (realdata['Madhya Pradesh'].districtData['Dewas'].active);
      var dws2 = (realdata['Madhya Pradesh'].districtData['Dewas'].confirmed);
      var dws3 = (realdata['Madhya Pradesh'].districtData['Dewas'].deceased);
      var dws4 = (realdata['Madhya Pradesh'].districtData['Dewas'].recovered);
      document.getElementById('dws1').innerHTML = dws1;
      document.getElementById('dws2').innerHTML = dws2;
      document.getElementById('dws3').innerHTML = dws3;
      document.getElementById('dws4').innerHTML = dws4;

      //Dhar
      var dar1 = (realdata['Madhya Pradesh'].districtData['Dhar'].active);
      var dar2 = (realdata['Madhya Pradesh'].districtData['Dhar'].confirmed);
      var dar3 = (realdata['Madhya Pradesh'].districtData['Dhar'].deceased);
      var dar4 = (realdata['Madhya Pradesh'].districtData['Dhar'].recovered);
      document.getElementById('dar1').innerHTML = dar1;
      document.getElementById('dar2').innerHTML = dar2;
      document.getElementById('dar3').innerHTML = dar3;
      document.getElementById('dar4').innerHTML = dar4;

      //Dindori
       var dind1 = (realdata['Madhya Pradesh'].districtData['Dindori'].active);
      var dind2 = (realdata['Madhya Pradesh'].districtData['Dindori'].confirmed);
      var dind3 = (realdata['Madhya Pradesh'].districtData['Dindori'].deceased);
      var dind4 = (realdata['Madhya Pradesh'].districtData['Dindori'].recovered);
      document.getElementById('dind1').innerHTML = dind1;
      document.getElementById('dind2').innerHTML = dind2;
      document.getElementById('dind3').innerHTML = dind3;
      document.getElementById('dind4').innerHTML = dind4;

      //Guna
      var guna1 = (realdata['Madhya Pradesh'].districtData['Guna'].active);
      var guna2 = (realdata['Madhya Pradesh'].districtData['Guna'].confirmed);
      var guna3 = (realdata['Madhya Pradesh'].districtData['Guna'].deceased);
      var guna4 = (realdata['Madhya Pradesh'].districtData['Guna'].recovered);
      document.getElementById('guna1').innerHTML = guna1;
      document.getElementById('guna2').innerHTML = guna2;
      document.getElementById('guna3').innerHTML = guna3;
      document.getElementById('guna4').innerHTML = guna4;


      //Gwalior
      var gw1 = (realdata['Madhya Pradesh'].districtData['Gwalior'].active);
      var gw2 = (realdata['Madhya Pradesh'].districtData['Gwalior'].confirmed);
      var gw3 = (realdata['Madhya Pradesh'].districtData['Gwalior'].deceased);
      var gw4 = (realdata['Madhya Pradesh'].districtData['Gwalior'].recovered);
      document.getElementById('gw1').innerHTML = gw1;
      document.getElementById('gw2').innerHTML = gw2;
      document.getElementById('gw3').innerHTML = gw3;
      document.getElementById('gw4').innerHTML = gw4;

      //Harda
      var hr1 = (realdata['Madhya Pradesh'].districtData['Harda'].active);
      var hr2 = (realdata['Madhya Pradesh'].districtData['Harda'].confirmed);
      var hr3 = (realdata['Madhya Pradesh'].districtData['Harda'].deceased);
      var hr4 = (realdata['Madhya Pradesh'].districtData['Harda'].recovered);
      document.getElementById('hr1').innerHTML = hr1;
      document.getElementById('hr2').innerHTML = hr2;
      document.getElementById('hr3').innerHTML = hr3;
      document.getElementById('hr4').innerHTML = hr4;

      //Hoshangabad
      var hsng1 = (realdata['Madhya Pradesh'].districtData['Hoshangabad'].active);
      var hsng2 = (realdata['Madhya Pradesh'].districtData['Hoshangabad'].confirmed);
      var hsng3 = (realdata['Madhya Pradesh'].districtData['Hoshangabad'].deceased);
      var hsng4 = (realdata['Madhya Pradesh'].districtData['Hoshangabad'].recovered);
      document.getElementById('hsng1').innerHTML = hsng1;
      document.getElementById('hsng2').innerHTML = hsng2;
      document.getElementById('hsng3').innerHTML = hsng3;
      document.getElementById('hsng4').innerHTML = hsng4;

      //Indor
      var ag1 = (realdata['Madhya Pradesh'].districtData['Indore'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Indore'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Indore'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Indore'].recovered);
      document.getElementById('in1').innerHTML = ag1;
      document.getElementById('in2').innerHTML = ag2;
      document.getElementById('in3').innerHTML = ag3;
      document.getElementById('in4').innerHTML = ag4;

      //Jabalpur
       var ag1 = (realdata['Madhya Pradesh'].districtData['Jabalpur'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Jabalpur'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Jabalpur'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Jabalpur'].recovered);
      document.getElementById('jb1').innerHTML = ag1;
      document.getElementById('jb2').innerHTML = ag2;
      document.getElementById('jb3').innerHTML = ag3;
      document.getElementById('jb4').innerHTML = ag4;


      //Jhabua

       var ag1 = (realdata['Madhya Pradesh'].districtData['Jhabua'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Jhabua'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Jhabua'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Jhabua'].recovered);
      document.getElementById('jh1').innerHTML = ag1;
      document.getElementById('jh2').innerHTML = ag2;
      document.getElementById('jh3').innerHTML = ag3;
      document.getElementById('jh4').innerHTML = ag4;


      //Katni

      var ag1 = (realdata['Madhya Pradesh'].districtData['Katni'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Katni'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Katni'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Katni'].recovered);
      document.getElementById('kt1').innerHTML = ag1;
      document.getElementById('kt2').innerHTML = ag2;
      document.getElementById('kt3').innerHTML = ag3;
      document.getElementById('kt4').innerHTML = ag4;


      //Khandwa
      var ag1 = (realdata['Madhya Pradesh'].districtData['Khandwa'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Khandwa'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Khandwa'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Khandwa'].recovered);
      document.getElementById('kh1').innerHTML = ag1;
      document.getElementById('kh2').innerHTML = ag2;
      document.getElementById('kh3').innerHTML = ag3;
      document.getElementById('kh4').innerHTML = ag4;


      //Khargaon

      var ag1 = (realdata['Madhya Pradesh'].districtData['Khargone'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Khargone'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Khargone'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Khargone'].recovered);
      document.getElementById('kg1').innerHTML = ag1;
      document.getElementById('kg2').innerHTML = ag2;
      document.getElementById('kg3').innerHTML = ag3;
      document.getElementById('kg4').innerHTML = ag4;


      //Mandla

       var ag1 = (realdata['Madhya Pradesh'].districtData['Mandla'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Mandla'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Mandla'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Mandla'].recovered);
      document.getElementById('md1').innerHTML = ag1;
      document.getElementById('md2').innerHTML = ag2;
      document.getElementById('md3').innerHTML = ag3;
      document.getElementById('md4').innerHTML = ag4;


      //Mandsaur
        var ag1 = (realdata['Madhya Pradesh'].districtData['Mandsaur'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Mandsaur'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Mandsaur'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Mandsaur'].recovered);
      document.getElementById('mds1').innerHTML = ag1;
      document.getElementById('mds2').innerHTML = ag2;
      document.getElementById('mds3').innerHTML = ag3;
      document.getElementById('mds4').innerHTML = ag4;


      //Morena
        var ag1 = (realdata['Madhya Pradesh'].districtData['Morena'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Morena'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Morena'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Morena'].recovered);
      document.getElementById('mo1').innerHTML = ag1;
      document.getElementById('mo2').innerHTML = ag2;
      document.getElementById('mo3').innerHTML = ag3;
      document.getElementById('mo4').innerHTML = ag4;

      //Narsinghpur
      var ag1 = (realdata['Madhya Pradesh'].districtData['Narsinghpur'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Narsinghpur'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Narsinghpur'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Narsinghpur'].recovered);
      document.getElementById('nr1').innerHTML = ag1;
      document.getElementById('nr2').innerHTML = ag2;
      document.getElementById('nr3').innerHTML = ag3;
      document.getElementById('nr4').innerHTML = ag4;


      //Neemuch

      var ag1 = (realdata['Madhya Pradesh'].districtData['Neemuch'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Neemuch'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Neemuch'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Neemuch'].recovered);
      document.getElementById('ne1').innerHTML = ag1;
      document.getElementById('ne2').innerHTML = ag2;
      document.getElementById('ne3').innerHTML = ag3;
      document.getElementById('ne4').innerHTML = ag4;

      //Niwari
      var ag1 = (realdata['Madhya Pradesh'].districtData['Niwari'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Niwari'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Niwari'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Niwari'].recovered);
      document.getElementById('nw1').innerHTML = ag1;
      document.getElementById('nw2').innerHTML = ag2;
      document.getElementById('nw3').innerHTML = ag3;
      document.getElementById('nw4').innerHTML = ag4;

      //other reagion

      var ag1 = (realdata['Madhya Pradesh'].districtData['Other Region'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Other Region'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Other Region'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Other Region'].recovered);
      document.getElementById('or1').innerHTML = ag1;
      document.getElementById('or2').innerHTML = ag2;
      document.getElementById('or3').innerHTML = ag3;
      document.getElementById('or4').innerHTML = ag4;

      //panna

      var ag1 = (realdata['Madhya Pradesh'].districtData['Panna'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Panna'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Panna'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Panna'].recovered);
      document.getElementById('pn1').innerHTML = ag1;
      document.getElementById('pn2').innerHTML = ag2;
      document.getElementById('pn3').innerHTML = ag3;
      document.getElementById('pn4').innerHTML = ag4;


      //Raisen

      var ag1 = (realdata['Madhya Pradesh'].districtData['Raisen'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Raisen'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Raisen'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Raisen'].recovered);
      document.getElementById('rs1').innerHTML = ag1;
      document.getElementById('rs2').innerHTML = ag2;
      document.getElementById('rs3').innerHTML = ag3;
      document.getElementById('rs4').innerHTML = ag4;

      //Rajgarh

      var ag1 = (realdata['Madhya Pradesh'].districtData['Rajgarh'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Rajgarh'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Rajgarh'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Rajgarh'].recovered);
      document.getElementById('rg1').innerHTML = ag1;
      document.getElementById('rg2').innerHTML = ag2;
      document.getElementById('rg3').innerHTML = ag3;
      document.getElementById('rg4').innerHTML = ag4;

      //Ratlam

      var ag1 = (realdata['Madhya Pradesh'].districtData['Ratlam'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Ratlam'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Ratlam'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Ratlam'].recovered);
      document.getElementById('rt1').innerHTML = ag1;
      document.getElementById('rt2').innerHTML = ag2;
      document.getElementById('rt3').innerHTML = ag3;
      document.getElementById('rt4').innerHTML = ag4;


      //Rewa
      var ag1 = (realdata['Madhya Pradesh'].districtData['Rewa'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Rewa'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Rewa'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Rewa'].recovered);
      document.getElementById('rw1').innerHTML = ag1;
      document.getElementById('rw2').innerHTML = ag2;
      document.getElementById('rw3').innerHTML = ag3;
      document.getElementById('rw4').innerHTML = ag4;


      //Sagar
      var ag1 = (realdata['Madhya Pradesh'].districtData['Sagar'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Sagar'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Sagar'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Sagar'].recovered);
      document.getElementById('sg1').innerHTML = ag1;
      document.getElementById('sg2').innerHTML = ag2;
      document.getElementById('sg3').innerHTML = ag3;
      document.getElementById('sg4').innerHTML = ag4;

      //Satna
      var ag1 = (realdata['Madhya Pradesh'].districtData['Satna'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Satna'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Satna'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Satna'].recovered);
      document.getElementById('st1').innerHTML = ag1;
      document.getElementById('st2').innerHTML = ag2;
      document.getElementById('st3').innerHTML = ag3;
      document.getElementById('st4').innerHTML = ag4;

      //Sehore
      var ag1 = (realdata['Madhya Pradesh'].districtData['Sehore'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Sehore'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Sehore'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Sehore'].recovered);
      document.getElementById('sh1').innerHTML = ag1;
      document.getElementById('sh2').innerHTML = ag2;
      document.getElementById('sh3').innerHTML = ag3;
      document.getElementById('sh4').innerHTML = ag4;

      //Seoni

      var ag1 = (realdata['Madhya Pradesh'].districtData['Seoni'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Seoni'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Seoni'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Seoni'].recovered);
      document.getElementById('se1').innerHTML = ag1;
      document.getElementById('se2').innerHTML = ag2;
      document.getElementById('se3').innerHTML = ag3;
      document.getElementById('se4').innerHTML = ag4;

      //Shahdol
      var ag1 = (realdata['Madhya Pradesh'].districtData['Shahdol'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Shahdol'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Shahdol'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Shahdol'].recovered);
      document.getElementById('sd1').innerHTML = ag1;
      document.getElementById('sd2').innerHTML = ag2;
      document.getElementById('sd3').innerHTML = ag3;
      document.getElementById('sd4').innerHTML = ag4;


      //Shajapur
      var ag1 = (realdata['Madhya Pradesh'].districtData['Shajapur'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Shajapur'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Shajapur'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Shajapur'].recovered);
      document.getElementById('sj1').innerHTML = ag1;
      document.getElementById('sj2').innerHTML = ag2;
      document.getElementById('sj3').innerHTML = ag3;
      document.getElementById('sj4').innerHTML = ag4;


      //Sheopur
      var ag1 = (realdata['Madhya Pradesh'].districtData['Sheopur'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Sheopur'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Sheopur'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Sheopur'].recovered);
      document.getElementById('she1').innerHTML = ag1;
      document.getElementById('she2').innerHTML = ag2;
      document.getElementById('she3').innerHTML = ag3;
      document.getElementById('she4').innerHTML = ag4;


     

      //Shivpuri

      var ag1 = (realdata['Madhya Pradesh'].districtData['Shivpuri'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Shivpuri'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Shivpuri'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Shivpuri'].recovered);
      document.getElementById('sp1').innerHTML = ag1;
      document.getElementById('sp2').innerHTML = ag2;
      document.getElementById('sp3').innerHTML = ag3;
      document.getElementById('sp4').innerHTML = ag4;


      //Sidhi

      var ag1 = (realdata['Madhya Pradesh'].districtData['Sidhi'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Sidhi'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Sidhi'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Sidhi'].recovered);
      document.getElementById('sid1').innerHTML = ag1;
      document.getElementById('sid2').innerHTML = ag2;
      document.getElementById('sid3').innerHTML = ag3;
      document.getElementById('sid4').innerHTML = ag4;

      //Singrauli

      var ag1 = (realdata['Madhya Pradesh'].districtData['Singrauli'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Singrauli'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Singrauli'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Singrauli'].recovered);
      document.getElementById('sig1').innerHTML = ag1;
      document.getElementById('sig2').innerHTML = ag2;
      document.getElementById('sig3').innerHTML = ag3;
      document.getElementById('sig4').innerHTML = ag4;

      //Tikamgarh
      var ag1 = (realdata['Madhya Pradesh'].districtData['Tikamgarh'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Tikamgarh'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Tikamgarh'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Tikamgarh'].recovered);
      document.getElementById('tk1').innerHTML = ag1;
      document.getElementById('tk2').innerHTML = ag2;
      document.getElementById('tk3').innerHTML = ag3;
      document.getElementById('tk4').innerHTML = ag4;

      //Ujjain
      var ag1 = (realdata['Madhya Pradesh'].districtData['Ujjain'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Ujjain'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Ujjain'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Ujjain'].recovered);
      document.getElementById('uj1').innerHTML = ag1;
      document.getElementById('uj2').innerHTML = ag2;
      document.getElementById('uj3').innerHTML = ag3;
      document.getElementById('uj4').innerHTML = ag4;

      //Umaria
      var ag1 = (realdata['Madhya Pradesh'].districtData['Umaria'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Umaria'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Umaria'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Umaria'].recovered);
      document.getElementById('um1').innerHTML = ag1;
      document.getElementById('um2').innerHTML = ag2;
      document.getElementById('um3').innerHTML = ag3;
      document.getElementById('um4').innerHTML = ag4;


      //Vidisha
      var ag1 = (realdata['Madhya Pradesh'].districtData['Vidisha'].active);
      var ag2 = (realdata['Madhya Pradesh'].districtData['Vidisha'].confirmed);
      var ag3 = (realdata['Madhya Pradesh'].districtData['Vidisha'].deceased);
      var ag4 = (realdata['Madhya Pradesh'].districtData['Vidisha'].recovered);
      document.getElementById('vi1').innerHTML = ag1;
      document.getElementById('vi2').innerHTML = ag2;
      document.getElementById('vi3').innerHTML = ag3;
      document.getElementById('vi4').innerHTML = ag4;
    }).catch((error) =>{
      console.log(error);
    })


  };

$(document).ready(function(){
		aniruddh();
	});