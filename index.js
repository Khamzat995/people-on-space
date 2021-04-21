window.addEventListener('DOMContentLoaded', () => {
  fetch('http://api.open-notify.org/astros.json')
    .then((res) => {
      return res.json()
    })
    .then((data) => {

      const count = document.querySelector('#count'); //получил узел count

      count.textContent = data.number; // разместил в узле count значение из data.number
      //table.append();

      const table = document.querySelector('table'); // получил узел table

      for (let i = 0; i <= data.people.length; i++) {  //  создал цикл для каждого элемента массива data
        const trStrong = document.createElement('tr'); // создал узел строки tr
        const thNumber = document.createElement('th'); // создал узел столбца number
        const thPleace = document.createElement('th'); // создал узел столбца place
        const thName = document.createElement('th');   // создал узел столбца name

        trStrong.append( // вложил три узла столбца (td) в узел строки (tr)
          thNumber, // узел столбца number
          thPleace, // узел столбца place
          thName, //  узел столбца name
        );

        thNumber.textContent = i + 1; // указал для столбца number текстовый контент + 1
        thPleace.textContent = data.people[i].craft; // указал для столбца place текстовый контент
        thName.textContent = data.people[i].name; // // указал для столбца name текстовый контент


        table.append(trStrong) //вложил узел строки (tr) в конец таблицы
      }



      })
    .catch(() => {

      // ОБРАБОТКА ОШИБОК

    })
})


