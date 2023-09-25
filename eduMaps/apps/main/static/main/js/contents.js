let mapContent = `
    <form>
        {% csrf_token %}
        <div id="map" style="height: 87vh;"></div>
    </form>
`

let chguContent = `
<section class="u-clearfix u-image u-section-1" id="sec-a853" data-image-width="1920" data-image-height="1280">
  <div class="u-align-left u-container-style u-group u-white u-group-1">
    <div class="u-container-layout u-valign-top u-container-layout-1">
      <h1 class="u-text u-title u-text-1">чеченский государственный университет​&nbsp;А. А. Кадырова</h1>
      <div class="u-border-20 u-border-grey-60 u-line u-line-horizontal u-line-1"></div>
      <p class="u-large-text u-text u-text-variant u-text-2"> &nbsp; &nbsp; &nbsp;Университет ведёт свою историю от 7 февраля 1938 года, когда в Грозном по инициативе областного комитета партии и Совета народных комиссаров Чечено-Ингушской АССР открылся Грозненский учительский институт с двухгодичным сроком обучения. Контингент обучающихся составлял в 120 человек. 1 сентября 1938 года учительский институт был преобразован в Чечено-Ингушский государственный педагогический институт с четырёхгодичным сроком обучения. Институт располагал филологическим, историческим и физико-математическим факультетами.</p>
    </div>
  </div>
</section>
<section class="u-clearfix u-section-2" id="sec-704c">
  <div class="u-expanded-height u-grey-60 u-shape u-shape-rectangle u-shape-1"></div>
  <div class="u-align-left-sm u-container-style u-group u-group-1">
    <div class="u-container-layout u-valign-middle-sm u-valign-middle-xs">
      <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-1">Приимущество обучения в ЧГУ им А. А. Кадырова</h2>
      <div class="u-border-2 u-border-white u-line u-line-horizontal u-line-1"></div>
      <p class="u-text u-text-body-alt-color u-text-2">&nbsp; &nbsp; &nbsp; Преимуществом обучения в ЧГУ является большой педагогический состав многие из которых обучались за границей, обширные методы преподавания и возможности&nbsp; самовыражения и помощь в трудоустройстве будущим специалистам.</p>
    </div>
  </div>
  <img src="{% static 'main/img/chguOne.jpg' %}" alt="" class="u-expanded-width-xs u-image u-image-default u-image-1" data-image-width="2048" data-image-height="1365">
</section>
<section class="u-clearfix u-section-3" id="sec-c3a7">
  <div class="u-clearfix u-sheet u-sheet-1">
    <img src="{% static 'main/img/IMG_2870.jpg' %}" alt="" class="u-align-left u-image u-image-default u-image-1" data-image-width="800" data-image-height="533">
    <img src="{% static 'main/img/6383cf01bfe5c201844171.jpg' %}" alt="" class="u-align-left u-image u-image-default u-image-2" data-image-width="1300" data-image-height="866">
    <div class="u-align-left u-container-style u-expanded-width-md u-expanded-width-sm u-group u-left-0 u-group-1">
      <div class="u-container-layout u-valign-middle-sm u-container-layout-1">
        <h2 class="u-custom-font u-heading-font u-text u-text-1">начало и наши дни<br>
        </h2>
        <div class="u-border-3 u-border-grey-dark-1 u-line u-line-horizontal u-line-1"></div>
        <p class="u-align-left-xs u-text u-text-2">&nbsp; За последние 6 лет ЧГУ развилось до удивительных масштабов, построили дополнительные корпуса, открылись новые факультеты, институты и лицей</p>
      </div>
    </div>
    <div class="u-border-20 u-border-grey-60 u-line u-line-horizontal u-line-2"></div>
  </div>
</section>
<section class="u-clearfix u-section-4" id="sec-fbb0">
  <div class="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
    <div class="u-layout" style="">
      <div class="u-layout-row" style="">
        <div class="u-container-style u-image u-layout-cell u-right-cell u-size-30 u-image-1">
          <div class="u-container-layout"></div>
        </div>
        <div class="u-container-style u-grey-60 u-layout-cell u-left-cell u-size-30 u-layout-cell-2">
          <div class="u-container-layout">
            <div class="u-align-left-xs u-container-style u-group u-group-1">
              <div class="u-container-layout u-valign-middle-xs">
                <h2 class="u-text u-text-body-alt-color u-text-1">Информация об образовании</h2>
                <p class="u-text u-text-body-alt-color u-text-2">&nbsp; &nbsp;Всего – 1276 человек из них профессорско-преподавательский состав – 740&nbsp;человек<br>научные работники – 18 человек и т.д.&nbsp;<br>Институты:<br>&nbsp; &nbsp; 1.&nbsp;Институт экономики и финансов <br>&nbsp; &nbsp; 2.&nbsp;Институт физики, математики и информационных технологий <br>&nbsp; &nbsp; 3.&nbsp;Медицинский институт <br>&nbsp; &nbsp; 4.&nbsp;Агротехнологический институт <br>&nbsp; &nbsp; 5. Институт дополнительного профессионального образования<br>Колледжи:<br>&nbsp; &nbsp; &nbsp;Колледж <br>&nbsp; &nbsp; &nbsp;Медицинский колледж при медицинском институте&nbsp;<br>Лицей&nbsp;&nbsp;<br>
                  <br>Бакалавриат, специалитет, магистратура <br>Всего – 12 516 <br>Из них: <br>&nbsp; &nbsp;Очная форма обучения – 6 246; <br>&nbsp; &nbsp;Очно-заочная форма обучения – 2 050; <br>&nbsp; &nbsp;Заочная форма обучения – 4 220.<br>
                  <br>Аспирантура <br>Всего – 81 <br>Из них: <br>&nbsp; &nbsp;очная форма обучения – 14 <br>&nbsp; &nbsp;заочная форма обучения – 67 <br>
                  <br>Ординатура <br>Всего – 48 <br>Из них: <br>&nbsp; &nbsp; очная форма обучения – 48 <br>&nbsp;<br>
                </p>
                <div class="u-border-2 u-border-white u-line u-line-horizontal u-line-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="u-clearfix u-image u-section-5" data-image-width="1024" data-image-height="682" id="sec-48ac">
  <div class="u-clearfix u-sheet u-valign-bottom u-sheet-1">
    <div class="u-align-left u-container-style u-expanded-width-sm u-group u-group-1">
      <div class="u-container-layout u-container-layout-1">
        <h2 class="u-text u-text-white u-text-1">Студенческая жизнь</h2>
        <p class="u-text u-text-body-alt-color u-text-2">Студены в свободное от занятий время могу участвовать в различных мероприятий как сезонных так и повседневные, участвовать в различный соревновательных отраслях и выдвигать свои проекты на гранты.</p>
      </div>
    </div>
  </div>
</section>
<section class="u-clearfix u-white u-section-6" id="sec-09cd">
  <div class="data-layout-selected u-clearfix u-expanded-width u-gutter-16 u-layout-spacing-all u-layout-wrap u-layout-wrap-1">
    <div class="u-layout">
      <div class="u-layout-row">
        <div class="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-20 u-size-20-md u-image-1" data-image-width="1300" data-image-height="866">
          <div class="u-container-layout">
            <h5 class="u-custom-font u-heading-font u-text u-text-body-alt-color u-text-1">виртуальная экскурсия по главному корпусу</h5>
            <div class="u-border-1 u-border-white u-line u-line-horizontal u-line-1"></div>
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Massachusetts%20Institute%20of%20Technology%20(MIT)%2077%20Massachusetts%20Avenue%20%20Cambridge" class="u-border-1 u-border-palette-1-base u-link u-no-underline u-text-body-alt-color u-link-1" target="_blank">view map</a><span class="u-icon u-icon-circle u-text-grey-40 u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="undefined"><use xlink:href="#svg-5570"></use></svg><svg class="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-5570" style="enable-background:new 0 0 512 512;"></svg>><g><g><path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"></path>
</g>
</g></svg></span>
          </div>
        </div>
        <div class="u-align-left u-container-style u-image u-layout-cell u-size-20 u-size-20-md u-image-2" data-image-width="600" data-image-height="600">
          <div class="u-container-layout">
            <h5 class="u-custom-font u-heading-font u-text u-text-body-alt-color u-text-2"> виртуальная экскурсия по 3-й корпусу</h5>
            <div class="u-border-1 u-border-white u-line u-line-horizontal u-line-2"></div>
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Stanford%20University%20450%20Serra%20Mall%20%20Stanford" class="u-border-1 u-border-palette-1-base u-link u-no-underline u-text-body-alt-color u-link-2" target="_blank">view map</a><span class="u-icon u-icon-circle u-text-grey-40 u-icon-2"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="undefined"><use xlink:href="#svg-f352"></use></svg><svg class="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-f352" style="enable-background:new 0 0 512 512;"><g><g><path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"></path>
</g>
</g></svg></span>
          </div>
        </div>
        <div class="u-align-left u-container-style u-image u-layout-cell u-right-cell u-size-20 u-size-20-md u-image-3" data-image-width="1280" data-image-height="853">
          <div class="u-container-layout">
            <h5 class="u-custom-font u-heading-font u-text u-text-body-alt-color u-text-3">виртуальная экскурсия по карбоновому полигону</h5>
            <div class="u-border-1 u-border-white u-line u-line-horizontal u-line-3"></div>
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Harvard%20University%2011%20Divinity%20Avenue%20%20Cambridge" class="u-border-1 u-border-palette-1-base u-link u-no-underline u-text-body-alt-color u-link-3" target="_blank">view map</a><span class="u-icon u-icon-circle u-text-grey-40 u-icon-3"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="undefined"><use xlink:href="#svg-d6fe"></use></svg><svg class="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-d6fe" style="enable-background:new 0 0 512 512;"><g><g><path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"></path>
</g>
</g></svg></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<footer class="u-clearfix u-footer u-grey-80" id="sec-6646"><div class="u-clearfix u-sheet u-sheet-1">
    <div class="u-container-style u-group u-group-1">
      <div class="u-container-layout u-valign-middle u-container-layout-1">
        <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div class="menu-collapse" style="text-transform: uppercase;">
            <a class="u-btn-text u-button-style u-nav-link u-text-grey-40" href="#">
              <svg class="u-svg-link" viewBox="0 0 24 24"><use xlink:href="#menu-hamburger"></use></svg>
              <svg class="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
</g></svg>
            </a>
          </div>
          <div class="u-nav-container">
            <ul class="u-nav u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-btn-text u-button-style u-nav-link u-text-grey-40" href="Home-1.html">Home 1</a>
</li></ul>
          </div>
          <div class="u-nav-container-collapse">
            <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-btn-text u-button-style u-nav-link" href="Home-1.html">Home 1</a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
        <div class="u-social-icons u-spacing-10 u-social-icons-1">
          <a class="u-social-url" target="_blank" href=""><span class="u-icon u-icon-circle u-social-facebook u-social-icon u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2" style="undefined"><use xlink:href="#svg-df27"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" enable-background="new 0 0 112.2 112.2" xml:space="preserve" id="svg-df27" class="u-svg-content"><path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path></svg></span>
          </a>
          <a class="u-social-url" target="_blank" href=""><span class="u-icon u-icon-circle u-social-icon u-social-twitter u-icon-2"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2" style="undefined"><use xlink:href="#svg-c224"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" enable-background="new 0 0 112.2 112.2" xml:space="preserve" id="svg-c224" class="u-svg-content"><path d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"></path></svg></span>
          </a>
          <a class="u-social-url" target="_blank" href=""><span class="u-icon u-icon-circle u-social-icon u-social-instagram u-icon-3"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2" style="undefined"><use xlink:href="#svg-f552"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" enable-background="new 0 0 112.2 112.2" xml:space="preserve" id="svg-f552" class="u-svg-content"><path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path><path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path><path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path></svg></span>
          </a>
          <a class="u-social-url" target="_blank" href=""><span class="u-icon u-icon-circle u-social-icon u-social-linkedin u-icon-4"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2" style="undefined"><use xlink:href="#svg-9bea"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" enable-background="new 0 0 112.2 112.2" xml:space="preserve" id="svg-9bea" class="u-svg-content"><path d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9L24.1,30.9c-6.6,0-10.8-4.5-10.8-10.1c0-5.8,4.3-10.1,10.9-10.1 S34.9,15,35.1,20.8C35.1,26.4,30.8,30.9,24.1,30.9z M103.3,96.8H84.1v-31c0-7.8-2.7-13.1-9.8-13.1c-5.3,0-8.5,3.6-9.9,7.1 c-0.6,1.3-0.6,3-0.6,4.8V97H44.5c0,0,0.3-52.6,0-58h19.3v8.2c2.6-3.9,7.2-9.6,17.4-9.6c12.7,0,22.2,8.4,22.2,26.1V96.8z"></path></svg></span>
          </a>
          <a class="u-social-url" target="_blank" href=""><span class="u-icon u-icon-circle u-social-google u-social-icon u-icon-5"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2" style="undefined"><use xlink:href="#svg-d926"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" enable-background="new 0 0 112.2 112.2" xml:space="preserve" id="svg-d926" class="u-svg-content"><path d="M62.2,81.6c-8.6,11.2-24.6,14.4-37.6,10C10.9,87,0.8,73.2,1,58.5c-0.8-18,15.2-34.6,33.1-34.9 c9.2-0.8,18.2,2.7,25,8.6c-2.9,3.1-5.7,6.2-8.9,9.2c-6.2-3.8-13.5-6.5-20.6-4C18.1,40.7,11,54.2,15.4,65.6 c3.5,11.8,17.8,18.3,29.2,13.2c5.8-2.1,9.7-7.4,11.3-13.2c-6.6-0.1-13.2,0-20.1-0.3c0-3.9,0-7.9,0-11.9c11.2,0,22.2,0,33.3,0 C69.9,63.4,68.3,73.9,62.2,81.6z M110.9,63.7c-3.4,0-6.6,0-10,0c0,3.4,0,6.6,0,10c-3.4,0-6.6,0-10,0c0-3.4,0-6.6,0-10 c-3.4,0-6.6,0-10,0c0-3.4,0-6.6,0-10c3.4,0,6.6,0,10,0c0-3.4,0-6.6,0.1-10c3.4,0,6.6,0,10,0c0,3.4,0,6.6,0,10c3.4,0,6.6,0,10,0 C110.9,56.9,110.9,60.3,110.9,63.7z"></path></svg></span>
          </a>
        </div>
      </div>
    </div>
  </div></footer>
<section class="u-backlink u-clearfix u-grey-80">
  <a class="u-link" href="https://nicepage.com/website-templates" target="_blank">
    <span>Website Templates</span>
  </a>
  <p class="u-text">
    <span>created with</span>
  </p>
  <a class="u-link" href="" target="_blank">
    <span>Website Builder Software</span>
  </a>. 
</section>
`