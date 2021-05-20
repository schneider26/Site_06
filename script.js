var person = "Иван Михайлович";
function myAlert() {
    var txt;
    person = prompt("Как я могу к Вам обращаться?", person);
    if (person == null || person == "") {
      txt = "Вы не хотете со мной играть?";
    } else {
      txt = person + ", приветствую! Надеюсь Вам понравится мой сайт!";
    }
    
    
    document.getElementById("demo").innerHTML = txt;
  }
  myAlert();

function gameOn() {
  var txt;
  
  var number = parseInt(prompt("Я могу предсказать Вам будущее. Хотите? Тогда загадайте число от 0 до 9", "N"));
  
  if (!isNaN(number) && number <=9) {
    
    
    switch (number) {
            case 0:
              txt = "Выигрыш исходит от того, с чем Вы должны расстаться.";
              break;
            case 1:
              txt= "Ведите обычную жизнь необычным способом!";
              break;
            case 2:
              txt= "Отпустите свое прошлое: оно исчерпало себя!";
              break;
            case 3:
              txt = "Будьте терпеливы, и если решение Ваше правильно, Вселенная поддержит его!";
              break;
            case 4:
              txt = "Раскройтесь и пропустите свет в ту часть своей жизни, которая до сих пор была тайной!";
              break;
            case 5:
              txt = "Сосредоточьтесь на настоящем!";
              break;
            case 6:
              txt = "Помните, что истинное партнерство может существовать только между цельными личностями!";
              break;
            case 7:
              txt = "Наслаждайтесь удачей и делитесь ею с окружающими Вас людьми!";
              break;
            case 8: 
              txt = "Раскройтесь и пропустите свет в ту часть своей жизни, которая до сих пор была тайной";
              break;
            case 9:
              txt = "Секрет начала — это разбиение ваших сложносочиненных дел на мелкие, легко выполнимые задачи и выполнение их, начиная с первой!";
              break;
          }
            } else {
        txt = "Жаль... Похоже Вы не верите в волшебство";
      }


  document.getElementById("game").innerHTML = txt;
}
gameOn();

function openCard() {
  var res = Math.floor(Math.random() * 10);
  switch(res) {
    case 0:
      window.open("https://www.youtube.com/watch?v=XYE5Ya1vgpM");
      break;
    case 1:
      window.open("https://www.youtube.com/watch?v=W9NoFqQe_3Q");
      break;
    case 2:
      window.open("https://www.kcf.or.jp/toyosu/event/detail/?id=3651");
      break;
    case 3:
      window.open("https://www.gismeteo.ru/weather-kamyshin-5064/");
      break;
    case 4:
      window.open("https://www.archiproducts.com/en/products/greenworks/room-divider-moving-hedge_358689");
      break;
    case 5:
      window.open("https://www.ifbbpro.com/");
      break;
    case 6:
      window.open("https://www.arla.se/");
      break;
    case 7:
      window.open("https://www.nationalgeographic.com/animals/");
      break;
    case 8: 
    window.open("https://www.nasa.gov/");
      break;
    case 9:
      window.open("https://wavehouse.ru/soshi-surfing/");
      break;
  }
      
}

function arithemeticMagic() {
  
  alert("Умножьте на 2 число дня своего рождения и прибавьте 5. Затем умножьте результат на 50 и прибавьте порядковый номер месяца своего дня рождения (январь - 1... июль -7)");
  var date = prompt(person + ", введите полученный результат");
  var result = parseInt(date);
  var txt;
  var month;
  var day;
  result = result - 250;
  day = result / 100;
  day = parseInt(day); 
  month = result % 100;
  switch(month) {
    case 1:
      txt = day + " января";
      break;
    case 2:
      txt = day + " февраля";
      break;
    case 3:
      txt = day + " марта";
      break;
    case 4:
      txt = day + " апреля";
      break;
    case 5:
      txt = day + " мая";
      break;
    case 6:
      txt = day + " июня";
      break;
    case 7:
      txt = day + " июля";
      break;
    case 8:
      txt = day + " августа";
      break;
    case 9:
      txt = day + " сентября";
      break;
    case 10:
      txt = day + " октября";
      break;
    case 11:
      txt = day + " ноября";
      break;
    case 12:
      txt = day + " декабря";
      break;
    default:
      txt = "Похоже, "+person+ " из другой планеты, где время исчисляется по-другому";
  }
  document.getElementById("2").innerHTML = txt;
  
}

function mnemonic() {
  var array_vocabulary = ["пальто",
                        "чудище",
                        "реестр",
                        "попона",
                        "центрифуга",
                        "засмаливать",
                        "бумага",
                        "обобщение",
                        "коммунист",
                        "мезонин",
                        "вылет",
                        "средневековый",
                        "малосущественный",                       
                        "обеспечивать",
                        "меренга",
                        "безликий",
                        "отлогий",
                        "высота",
                        "переборка",
                        "сбивчивость",
                        "затопать",
                        "провезти",
                        "анатомичка",
                        "элегия",
                        "ворохнуть",
                        "впихнуть",
                        "двузуб",
                        "малина",
                        "масштаб",
                        "ястреб",
                        "страничка",
                        "частушка",
                        "бережность",
                        "пораженчиство",
                        "упрячь",
                        "прогулять",
                        "сосновый",
                        "опак",
                        "легковерие",
                        "отгрызать",
                        "тиканье",
                        "залечивать",
                        "напролом",
                        "проутюжить",
                        "царственный",
                        "нигде",
                        "жизнелюб",
                        "эффективный",
                        "бесполезный",
                        "прицепить",
                        "акцепция",
                        "предбанник",
                        "наездом",
                        "кольт",
                        "промочить",
                        "штукатур",
                        "троечка",
                        "сберкнижка",
                        "сургучный",
                        "замедление",
                        "вкопать",
                        "тяжеловес",
                        "заглавие",
                        "тихоход",
                        "иссохнуть",
                        "семинар",
                        "реверсивный",
                        "дистих",
                        "рецедивный",
                        "настроить",
                        "проворство",
                        "разиня",
                        "прикасание",
                        "сложно",
                        "шпинат",
                        "паспортист",
                        "мойра",
                        "морозец",
                        "испачкаться",
                        "томный",
                        "лузга",
                        "эвенкийка",
                        "градус",
                        "присаливать",
                        "скважистый",
                        "кинестезия",
                        "сталь",
                        "залавливать",
                        "нефтяной",
                        "трехходовый",
                        "святиться",
                        "медведица",
                        "орудовать",
                        "бряцание",
                        "оливка",
                        "пижама",
                        "республика",
                        "огорошить",
                        "шоколад",
                        "паковать"];
  var array_mnemonic = [2];
  var txt;
  for(var i = 0; i < 3; i++) {
    var index = Math.floor(Math.random()*100);
    array_mnemonic[i] = array_vocabulary[index];
  }
  txt = array_mnemonic.join(" ");
  document.getElementById("3").innerHTML = txt;
  alert(txt);
  var mnemo = prompt("Введите три слова, показанные на карточке без запятых, используя пробелы");
  if(txt.toUpperCase() === mnemo.toUpperCase()){
    alert(person + ", поздравляю! У Вас отличная память!");
  } else {
    alert(person + ", кажется Вы устали...");
  }
}