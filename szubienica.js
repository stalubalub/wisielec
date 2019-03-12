/*
 * Filename: /Users/lukasz/Codding/na_GitHubie/wisielec/szubienica.js
 * Path: /Users/lukasz/Codding/na_GitHubie/wisielec
 * Created Date: Saturday, March 9th 2019, 11:27:41 am
 * Author: lukasz
 * 
 * Copyright (c) 2019 Your Company
 */


// dodatkowe warianty haseł
var tablica_hasla = new Array(215);
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
tablica_hasla[17] = "a co po czyjej wielkości, jak nie ma w głowie mądrości"
tablica_hasla[18] = "Adam cóż by poradził, gdyby Bóg w raju Ewy nie posadził"
tablica_hasla[19] = "Adam i Ewa pokazują, jaki styczeń i luty po nich następują"
tablica_hasla[20] = "adwokat niech głowę, a koń niech ma nogi"
tablica_hasla[21] = "Agnieszka łaskawa puszcza skowronka z rękawa"
tablica_hasla[22] = "apetyt rośnie w miarę jedzenia"
tablica_hasla[23] = "baba swoje, czart swoje"
tablica_hasla[24] = "baba z wozu, koniom lżej"
tablica_hasla[25] = "baju, baju – będziesz w raju"
tablica_hasla[26] = "Barbara po wodzie, Boże Narodzenie po lodzie"
tablica_hasla[27] = "Barbara święta o górnikach pamięta"
tablica_hasla[28] = "bęben dlatego tak głośny, bo próżny"
tablica_hasla[29] = "będzie z niego ksiądz jak z diabła kościelny"
tablica_hasla[30] = "bez ciekawości nie ma mądrości"
tablica_hasla[31] = "bez kołaczy nie wesele"
tablica_hasla[32] = "bez ludzi i raj się znudzi"
tablica_hasla[33] = "bez pracy nie ma kołaczy"
tablica_hasla[34] = "bez pracy nie ma macy"
tablica_hasla[35] = "bez pracy nie ma płacy"
tablica_hasla[36] = "bez pracy trudno dostąpić honoru"
tablica_hasla[37] = "bez zachodu nie ma miodu"
tablica_hasla[38] = "bieda z dziećmi, bieda i bez dzieci"
tablica_hasla[39] = "biedna żona taka, która ma pijaka"
tablica_hasla[40] = "biednemu zawsze wiatr w oczy"
tablica_hasla[41] = "blisko swej jabłoni jabłko pada"
tablica_hasla[42] = "bliższa koszula ciału"
tablica_hasla[43] = "bliższa koszula ciału niż kaftan"
tablica_hasla[44] = "bliższa koszula ciału niż sukmana"
tablica_hasla[45] = "Bóg bez pracy nic nie daje"
tablica_hasla[46] = "Bóg dał, Bóg wziął"
tablica_hasla[47] = "Bóg nie opuści, kto się nań spuści"
tablica_hasla[48] = "Bóg pomaga tym, co sami sobie pomagają"
tablica_hasla[49] = "Boga na języku, a diabła ma w sercu"
tablica_hasla[50] = "bogatemu diabeł dzieci kołysze"
tablica_hasla[51] = "Bogu się kłaniaj, a diabła nie gniewaj"
tablica_hasla[52] = "Bogu służ, a diabła nie gniewaj"
tablica_hasla[53] = "Bogu świeczka, a diabłu ogarek"
tablica_hasla[54] = "boi się, jak diabeł święconej wody"
tablica_hasla[55] = "bój się w styczniu wiosny, bo marzec zazdrosny"
tablica_hasla[56] = "broda mędrcem nie czyni"
tablica_hasla[57] = "być w Rzymie i nie widzieć papieża"
tablica_hasla[58] = "było dwóch braci mądrych, a trzeci żonaty"
tablica_hasla[59] = "cała mądrość nie mieści się w jednej głowie"
tablica_hasla[60] = "cel uświęca środki"
tablica_hasla[61] = "chcąc poznać przyjaciela, trzeba z nim beczkę soli zjeść"
tablica_hasla[62] = "chcesz córuni, podobaj się wprzód mamuni"
tablica_hasla[63] = "chcesz się dostać do nieba, nie żałuj biednym kęsa chleba"
tablica_hasla[64] = "chleb cudzym nożem krajany - niesmaczny"
tablica_hasla[65] = "chleb i woda, nie ma głoda"
tablica_hasla[66] = "chleb ma rogi"
tablica_hasla[67] = "chleb ma rogi, nędza nogi"
tablica_hasla[68] = "chleb płacze, gdy go darmo jedzą"
tablica_hasla[69] = "chleb pracą nabyty, bywa smaczny i syty"
tablica_hasla[70] = "chleb stracił, a bułki nie znalazł"
tablica_hasla[71] = "chleb świętej Agaty od ognia strzeże chaty"
tablica_hasla[72] = "chleb w drodze nie cięży"
tablica_hasla[73] = "chleb, piwo i świéca zdobią szlachcica"
tablica_hasla[74] = "chlebem i solą ludzie ludzi niewolą"
tablica_hasla[75] = "chłop mowny a kot łowny z głodu nie zemrą"
tablica_hasla[76] = "chłop się nie przeżegna, dopóki piorunu nie usłyszy"
tablica_hasla[77] = "chłop, co musi, rad uczyni"
tablica_hasla[78] = "chłopa korcem nie mierzą"
tablica_hasla[79] = "chłopa na korce, a rozumu na lata nie mierzą"
tablica_hasla[80] = "choć już w kwietniu słonko grzeje, nieraz pole śnieg zawieje"
tablica_hasla[81] = "choćby chleb był rżany, byle leżany"
tablica_hasla[82] = "ciągnie swój do swego"
tablica_hasla[83] = "cicha woda brzegi rwie"
tablica_hasla[84] = "ciekawość to pierwszy stopień do piekła"
tablica_hasla[85] = "cierp ciało, skoroś chciało"
tablica_hasla[86] = "cnota naukę przechodzi"
tablica_hasla[87] = "cnota zawżdy na dobre wynidzie"
tablica_hasla[88] = "co Anglik zmyśli, Francuz skréśli, a Niemiec doma nakrupi, wszystko to głupi Polak kupi"
tablica_hasla[89] = "co dwie głowy, to nie jedna"
tablica_hasla[90] = "co Francuz wymyśli, to Polak polubi"
tablica_hasla[91] = "co kraj, to obyczaj"
tablica_hasla[92] = "co marzec wypiecze, to kwiecień wysiecze"
tablica_hasla[93] = "co mąż, to wąż; co żona to męczeńska korona"
tablica_hasla[94] = "co nagle, to po diable"
tablica_hasla[95] = "co ptakiem z gęby wyleci, wołem nazad nie wciągniesz"
tablica_hasla[96] = "co się stało, to się nie odstanie"
tablica_hasla[97] = "co swój, to nie obcy"
tablica_hasla[98] = "co wolno wojewodzie, to nie tobie, smrodzie"
tablica_hasla[99] = "co z oczu, to z serca"
tablica_hasla[100] = "co za dużo, to niezdrowo"
tablica_hasla[101] = "córkę chromą do klasztoru"
tablica_hasla[102] = "cudza praca nie wzbogaca"
tablica_hasla[103] = "ćwiczenie czyni mistrza"
tablica_hasla[104] = "czas leczy rany"
tablica_hasla[105] = "czas to pieniądz"
tablica_hasla[106] = "czasem luty ostro kuty, czasem w luty same pluty"
tablica_hasla[107] = "czasem luty się zlituje, że człek niby wiosnę czuje; ale czasem tak się zżyma, że człek prawie nie wytrzyma"
tablica_hasla[108] = "czego Jaś się nie nauczy, tego Jan nie będzie umiał"
tablica_hasla[109] = "czego nie bierze Chrystus, to fiskus porwie"
tablica_hasla[110] = "czego oko nie widzi, tego sercu nie żal"
tablica_hasla[111] = "czekaj tatka latka"
tablica_hasla[112] = "czerwiec – przerwiec, bo przerywa gospodarkę aż do żniwa"
tablica_hasla[113] = "czerwiec po deszczowym maju często dżdżysty w naszym kraju"
tablica_hasla[114] = "czerwiec się czerwieni? Będzie dość w kieszeni"
tablica_hasla[115] = "czerwiec stały, grudzień doskonały"
tablica_hasla[116] = "człek do pracy stworzon, ptak do lotu"
tablica_hasla[117] = "człowiek człowiekowi wilkiem"
tablica_hasla[118] = "człowiek myśli, Pan Bóg kreśli"
tablica_hasla[119] = "człowiek strzela, Pan Bóg kule nosi"
tablica_hasla[120] = "czwarty pas, karty w tas"
tablica_hasla[121] = "czym skorupka za młodu nasiąknie, tym na starość trąci"
tablica_hasla[122] = "daj kurze grzędę, a ona: wyżej siędę"
tablica_hasla[123] = "daj psu spokój, pies ci da dwa"
tablica_hasla[124] = "dał Pan Bóg zęby, da i chleb"
tablica_hasla[125] = "darowanemu koniowi w zęby się nie zagląda"
tablica_hasla[126] = "deszcz na świętą Małgorzatę jest orzechom na stratę"
tablica_hasla[127] = "deszcz na świętego Błażeja, słaba wiosny nadzieja"
tablica_hasla[128] = "deszcze Michałowe prawią w zimie powietrze zdrowe"
tablica_hasla[129] = "deszcze na lipca pierwszego, drugiego, zapowiedzią deszczu czterdziestodniowego"
tablica_hasla[130] = "diabeł nie śpi"
tablica_hasla[131] = "diabeł się w ornat ubrał i ogonem na mszę dzwoni"
tablica_hasla[132] = "diabeł tkwi w szczegółach"
tablica_hasla[133] = "dla chcącego nic trudnego"
tablica_hasla[134] = "dla chleba, nie dla nieba chce być księdzem"
tablica_hasla[135] = "dla dwóch kogutów za mało miejsca na jednym gnoju"
tablica_hasla[136] = "dla każdej matki, miłe jej dziatki"
tablica_hasla[137] = "dla kota za dużo, dla psa za mało"
tablica_hasla[138] = "dla towarzystwa dał się Cygan powiesić"
tablica_hasla[139] = "do Boga, gdy trwoga"
tablica_hasla[140] = "do Michała przymrozków ile, i w maju tyle"
tablica_hasla[141] = "do ojca po grosz, do matki po koszulę"
tablica_hasla[142] = "do Pana Boga się módl, a diabła nie obrażaj"
tablica_hasla[143] = "do panny Katarzyny nowych butów obłóczyny"
tablica_hasla[144] = "do siostry w rok szósty, do brata we trzy lata"
tablica_hasla[145] = "do trzech razy sztuka"
tablica_hasla[146] = "dobra i wdowa, gdy młoda i zdrowa"
tablica_hasla[147] = "dobra psu i mucha"
tablica_hasla[148] = "dobra psu i mucha, kiedy głodny"
tablica_hasla[149] = "dobra psu i mucha, kiedy nie ma chleba"
tablica_hasla[150] = "dobra psu i mucha, kiedy sama wleci do brzucha"
tablica_hasla[151] = "dobra psu mucha, a chłopowi rzepa"
tablica_hasla[152] = "dobra żona – mężowi korona"
tablica_hasla[153] = "dobra żona tym się chlubi, że gotuje co mąż lubi"
tablica_hasla[154] = "dobrane małżeństwo to raj na ziemi"
tablica_hasla[155] = "dobrego gniazda dobre plemię"
tablica_hasla[156] = "dobrego syna nigdy Bóg nie zapomina"
tablica_hasla[157] = "dobry chleb z solą, byle z dobrą wolą"
tablica_hasla[158] = "dobry chleb, gdy kołacza nie masz"
tablica_hasla[159] = "dobry żart tynfa wart"
tablica_hasla[160] = "dobrymi chęciami jest piekło wybrukowane"
tablica_hasla[161] = "doczeka się pieska gałąź, choć mu się odwlecze"
tablica_hasla[162] = "dopóty dzban wodę nosi, dopóki mu się ucho nie urwie"
tablica_hasla[163] = "dzieci i ryby głosu nie mają"
tablica_hasla[164] = "dzisiaj bal, jutro żal"
tablica_hasla[165] = "dziura w worze, gość w komorze, piasek w mące, woda w łące, kąkol w życie, złość w habicie"
tablica_hasla[166] = "elektryka prąd nie tyka"
tablica_hasla[167] = "figur na figur mawiał święty Igór"
tablica_hasla[168] = "fortuna często rozumowi przeczy"
tablica_hasla[169] = "fortuna kołem się toczy"
tablica_hasla[170] = "gdy bez wiatrów luty chodzi, w kwietniu wicher nie zawodzi"
tablica_hasla[171] = "gdy chłop baby nie bije, to jej wątroba gnije"
tablica_hasla[172] = "gdy ciepło w lutym, zimno w marcu bywa, długo trwa zima, to jest niewątpliwa"
tablica_hasla[173] = "gdy deszcz w świętego Michała, będzie łagodna zima cała"
tablica_hasla[174] = "gdy deszcz w świętego Urbana, mały profit z winobrania"
tablica_hasla[175] = "gdy Halina łąki zrosi, rolnik w wodzie siano kosi"
tablica_hasla[176] = "gdy kota nie ma, myszy harcują"
tablica_hasla[177] = "gdy mróz w lutym ostro trzyma, tedy jest niedługa zima"
tablica_hasla[178] = "gdy na Małgorzaty mróz, jeszcze długo nie pojedzie wóz"
tablica_hasla[179] = "gdy na Michała obrodzą żołędzie, dużo śniegów w zimie będzie"
tablica_hasla[180] = "gdy na świętą Barbarę gęś chodzi po lodzie, to Boże Narodzenie będzie po wodzie"
tablica_hasla[181] = "gdy na świętą Barbarę mróz, sanie na górę włóż, a szykuj dobry wóz"
tablica_hasla[182] = "gdy na świętego Prota jest pogoda albo słota, to na świętego Hieronima jest deszcz albo go ni ma"
tablica_hasla[183] = "gdy na święty Jerzy jeszcze nie rozkwita, niech się cieszy stary, młody, chłop i kobieta"
tablica_hasla[184] = "gdy na święty Józef bociek przybędzie, to już śniegu nie będzie"
tablica_hasla[185] = "gdy na święty Paweł jasno, po żniwach też będzie ciasno"
tablica_hasla[186] = "gdy na święty Paweł jasno, po żniwach w stodole ciasno"
tablica_hasla[187] = "gdy na święty Walek deszcze, mrozy wrócą jeszcze"
tablica_hasla[188] = "gdy na Walka są deszcze, będzie ostry mróz jeszcze"
tablica_hasla[189] = "gdy na Wawrzyńca orzechy obrodzą, to w zimie mrozy dogodzą"
tablica_hasla[190] = "gdy noc jasna na Michała, to nastąpi zima trwała"
tablica_hasla[191] = "gdy pająk w lipcu przychodzi, to za sobą deszcz przywodzi, gdy swą pajęczynę snuje, bliską burzę czuje"
tablica_hasla[192] = "gdy przyjdzie Agnieszka, rozbije ogonem lód pliszka"
tablica_hasla[193] = "gdy przyjdzie marzec, umrze niejeden starzec"
tablica_hasla[194] = "gdy przyjdzie święta Agnieszka, przebije lód ogonem pliszka"
tablica_hasla[195] = "gdy rodzina żyje w zgodzie, to jej bieda nie dobodzie"
tablica_hasla[196] = "gdy się człowiek spieszy, to się diabeł cieszy"
tablica_hasla[197] = "gdy się diabeł zestarzeje, chce zostać mnichem"
tablica_hasla[198] = "gdy się drzewo obali, każdy wióry zbiera"
tablica_hasla[199] = "gdy się grzmot w lipcu od południa poda, drzewom się znaczy szwank i nieuroda"
tablica_hasla[200] = "gdy święty Andrzej ze śniegiem przybieży, sto dni śnieg na polu leży"
tablica_hasla[201] = "gdy Święty Maciej zimę poprawia, to Oblubieniec mrozy zostawia"
tablica_hasla[202] = "gdy w Andrzeja deszcz lub słota, w grudniu drogi bez błota"
tablica_hasla[203] = "gdy w Katarzynę lód nie stanie – szykuj sanie, gdy w Katarzynę mróz – szykuj wóz"
tablica_hasla[204] = "gdy w Katarzynę zima, śnieg nie poleży, mróz nie potrzyma"
tablica_hasla[205] = "gdy w lipcu słońce dopieka, burza niedaleka"
tablica_hasla[206] = "gdy w Michała deszcz spadnie, lekka zima będzie snadnie"
tablica_hasla[207] = "gdy w Michała wiatr od wschodu lub północy, w zimie mrozy wielkiej mocy"
tablica_hasla[208] = "gdy w styczniu deszcz leje, złe robi nadzieje"
tablica_hasla[209] = "gdy w świętą Barbarę gęś chodzi po lodzie, to Boże Narodzenie będzie po wodzie"
tablica_hasla[210] = "gdy w świętą Barbarę gęś po stawie chodzi, w Boże Narodzenie pływać po nim się godzi"
tablica_hasla[211] = "gdy w świętą Barbarę ostre mrozy, to na zimę gotuj wozy; a gdy roztajanie, każ opatrzyć sanie"
tablica_hasla[212] = "gdy Wawrzyniec i Bartłomiej pogodą dopisują, piękną jesień obiecują"
tablica_hasla[213] = "gdy wietrzno w Michała, będzie mroźna zima cała"
tablica_hasla[214] = "gdy wilk się zestarzeje, skubie go i wrona"
tablica_hasla[215] = "gdy Zuzanna z pogodą chadza, piękną jesień przyprowadza"


function losuj() {
	var losowanie = Math.ceil(Math.random() * tablica_hasla.length);
	losowanie = Math.round(losowanie) - 1;
	wylosowane_haslo = tablica_hasla[losowanie];
}
losuj();

// var haslo = wybrane_haslo;
// var haslo = wylosowane_haslo;
// haslo = haslo.toUpperCase();


var yes = new Audio("Pop.wav");
var no = new Audio("Basso.wav");
var win = new Audio("win.wav");
var lose = new Audio("Lose.mp3");

var dlugosc = 0;
var ile_skuch = 0;
var licznik_skuch = 8;

var haslo = "";
var haslo1 = "";
var haslo_z_reki = "";


function koduj() {
	// haslo = wylosowane_haslo;
	dlugosc = haslo.length;
	haslo = haslo.toUpperCase();

	for (i = 0; i < dlugosc; i++) {
		if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
		// 	nie można użyć tablicy [] - zamiast tego charAt()
		else if (haslo.charAt(i) == ",") haslo1 = haslo1 + ",";
		else haslo1 = haslo1 + "-";
	}
}

// !przygotowanie hasła do wyświetlenia - tutaj oprofgramować ify

function wypisz_haslo() {
	document.getElementById("plansza").innerHTML = haslo1;
}

function rodzaj_rozgrywki() {
	var decyzja = '<div class=gracze><div class=jedenGracz onclick="hasloLosowanie()">Jeden gracz<br>(losowanie)</div><div class=dwaGracz onclick="hasloZReki()">Dwóch graczy<br>(z ręki)</div></div>';
	document.getElementById("plansza").innerHTML = decyzja;
}

function hasloLosowanie() {
	// losuj();
	haslo = wylosowane_haslo;
	koduj();
	wypisz_haslo();
	console.log('hasło: ' + haslo);
	console.log('haslo1: ' + haslo1);
}

function hasloZReki() {
	var zapytanie = '<p><input type="text" id="pole" default="wpisz hasło do zgadnięcia" /><input type="button" value="wyślij hasło" onclick="getText()" /></p>'
	document.getElementById("plansza").innerHTML = zapytanie;
}

window.onload = start; // od tego się zaczyna !!!

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
function start() {
	var tresc_diva = "";
	for (i = 0; i <= 34; i++)
	// 		w każdej iteracji stawarzamy <div>a z literą
	{
		// 		budujemy sprawdzanie poszczególnych liter lit1, lit2 …
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';

		// 		tutuaj podzieli linię co 6 znak
		// 		if (i==6) tresc_diva = tresc_diva + '<div style="clear: both;"></div>'
		// 		modulo 7 -> reszta z działania przez 7
		if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear: both;"></div>'
	}
	document.getElementById("alfabet").innerHTML = tresc_diva;
	// wypisz_haslo();
	rodzaj_rozgrywki();
}

String.prototype.ustawZnak = function (miejsce, znak)
// dodajemy nową metodę do funkcji string, później użyjemy jej na zmiennej napis.ustawZnak(0, "B");
// pozycja litery i jaka litera ma tam trafić
{
	// 	ustalanie miejsca w pamięci na znak, warunek aby nie wyjść poza zakres długości wyrazu
	// this. powoduje, że dotyczy to tego co będzie przed "."  toString - chcemy mieć pewność, że łańcuch pozotał łańcuchem
	if (miejsce > this.length - 1) return this.toString();
	// zamiana znaku -> 
	else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
	// 	substr(start, length) jeżeli nie ma drugiego parametru, to domyślnie bierze do końca
}

function sprawdz(nr) {

	// 	sprawdzenie flagi czy litera była sprawdzana czy nie
	var trafiona = false;

	// 	zaglądamy do hasła i odsłaniamy przynjmniej jedną
	// 	pętla wykona się tyle razy ile razy litera występuje w haśle
	for (i = 0; i < dlugosc; i++) {
		// 		jeżeli dany (i-ty) znak hasła jest równy zakowi NR
		if (haslo.charAt(i) == litery[nr]) {
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
	if (trafiona == true) {
		//		na zielono
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		wypisz_haslo();
	} else {
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
		document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" alt="" />';
		document.getElementById("licznik").innerHTML = "Ilość możliwych błędów: " + licznik_skuch;
	}
	// 		wygrywamy

	if (haslo == haslo1) {
		document.getElementById("alfabet").innerHTML = "OK, podano prawidłowe hasło: " + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
		win.play();
	}

	// 		przegrywamy
	if (ile_skuch >= 9) {
		document.getElementById("alfabet").innerHTML = "NIE DAŁEŚ RADY, prawidłowe hasło to: " + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
		lose.play();
	}
}

function getText(){
	var pole = document.getElementById("pole");
	haslo_z_reki = pole.value;
	haslo = haslo_z_reki;
	koduj();
	wypisz_haslo();
}

// function hasloZReki() {


// var pole = document.getElementById("pole");
// haslo1 = pole.value;


// var div = document.getElementById("content")
// div.innerHTML = "Zawartosc pola : <strong>"+pole.value+"</strong>"
// document.getElementById("plansza").innerHTML = haslo1;
// }