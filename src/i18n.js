import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const translations = {
  en: {
    translation: {
      "My collections": "My collections",
      "Latest items": "Latest items",
      "Largest collections": "Largest collections",
      "Topics ": "Topics",
      "Sign in to your account": "Sign in to your account",
      "Your email": "Your email",
      "Password ": "Password",
      "Sign in": "Sign in",
      "Don’t have an account yet? ": "Don’t have an account yet? ",
      "Sign up": "Sign up",
      "Create account": "Create account",
      "Your Name": "Your Name",
      "Confirm Password": "Confirm Password",
      "Update profile": "Update profile",
      "Create collection": "Create collection",
      "Log out": "Log out",
      "Log In": "Log In",
      "Sign Up": "Sign Up",
      "Register ": "Register",
      "Author ": "Author",
      "Number of Items": "Number of Items",
      "Add item": "Add item",
      "Item Name": "Item Name",
      "Item Description": "Item Description",
      "No items added": "No items added",
      "Cancel ": "Cancel",
      "Created at": "Created at",
      "Collection Name": "Collection Name",
      "Collection Topic": "Collection Topic",
      "Collection Description": "Collection Description",
      "Choose a topic": "Choose a topic",
      "in ": "in",
      "Name ": "Name",
      "Email ": "Email",
      "Role ": "Role",
      "Status ": "Status",
      "Created At": "Created At",
      "Updated At": "Updated At",
      "Delete User": "Delete User",
      "Delete ": "Delete",
      "Administrator page": "Administrator page",
    },
  },
  sp: {
    translation: {
      "My collections": "Mis colecciones",
      "Latest items": "Últimos artículos",
      "Largest collections": "Colecciones más grandes",
      "Topics ": "Temas",
      "Sign in to your account": "Ingrese a su cuenta",
      "Your email": "Correo electrónico",
      "Password ": "Contraseña",
      "Sign in": "Iniciar sesión",
      "Don’t have an account yet? ": "¿Todavía no tienes una cuenta? ",
      "Sign up": "Inscribirse",
      "Create account": "Crear una cuenta",
      "Your Name": "Nombre",
      "Confirm Password": "Confirmar Contraseña",
      "Update profile": "Actualización del perfil",
      "Create collection": "Crear colección",
      "Log out": "Cerrar sesión",
      "Log In": "Acceso",
      "Sign Up": "Inscribirse",
      "Register ": "Registro",
      "Author ": "Autor",
      "Number of Items": "Número de items",
      "Add item": "Añadir artículo",
      "Item Name": "Nombre del árticulo",
      "Item Description": "Descripción del Artículo",
      "No items added": "No se agregaron elementos",
      "Cancel ": "Cancelar",
      "Created at": "Creado a las",
      "Collection Name": "Nombre de la colección",
      "Collection Topic": "Tema de la colección",
      "Collection Description": "Descripción de la colección",
      "Choose a topic": "Elige un tema",
      "in ": "en",
      "Name ": "Nombre",
      "Email ": "Correo electrónico",
      "Role ": "Role",
      "Status ": "Estado",
      "Created At": "Creado a las",
      "Updated At": "Actualizado a las",
      "Delete User": "Borrar usuario",
      "Delete ": "Borrar",
      "Administrator page": "Página del administrador",
    },
  },
  ru: {
    translation: {
      "My collections": "Мои коллекции",
      "Latest items": "Последние предметы",
      "Largest collections": "Крупнейшие коллекции",
      "Topics ": "Темы",
      "Sign in to your account": "Войдите в свой аккаунт",
      "Your email": "Электронная почта",
      "Password ": "Пароль",
      "Sign in": "Войти",
      "Don’t have an account yet? ": "У вас еще нет аккаунта? ",
      "Sign up": "Зарегистрироваться",
      "Create account": "Зарегистрироваться",
      "Your Name": "Имя",
      "Confirm Password": "Подтвердите пароль",
      "Update profile": "Обновить профиль",
      "Create collection": "Создать коллекцию",
      "Log out": "Выйти",
      "Log In": "Авторизоваться",
      "Sign Up": "Зарегистрироваться",
      "Register ": "Регистрация Аккаунта",
      "Author ": "Автор",
      "Number of Items": "Количество предметов",
      "Add item": "Добавить элемент",
      "Item Name": "Имя элемента",
      "Item Description": "Описание предмета",
      "No items added": "Нет добавленных элементов",
      "Cancel ": "Отмена",
      "Created at": "Создано в",
      "Collection Name": "Название коллекции",
      "Collection Topic": "Тема коллекции",
      "Collection Description": "Описание коллекции",
      "Choose a topic": "Выберите тему",
      "in ": "в",
      "Name ": "Имя",
      "Email ": "Электронная почта",
      "Role ": "Роль",
      "Status ": "Статус",
      "Created At": "Создано в",
      "Updated At": "Обновлено в",
      "Delete User": "Удалить пользователя",
      "Delete ": "Удалить",
      "Administrator page": "Страница администратора",
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: translations,
  fallbackLng: "en",
  debug: false,
});

export default i18n;
