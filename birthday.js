
        
        var fillForm= document.getElementById('fillForm');
        var fillFormContent = document.getElementById('fillFormContent');
        var go = document.getElementById('go');
        var close = document.getElementById('close');
        var alert = document.getElementById('alert');
        var message = document.getElementById('message');
        var loginForm = document.getElementById('loginForm');
        var nextME = document.getElementById('nextME');
        var displayLogin = document.getElementById('displayLogin');
        var loginBtn = document.getElementById('loginBtn');
        var myDashBoard = document.getElementById('dashboard');

        var dashboardContentCover= document.getElementById('dashboardContentCover');
        var button = document.getElementById('button');
        var dash = document.getElementById('dash');
        dashboardContentCover.style.display="none";
        button.style.display = "none";

        dash.addEventListener('click', function(){
            dashboardContentCover.style.display="block";
            button.style.display = "block";
            displayTextMsg();
        });
        myDashBoard.style.display = "none";
        
        let p = document.getElementById('p');
        let cp = document.getElementById('cp');
        
        
        validateAll = false;
        validateVoidForm = true, validateNames=false, validateSen=false, 
        validateRel=true, validatePass=false, loginValidityPass = false,
        loginValidityUser=false;
        console.log(validateVoidForm);
        let i = 0, y=0, r=0;
        let text = "July born are always unique in nature.";
        let displayText = document.getElementById('displayText');
        let myWish = "Today is your Birthday! Wishing you Long Life, Good health and Prosperity!";
        let aboutJulyText = 
        `Difficult to fathom and be understood.
         Quiet unless excited or tensed. Takes pride in themselves.
         Easily consoled;
         Secretive.
         Honest.
         Approachable.
         Tactful.
         Friendly.
         Concern about other's feelings.
         Very emotional.
         Temperamental and unpredictable.
         Moody and easily hurt.spla
         Sentimental.
         Forgiving but never forgets.
         Dislikes nonsensical and unnecessary things.
         Guides others mentally and physically.
         Wary and sharp
         Hardworking.
         `;
        var aboutJulyDisplay = document.getElementById('aboutJulyDisplayID');
        function displayAboutJuly(){
            if(r<aboutJulyText.length){
                aboutJulyDisplay.innerHTML+=aboutJulyText.charAt(r);
                r++;
                setTimeout(displayAboutJuly, 95);
            }
        }
        
        function displayTextMsg(){
            if(i<text.length){
                displayText.innerHTML+=text.charAt(i);
                i++;
                setTimeout(displayTextMsg, 100);
            }
        }
       
        var showTim = document.getElementById('showTim');
        var showTime = document.getElementById('showTime');
       
        var mySetDate = new Date('July 23, 2020 00:00:00').getTime();
        //var collapseSetDate = new Date('July 13, 2020 15:19:00').getTime();
        
        //console.log(collapseSetDate);
        function timeRemaining(){
            const myTime = new Date();
            let todayTime = myTime.getTime();
            
            let timeMargin = parseInt(mySetDate) - parseInt(todayTime);
            let remainingDays = Math.floor(timeMargin/(1000*60*60*24));
            let remainingHours = Math.floor((timeMargin % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let remainingMinutes = Math.floor((timeMargin % (1000 * 60 * 60)) / (1000 * 60));
            let remainingSeconds = Math.floor((timeMargin % (1000 * 60)) / 1000);

            document.getElementById('Days').innerHTML = remainingDays;
            document.getElementById('Hours').innerHTML = remainingHours;
            document.getElementById('Minutes').innerHTML = remainingMinutes;
            document.getElementById('Seconds').innerHTML = remainingSeconds;
            if(timeMargin<=0){
                clearInterval(inter);
                showTim.style.display ="none";
                showTime.classList.add('dance');
                document.getElementById('toGo').innerHTML = "HappY BirTHDaY!!!";
                document.getElementById('adv').innerHTML = "Omo Olojo Ibi<br> Happy Birthday To You!";
                document.getElementById('special').innerHTML+=myWish;
                showTime.style.marginBottom="10px";
            }
            
        }
        var inter = setInterval(timeRemaining, 1000);
        timeRemaining();
        var openPage = document.getElementById('openPage');
        openPage.click();
    
        
        function myPagesToggler(pageName, pageProperty, pageColor){
            var buttons = document.getElementsByClassName('buttons');
            var dashboardContent = document.getElementsByClassName('dashboardContent');
            for(let i=0; i<dashboardContent.length; i++){
                dashboardContent[i].style.display="none";
            }
            for(let p=0; p<buttons.length; p++){
                buttons[p].style.background ="";
            }
            document.getElementById(pageName).style.display = "block";
            pageProperty.style.background = pageColor;
            displayTextMsg();
            displayAboutJuly();
        }
          
         
        function validateEmpty(){
            if(fn.value==""||mn.value==""||ln.value==""||p.value==""||cp.value==""||ss.value==""){
                validateVoidForm=false;
                message.innerHTML = "Please, fill all fields. Thanks."
                return false;
            }
            else{
                console.log('jj');
                validateVoidForm=true;
                message.innerHTML = "";
            }
            setTimeout(enableDisplayLogin, 1000);
        }
        function enableDisplayLogin(){
            if(validateVoidForm===true&&validateNames===true
                &&validateSen===true&&validateRel===true&&validatePass===true){
                validateAll = true;
                barValidate=true;
                go.style.display ="none";
                signUp.innerHTML = "";
                nextME.innerHTML="Login";
                loginForm.style.display = "none";
                location.reload(true);
            }
            console.log(validateVoidForm);
        }
        //localStorage.clear();
        function validateReligion(religion, msg){
            if(religion.toLocaleLowerCase() =='christianity'){
                validateRel = true;
                document.getElementById(msg).innerHTML = `Right! ${religion.toLocaleUpperCase()}.`;
                document.getElementById(msg).style.color= "green";
            }
            else{
                validateRel= false;
                document.getElementById(msg).innerHTML = "Choose the right religion";
                document.getElementById(msg).style.color= "red";
                return false;
            }
            console.log(validateRel);
        }
        function validateFormPass(id1, id2){
            if(p.value==cp.value){
                validatePass=true;
                localStorage.setItem('myP', p.value);
                document.getElementById(id1).innerHTML = "Yes, passwords matched!";
                document.getElementById(id2).innerHTML = "Yes, passwords matched!";
                document.getElementById(id1).style.color = "green";
                document.getElementById(id2).style.color = "green";
            }
            else{
                validatePass=false;
                document.getElementById(id1).innerHTML = "Sorry, password doesn't match";
                document.getElementById(id2).innerHTML = "Sorry, password doesn't match";
                document.getElementById(id1).style.color = "red";
                document.getElementById(id2).style.color = "red";
                return false;
            }
            console.log(validatePass);
        }
        function validateSender(senderName, defaultName, msg){
            if(senderName.toLocaleLowerCase()==defaultName){
                validateSen = true;
                document.getElementById(msg).style.color = "green";
                document.getElementById(msg).innerHTML = `Yes, right! ${senderName.toLocaleUpperCase()}.`;
            }
            else{
                validateSen=false;
                document.getElementById(msg).style.color = "red";
                document.getElementById(msg).innerHTML = `Wrong sender name! ${senderName.toLocaleUpperCase()}`;
                return false;
            }
            console.log(validateSen);
        }
        function validateFormName(myName, msgId, defaultName, msgName){
            if((myName).toLocaleLowerCase()==defaultName){
                validateNames=true;
                localStorage.setItem('mySur', ln.value);
                document.getElementById(msgId).style.color= "green";
                document.getElementById(msgId).innerHTML =  `Yes! ${(myName).toLocaleUpperCase()}.`;
            }
            else{
                validateNames=false;
                document.getElementById(msgId).style.color= "red";
                document.getElementById(msgId).innerHTML = msgName;
                return false;
            }
            console.log(validateNames);
        }
        let myDBpass, myDBsurname;
        function setLocalData(){
            myDBpass= localStorage.getItem('myP');
            myDBsurname= localStorage.getItem('mySur');
        }
        setLocalData();
        function validateLoginPassword(userPass, msgPass){
           if(myDBpass==userPass){
                loginValidityPass=true;
                document.getElementById(msgPass).innerHTML = "Good! That's Correct.";
                document.getElementById(msgPass).style.color = "green";
           }
           else{
               document.getElementById(msgPass).innerHTML = "No. Incorrect Password.";
               document.getElementById(msgPass).style.color = "red";
               return false;
           }
        }
        function validateLoginUserName(userSurname, msgSur){
            if(myDBsurname==userSurname){
                loginValidityUser=true;
                document.getElementById(msgSur).innerHTML = "Nice! That's Correct.";
                document.getElementById(msgSur).style.color = "green";
           }
           else{
               document.getElementById(msgSur).innerHTML = "No! Incorrect Surname.";
               document.getElementById(msgSur).style.color = "red";
               return false;
           }
        }
        function whenLoad(){
            fillForm.style.display= "none";
            loginForm.style.display = "none";
            alert.style.display = "none";
        }
        window.onclick = function(event){
            if(event.target==fillForm||event.target==alert){
                fillForm.style.display= "none";
                alert.style.display = "none";
            }
        }

        barValidate = false;
        
       function displayLoginIfUserExist(){
            if(myDBsurname!=undefined&&myDBpass!=undefined){
                loginForm.style.display = "block";
                fillForm.style.display = "block";
                signUp.innerHTML = "Login";
                go.style.display = "none";
                displayLogin.style.display = "block";
                nextME.removeEventListener('click', NextButton);
                nextME.addEventListener('click', displayLoginIfUserExist);
            }
        }
        displayLoginIfUserExist();
        
        var bar = document.getElementById('bar');
        bar.addEventListener('click', validateBar);
        function validateBar(){
            fillForm.style.display= "block";
            fillForm.style.textAlign="left";
            fillFormContent.style.display = "none";
            close.style.display="block";
            
            if(myDBsurname!=undefined&&myDBpass!=undefined){
                alert.style.display = "none";
                loginForm.style.display="block";
            }
            else{
                fillFormContent.style.display = "none";
                alert.style.display = "block";
                signUp.innerHTML= "Notification!";
            }
        }
        nextME.addEventListener('click', NextButton);
        function NextButton(){
            setLocalData();
            signUp.innerHTML= "Sign Up";
            alert.style.display = "none";
            fillForm.style.display = "block";
            fillFormContent.style.display = "block";
        }

        loginBtn.addEventListener('click', myPages);
        setTimeout(myPages, 500);
        function myPages(){
            console.log('dd');
            if(loginValidityPass===true&&loginValidityUser===true){
                nextME.innerHTML = "View Pages";
                myDashBoard.style.display="block";
                nextME.addEventListener('click', function(){
                    dashboardContentCover.style.display="block";
                    button.style.display = "block";
                    fillForm.style.display="none";
                    displayTextMsg();
                });
                fillForm.style.display='none';
                bar.addEventListener('click', function(){
                    fillForm.style.display="none";
                    if(myDashBoard.style.display==='none'){
                        myDashBoard.style.display = "block";
                    }
                    else{
                        myDashBoard.style.display = "none";
                    }
                });
               
            }
        }
    