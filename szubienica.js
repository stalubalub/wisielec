// dodatkowe warianty haseł
var tablica_hasla = new Array(17);
tablica_hasla[0] = "Biedny jak mysz kościelna";
tablica_hasla[1] = "Kto pod kim dołki kopie ten sam w nie wpada";
tablica_hasla[2] = "Jak sobie pościelesz, tak się wyśpisz";
tablica_hasla[3] = "Przyganiał kocioł garnkowi, a sam dymił";
tablica_hasla[4] = "Jak Kuba Bogu tak Bóg Kubie";
tablica_hasla[5] = "Nie rób drugiemu co tobie nie miłe";
tablica_hasla[6] = "Aksamity, atłasy sławy nie czynią";
tablica_hasla[7] = "bez pracy nie ma kołaczy";
tablica_hasla[8] = "Nie zasypiaj pan gruszek w popiele";
tablica_hasla[9] = "Nosił wilk razy kilka, ponieśli i wilka";
tablica_hasla[10] = "Albo rybki, albo akwarium";
tablica_hasla[11] = "Adwokat niech głowę, a koń niech ma nogi";
tablica_hasla[12] = "Będą takie mrozy, że przymarznie cap do kozy";
tablica_hasla[13] = "Błędy lekarza przykrywa ziemia";
tablica_hasla[14] = "Bo pić trzeba umieć";
tablica_hasla[15] = "Byłoby dłuższe lato, gdyby nie zima";
tablica_hasla[16] = "Choćbyś miał złota skrzynie, śmierci się nie wywiniesz";


function losuj()
{
	var losowanie = Math.ceil(Math.random() * tablica_hasla.length);
	losowanie = Math.round(losowanie)-1;
	wylosowane_haslo = tablica_hasla[losowanie];
	console.log("haslo " + haslo);
	console.log("losowanie "+losowanie);
}

losuj();

var haslo = wylosowane_haslo;
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;
var licznik_skuch = 8;

var yes = new Audio("Pop.wav");
var no = new Audio("Basso.wav");
var win = new Audio("win.wav");
var lose = new Audio("Lose.mp3");

var haslo1 = "";


for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
// 	nie można użyć tablicy [] - zamiast tego charAt()
	else if (haslo.charAt(i)==",") haslo1 = haslo1 + ",";
	else haslo1 = haslo1 + "-";
}


// !przygotowanie hasła do wyświetlenia
function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}


window.onload = start;

// robimy tablicę

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";


// !wypisanie liter
function start()
{
	var tresc_diva = "";
	
	for (i=0; i<=34; i++)
// 		w każdej iteracji stawarzamy <div>a z literą
	{
// 		budujemy sprawdzanie poszczególnych liter lit1, lit2 …
		var element = "lit" + i;
		

		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">' + litery[i] + '</div>';

// 		tutuaj podzieli linię co 6 znak
// 		if (i==6) tresc_diva = tresc_diva + '<div style="clear: both;"></div>'

// 		modulo 7 -> reszta z działania przez 7
		if ((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear: both;"></div>'
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	wypisz_haslo();

}

String.prototype.ustawZnak = function(miejsce, znak)
// dodajemy nową metodę do funkcji string, później użyjemy jej na zmiennej napis.ustawZnak(0, "B");
// pozycja litery i jaka litera ma tam trafić
{
// 	ustalanie miejsca w pamięci na znak, warunek aby nie wyjść poza zakres długości wyrazu
// this. powoduje, że dotyczy to tego co będzie przed "."  toString - chcemy mieć pewność, że łańcuch pozotał łańcuchem
	if (miejsce > this.length - 1) return this.toString();
// zamiana znaku -> 
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
// 	substr(start, length) jeżeli nie ma drugiego parametru, to domyślnie bierze do końca
}

function sprawdz(nr)
{
	
// 	sprawdzenie flagi czy litera była sprawdzana czy nie
	var trafiona = false;
	
// 	zaglądamy do hasła i odsłaniamy przynjmniej jedną
// 	pętla wykona się tyle razy ile razy litera występuje w haśle
	for (i=0; i<dlugosc; i++)
	{
// 		jeżeli dany (i-ty) znak hasła jest równy zakowi NR
		if (haslo.charAt(i) == litery[nr])
		{
// 		alert(i);
// 		chcemy wstawić literkę jeśli wyst∑puje na danej pozycji do zmiennej hasło1
// 		haslo1[i] = litery[nr]; 
// - ten zapis jest niebezpieczny
// 	ma być podmianka na nr pozycji gdzie siedzi znak i tu nowa klasa
		haslo1 = haslo1.ustawZnak(i, litery[nr]); 
		trafiona = true;			
		}
	}
	
// 	kolorowanie trafień
	if (trafiona == true)
	{
//		na zielono
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		wypisz_haslo();
	}

	else
	{
//		na czerwono
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
// 		tutaj następuje rozbrojenie ponownego kliknięcia w złą literę
		document.getElementById(element).setAttribute("onclick", ";")
		

		
// 		skucha
		ile_skuch++;
		licznik_skuch--;
		var obraz = "img/s" + ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
		document.getElementById("licznik").innerHTML = "Ilość możliwych błędów: " + licznik_skuch;
	}
// 		wygrywamy

		if(haslo == haslo1)
		{
		document.getElementById("alfabet").innerHTML = "OK, podano prawidłowe hasło: " +haslo+ '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
		win.play();
		}
		
// 		przegrywamy
		if (ile_skuch >= 9)
		{
		document.getElementById("alfabet").innerHTML = "NIE DAŁEŚ RADY, prawidłowe hasło to: " +haslo+ '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
		lose.play();
		}		
	
}