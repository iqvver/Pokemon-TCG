# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Задачи:
1. Реализация страниц приложения и перехода между ними (Route).
    1. "Главная страница" ('/'). 
        1. Расположены все карточки пришедшие из API.
        2. Расположены types и subtypes каточек. types и subtypes приходят из API.
    2. Страница выбранной карточки ('/card'). Сдесь расположена додробная информация о выбранной карточке.
    3. Страница входа в приложение ('/login'). Авторизация в приложении при помощи ввода логина и пароля.
Время выполнения примерно 20ч.
2. Дизайн и наполнение страниц приложения.
Время выполнения примерно 25ч.
3. Задания со звездочкой*
    -Пагинация карточек
    -Анимация кнопок, карточек при наведении
    -Адаптивный дизайн
Время выполнения примерно 5ч.
 Во время выполнения задания возникли проблемы с переходами между страницами (Route),
  из-за конфликта версий 'react-router-dom'
А так же при работе с API не было понятно как авторизоваться.
--------------------------------------------------------------
Tasks:
1. Implementation of the application pages and the transition between them (Route).
 1. "Home page" ('/'). 
 1. All the cards that came from the API are located.
 2. There are types and subtypes of the cathodes. types and subtypes come from the API.
 2. The page of the selected card ('/card'). Detailed information about the selected card is located here.
 3. The application login page ('/login'). Authorization in the application by entering a username and password.
The execution time is approximately 20h.
2. Design and filling of the application pages.
The execution time is approximately 25h.
3. Tasks with an asterisk*
 -Card pagination
 -Animation of buttons, cards on hover
 -Adaptive design
The execution time is approximately 5 hours.
During the execution of the task, there were problems with transitions between pages (Route),
due to a conflict of versions of 'react-router-dom'
And also when working with the API, it was not clear how to log in.
