<template>
  <div class="v-footer">
    <VMainPagePlus></VMainPagePlus>
    <footer>
      <div class="footer_box_img">
        <div class="wrap_footbox_img container">
          <div class="box_img_left">
            <div><img src="../assets/img/Layer_40.png" alt="foto" /></div>
            <p class="par_box_img_left">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum a. Aliquam condimentum mattis neque sed
              pretium”
            </p>
          </div>
          <!-- <div class="box_img_right">
            <p class="box_img_right_par">
              <span class="box_img_right_par_span">Subscribe</span> <br />
              FOR OUR NEWLETTER AND PROMOTION
            </p>
            <form action="#" class="footer__mail">
              <input
                class="inptex_mail"
                type="email"
                id="mail"
                placeholder="Enter Your Email"
                aria-label="email"
                required=""
              />
              <input type="submit" value="Subscribe" class="button_footer" />
            </form>
          </div> -->
        </div>
      </div>
      <div class="foot_icon">
        <div class="wrap_foot_icon container">
          <div class="foot_icon_par">© 2017 Brand All Rights Reserved.</div>
          <div class="wrap_icon">
            <ul class="icon">
              <li class="icon_mini">
                <a href="https://ru-ru.facebook.com/">
                  <div class="icon_cont">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li class="icon_mini">
                <a href="https://twitter.com/?lang=ru">
                  <div class="icon_cont">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li class="icon_mini">
                <a href="https://www.instagram.com/?hl=ru">
                  <div class="icon_cont">
                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li class="icon_mini">
                <a href="https://www.pinterest.ru/">
                  <div class="icon_cont">
                    <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
              <li class="icon_mini">
                <a href="	plus.google.com">
                  <div class="icon_cont">
                    <i class="fab fa-google-plus-g" aria-hidden="true"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import VMainPagePlus from "./v-main-page-plus";
export default {
  components: { VMainPagePlus },
  name: "v-footer",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
footer {
  flex: 0 0 auto;
  width: 100%;
}

.footer_box_img {
  height: 448px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
}

.box_img_left {
  text-align: center;
  margin-top: 111px;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.wrap_box_img,
.wrap_footbox_img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footer__mail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  margin-top: 35px;
}

.inptex_mail {
  height: 46px;
  width: 310px;
  border-bottom-left-radius: 23px;
  border-top-left-radius: 23px;
  background-color: #e1e1e1;
  letter-spacing: 0.35px;
  color: rgba(34, 34, 36, 0.67);
  padding-left: 28px;
}

.button_footer {
  width: 104px;
  height: 46px;
  padding: 0 20px;
  background-color: #f16d7f;
  border-bottom-right-radius: 23px;
  border-top-right-radius: 23px;
  border: #f16d7f 1px solid;
  letter-spacing: 0.35px;
  text-align: center;
  color: #ffffff;
  margin-left: -3px;
}

.button_footer:active {
  background-color: white;
  color: #f16d7f;
}

#mail {
  background-color: #e1e1e1;
  border: 0;
}

.par_box_img_left {
  width: 386px;
  font-size: 16px;
  font-style: italic;
  line-height: 1.63;
  letter-spacing: 0.4px;
  text-align: center;
  color: #222224;
  margin-top: 25px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.par_box_do {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.17;
  letter-spacing: 0.3px;
  color: #222224;
}

.box_img_right_par {
  line-height: 1.71;
  letter-spacing: 0.35px;
  text-align: center;
  color: #222224;
  text-transform: uppercase;
}

.box_img_right_par_span {
  font-size: 24px;
  line-height: 2.25;
  letter-spacing: 0.6px;
}

.line {
  height: 438px;
  width: 1px;
  background-color: #ffffff;
}

.box_img_right {
  padding-top: 111px;
}

.wrap_fot_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 123px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-bottom: 89px;
}

.text_footer {
  width: 427px;
  margin-right: 64px;
}

.text_par_footer {
  margin-top: 29px;
  font-weight: 300;
  color: #898989;
  text-align: left;
  line-height: 1.71;
  letter-spacing: 0.35px;
}

.menu_footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 600px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.text_foot_mini {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.44;
  letter-spacing: 0.45px;
  color: #f16d7f;
}

.menu_foot_ul {
  list-style-type: none;
  padding-top: 42px;
  text-decoration: none;
}

.menu_foot_li a {
  text-decoration: none;
  font-size: 16px;
  line-height: 2.63;
  letter-spacing: 0.4px;
  color: #898989;
}

.foot_icon {
  width: 100%;
  height: 79px;
  background-color: #222222;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.wrap_foot_icon {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: auto;
  align-items: center;
}

.foot_icon_par {
  font-size: 16px;
  line-height: 2.63;
  letter-spacing: 0.4px;
  color: #fbfbfb;
}

.icon {
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.icon_mini {
  display: inline-block;
}

.icon_cont {
  width: 32px;
  height: 32px;
  margin-left: 8px;
  padding: 8px 12px 8px 11px;
  background-color: #fbfbfb;
  -webkit-transition: 1s;
  transition: 1s;
}

.icon_cont i {
  color: #000000;
}

.icon_cont:hover {
  background-color: #f16d7f;
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  -webkit-box-shadow: #f16d7f 0 0 15px;
  box-shadow: #f16d7f 0 0 15px;
}

.icon_cont:hover i {
  color: #ffffff;
}
</style>