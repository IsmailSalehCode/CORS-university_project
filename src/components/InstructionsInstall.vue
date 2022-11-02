<template>
  <article>
    <h2>Инструкции за изтегляне на проекта</h2>
    <p>
    <ol class="vertical-list">
        <li>
            Изтеглете <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> за Вашия ОС.
        </li>
      <li>
        Изтеглете
        <a href="https://nodejs.org/en/download/" target="_blank">NodeJS</a> за Вашия ОС. След това npm трябва да е изтеглен глобално. Проверете като отворите конзолата си и въведете <span class='terminal-input'>npm -v</span>
      </li>
      <li>Отворете с VSCode директорията, където бихте искали да се изтегли проекта.</li>
      <li>От лявата вертикална лента идете в 'Source Control' и после натиснете бутона 'Initialize repository'. Ще се създаде локално repo.</li>
      <li>Ако не ви се е отворила автоматично конзола във VSCode, изберете от лентата с инструменти <kbd>Terminal</kbd> -> <kbd>New Terminal</kbd>. Въведете в терминала командата:
        <br>
        <span class='terminal-input'>
         git pull https://github.com/IsmailSalehCode/CORS-university_project.git
        </span>
        </li>
      <li>За да се изтеглят нужните dependencies, въведете в терминала командата:
        <br>
        <span class='terminal-input'>npm i</span>
      </li>
      <li>За build-ване на проекта и стартиране на локалния сървър въведете в терминала командата:
        <br>
        <span class='terminal-input'>npm run serve</span>
      </li>
    </ol>
    </p>
    <center>
    <hr style="max-width:50%">
    </center>
    <p>
        <b>
        За сървъра, с който се демонстрира как уеб инспектора взаимодейства:
        </b>
    </p>
    <p>
        <ol class="vertical-list">
            <li>
                Отворете с VSCode директорията, където бихте искали да се изтегли проекта.
            </li>
            <li>
               Въведете в терминала командата:
               <br>
               <span class='terminal-input'>git pull https://github.com/IsmailSalehCode/sample-web-gallery.git</span>
            </li>
            <li>За да се изтеглят нужните dependencies, въведете в терминала командата:
        <br>
        <span class='terminal-input'>npm i</span>
      </li>
      <li>За build-ване на проекта и стартиране на сървъра въведете в терминала командата:
        <br>
        <span class='terminal-input'>npm start</span>
      </li>
        </ol>
    </p>
  </article>
</template>

<style>
.vertical-list {
  line-height: 35px;
}
.terminal-input {
  color: white;
  background-color: black;
  padding-right: 4px;
  padding-left: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-family: monospace;
}
</style>