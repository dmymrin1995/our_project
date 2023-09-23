const parsedData = JSON.parse('{"prediction": 0.5759721994400024}');
var url = 'http://127.0.0.1:5000/api/sreview_predict'; //адрес сервака
let phrases = [
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'разобраться, о чём поют рэперы  1111111111111111111111111111111111',
    'Юрий Дудь',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  let textarea = document.querySelector('.textarea');
  let textarea_result = document.querySelector('.textarea-result');
  
  textarea.addEventListener('input', function () {
    window.setTimeout ('',500)
    let randomElement = getRandomElement(phrases);
   // textarea_result.textContent = randomElement;
   request.post(url, JSON.stringify(textarea.textContent)); //это отправка на сервак
   console.log(JSON.stringify(textarea.textContent)); 
    textarea_result.textContent = textarea.textContent;
  });
  