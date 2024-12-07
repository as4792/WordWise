document.getElementById("btn").addEventListener("click", function (){
    const userInput = document.getElementById("problem").value.toLowerCase();

    const outputElement = document.getElementById("output");

   
    const adviceMap = {
        abuse: "If you're experiencing abuse, consider reaching out to a trusted friend, family member, or a support hotline. Organizations like the National Domestic Violence Hotline can help.",
        hitting: "Violence, whether directed at others or yourself, should not be ignored. Seek help from a trusted authority or counselor immediately. Call 911 or report it to your local police station.",
        suicide: "If you're having thoughts of suicide, it's important to talk to someone who can help. Contact a crisis hotline, such as the Suicide Prevention Lifeline, or a mental health professional. The number for Suicide and Crisis Hotline is 988.",
        death: "Coping with thoughts of death or loss can be overwhelming. Reach out to a therapist or counselor for support in processing your emotions.",
        harm: "If you're feeling the urge to harm yourself or others, it’s crucial to seek professional help. Crisis counselors can provide immediate assistance.",
        "self harm": "Self-harm can be a sign of deep emotional distress. Talking to a mental health professional can help you find healthier ways to cope.",
        "self-harm": "Self-harm can be a sign of deep emotional distress. Talking to a mental health professional can help you find healthier ways to cope.",
        "harming myself": "Self-harm can be a sign of deep emotional distress. Talking to a mental health professional can help you find healthier ways to cope.",
        violence: "Exposure to or involvement in violence can have lasting effects. Contact local authorities or organizations to get assistance and protect yourself."
    };


    const foundWords = [];
    for (let word in adviceMap){
        if (userInput.includes(word)) {
            foundWords.push(word);
        }
    }

    if (foundWords.length > 0){
        let response = `<b>Here is some advice for the issues you mentioned:</b><br><ul>`;
        for (let word of foundWords) {
            response += `<li><b>${word[0].toUpperCase() + word.slice(1)}:</b> ${adviceMap[word]}</li>`;
        }
        response += `</ul><br><b>Recommendation:</b> Please consider reaching out to a professional or trusted support service for further assistance.`;

        outputElement.innerHTML = response;
    } else {
        outputElement.innerHTML = "Thank you for sharing. You are heard and appreciated. If you need advice, please provide more details.";
    }
});

const textArea = document.getElementById('problem');


textArea.addEventListener('input', function () {
    this.style.height = 'auto'; 
    this.style.height = `${this.scrollHeight}px`; 
});