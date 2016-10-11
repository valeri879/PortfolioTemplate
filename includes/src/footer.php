        <div class="clearfix"></div>
        <footer>



            <div class="container input-container" data-aos-duration="1500" data-aos="zoom-in-down">
                <form action="">
                    <div class="row">
                        <input class="input-text" id="name" type="text" placeholder="your name">
                    </div>
                    <div class="row">
                        <input class="input-text" id="email" type="email" placeholder="email">
                    </div>
                    <div class="row">
                        <label for="message">message</label>
                        <textarea class="input-text input-textarea" id="message" placeholder=""></textarea>
                    </div>
                    <div class="row">
                        <button class="button active">send</button>
                    </div>
                </form>
            </div>
            <div class="line">
                <div class="scroll-top">
                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                </div>
            </div>
            <div class="container">
                <div class="col-3 footer-info contact-col" data-aos-duration="1500" data-aos="zoom-in-right">
                    <h4>contact-info</h4>
                    <p>231 Madison Loop, Vancouver, South Dakota</p>
                    <p>+1 234-567-8900 </p>
                    <p>17520, USA</p>
                </div>
                <div class="col-3 footer-info contact-col" data-aos="zoom-in-down">
                    <h4>LET'S SOCIALIZE</h4>
                    <p>
                        <a target="_blank" href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-pinterest-square" aria-hidden="true"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
                    </p>
                    <p>
                        <a target="_blank" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                        <a target="_blank" href="#"><i class="fa fa-behance-square" aria-hidden="true"></i></a>
                    </p>
                </div>
                <div class="col-3 footer-info contact-col" data-aos-duration="1500" data-aos="zoom-in-left">
                    <h4>gallery</h4>
                    <div class="thumbs">
                        <div class="row">
                            <a href="#gallery"><img src="assets/img/thumbs/1.jpg" alt=""></a>
                            <a href="#gallery"><img src="assets/img/thumbs/2.jpg" alt=""></a>
                        </div>
                        <div class="row">
                            <a href="#gallery"><img src="assets/img/thumbs/3.jpg" alt=""></a>
                            <a href="#gallery"><img src="assets/img/thumbs/4.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                &copy; all right reserved | created by <a target="_blank" href="https://github.com/valeri879">val</a>
            </div>

            <script>
                function initMap() {
                    var uluru = {lat: -25.363, lng: 131.044};
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                        center: uluru
                    });
                    var marker = new google.maps.Marker({
                        position: uluru,
                        map: map
                    });
                }
            </script>
            <script async defer
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYrzbIh8By5wy11oVwDLsdBwpOU1qLaZU&callback=initMap">
            </script>
            <script src="assets/js/build/plugins/aos.min.js"></script>
            <script src="assets/js/build/libs/jquery.min.js"></script>
            <script src="assets/js/build/plugins/parallax.min.js"></script>
            <script src="assets/js/build/plugins/swiper.min.js"></script>
            <script src="assets/js/build/scripts.min.js"></script>


        </footer>
    </body>
</html> 