# [React Место Russia ](https://v1ktorbro.github.io/mesto-react/index.html)

## Используемый стэк :

**React.js, CSS3, API fetch, БЭМ nested**.

## О проеке

Проект ["React Mesto Russia"](https://v1ktorbro.github.io/mesto-react/index.html) является прототипом работы ["Mesto Russia"](https://v1ktorbro.github.io/mesto/index.html), который был написан на чистом JavaScript.

Приложение написано на React.js с использованием хуков и ничем не отличается по функциональности от проекта ["Mesto Russia"](https://v1ktorbro.github.io/mesto/index.html), за исключением одной функциональности: в отсутствии валидации формы перед ее отправкой на сервер.

В проекте можно изменить аватар, информацию профиля, добавить, а так же удалить собственную карточку. 
Все запросы отправляются при помощи fetch API.

### Структура проекта

        blocks/     | CSS для бллоков. Проект оформлен по структуре БЭМ nested;
        components/ | компоненты страницы;
        contexts/   | контексты с информацией о текущем пользователе и текущими карточками;
        fonts/      | шрифт Inter;
        images/     | svg изображения размещенные на странице;
        utils/      | находятся нужные переменные, которые отделены от основного кода;
        vendor/     | normalize.css;
        index.css   | import всех блоков в единый файл.

### Авторы

* **Яндекс.Практикум** *гуру и наставник* - [Yandex.Practikum](https://praktikum.yandex.ru);

* **Виктор Абросимов** *писарь* - [linkedin](https://www.linkedin.com/in/victor-abrosimov-631b6b1a4/).
