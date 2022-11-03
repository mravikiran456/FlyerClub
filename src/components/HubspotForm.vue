<template>
<div class="desktop-view form animate__animated animate__zoomIn">
     <div class="contact-info">
          <h3 class="title text-purple">Let's get in touch</h3>
          <p class="text">
           Fill the form and our team will get back to you within 24hours.
          </p>

          <div class="info">
            <div class="information">
              <span class=" font-25 text-purple align-middle material-symbols-outlined mr-5">
            call
            </span>
              <p class="font-14">5600 N River Road Suite 800 Rosemont, IL 60018</p>
            </div>
            <div class="information">
              <span class=" font-25 text-purple align-middle material-symbols-outlined mr-5">
            mail
            </span>
              <p class="font-14">support@linesheetspro.com</p>
            </div>
            <div class="information">
              <span class=" font-25 text-purple align-middle material-symbols-outlined mr-5">
            map
            </span>
              <p class="font-14">847-656-5770</p>
            </div>
          </div>

          <div class="social-media">
            <p class="margin-16">Connect with us :</p>
            <div class="social-icons ">
              <a href="https://twitter.com/sellerscommerce" target="_blank"
              class="inline-block mr-5 cursor-pointer align-middle">
            <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/twitter3.png" alt="Twitter">
            </a>
              <a href="https://www.linkedin.com/company/sellers-commerce/mycompany/" target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/linkedin2.png" alt="LinkedIn">
                                </a>
              <a href="https://www.facebook.com/sellerscommerce" target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/facebook-logo.png"
                                        alt="Facebook">
                                </a>
             <a href="https://www.youtube.com/user/sellerscommerce" target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/youtube-last-2.png"
                                        alt="Youtube">
                                </a>
            </div>
          </div>
    </div>
     <div class="contact-form bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form v-if="contactSubmit=='form'" v-on:submit.prevent="onSubmit" autocomplete="off" id="form">
            <h3 class="title">Contact us</h3>
            <div style="display:flex; height:70px">
            <div class="input-container" style="margin-right:40px" >
            <label for="firstname" hidden>Firstname</label>
              <input v-on:blur="validateFirstname()" type="text" v-model="firstname" id="firstname" placeholder="Firstname"  class="input" />
              <small>Error Message</small>
            </div>
            <div class="input-container" >
            <label for="lastname" hidden>Lastname</label>
              <input v-on:blur="validateLastname()" type="text" v-model="lastname" id="lastname"  placeholder="Lastname"  class="input" />
              <small>Error Message</small>
            </div>
            </div>
             <div style="display:flex; height:70px">
            <div class="input-container" style="margin-right:40px" >
              <label for="companyname" hidden>Company Name</label>
              <input v-on:blur="validateCompanyName()" type="text" v-model="companyName" id="companyname" placeholder="Company Name" class="input"  />
             <small>Error Message</small>
            </div>
            <div class="input-container" >
              <label for="website" hidden>Website</label>
              <input v-on:blur="validateWebsite()" type="text" v-model="Website" id="website"  placeholder="Website" class="input"  />
              <small>Error Message</small>
            </div>
            </div>
         
            <div class="input-container" style="height:55px" >
              <label for="email" hidden>Email</label>
              <input v-on:blur="validateEmail()" type="email" v-model="email" id="email" placeholder="Email" class="input" style="width:100% !important"/>
             <small>Error Message</small>
            </div>
            <div class="input-container textarea">
              <label for="messagetext" hidden>Message</label>
              <textarea v-on:blur="validateMessage()" v-model="message" placeholder="Message" class="input" id="messagetext" style="width:100% !important"></textarea>
               <small>Error Message</small>
            </div>
            <input type="submit" value="Submit" class="btn" id="button" />
    
          </form>
            <div>
            
            </div>

            <div v-if="contactSubmit =='loader'"  class="contact-soon">
                <div class="submission">
                  <img src="../assets/images/loader.svg" class="loader" alt="">
                </div> 
           </div>
             <div v-if="contactSubmit =='thankyou'"  class="contact-soon">
                <div class="submission">
                  <div style="font-size:24px">Thanks for Your Submission</div>
                  <div style="font-size:16px">We will get in touch with you shortly.</div>
                </div> 
           </div>
             <div v-if="contactSubmit =='error'"  class="contact-soon">
                <div class="submission">
                  <div style="font-size:24px">Please try again later</div>
                  <div style="font-size:16px">There was an error trying to send your message.</div>
                </div> 
           </div>

        </div>
</div>

<div class="mobile-view form  animate__animated animate__zoomIn">
    <div class="contact-form bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form v-if="contactSubmit == 'form'" v-on:submit.prevent="onSubmit" autocomplete="off" id="form">
            <h3 class="title">Contact us</h3>
            
            <div class="input-container" >
              <input v-on:blur="validateFirstname()" type="text" v-model="firstname" id="firstname" placeholder="Firstname"  class="input" />
              <small>Error Message</small>
            </div>
            <div class="input-container">
              <input v-on:blur="validateLastname()" type="text" v-model="lastname" id="lastname"  placeholder="Lastname"  class="input" />
              <small>Error Message</small>
            </div>
            <div class="input-container"  >
              <input v-on:blur="validateCompanyName()" type="text" v-model="companyName" id="companyname" placeholder="Company Name" class="input"  />
             <small>Error Message</small>
            </div>
            <div class="input-container">
              <input v-on:blur="validateWebsite()" type="text" v-model="Website" id="website"  placeholder="Website" class="input"  />
              <small>Error Message</small>
            </div>
         
            <div class="input-container" style="height:55px" >
              <input v-on:blur="validateEmail()" type="email" v-model="email" id="email" placeholder="Email" class="input" />
             <small>Error Message</small>
            </div>
            <div class="input-container textarea">
              <textarea v-on:blur="validateMessage()" v-model="message" placeholder="Message" class="input" id="messagetext" ></textarea>
               <small>Error Message</small>
            </div>
            <div class="flex justify-center">
            <input type="submit" value="Submit" class="btn" id="button" />
            </div>
          </form>
             <div v-if="contactSubmit =='loader'"  class="contact-soon">
                <div class="submission">
                  <img src="../assets/images/loader.svg" class="loader" alt="">
                </div> 
           </div>
            <div v-else-if="contactSubmit=='thankyou'" class="contact-soon">
                <div class="submission">
                <div style="font-size:24px">Thanks for Your Submission</div>
                <div style="font-size:16px">We will get in touch with you shortly.</div>
            </div>  
        </div>
         <div v-if="contactSubmit =='error'"  class="contact-soon">
                <div class="submission">
                  <div style="font-size:24px">Please try again later</div>
                  <div style="font-size:16px">There was an error trying to send your message.</div>
                </div> 
           </div>
    </div>

    <div class="contact-info ">
          <h3 class="title text-purple">Let's get in touch</h3>
          <p class="text">
           Fill the form and our team will get back to you within 24hours.
          </p>

          <div class="info">
            <div class="information">
              <span class=" font-25 text-purple align-middle material-symbols-outlined mr-5">
            call
            </span>
              <p class="font-14">5600 N River Road Suite 800 Rosemont, IL 60018</p>
            </div>
            <div class="information">
              <span class=" font-25 text-purple align-middle material-symbols-outlined mr-5">
            mail
            </span>
              <p class="font-14">support@linesheetspro.com</p>
            </div>
            <div class="information">
              <span class=" font-25 text-purple align-middle material-symbols-outlined mr-5">
            map
            </span>
              <p class="font-14">847-656-5770</p>
            </div>
          </div>

          <div class="social-media">
            <p class="margin-16">Connect with us :</p>
            <div class="social-icons ">
              <a href="https://twitter.com/sellerscommerce" target="_blank"
              class="inline-block mr-5 cursor-pointer align-middle">
            <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/twitter3.png" alt="Twitter">
            </a>
              <a href="https://www.linkedin.com/company/sellers-commerce/mycompany/" target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/linkedin2.png" alt="LinkedIn">
                                </a>
              <a href="https://www.facebook.com/sellerscommerce" target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/facebook-logo.png"
                                        alt="Facebook">
                                </a>
             <a href="https://www.youtube.com/user/sellerscommerce" target="_blank"
                                    class="inline-block mr-5 cursor-pointer align-middle">
                                    <img class="padding-sm" src="https://az777500.vo.msecnd.net/images/3554/youtube-last-2.png"
                                        alt="Youtube">
                                </a>
            </div>
          </div>
    </div>
</div>
</template>
<script>
import {  ref,onBeforeMount, onMounted } from "vue";
// import { api } from '../boot/axios';
import axios from 'axios';
export default {
setup(){
        const firstname=ref(null);
        const lastname=ref(null)
        const companyName=ref(null);
        const Website=ref(null);
        const email=ref(null);
        const message=ref(null);
        let contactSubmit=ref("form");
        const form = document.getElementById('form');
          //firstname
        
        const validateFirstname=()=>{
           let firstElm=document.getElementById('firstname')
            if(firstElm.value == ""){
                 let errorVal=capitalize(firstElm.id)
                setErrorMsg(firstElm, `${errorVal} is Required`);
                return false;
            }
            else{
                setSuccessMsg(firstElm);
                return true;
            }
        }
        //lastname
        const validateLastname=()=>{
                let lastElm=document.getElementById('lastname')
            if(lastElm.value == ""){
                 let errorVal=capitalize(lastElm.id)
                setErrorMsg(lastElm, `${errorVal} is Required`);
                return false;
            }
            else{
                setSuccessMsg(lastElm);
                return true;
            }
        }
        //companyname
        const validateCompanyName=()=>{
                let companyElm=document.getElementById('companyname')
            if(companyElm.value == ""){
                 let errorVal=capitalize(companyElm.id)
                setErrorMsg(companyElm, `${errorVal} is Required`);
                return false;
            }
            else{
                setSuccessMsg(companyElm);
                return true;
            }
        }
        //email
        const validateEmail=()=>{
            let emailElm=document.getElementById('email')
            if(emailElm.value == ""){
                 let errorVal=capitalize(emailElm.id)
                setErrorMsg(emailElm, `${errorVal} is Required`);
                return false;
            }
             else if(!isValidEmail(emailElm.value)){
                  setErrorMsg(emailElm, 'Invalid Email');
                  return false;
                }
              else if(!isValidateDomain(event.target.value)){
              setErrorMsg(emailElm, 'Enter the Valid Business Domain');
              return false;
            }
            else{
                setSuccessMsg(emailElm);
                return true;
            }  
        }
        //website
        const validateWebsite=()=>{
               let websiteElm=document.getElementById('website')
            if(websiteElm.value == ""){
                 let errorVal=capitalize(websiteElm.id)
                setErrorMsg(websiteElm, `${errorVal} is Required`);
                return false;
            }
             else if(!isValidUrl(websiteElm.value)){
                  setErrorMsg(websiteElm, 'Invalid Url');
                  return false;
                }
            else{
                setSuccessMsg(websiteElm);
                return true;
            }
        }
        //message
        const validateMessage=()=>{
             let messageElm=document.getElementById('messagetext')
            if(messageElm.value == ""){
                 let errorVal=capitalize(messageElm.id)
                setErrorMsgfield(messageElm, "This field cannot be empty");
                return false;
            }  else{
                setSuccessMsgField(messageElm);
                return true;
            }
        }
        const isValidEmail=(val)=>{ 
            const emailPattern =
            /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
            return emailPattern.test(val) || false;
            }
        const isValidateDomain=(val)=> {
            var domain =
            /.+@(gmail|yahoo|gmx|aol|icloud|mailfence|outlook|hotmail|livemail)\.(com|net|in)$/;
            return !domain.test(val) || false;
        }
       const isValidUrl=(val)=>{
            const urlPattern =
            /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
            return urlPattern.test(val) || false;
        }
            const setErrorMsg=(input, errormsgs)=>{
                const formControl = input.parentElement;
                const small = formControl.querySelector('small');
                formControl.className = "input-container error";
                small.innerText = errormsgs;
                return false;
            }
         

            const setSuccessMsg=(input)=>{
                const formControl = input.parentElement;
                formControl.className = "input-container success";
                return true;
            }
                 const setErrorMsgfield=(input, errormsgs)=>{
                const formControl = input.parentElement;
                const small = formControl.querySelector('small');
                formControl.className = "input-container error";
                document.getElementById('messagetext').style.borderColor = "#df3434"
                small.innerText = errormsgs;
                return false;
            }
              const setSuccessMsgField=(input)=>{
                const formControl = input.parentElement;
                formControl.className = "input-container success";
                document.getElementById('messagetext').style.borderColor = "#fff"
                return true;
            }
            const onSubmit=async()=>{
                  if(!validateFirstname() || !validateLastname() || !validateCompanyName() || !validateEmail() || !validateWebsite()|| !validateEmail()|| !validateMessage()){ 

            } else{
                   let data = {
                 properties: {
                    firstname: firstname.value,
                    lastname:lastname.value,
                    email: email.value,
                    company: companyName.value,
                    website: Website.value,
                    message: message.value,
                    hs_analytics_source: "REFERRALS",
                    contact_lead_source: "LineSheets Pro",
                    secondary_lead_source: "LPCU",
                  },
               };
                   try{
                     contactSubmit.value="loader"               
                     let response = await axios.post(`${import.meta.env.VITE_BASE_URL}contact-api`,data,{
                        headers:{
                            'Authorization':''
                        }
                    
                     })                 
                    //  throw error
                     let val=response.data.result
                     if(val=='Success') {
                        //  contactSubmit.value=true
                         contactSubmit.value="thankyou"
                         setTimeout(()=>{
                            //  contactSubmit.value=false 
                            contactSubmit.value="form"
                             reset()
                         },5000)   
                     } else if(typeof(val) == "number") {
                        let payload={
                             data:data,
                             val:val
                         }
                     let response=await axios.post(`${import.meta.env.VITE_BASE_URL}update-api`,payload,{
                       headers:{
                         'Authorization' : ''
                       }
                     })
                     if(response.data.result=='Success') {
                      //  contactSubmit.value=true
                       setTimeout(()=>{
                        //  contactSubmit.value=false
                         reset()
                       },5000)
                     }
                     } else{
                       contactSubmit.value="error"
                     }
               } catch(err){
                    console.log(err.message)
               }
            }
            }
             const reset=()=>{
                firstname.value= ""
                lastname.value= ""
                email.value= ""
                companyName.value= ""
                Website.value= ""
                message.value= ""
                   
            }
            const capitalize=(string)=>{
                return string[0].toUpperCase() + string.slice(1);
                }
        return{
                firstname,
                lastname,
                companyName,
                Website,
                email,
                message,
                onSubmit,
                contactSubmit,
                isValidEmail,
                isValidateDomain,
                isValidUrl,
                setErrorMsg,
                setSuccessMsg,
                setErrorMsgfield,
                setSuccessMsgField,
                validateFirstname,
                validateLastname,
                validateCompanyName,
                validateEmail,
                validateWebsite,
                validateMessage,
                reset            
        }
}
}

</script>

<style>
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #fafafa;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 820px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin:auto;
}

.contact-form {
  background-color: #1abc9c;
  position: relative;
}

.circle {
  border-radius: 50%;
  background:linear-gradient(90deg, #2f23ab 0%, #4126a9 45%, #d6489e 100%);
  position: absolute;
}

.circle.one {
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
}

.circle.two {
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
}

.contact-form:before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: linear-gradient( #2f23ab , #4126a9 , #d6489e );;
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
}

form {
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
}

.title {
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}
.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}

.input-container.success input{
     border-color: #fff;
}

.input-container.error input{
    border-color: #df3434;
}
.input-container small{
    color: #fff;
    margin-left:10px;
    font-weight: 500;
    font-size:10px;
    visibility:hidden;
   
}
.input-container.error small{
    visibility: visible;
}
.input {
  width: 176px;
  height:36px;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 100px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.btn {
  padding: 0.6rem 1.3rem;
  background-color: #fff !important;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #333 !important;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
}



.input-container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}

.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #1abc9c;
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}

.input-container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: 0.8rem;
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}
input::placeholder, textarea::placeholder{
    opacity: 0.70;
    color: #9ca3af;
    font-size: 13px;
}
.contact-info {
  padding: 42px;
  position: relative;
}

.contact-info .title {
  color: #333;
}

.text {
  color: #333;
  margin: 1.5rem 0 2rem 0;
  font-size:14px;
}

.information {
  display: flex;
  color: #333;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
}

.icon {
  width: 20px;
  margin-right: 1.0rem;
}

.social-media {
  padding: 2rem 0 0 0;
}

.social-media p {
  color: #333;
}

.social-icons {
  display: flex;
  margin-top: 0.5rem;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(90deg, #5529C6 0%, #6333CB 45%, #8F52DC 100%);
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
}

.social-icons a:hover {
  transform: scale(1.05);
}

/* .contact-info:before {
  content: "";
  position: absolute;
  width: 110px;
  height: 100px;
  border: 22px solid #fff;
  border-radius: 50%;
  bottom: -77px;
  right: 50px;
  opacity: 0.3;
} */

.big-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #1cd4af, #159b80);
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);
}

.big-circle:after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  background-color: #fafafa;
  border-radius: 50%;
  top: calc(50% - 180px);
  left: calc(50% - 180px);
}

.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}

@media (max-width: 850px) {
  .form {
    grid-template-columns: 1fr;
  }

  .contact-info:before {
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  .contact-form:before {
    top: -13px;
    left: initial;
    right: 70px;
  }

  .square {
    transform: translate(140%, 43%);
    height: 350px;
  }

  .big-circle {
    bottom: 75%;
    transform: scale(0.9) translate(-40%, 30%);
    right: 50%;
  }

  .text {
    margin: 1rem 0 1.5rem 0;
  }

  .social-media {
    padding: 1.5rem 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem;
  }

  .contact-info:before {
    display: none;
  }

  .square,
  .big-circle {
    display: none;
  }

  form,
  .contact-info {
    padding: 1.7rem 1.6rem;
  }

  .text,
  .information,
  .social-media p {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .icon {
    width: 23px;
  }

  .input {
    padding: 0.45rem 1.2rem;
  }

  .btn {
    padding: 0.45rem 1.2rem;
  }
}
.padding-sm{
    padding:8px
}
.font-14{
    font-size:14px;
}
.font-25{
    font-size:25px !important;
}
.margin-16{
    margin-bottom:16px;
}
.contact-soon {
    height:95%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.submission {
    z-index: 99;
    color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.loader{
  width:50px;
  height:50px;
}
@media only screen and (min-width:992px){
  .desktop-view{
    display:flex;
    min-height:50vh;
  }
  .contact-soon {
    width:420px;
  }
  .mobile-view{
    display:none;
  }
 

}
@media only screen and (min-width: 250px) and (max-width: 992px) {
  .mobile-view{
    display:block;
   width: 100%;
    height: 100vh;
    overflow-y: scroll;
  }
   .title{
    text-align:center;
  }
  .input{
    width:100%;
  }
  .desktop-view{
    display:none
  }
  .social-media p{
    text-align:center;
  }
  .social-icons {
    justify-content:center
  }
  .contact-soon{
    height:350px;
  }
}
</style>