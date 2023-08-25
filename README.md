# Тестовое задание

Требуется разработать приложение на Angular. Оно должно содержать в себе:
-   страницу авторизации;
-   страницу с таблицей постов (https://jsonplaceholder.typicode.com/posts), с этой страницы можно перейти на страницу поста по id;
-   страницу поста по id (https://jsonplaceholder.typicode.com/posts/1), с этой страницы можно вернуться на страницу всех постов;
-   шапку, в которой расположены кнопки авторизации/деавторизации

Требования:
-   Использовать Angular 16 версии
-   Для UI использовать Angular Material (можно без нее)
-   Роутинг
-   Реактивные формы для страниц авторизации + валидация форм на свое усмотрение
-   Страница постов и поста по id доступна только авторизованным пользователям
-   Данные для регистрации пользователя сохранять в localStorage, при логине их оттуда брать
-   (опционально) Lazy Loading модулей

Рекомендации:
-   Использовать класс HttpClient для обращений к стороннему API
-   Типизация форм, интерфейсов, методов, без any
-   Использовать Angular сервисы
-   Использовать @Input() @Output()
-   Не оставлять неиспользуемый (мертвый) код и пустые файлы

## Интерфейс

1. При запуске приложения необходимо зарегистрироваться и нажать кнопку "Зарегистрироваться". Если пользователь уже был авторизован (данные хранятся в localeStorage), тогда осуществляется переход к пункту 2.

<img width="1440" alt="image" src="https://github.com/afoninaanna/test-task/assets/108758880/03fb18db-3281-45a6-a401-902c13a8df2e">


2. Необходимо нажать кнопку "Войти".


<img width="1440" alt="image" src="https://github.com/afoninaanna/test-task/assets/108758880/ac6a8eaa-d1d4-4e10-9d07-4eb0e09a98bf">


3. Откроется страница с таблицей постов. В верхнем правом углу можно нажать на кнопку "Выйти" и сбросить данные из localeStorage. Пользователь будет перенаправлен на страницу регистрации, пункт 1.


<img width="1440" alt="image" src="https://github.com/afoninaanna/test-task/assets/108758880/1cb20b36-088a-4e13-9d3c-de1a6e616aa8">



4. При нажатии на конкретный пост открывается его страница. Можно нажать кнопку "Вернуться к постам" для возвращения к пункту 3.


<img width="1440" alt="image" src="https://github.com/afoninaanna/test-task/assets/108758880/36ea3207-666e-4153-8bb5-492004fc694f">


