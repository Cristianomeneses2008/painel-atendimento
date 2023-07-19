<template>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <meta http-equiv="refresh" content="20; http://localhost:5173/"> -->
  <main>
    <div style="overflow:auto">
      <div class="principal">
        <header>
          <p>
            <img src="../assets/logo.png" alt="">
          </p>
        </header>
        <section>
          <p>
            <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
              delay: 2500,//10000
              disableOnInteraction: false,
            }" :pagination="{
  clickable: true,
}" :navigation="false" :modules="modules" @autoplayTimeLeft="onAutoplayTimeLeft">
              <swiper-slide v-for="(img, index) in slides.img1" :key="index" :data-swiper-autoplay="img.autoplay">
                <img :src="img.img" :alt="img.img">
              </swiper-slide>
              <swiper-slide v-for="(img, index) in slides.img2" :key="index" :data-swiper-autoplay="img.autoplay">
                <img :src="img.img" :alt="img.img">
              </swiper-slide>
              <swiper-slide v-for="(img, index) in slides.img3" :key="index" :data-swiper-autoplay="img.autoplay">
                <img :src="img.img" :alt="img.img">
              </swiper-slide>
              <swiper-slide v-for="(img, index) in slides.img4" :key="index" :data-swiper-autoplay="img.autoplay">
                <img :src="img.img" :alt="img.img">
              </swiper-slide>
              <swiper-slide v-for="(vid, index) in sliders.video1" :key="index" :data-swiper-autoplay="vid.duration">
                <video :id="`${vid.id}`" type="mp4" muted :src="`${vid.video}`" autoplay="true"></video>
              </swiper-slide>

              <template #container-end>
                <div class="autoplay-progress">
                  <span ref="progressContent"></span>
                </div>
              </template>
            </swiper>

          </p>
        </section>
        <aside>

          <p>
            <label class="input-label">RG PACIENTE</label>
            <label class="text-label">1234567</label>
          </p>
          <p>
            <label class="input-label">MÉDICO</label>
            <label class="text-label">José da Silva Oliveira</label>
          </p>
          <p>
            <label class="input-label">SALA</label>
            <label class="text-label">10</label>
          </p>
          <p>
            <label class="input-label">Guichê</label>
            <label class="text-label">03</label>
          </p>
        </aside>
        <footer>
          <div class="parte1">

            <div class="painelFooter">
              <div class="paineldadosFooter">
                <div class="text-footer">
                  <label class="text-label-footer">RG</label>
                  <label class="input-label-footer">7894561</label>
                </div>
              
                <div class="text-footer">
                  <label class="text-label-footer">Sala</label>
                  <label class="input-label-footer">2</label>
                </div>
                  <div class="text-footer">
                  <label class="text-label-footer">Guichê</label>
                  <label class="input-label-footer">12</label>
                </div>
              </div>
              <div class="paineldadosFooter">
                <div class="text-footer">
                  <label class="text-label-footer">RG</label>
                  <label class="input-label-footer">7894561</label>
                </div>
              
                <div class="text-footer">
                  <label class="text-label-footer">Sala</label>
                  <label class="input-label-footer">2</label>
                </div>
                  <div class="text-footer">
                  <label class="text-label-footer">Guichê</label>
                  <label class="input-label-footer">12</label>
                </div>
              </div>
              <div class="paineldadosFooter">
                <div class="text-footer">
                  <label class="text-label-footer">RG</label>
                  <label class="input-label-footer">7894561</label>
                </div>
              
                <div class="text-footer">
                  <label class="text-label-footer">Sala</label>
                  <label class="input-label-footer">2</label>
                </div>
                  <div class="text-footer">
                  <label class="text-label-footer">Guichê</label>
                  <label class="input-label-footer">12</label>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import PainelBody from "../components/painel/PainelBody.vue";
import PainelNav from "../components/painel/PainelNav.vue";
import PainelFooter from "../components/painel/PainelFooter.vue";
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {

  data() {
    return {
      slides: {
        "img1": [
          {
            "id": 1,
            "duration": "2500",
            "autoplay": {
              delay: 2500,//10000
              disableOnInteraction: false,
            },
            "title": "title1",
            "img": "https://picsum.photos/id/230/600/300"
          }
        ],
        "img2": [
          {
            "id": 2,
            "duration": "2500",
            "autoplay": {
              delay: 2500,//10000
              disableOnInteraction: false,
            },
            "title": "title2",
            "img": "https://picsum.photos/id/231/600/300"
          }
        ],
        "img3": [
          {
            "id": 3,
            "duration": "2500",
            "autoplay": {
              delay: 2500,//10000
              disableOnInteraction: false,
            },
            "title": "title3",
            "img": "https://picsum.photos/id/232/600/300"
          }
        ],
        "img4": [
          {
            "id": 4,
            "duration": "2500",
            "autoplay": {
              delay: 2500,//10000
              disableOnInteraction: false,
            },
            "title": "title4",
            "img": "https://picsum.photos/id/233/600/300"
          }
        ]
      },
      sliders: {
        "video1": [
          {
            "id": 1,
            "duration": "16000",
            "title": "Video1",
            "video": "https://into-the-program.com/uploads/sample_video01.mp4"
          },

        ]
      },
      //autoplay: {
      //        delay: 5000,
      //     }
      //videos: [
      //         'https://into-the-program.com/uploads/sample_video01.mp4',
      //        'https://into-the-program.com/uploads/sample_video02.mp4',
      //         'https://into-the-program.com/uploads/sample_video03.mp4',
      // ],

    }
  },

  setup() {
    //const progressCircle = ref(null);
    //const progressContent = ref(null);
    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
      // progressCircle.value.style.setProperty('--progress', 1 - progress);
      //  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      //progressCircle,
      //progressContent,
      modules: [Autoplay, Pagination, Navigation],
    };
  },

  name: 'Painel',
  components: {
    PainelBody,
    PainelNav,
    PainelFooter,
    Swiper,
    SwiperSlide,
  }
};

</script>

<style scoped>
.app {
  display: flex;
}

.carousel {
  position: relative;
  overflow: hidden;
  height: 400px;
  text-align: center;

}

.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #FFF;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}

.btn:hover {
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn-next {
  top: 50%;
  right: 0;
}

.btn-prev {
  top: 50%;
  left: 0;
}

.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.carousel-slider img {
  width: 100%;
  height: 100%;
}


body,
p {
  padding: 0;
  margin: 5px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-align: center;
  background-color: #e5e5e5;
}

.principal {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 75% 25%;
  /*grid-template-rows: 100px 500px 200px;*/
  grid-template-areas: "cabecalho cabecalho"
    "secao barra-lateral"
    "rodape rodape";
  border-collapse: collapse;
  justify-content: center;
}

header {
  grid-area: cabecalho;
}


section {
  grid-area: secao;
  font-size: 25px;
}

aside {
  grid-area: barra-lateral;
  font-size: 25px;
  
}

footer {
  grid-area: rodape;
  display: flex;
  justify-content: space-evenly;
}

.parte1 {
  width: 100%;
  font-size: 10px;
}

/*

 .parte2 {
    width: 25%;
    font-size: 30px;
 }*/

/*Desktop*/
@media(max-width: 992px) {
  .principal {
    grid-template-columns: 100%;
    grid-template-areas: "cabecalho" "secao" "barra-lateral" "rodape";
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between;
  }

  .footer1,
  .footer2,
  .footer3 {
    width: 25%;
  }

  .parte1,
  .parte2 {
    margin: 0;
    border: solid 1px #fff;
    width: 49%;
  }

  .parte2 {
    width: 100%;
    order: -1;
  }
}


/*Mobile*/
@media(max-width: 768px) {
  body {
    margin: 0 15px;
  }

  .principal,
  .parte1,
  .parte2 {
    width: 100%;
  }

  .parte2 {
    order: initial;
  }
}

.input-label {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  font-size: 26px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

.text-label {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 14.5px;
  display: flex;
  font-weight: normal;
  align-items: center;
  justify-content: center;
}


/*Configurações do footer */
.text-footer {
  margin: 10px;
  text-align: center;
}

.painelFooter {
  display: flex;
  background-color: #e5e5e5;
}

.paineldadosFooter {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  display: flex;
  text-align: justify;
  justify-content: space-around;
  font-weight: bold;
  border: 3px solid #00152A;
  width: 34%;

}

.input-label-footer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: normal;
  color: #00152A;
}

.text-label-footer {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin-bottom: 13.5px;
  font-weight: bold;
  color: #00152A;
}
</style>
