<script>
$(document).ready(function () {
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


import { toRefs, ref, onBeforeMount ,onMounted, reactive } from 'vue'
import hubspotform from '../src/components/HubspotForm.vue'
import VueWriter from 'vue-writer'
import AOS from "aos";
import 'aos/dist/aos.css'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);



export default {
    components: { VueWriter, hubspotform, Swiper, SwiperSlide },
    setup(props) {
        const isMenu = ref(false)
        const isModel = ref(false)
        const selected = ref(5)
        const isContact = ref(false)
        const emailValid = ref(false)
        const email = reactive(null)
        const appurl = ref(import.meta.env.VITE_APP_URL)
        const imgArr = ["https://az777500.vo.msecnd.net/images/3554/rose-wood.jpg", "https://az777500.vo.msecnd.net/images/3554/frame-10.png", "https://az777500.vo.msecnd.net/images/3554/frame-1.png", "https://az777500.vo.msecnd.net/images/3554/frame-2.png", "https://az777500.vo.msecnd.net/images/3554/frame-4.png", "https://az777500.vo.msecnd.net/images/3554/frame-5.png", "https://az777500.vo.msecnd.net/images/3554/frame-6.png", "https://az777500.vo.msecnd.net/images/3554/frame-7.png", "https://az777500.vo.msecnd.net/images/3554/frame-8.png", "https://az777500.vo.msecnd.net/images/3554/frame-9.png" ]
        let emailValidation = (email) => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email?.toLowerCase())) {
                emailValid.value = false;                
                // window.location.href = `${import.meta.env.VITE_APP_URL}signup?email=${email?.toLowerCase()}`;
            } else {
                emailValid.value = true;
            }
            return emailValid.value
        }
        onMounted(() => {
            AOS.init();
        });

        return {
            appurl,
            emailValidation,
            emailValid,
            email,
            imgArr,
            isMenu,
            selected,
            isModel,
            isContact,
            showMenu() {
                isMenu.value = !isMenu.value
            },
            select(i) {
                selected.value = i;
            },
            scrollToDiv(div) {
                let element = document.getElementById(div);
                window.scrollTo(0, element.offsetTop - document.getElementById(div).offsetHeight)
            },
            showModel() {
                isModel.value = true
            }
        }
    }
}
</script>

<template>
    <!-- <div class="center" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
  <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>4</h3></div>
  <div><h3>5</h3></div>
  <div><h3>6</h3></div>
</div> -->
    <div class="h-screen font-sans" :class="isModel || isContact ? 'overflow-hidden' : ''">
        <nav class="flex items-center justify-between flex-wrap bg-white px-6 py-4">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <!-- <img class="hidden lg:block logoClass" src="./assets/images/new-logo-sc.svg" alt="Flyer Club"> -->
                <img class="lg:hidden" src="./assets/images/32.png" alt="Flyer Club">
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-purple border-purple" @click="showMenu">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="w-full block lg:hidden lg:items-center lg:w-auto" v-show="isMenu">
                <div class="text-sm lg:flex-grow text-right font-bold mr-4">
                    <button @click="scrollToDiv('featuresDiv')"
                        class="block mt-4 lg:inline-block lg:mt-0 text-textGray font-weight hover:text-purple mr-4">
                        Features
                    </button>
                    <button @click="scrollToDiv('priceDiv')"
                        class="block text-center mt-4 lg:inline-block lg:mt-0 text-textGray hover:text-purple mr-4">
                        Plan
                    </button>
                     <button class="block mt-4 lg:inline-block lg:mt-0 font-weight text-textGray hover:text-purple mr-4"
                        @click="isContact = true">
                        Contact Us
                    </button>
                    <button @click="showModel"
                        class="block text-center mt-4 lg:inline-block lg:mt-0 text-textGray hover:text-purple mr-4">
                        Sign Up
                    </button>
                    <!-- <a @click="showModel"
                        class="block text-center mt-4 lg:inline-block lg:mt-0 text-textGray hover:text-purple mr-4">
                        Sign In
                    </a> -->
                </div>
            </div>
            <div class="w-full block xs:hidden flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow text-right font-bold mr-4">
                    <button @click="scrollToDiv('featuresDiv')"
                        class="block mt-4 lg:inline-block lg:mt-0 textGray font-weight hover:text-purple mr-4">
                        Features
                    </button>
                    <button href="" @click="scrollToDiv('priceDiv')"
                        class="block text-center mt-4 lg:inline-block lg:mt-0 textGray hover:text-purple mr-4">
                        Plan
                    </button>
                    <button class="block mt-4 lg:inline-block lg:mt-0 font-weight textGray hover:text-purple mr-4"
                        @click="isContact = true">
                        Contact Us
                    </button>
                    <button @click="showModel" class="block lg:inline-block px-5 py-2 text-white shadow-button
                   bg-gradient-to-r from-purpleTo via-purpleFrom to-purpleTo rounded-3xl mr-4 font-bold">Sign
                        Up
                        </button>
                    <!-- <a target="_blank" title="Flyer Club Login" class="block lg:inline-block px-5 py-2 text-white 
                   bg-gradient-to-r from-[#ffb72a] via-[#ffb72a] shadow-orange-button to-[#ffdd99] rounded-3xl">Sign
                    In</a> -->
                </div>
            </div>
        </nav>
        <div class="bg-gray lg:h-[35%] xs:h-auto xs:px-[20px] xs:py-[30px] lg:py-[40px]">
            <div class="text-center mx-auto justify-center grid content-center">
                <h1 class="xl:text-2xl md:text-2xl mt-7 font-light text-textGray">
                    Never Struggle With
                    <span class="text-purple font-bold">Flyers</span>
                    <!-- <vue-writer class="text-purple font-bold inline-block" :array="['LineSheets', 'Catalogs']" /> -->
                    Again
                </h1>
                <div>
                    <div class="pt-8 xl:text-7xl xs:text-2xl animate inline-block font-bold text-[#333]">
                        <vue-writer :array="['Design..', 'Share..', 'Sell..']" />
                        <!-- <vue-writer :array="['Design.. Share.. Sell']" /> -->
                    </div>
                    <h2 class="text-sm text-textGray xs:pt-2 lg:pt-5">Beautiful Flyers in a Few Clicks!</h2>
                    <div class="pt-8 text-md sm:w-auto lg:w-[600px] sm:px-4 lg:px-0 mx-auto text-textGray">
                        <strong> Flyer Club </strong> is an easy-to-use automatic catalog maker for sales reps to
                        create catalogs on the fly, without depending on a designer.
                    </div>
                    <button class="px-5 py-3 ml-2 xs:mt-[0.3rem] lg:mt-6 h-[50px] text-white xs:w-[auto] lg:w-[15%] shadow-button absolute xs:left-[30%] lg:left-[40%]
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl"
                        @click="showModel">Try For Free</button>
                </div>
            </div>
        </div>

        <!--carousel-->


        <div
            class="p-3 bg-gray h-[63%] bannerNew hidden lg:block align-bottom bg-contain bg-no-repeat subpixel-antialiased">
        </div>
        <div class="xs:w-[90%] lg:w-9/12 2xl:w-7/12 mx-auto">
            <div class="xs:my-[3rem] lg:my-[3rem] xs:w-full lg:w-3/5 mx-auto text-center">
                <h3 class="xs:text-xl lg:text-6xl font-black text-header" data-aos="fade-right" data-aos-duration="800">
                    Just
                    <span class="text-purple"> Drag & Drop! </span>
                </h3>
                <p class="text-textGray xs:text-sm lg:text-base mt-[1rem]" data-aos="fade-left" data-aos-duration="800">
                    Design, share and sell catalogs in a few clicks without a professional designer. Creating catalogs
                    to driving sales - get all in one place with Flyer Club.
                </p>
            </div>
            <div class="grid grid-cols-3">
                <div data-aos="fade-down"
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
                    <h4 class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                        A <span class="bg-gradient-to-r from-textBackground to-white"> No-Design</span> Tool
                    </h4>
                    <p class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                        Skip the high fees of designers & the long wait to get high-quality catalogs - because
                        Flyer Club gives you both! transform sales by making flyers with lightning speed, on the
                        fly!
                    </p>
                </div>
                <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-0 lg:col-span-2 hidden lg:block">
                    <div class="h-full grid content-center justify-items-end">
                        <img data-aos="fade-left" src="./assets/images/grid/nodesigner.png" class="align-middle"
                            alt="No Design Tool">
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="800"
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
                    <div class="h-full grid content-center justify-items-start">
                        <img src="./assets/images/grid/newfast.png" alt="Faster Turnarounds">
                    </div>
                </div>
                <div
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
                    <h4 data-aos="fade-down" data-aos-duration="800"
                        class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                        <span class="bg-gradient-to-r from-textBackground to-white">
                            Faster
                        </span>
                        Turnarounds
                    </h4>
                    <p class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                        Never leave your prospects waiting for a revised quote with Flyer Club. Edit catalogs on
                        the fly in a few clicks and share them quickly to achieve faster closures and improve brand
                        reputation.
                    </p>
                </div>
                <div
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
                    <h4 data-aos="fade-down" data-aos-duration="800"
                        class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                        Catalog Sharing -
                        <span class="bg-gradient-to-r from-textBackground to-white">
                            Simplified
                        </span>
                    </h4>
                    <p data-aos="fade-right" data-aos-duration="800"
                        class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                        Flyer Club enables sales reps to share catalogs as PDFs or web pages as soon as they create
                        it without having to visit them on the ground. This helps save time and expedite sales.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="800"
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
                    <div class="h-full grid content-center justify-items-end">
                        <img src="./assets/images/grid/share.png" alt="Catalog Sharing - Simplified">
                    </div>
                </div>
                <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block text-center">
                    <div class="h-full grid content-center justify-items-start">
                        <img data-aos="fade-right" class="h-[500px]" src="./assets/images/grid/ordermanagement.png"
                            alt="In-built Order Management">
                    </div>
                </div>
                <div data-aos="fade-down"
                    class=" xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
                    <h4 class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                        In-built Order
                        <span class="bg-gradient-to-r from-textBackground to-white"> Management</span>
                    </h4>
                    <p class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                        By sharing catalogs as unique web pages, sales reps can get prospects to order directly from the
                        catalog page without visiting the eCommerce portal, thus fast-tracking closures.
                    </p>
                </div>



                <div
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
                    <h4 data-aos="fade-down" data-aos-duration="800"
                        class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                        <span class="bg-gradient-to-r from-textBackground to-white">Save
                        </span>

                        More
                        , Sell More
                    </h4>
                    <p data-aos="fade-left" data-aos-duration="800"
                        class="pt-3 xs:text-sm lg:text-base  text-textGray xs:mt-1 lg:mt-4">
                        With sales reps creating catalogs on their own, you can save the budget for graphic designers
                        for other things. And by sharing catalogs directly with prospects, it’s possible to close deals
                        faster and boost revenue.
                    </p>
                </div>
                <div data-aos="fade-right" data-aos-duration="800"
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
                    <div class="h-full grid content-center justify-items-end">
                        <img class="h-[500px]" src="./assets/images/grid/save.png" alt="Save More, Sell     re">
                    </div>
                </div>
                <div class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] col-span-2 hidden lg:block">
                    <div class="h-full grid content-center justify-items-start">
                        <img data-aos="fade-left" data-aos-duration="800" src="./assets/images/grid/integration.png"
                            alt="Easy Integration">
                    </div>
                </div>
                <div
                    class="xs:h-auto lg:h-[100vh] 2xl:h-[65vh] xs:col-span-3 lg:col-span-1 grid xs:content-start lg:content-center p-3 xs:text-center lg:text-left">
                    <h4 data-aos="fade-down" data-aos-duration="800"
                        class="text-titleHeader xs:text-xl lg:text-5xl lg:leading-snug font-bold">
                        <span class="bg-gradient-to-r from-textBackground to-white">
                            Easy
                        </span> Integration
                    </h4>
                    <p data-aos="fade-right" data-aos-duration="800"
                        class="pt-3 xs:text-sm lg:text-base text-textGray xs:mt-1 lg:mt-4">
                        Flyer Club is tailor-made for any business! Seamlessly integrate the tool with PIM, ERP &
                        eCommerce systems to provide end-to-end visibility of sales and much more!
                    </p>
                </div>
            </div>
        </div>

         <!-- carousel -->
        <swiper class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :autoplay="true"
            :loop="true" :coverflowEffect="{
                rotate: 30,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true,
            }">
            <swiper-slide v-for="i in imgArr" :key="i" data-swiper-autoplay="2000">
                <img :src="i" :alt="i.split('/').pop().split('.')[0]" style="width:100%;height:100%" />
            </swiper-slide>
        </swiper>
        <!--end carousel-->
        <!--try free cta-->
        <div class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo text-center"><button @click="showModel"
                            class="bg-white font-bold text-purpleFrom 
                          border rounded-3xl border-white text-xl mt-20 px-10 py-3 mr-3 shadow-[0 12px 25px rgba(85,41,198,1)]">
                            Try For Free
                        </button></div>
        <!--end cta-->
        <div class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo xs:py-10 lg:py-20">
            <div class="w-9/12 mx-auto">
                <div class="grid xs:grid-cols-1 lg:xs:grid-cols-4 gap-2 text-center">
                    <div class="xs:pt-2">
                        <h4 class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            150+
                        </h4>
                        <p class="text-md text-white">
                            Happy Customers
                        </p>
                    </div>
                    <div class="xs:pt-2">
                        <h4 class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            1200+
                        </h4>
                        <p class="text-md text-white">
                            Sales Representatives
                        </p>
                    </div>
                    <div class="xs:pt-2">
                        <h4 class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            11,000+
                        </h4>
                        <p class="text-md text-white">
                            flyers Created
                        </p>
                    </div>
                    <div class="xs:pt-2">
                        <h4 class="xs:text-xl lg:text-4xl font-extrabold text-white">
                            $10M+
                        </h4>
                        <p class="text-md text-white">
                            Sales Generated
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-statsBackground">
            <div class="lg:pt-16 xs:py-5">
                <p class="uppercase text-xs text-textGray text-center">A BETTER WAY</p>
                <p class="xs:w-[90%] lg:w-[35%] mx-auto xs:text-xl lg:text-3xl text-header font-extrabold text-center">
                    Power-packed Features for a Hassle-free Experience</p>
            </div>
            <div class="lg:w-[90%] 2xl:w-[70%] mx-auto grid xs:grid-cols-1 lg:grid-cols-3 gap-2 pb-6">
                <div class="col-span-1 grid content-center">
                    <p :class="selected == 5 ? 'bg-white border-b-2 border-purpleFrom' : 'border-b border-border'"
                        class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                        @click="select(5)">
                        Alignments
                        <span :class="selected == 5 ? 'visible' : 'hidden'" class="py-3 text-sm text-textGray block">
                            Defined alignments and margins for impeccable consistence and UX!
                        </span>
                    </p>
                    <p id="featuresDiv"
                        :class="selected == 1 ? 'bg-white border-b-2 border-purpleFrom' : 'border-b border-border'"
                        class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                        @click="select(1)">
                        Extensive & Easy to Use
                        <span :class="selected == 1 ? 'visible' : 'hidden'" class="py-3 text-sm text-textGray block">
                            Features such as text and shapes to create stunning designs in a few clicks!
                        </span>
                    </p>
                    <p :class="selected == 2 ? 'bg-white border-b-2 border-purpleFrom' : 'border-b border-border'"
                        class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                        @click="select(2)">
                        Convert to Cart
                        <span :class="selected == 2 ? 'visible' : 'hidden'" class="py-3 text-sm text-textGray block">
                            Convert products in Flyers directly to cart items for checkout!
                        </span>
                    </p>
                    <p :class="selected == 3 ? 'bg-white border-b-2 border-purpleFrom' : 'border-b border-border'"
                        class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                        @click="select(3)">
                        Download PDF
                        <span :class="selected == 3 ? 'visible' : 'hidden'" class="py-3 text-sm text-textGray block">
                            Download the Flyers to share with prospects in a single click!
                        </span>
                    </p>
                    <p :class="selected == 4 ? 'bg-white border-b-2 border-purpleFrom' : 'border-b border-border'"
                        class="text-titleHeader text-md px-3 py-4 transition-all ease-out transition-medium cursor-pointer"
                        @click="select(4)">
                        Analytics
                        <span :class="selected == 4 ? 'visible' : 'hidden'" class="py-3 text-sm text-textGray block">
                            Detailed Analytics for improved visibility and better conversions!
                        </span>
                    </p>
                </div>
                <div class="col-span-2 lg:h-screen 2xl:h-[70vh] grid content-center justify-items-center">
                    <img class="animate-hinge" alt="Alignments | Flyer Club"
                        :class="selected == 1 ? 'visible' : 'hidden'" src="./assets/images/grid/texteasy.png">
                    <img class="text-right animate-hinge" :class="selected == 2 ? 'visible' : 'hidden'"
                        src="./assets/images/grid/convertcart.png" alt="Convert To Cart | Flyer Club">
                    <img class="text-right animate-hinge" :class="selected == 3 ? 'visible' : 'hidden'"
                        src="./assets/images/download.png" alt="Download | Flyer Club">
                    <img class="text-right animate-hinge" :class="selected == 4 ? 'visible' : 'hidden'"
                        src="./assets/images/grid/analytics.png" alt="Analytics | Flyer Club">
                    <img class="text-right animate-hinge" :class="selected == 5 ? 'visible' : 'hidden'"
                        src="./assets/images/grid/allignment.png" alt="Alignmentss">
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo xs:pb-10 lg:pb-24 xs:pt-10 lg:pt-20">
            <div class="w-9/12 mx-auto">
                <h4 class="xs:text-xl lg:text-3xl text-white font-extrabold text-center" data-aos="fade-right"
                    data-aos-duration="800">Catalog Management Redefined</h4>
                <p data-aos="fade-left" data-aos-duration="800"
                    class="lg:pt-3 xs:pt-3 pb-16 xs:text-sm lg:text-base xs:w-[90%] lg:w-6/12 mx-auto text-white text-center">
                    Flyer Club features an intuitive UX, powerful design tools, and drag & drop functionalities that
                    reduces the complex process of catalog management into 3 simple steps:
                </p>
                <div class="grid grid-cols-3 text-center gap-4">
                    <div class="xs:col-span-3 lg:col-span-1">
                        <span class="text-6xl text-white material-symbols-outlined">
                            widgets
                        </span>
                        <h4 class="pt-5 text-white text-2xl">Choose</h4>
                        <p class="pt-5 text-md text-white">
                            Choose a design template
                        </p>
                    </div>
                    <div class="xs:col-span-3 lg:col-span-1">
                        <span class="text-6xl text-white material-symbols-outlined">
                            drag_indicator
                        </span>
                        <h4 class="pt-5 text-white text-2xl">Design</h4>
                        <p class="pt-5 text-md text-white">
                            Drag & drop your products
                        </p>
                    </div>
                    <div class="xs:col-span-3 lg:col-span-1">
                        <span class="text-6xl text-white material-symbols-outlined">
                            share
                        </span>
                        <h4 class="pt-5 text-white text-2xl">Share</h4>
                        <p class="pt-5 text-md text-white">
                            Share with prospects
                        </p>
                    </div>
                    <div class="col-span-3">
                        <button @click="showModel"
                            class="bg-white font-bold text-purpleFrom 
                          border rounded-3xl border-white text-xl mt-20 px-10 py-3 mr-3 shadow-[0 12px 25px rgba(85,41,198,1)]">
                            Try For Free
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:pb-12 xs:pb-3">
            <p class="xs:pt-8 lg:pt-16 col-span-6 text-3xl text-header font-extrabold text-center" data-aos="fade-right"
                data-aos-duration="800">Costs Less than your Quarterly Coffee Subscription</p>
            <p data-aos="fade-right" data-aos-duration="800"
                class="xs:pb-8 lg:pb-16 pt-2 pb-8 xs:text-sm lg:text-base xs:w-[90%] md:[90%] lg:w-9/12 mx-auto text-textGray text-center">
                Flyer Club is super affordable with unique pricing packages to meet diverse business needs. Check
                them out below or simply ask for a
                <a href="#" class="text-purple hover:underline-offset-1"> Custom Quote</a>
            </p>
            <div
                class="xs:w-[90%] lg:w-5/6 mx-auto grid xs:grid-cols-1 lg:grid-cols-4 gap-2 content-center justify-center justify-items-center pt-10">
                <div class="h-[28rem] lg:w-60 xs:w-[90%] rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7">
                    <p class="text-md text-textGray">Free</p>
                    <p class="pt-3">
                        <span class="text-4xl text-header font-bold">$0</span>
                        <span class="text-sm light">/ Month</span>
                    </p>
                    <p class="text-textGray text-md pt-5">
                        Want to Try Flyer Club
                    </p>
                    <p class="text-textGray text-sm pt-5">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                        </span>
                        1 User
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                        </span>
                        10 SKU's limit
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                        </span>
                        Templates
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                        </span>
                        2 Flyers
                    </p>
                    <div class="text-left">
                        <button @click="showModel" class="px-5 py-2 ml-2 mt-5 w-full text-white shadow-button
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">Get
                            Started</button>
                    </div>
                </div>
                <div class="h-[28rem] lg:w-60 xs:w-[90%] rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7">
                    <p class="text-md text-textGray">Basic</p>
                    <p class="pt-3">
                        <span class="text-4xl text-header font-bold">$29</span>
                        <span class="text-sm light">/ Month</span>
                    </p>
                    <p class="text-textGray text-md pt-5">
                        Ideal for small businesses
                    </p>
                    <p class="text-textGray text-sm pt-5">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                        </span>
                        1 User
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                        </span>
                        1K SKU's limit
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                        </span>
                        Templates
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                        </span>
                        Unlimited Flyers
                    </p>
                    <div class="text-left">
                        <!-- <button class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo w-full hover:bg-white font-bold text-white hover:text-purple border border-purple hover:border-purple py-2 px-3 my-4"
                    @click="showModel">
                                Get Started
                    </button> -->
                        <button @click="showModel" class="px-5 py-2 ml-2 mt-5 w-full text-white shadow-button
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">Get
                            Started</button>
                    </div>
                </div>
                <div class="h-[28rem] lg:w-60 xs:w-[90%] 
          bg-purpleFrom
           xs:mt-5 rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7" style="margin-top: -20px">
                    <p class="text-md text-white">Pro</p>
                    <p class="pt-3">
                        <span class="text-4xl text-white font-bold">$89</span>
                        <span class="text-sm text-white light">/ Month</span>
                    </p>
                    <p class="text-white text-md pt-5">
                        Ideal for expanding businesses
                    </p>
                    <p class="text-white text-sm pt-5">
                        <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            person
                        </span>
                        5 Users
                    </p>
                    <p class="text-white text-sm pt-4">
                        <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            notes
                        </span>
                        10K SKU's limit
                    </p>
                    <p class="text-white text-sm pt-4">
                        <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            draw
                        </span>
                        Templates
                    </p>
                    <p class="text-white text-sm pt-4">
                        <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            brush
                        </span>
                        Unlimited Flyers
                    </p>
                    <div class="text-left">
                        <button class="bg-white font-bold text-purpleFrom shadow-button
                     border border-purpleFrom rounded-3xl px-5 py-2 ml-2 mt-5 w-full" @click="showModel">
                            Get Started
                        </button>
                    </div>
                </div>

                <div id="priceDiv" class="h-[28rem] lg:w-60 xs:w-[90%] rounded-lg shadow-custom lg:ml-0 xs:mx-10 p-7">
                    <p class="text-md text-textGray">Business</p>
                    <p class="pt-3">
                        <span class="text-4xl text-header font-bold">$149</span>
                        <span class="text-sm light">/ Month</span>
                    </p>
                    <p class="text-textGray text-md pt-5">
                        Ideal for established businesses
                    </p>
                    <p class="text-textGray text-sm pt-5">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                        </span>
                        10 Users
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                        </span>
                        25K SKU's limit
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                        </span>
                        Custom Templates
                    </p>
                    <p class="text-textGray text-sm pt-4">
                        <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                        </span>
                        Unlimited Flyers
                    </p>
                    <div class="text-left">
                        <button @click="showModel" class="px-5 py-2 ml-2 mt-5 w-full text-white shadow-button
                   bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">Get
                            Started</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-bannerdark bg-cover h-[65%] grid content-center my-5">
            <div class="lg:w-9/12 xs:w-[90%] mx-auto text-center">
                <h4 class="text-white font-bold lg:text-4xl xs:text-xl">
                    Never Struggle with Catalogs Again
                </h4>
                <h4 class="lg:pt-4 xs:pt-1 text-white font-bold lg:text-2xl xs:text-xl">
                    Create. Share. Sell. All on the fly. Without any designers.
                </h4>
                <button class="bg-white rounded-3xl text-purple font-bold border-0 
             lg:mt-14 xs:mt-6 py-3 px-6 mr-3" @click="showModel">
                    Try For Free
                </button>
            </div>
        </div>
       
        <div class="xs:w-[90%] lg:w-9/12 mx-auto">
            <h4 class="pt-10 col-span-6  xs:text-xl lg:text-3xl text-header font-extrabold text-center"
                data-aos="fade-right" data-aos-duration="800">
                Loved by Sales Folks from all Walks of Business
            </h4>
            <p class="pb-8 xs:pt-3 xs:text-sm lg:text-base xs:w-[90%] lg:w-6/12 mx-auto text-textGray text-center"
                data-aos="fade-left" data-aos-duration="800">
                Check out what our users have to say about Flyer Club.
            </p>
            <!-- <img src="./assets/images/testimonial.svg" alt=""> -->
            <div class="grid grid-rows-3 grid-cols-3 gap-7 pb-16">
                <div class="shadow-md p-7 border-border lg:col-span-2 xs:col-span-3" data-aos="fade-right"
                    data-aos-duration="800">
                    <div class="grid grid-cols-3 content-center border-b border-border p-3">
                        <div class="col-span-2">
                            <p class="text-textGray text-xs pt-2">Robin Williams</p>
                            <p class="pt-1 text-xs text-blue-700">VP Sales</p>
                        </div>
                        <div class="col-span-1 grid content-center">
                            <img class="text-right" src="./assets/images/stars.svg" alt="Testimonial">
                        </div>
                    </div>
                    <p class="text-xs pt-3 p-3">
                        “An amazing tool, I just build digital line sheets in seconds and share it with all prospets.
                        Extremely easy to use and share! Would recommend it as the go to tool for any sales rep!”
                    </p>
                </div>
                <div class="col-span-1 hidden lg:block">

                </div>
                <div class="col-span-1 hidden lg:block">

                </div>
                <div class="shadow-md p-7 border-border lg:col-span-2 xs:col-span-3" data-aos="fade-left"
                    data-aos-duration="800">
                    <div class="grid grid-cols-3 content-center border-b border-border p-3">
                        <div class="col-span-2">
                            <p class="text-textGray text-xs pt-2">Dan Williams</p>
                            <p class="pt-1 text-xs text-blue-700">Director, Growth & Strategy</p>
                        </div>
                        <div class="col-span-1 grid content-center">
                            <img class="text-right" src="./assets/images/stars.svg" alt="Testimonial">
                        </div>
                    </div>
                    <p class="text-xs pt-3 p-3">
                        “Flyer Club has definitely helped us improve our closure rates. The sales team is quick to
                        make pricing and product edits in the line sheets without relying on designers and send to
                        prospects to start ordering. I totally recommend it!”
                    </p>
                </div>
                <div class="shadow-md p-7 border-border lg:col-span-2 xs:col-span-3" data-aos="fade-right"
                    data-aos-duration="800">
                    <div class="grid grid-cols-3 content-center border-b border-border p-3">
                        <div class="col-span-2">
                            <p class="text-textGray text-xs pt-2">Kevin Morgan</p>
                            <p class="pt-1 text-xs text-blue-700">CMO</p>
                        </div>
                        <div class="col-span-1 grid content-center">
                            <img class="text-right" src="./assets/images/stars.svg" alt="Testimonial">

                        </div>
                    </div>
                    <p class="text-xs pt-3 p-3">
                        “Flyer Club reduced our dependency with designers and enabled us to accelerate our field
                        visits. Edit option of the product data is a super useful feature for our team. ”
                    </p>
                </div>
                <div class="col-span-1 hidden lg:block">
                </div>
            </div>
        </div>

        <!-- <div class="lg:py-6 xs:py-3">
        <div class="lg:w-9/12 xs:w-[90%] mx-auto text-center grid grid-cols-2 content-start">
        <p class="text-titleHeader text-left xs:text-xs lg:text-sm">SellersCommerce © 2022</p>
        <p class="text-titleHeader text-right xs:text-xs lg:text-sm">            
            <a href="">Have a query?</a>
        </p>        
        </div>
    </div> -->
        <div class="relative mt-20">
            <div
                class="bg-white overflow-hidden xs:h-auto lg:h-[142px] shadow-custom p-9 rounded-xl w-[90%] mx-auto lg:absolute top-[1.5rem] left-[5%]">
                <div class="grid xs:grid-cols-5 lg:grid-cols-6">
                    <div class="cols-span-1 hidden lg:block">
                        <!-- <img class="footerImg" src="./assets/images/grid/ls.png" alt="Flyer Club Logo"> -->
                    </div>
                    <div class="col-span-4 grid content-center">
                        <h4 class="text-header text-3xl font-bold">Never Struggle With Catalogs Again</h4>
                        <p class="pt-3 text-xs">Create. Share. Sell. All on the fly. Without any designers.</p>
                    </div>
                    <div class="col-span-1 grid content-center">
                        <button class="bg-gradient-to-r from-purpleFrom 
                     via-purpleFrom to-purpleTo rounded-lg tracking-wide font-bold shadow-button
                      text-white text-md xs:text-xs lg:text-lg py-4 px-8" @click="showModel">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-footerDiv h-[45vh]">
                <div class="lg:py-6 xs:py-3 text-white">
                    <div
                        class="w-[90%] mx-auto text-center grid xs:grid-cols-1 lg:grid-cols-2 content-start absolute bottom-5 left-[5%]">
                        <div class="">
                            <!-- <p><img class="w-48" src="./assets/images/grid/sc-white.svg"
                                    alt="SellersCommerce Logo | Flyer Club"></p> -->
                            <p class="font-extrabold text-white text-sm text-left mt-3">
                                © 2022 Flyer Club |
                                <a target="_blank"> Privacy Policy
                                </a> |
                                <a target="_blank"> Terms </a>
                                |
                                <button class="font-extrabold text-white" @click="isContact = true">
                                    Contact Us
                                </button>
                            </p>
                        </div>
                        <div class="grid content-center text-right hidden lg:block">
                            <p>
                                <a target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img src="https://az777500.vo.msecnd.net/images/3554/twitter3.png" alt="Twitter">
                                </a>
                                <a target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img src="https://az777500.vo.msecnd.net/images/3554/linkedin2.png" alt="LinkedIn">
                                </a>
                                <a target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img src="https://az777500.vo.msecnd.net/images/3554/facebook-logo.png"
                                        alt="Facebook">
                                </a>
                                <a  target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img src="https://az777500.vo.msecnd.net/images/3554/youtube-last-2.png"
                                        alt="Youtube">
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="h-screen w-full bg-blacktransperant absolute top-0 bg-signupDiv"
        :class="isModel ? 'visible overflow-hidden' : 'hidden'">
        <p class="absolute top-3 right-3 cursor-pointer z-10" @click="isModel = false">
            <span class="text-white text-6xl material-symbols-outlined close-popup">
                cancel
            </span>
        </p>
        <div class="h-screen grid xs:grid-cols-1 lg:grid-cols-3">
            <div class="col-span-1 h-full grid content-center px-5 animate__animated animate__bounceInLeft">
                <h4 class="text-white text-5xl font-extrabold">
                    Sign up for FREE
                </h4>
                <h4 class="text-white text-xl font-bold pt-2">
                    Start using Flyer Club in seconds!
                </h4>
            </div>
            <div
                class="col-span-2 h-full grid  xs:content-start lg:content-center px-5 animate__animated animate__bounceInRight">
                <div class="col-span-4 flex flex-auto relative bg-transparent xs:w-[100%] sm:w-[60%] lg:w-[50%]">
                    <div class="col-span-12 flex flex-auto relative signup-inputDiv p-2 rounded-3xl">
                    <label for="enterYourMail" hidden>Enter your email</label>
                        <input id="enterYourMail" v-model="email" type="text" @keyup.enter="emailValidation(email)"
                            class="outline-none	px-5 py-8 rounded-3xl h-[40px] bg-white inline-block w-[100%]"
                            placeholder="Enter your email">
                    <label for="tryForFree" hidden>Try for free</label>
                        <input id="tryForFree" @click="emailValidation(email)" type="submit" value="Try For Free"
                            class="cursor-pointer px-5 py-3 ml-2 mt-2 text-white absolute xs:right-[3.5%] lg:right-[3.5%] bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo inline-block rounded-3xl">
                    </div>
                </div>
                <div v-if="emailValid" class="animate__animated animate__headShake">
                
                    <p class="pl-3 pt-2 text-warningRed font-bold">Please enter a valid email</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>

    <div class="h-screen w-full bg-blacktransperant absolute top-0 items-center flex"
        :class="isContact ? 'visible overflow-hidden' : 'hidden'">
        <p class="absolute top-3 right-3 cursor-pointer z-10" @click="isContact = false">
            <span class="text-white text-5xl material-symbols-outlined animate__animated animate__zoomIn">
                cancel
            </span>
        </p>
        <div class="w-[100%] mx-auto p-10">
            <hubspotform></hubspotform>
        </div>

    </div>
</template>

<style>
.logoClass {
    height: 48px;
}

.bannerNew {
    background-image: url(/src/assets/images/banner7.png);
    background-position: center bottom;
    background-size: 100% auto;
    z-index: 1;
}

.signup-inputDiv {
    background: rgba(255, 255, 255, .5);
    box-shadow: 0 13.373px 75.66px rgb(38 33 74 / 50%);
}

.footerImg {
    transform: rotate(309deg);
    margin-left: -30px;
    height: 67px;
}

.close-popup:hover {
    transition: 0.9s;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}

.bg-signupDiv {
    background: url(/src/assets/images/bg-signup.svg) no-repeat 0 50%/890px;
}

.bg-footerDiv {
    background: url(/src/assets/images/grid/footerbanner.svg) no-repeat;
    background-position: 50% 40px;
    background-size: 1793px;
}

.animate-hinge {
    display: inline-block;
    margin: 0 0.5rem;

    animation: fadeInRight;
    /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s;
    /* don't forget to set a duration! */
}

.animate-jello {
    display: inline-block;
    margin: 0 0.5rem;

    animation: jello;
    /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s;
    /* don't forget to set a duration! */
}

.typed-cursor {
    font-size: 50px;
}

.material-symbols-outlined {
    font-size: 32px;
}

.ease-in {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-out {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-fastest {
    transition-duration: 75ms;
}

.transition-faster {
    transition-duration: 100ms;
}

.transition-fast {
    transition-duration: 150ms;
}

.transition-medium {
    transition-duration: 200ms;
}

.transition-slow {
    transition-duration: 300ms;
}

.transition-slower {
    transition-duration: 500ms;
}

.transition-slowest {
    transition-duration: 700ms;
}

.transition-all {
    transition-property: all;
}

.transition-opacity {
    transition-property: opacity;
}

.transition-transform {
    transition-property: transform;
}

.focus-visible.focus-visible\:underline {
    text-decoration: underline;
}

@media (min-width: 1441px) {
    .bg-footerDiv {
        background-size: 2300px;
    }

    .bg-signupDiv {
        background-size: 1200px;
    }
   
}

@media (min-width: 2100px) {
    .bg-footerDiv {
        background-size: 2800px;
    }

    .bg-signupDiv {
        background-size: 1600px;
    }
}

.swiper {
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 100px;
    background-color:#5529c6;
}
.swiper-slide {
    width: 300px;
    height: 300px;
    background: #fff;
    -webkit-box-reflect: below 1px linear-gradient(transparent,transparent,#0006);
    overflow: hidden;
}
@media (min-width:1500px){
    
    .swiper-slide{
           width:380px;
           height:380px;
       }
}

</style>
