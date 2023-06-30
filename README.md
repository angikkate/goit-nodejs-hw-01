# goit-nodejs-hw-01
# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
![Alt text](image.png)
![Alt text](image-1.png)

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
![Alt text](image-2.png)

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
![Alt text](image-3.png)

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
![Alt text](image-4.png)