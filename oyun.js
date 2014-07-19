$(function(){
var skor;
	var renk = "#50CDE2";
	var renk2;
	var sekil = "ucgen.png";
	var sekil2;
	var soru;
	var puan = 0;
	var renkler = new Array("#268494","#50CDE2","#5EAE36");
	var sekiller = new Array("kare.png","ucgen.png","daire.png");
	var sorular = new Array("Renk","Şekil");

	var rastgele = function(deger){
		var sonuc = Math.floor((Math.random() * deger));
		return sonuc;
	};
		
	var degis = function(){
		
	
	
		var a = rastgele(3);
		var b = rastgele(3);
		var c = rastgele(2);
		
		if (renk==renkler[a] && sekil==sekiller[b]){
			
			degis();
		
		}else{
		
		$("#kutu").css("background",renkler[a]);
		$("#kutu").html('<img src="'+sekiller[b]+'" alt=""/>');
		$("#soru").html(sorular[c]);
		
		renk2 = renkler[a];
		sekil2 = sekiller[b];
		soru = sorular[c];
		skor = setInterval("$.puanlama()", 100);
		}
	};
	
	var baslangic = function(){
		var a = rastgele(3);
		var b = rastgele(3);
		
		$("#kutu").css("background",renkler[a]);
		$("#kutu").html('<img src="'+sekiller[b]+'" alt=""/>');
		
		renk = renkler[a];
		sekil = sekiller[b];

	};
	baslangic();
	
	 
	$("#dogru").click(function(){
		
		if (soru=="Renk"){
			if (renk==renk2){renk=renk2; sekil=sekil2; $.puanver();}else{$.yandi();}
		}else{
			if (sekil==sekil2){renk=renk2; sekil=sekil2; $.puanver();}else{$.yandi();}
		}
		
	});
	
	$("#yanlis").click(function(){
		
		if (soru=="Renk"){
			if (renk==renk2){$.yandi();}else{renk=renk2; sekil=sekil2; $.puanver(); }
		}else{
			if (sekil==sekil2){$.yandi();}else{renk=renk2; sekil=sekil2; $.puanver();}
		}
		
	});
	
	 
	
	
		var saniye = 3;
		$.geriyeSay = function(){
			if (saniye > 1){
				saniye--;
				$("#soru").text(saniye);
			} else {
				clearInterval(sayac);
				$(".ekran").remove();
				degis();
			}
		}
		$("#soru").text(saniye);
		var sayac = setInterval("$.geriyeSay()", 1000);
		
		$.puanver = function(){
			clearInterval(skor);
			var a = parseInt(1201200/puan);
			var b = parseInt($("#puan").text());
			$("#puan").text(b+a);
			puan = 0;
			degis();
			
		}
		
		
		$.puanlama = function(){
		if(puan==3000){ $.yandi(); }
			puan = puan+100;
			console.log(puan)
			
		}
		
		$.yandi = function(){
			clearInterval(skor);
			var durum = $("#puan").text();
			$("#main").remove();
			$("body").append("<div class='sonuc'>Skor: <i>"+durum+"</i></div>");
			$("body").append('<div onclick="location.href=\'oyun.html\'" class="buton" style="width:90%; background:#6FBC49;">Tekrar Oyna</div>');
		}
	
		
	
})