## GoIT Node.js Course Homework

CLI app Homework GoIT Academy.

Позволяет создавать базу контактов пользователя.
Присутствует Аутентификация.

Маршруты и запросы:

@ POST /api/users/signup - регистрация пользователя, обязательно тело запроса;

@ POST /api/users/login - логин пользователя, обязательно тело запроса;

@ GET /api/users/logout - логаут пользователя;

@ GET /api/users/current - получение текущего пользователя;

@ PATCH /api/users/avatars - изменение dafault avatar пользователем на свой личный;

@ GET /api/users/verify/:verificationToken - верификация email пользователя;

@ POST /api/users/verify - повторная отправка письма для верификации пользователя;

@ GET /api/contacts - получение всех контактов текущего пользователя;

@ GET /api/contacts/:id - получение контакта текущего пользователя по ID;

@ POST /api/contacts - добавление контакта текущего пользователя, обязательно тело запроса;

@ PATCH /api/contacts/:id - изменение полей контакта текущего пользователя, найденного по ID;

@ PATCH /api/contacts/:id/favorite - изменение поля "Избранное/Favorite" контакта текущего пользователя;

@ DELETE /api/contacts/:id - удаление контакта текущего пользователя по ID;

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими исправлениями простых ошибок
