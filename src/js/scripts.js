const Vue = require('vue')

loadJSON('js/data.json');

function loadJSON(file) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                var data = JSON.parse(xobj.responseText);

                const app = new Vue({
                  el: "#app",
                  data: data,
                  template: `
                  <div class="mw-wrapper" >
                    <div class="mw-wrapper__inner">
                      <header class="mw-header">
                        <h1 class="mw-heaer__title">MI-Koeln</h1>
                        <p class="mw-header__slogan">am Campus Gummersbach</p>
                        <figure class="mw-profile">
                          <img class="mw-profile__image" :src="profileImage" alt="Image" />
                          <figcaption class="mw-profile__info">
                            <span class="mw-profile__name">{{name}}</span>
                            <span class="mw-profile__location">{{location.city}} // {{location.country}}</span>
                          </figcaption>
                        </figure>
                        <div class="mw-exLinks">
                          <a class="mw-link mw-link--colorFade mw-exLinks__link" :href="github.url" target="_blank"><i class="fa" :class="github.icon" aria-hidden="true"></i></a></li>
                          <a v-for="portal in socialMedia" class="mw-link mw-link--colorFade mw-exLinks__link" :href="portal.url" target="_blank"><i class="fa" :class="portal.icon" aria-hidden="true"></i></a></li>
                        </div>
                      </header>
                      <main class="mw-main">
                        <section class="mw-contact">
                          <h2 class="mw-site__title">Über mich</h2>
                          <p class="mw-text">{{about}}</p>
                          <h3 class="mw-h3">Alter:</h3>
                          <p class="mw-text">{{age}}</p>
                          <h3 class="mw-h3">Webentwicklungserfahrungen:</h3>
                          <p class="mw-text">{{experiences}}</p>
                          <h3 class="mw-h3">Warum ich Medieninformatik studiere:</h3>
                          <p class="mw-text">{{reason}}</p>
                          <a :href="github.url" target="_blank" class="mw-button"><label class="mw-button__inner">GitHub-Profil aufrufen <i class="fa fa-arrow-right" aria-hidden="true"></i></label></a>
                        </section>
                      </main>
                    </div>
                    <div class="mw-openFooterOnMobile">
                      <!-- <a href="#imprintData" class="mw-link" id="imprintLink"/>Imprint</a> -->
                    </div>
                    <div class="mw-footer__exit" id="footerExit"><a href="javascript:;" class="mw-link mw-link--colorFade"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a></div>

                    <footer id="footer" class="mw-footer">
                      <div class="mw-footer__impressum">

                        <div class="mw-impressumData"></div>

                      </div>
                    </footer>
                  </div>
                  `
                });

            }
        };
        xobj.send(null);
}



module.exports = app;

//require ('./actions.js');
