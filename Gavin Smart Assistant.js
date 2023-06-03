// ==UserScript==
// @name         Gavin Smart Assistant (Демонстративная версия)
// @description  Ассистент для открытия ссылок по командам
// @version      4.0
// @author       gtnntg and chat gpt
// @match        *://*/*
// @icon         https://lh3.googleusercontent.com/u/5/drive-viewer/AFGJ81riIG6NtFA70hji-xR0bJPugVxp4YZU9MMy-IIH1PT8Dy47SKIaKxSgRWSFAmlHAoMvPtvgl-SWwIqbM4vrO3G8m2HEKw=w1920-h1009
// ==/UserScript==
var version = GM_info.script.version; // Получаем текущую версию скрипта
var name = GM_info.script.name; // Получаем текущее название скрипта
(function() {
  // Добавляем CSS стили
  var styles = `
  #chat-circle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #2aa38b;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
  }

  #chat-box {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 300px;
    height: 400px;
    background-color: #393b3b;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: none;
    z-index: 9999;
  }

  #chat-head {
    padding: 10px;
    background-color: #2aa38b;
    color: #fff;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  #chat-body {
    padding: 10px;
    height: 320px;
    overflow-y: auto;
    color: #fff;
  }

  #user-input {
    padding: 10px;
    border: none;
    border-top: 1px solid #cccccc;
    width: 100%;
    box-sizing: border-box;
    background-color: #555;
    color: #fff;
  }

  .message {
    margin-bottom: 10px;
  }
`;

  var style = document.createElement('style');
  style.textContent = styles;
  document.head.appendChild(style);

  // Создаем элементы чата
  var chatCircle = document.createElement('div');
  chatCircle.id = 'chat-circle';
  document.body.appendChild(chatCircle);

  var chatBox = document.createElement('div');
  chatBox.id = 'chat-box';
  // Добавляем логотип
var logoImage = document.createElement('img');
logoImage.src = 'https://lh3.googleusercontent.com/u/5/drive-viewer/AFGJ81riIG6NtFA70hji-xR0bJPugVxp4YZU9MMy-IIH1PT8Dy47SKIaKxSgRWSFAmlHAoMvPtvgl-SWwIqbM4vrO3G8m2HEKw=w1920-h1009';
logoImage.alt = 'Gavin Smart Assistant Logo';
logoImage.style.width = '30px';
logoImage.style.height = '30px';

chatCircle.appendChild(logoImage);


  var chatHead = document.createElement('div');
  chatHead.id = 'chat-head';
  chatHead.textContent = name + 'v' + version;

  var chatBody = document.createElement('div');
  chatBody.id = 'chat-body';

  var userMessage = document.createElement('input');
  userMessage.id = 'user-input';
  userMessage.type = 'text';
  userMessage.placeholder = 'Введите команду...';

  chatBox.appendChild(chatHead);
  chatBox.appendChild(chatBody);
  chatBox.appendChild(userMessage);
  document.body.appendChild(chatBox);

// Обработчик команд
  function handleCommand(command) {
    command = command.toLowerCase();
    if (
      command === 'youtube' ||
      command === 'open youtube' ||
      command === 'открой youtube' ||
      command === 'открой мне youtube'
    ) {
      window.open('https://www.youtube.com');
      var messages = [
        'Команда "Открой YouTube" выполнена',
        'Открываю YouTube для вас',
        'Ваша команда выполнена: открываю YouTube',
        'YouTube открыт, наслаждайтесь просмотром видео!',
        'Выполняю команду "Открой YouTube"'
      ];
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];
      displayMessage(randomMessage);
    } else if (
      command === 'google' ||
      command === 'open google' ||
      command === 'открой мне google' ||
      command === 'открой google'
    ) {
      window.open('https://www.google.com');
      var messages = [
        'Команда "Открой Google" выполнена',
        'Открываю Google для вас',
        'Ваша команда выполнена: открываю Google',
        'Google открыт, начинайте поиск!',
        'Выполняю команду "Открой Google"'
      ];
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];
      displayMessage(randomMessage);
    } else if (
      command === 'facebook' ||
      command === 'open facebook' ||
      command === 'Открой мне Facebook' ||
      command === 'открой facebook'
    ) {
      window.open('https://www.facebook.com');
      var messages = [
        'Команда "Открой Facebook" выполнена',
        'Открываю Facebook для вас',
        'Ваша команда выполнена: открываю Facebook',
        'Facebook открыт, наслаждайтесь общением!',
        'Выполняю команду "Открой Facebook"'
      ];
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];
      displayMessage(randomMessage);
    } else if (command === 'открой сайт') {
      window.open('https://www.Тестовый сайт.com');
      var messages = [
        'Команда "Открой сайт" выполнена',
        'Открываю сайт для вас',
        'Ваша команда выполнена: открываю сайт',
        'Сайт открыт, наслаждайтесь его содержимым!',
        'Выполняю команду "Открой сайт"'
      ];
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];
      displayMessage(randomMessage);
    } else if (isURL(command)) {
      window.open(command);
      displayMessage('Открыта ссылка: ' + command);
    } else {
      var messages = [
        'Неизвестная команда',
        'Команда не распознана',
        'Извините, я не могу выполнить эту команду',
        'Простите, я не понимаю эту команду',
        'Не удалось распознать команду. Попробуйте снова'
      ];
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];
      displayMessage(randomMessage);
    }
  }

  // Отображение сообщения в чате
  function displayMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
    // Проверка, является ли строка URL
function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // протокол
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // доменное имя
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP-адрес
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // порт и путь
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // параметры запроса
    '(\\#[-a-z\\d_]*)?$', 'i'); // фрагмент
  return pattern.test(str);
}

  // Открытие/закрытие чата по клику на круг
  chatCircle.addEventListener('click', function() {
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
  });

// Отправка команды по нажатию клавиши Enter
  userMessage.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      var command = userMessage.value.trim();
      if (command !== '') {
        displayMessage('Вы: ' + command);
        handleCommand(command);
        userMessage.value = '';
      }
    }
  });
})();