const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Sir");
    }

    else if(hr == 12) {
        speak("Good noon Sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating the JAN two point zero");
    speak("I am your virtual personal assistance");
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    // speech.text = "I did not understand what you said please try again";

    if(message.includes('wake up')){
    wishMe();
    const finalText = "Please tell me sir, How can I help you ?";
    speech.text = finalText;
    }

    else if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello sir, How are you";
        speech.text = finalText;
    }
    
    else if(message.includes('i am fine')){
        speak("that's great sir");
    }
    else if(message.includes('and you')){
        speak("I'm doing well, thank you for asking");
    }
    else if(message.includes('thank you')){
        speak("Glad to help, sir");
    }
    else if(message.include('you know who i am')){
        speak("it's a suraj account, yes i am talking to suraj")
    }
    else if(message.includes('how are you')) {
        const finalText = "I am fine sir, tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('i am tired')){
        speak("ok, can i playing your favourite song, sir");
        const a = Math.floor(Math.random()*(10-1))+1;
        const b = random.choice(a)
        if(b==1){
            webbrowser.open("https://www.youtube.com/watch?v=AHAl1R2YIr0&ab_channel=ForTheRecordMusic")

        }
        else if (b==2){
            webbrowser.open("https://www.youtube.com/watch?v=k6eyzRda9zU&ab_channel=sukoon")
        }
        else if(b==3){
            webbrowser.open("https://www.youtube.com/watch?v=ixdov26hzr4&list=RDyRBuGmD_a_M&index=13")
        }
        else if(b==4){
            webbrowser.open("https://music.youtube.com/search?q=aziyat")
        }
    }

    //update in 5/20/24
    else if(message.includes('Are you a robot?')){
        const finalText = "yes I am a robot, but I am a good one. Let me prove it. How can I help you?";
        Speech.text = finalText;
    }
    else if(message.includes('I am pleased to meet you.')){
        const finalText = "I think this is the beginning of a beautiful botship";
        speech.text = finalText;
    }
    else if(message.includes('I cant sleep')){
        const finalText = "Okay. I didnt want to do this but you leave me no choice";
        speech
    }
    else if(message.includes('name')) {
        const finalText = "My name is JAN";
        speech.text = finalText;
    }
    else if(message.includes('your inventor')){
        const finalText = "I was created by Mr. Suraj Swarnkar";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.include('open youtube')){
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('https://calculator.apps.chrome/')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
