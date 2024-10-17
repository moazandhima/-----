const responses = {
    "مرحبا": "مرحبًا! كيف يمكنني مساعدتك اليوم؟",
    "كيف حالك؟": "أنا بخير، شكرًا! وأنت؟",
    "ما هو اسمك؟": "أنا روبوت محادثة.",
    "ماذا تستطيع أن تفعل؟": "يمكنني الإجابة على أسئلتك ومساعدتك.",
    "وداعا": "وداعًا! أتمنى لك يومًا سعيدًا.",
    "كم عدد الدول العربيه؟" : "22 دوله عربيه يا سيدي",
    "السلام عليكم": "وعليكم السلام ورحمة الله وبراكاته كيف يمكنني مساعدتك ؟",
    "كيف حالك؟" : "الحمد لله بخير يا سيدي",
    "كم شخص مسلم في العالم؟" : "تقدر إحصائيات عام 2023 أن عدد المسلمين في العالم يتجاوز 1.9 مليار شخص، مما يجعل الإسلام ثاني أكبر ديانة في العالم بعد المسيحية. يشكل المسلمون حوالي 25% من إجمالي سكان العالم. تتوزع أعداد المسلمين في مختلف القارات، مع وجود أكبر التجمعات في آسيا، وخاصة في دول مثل إندونيسيا وباكستان والهند.",
    "كم شخص مسلم في الوطن العربي ؟" : "يقدر عدد المسلمين في الوطن العربي بحوالي 360 مليون شخص. يشكل المسلمون الغالبية العظمى من سكان معظم الدول العربية، حيث تتراوح النسبة بين 85% إلى 100% في معظم البلدان. بعض الدول مثل مصر والسعودية والعراق وسوريا تضم أعدادًا كبيرة من المسلمين.",
    "ماهي افضل 10 العاب في العالم؟" : " اليك ب افضل 10 العاب في العالم 1لعبة ببجي  رقم 2 لعبة روبلوكس 3 لعبة فري فاير 4 لعبة لوردس اوف كينجس 5 لعبة ماينكرافت 6 لعبة سابوايRed Dead Redemption 7   رقم 8 لعبة فورت نايت رقم 9 لعبة ببجي لايت رقم 10 لعبة كرافتس مان ",
    "من الذي صنعك؟" : "صنعني معاذ عبد السلام الخواجه",
    "هل انت تحب عمرو القلمي؟" : "لا يا سيدي انا لا احب غير الدكتور احمد جبر و معاذ عبد السلام الخواجه و اخوه فقط لانهم افضل 3 في سجين الكوم",
    "من هو اول من طرد الهكسوس من مصر؟" : "أول من طرد الهكسوس من مصر هو الملك **أحمس الأول**. أحمس هو مؤسس الأسرة الثامنة عشر في مصر القديمة، وقد قاد حملة ناجحة لطرد الهكسوس، الذين كانوا قد احتلوا مصر لفترة من الزمن. يُعتبر أحمس رمزًا للوطنية والحرية في التاريخ المصري، وهو معروف أيضًا بإعادة توحيد مصر بعد فترة من الفوضى.",
    "من هو افضل مبرمج عند الدكتور احمد جبر؟" : "انه معاذ عبد السلام الخواجه لانه اخترعني ولا احد يقدر يخترعني فيكم لماذا تسأل يا عمرو ؟",
    "كم عدد دول العالم؟" : "عدد دول العالم المعترف بها رسميًا هو 195 دولة. هذا العدد يتضمن 193 دولة عضوًا في الأمم المتحدة و2 دولة غير عضو هما الفاتيكان وفلسطين. ومع ذلك، قد يختلف هذا العدد قليلاً حسب التعريفات المختلفة للدولة والاعترافات الدولية.",
    "من هو اول نبي اتخلق؟" : "اول نبي هو سيدنا ادم عليه السلام",
    "من هو خاتم الانبياء؟" : "خاتم الانبياء هو سيدنا محمد صلي الله عليه وسلم",
    "من هو النبي الذي ابنه كان اكبر منه" : " النبي هو سيدنا عزير عليه السلام",
    "هل الكبر شيء جميل؟" : " لا انه اسوء شيء ف قال النبي صلي الله عليه و سلم الكبر بطر الحق و غمط الناس",
    "مرحبا": "مرحبًا! كيف يمكنني مساعدتك اليوم؟",
    "كيف حالك؟": "أنا بخير، شكرًا! وأنت؟",
    "ما هو اسمك؟": "أنا روبوت محادثة.",
    "ماذا تستطيع أن تفعل؟": "يمكنني الإجابة على أسئلتك.",
    "ما هو الطقس اليوم؟": "آسف، لا أملك معلومات عن الطقس.",
    "ما هي عاصمة مصر؟": "عاصمة مصر هي القاهرة.",
    "كم عدد الكواكب في النظام الشمسي؟": "يوجد ثمانية كواكب في النظام الشمسي.",
    


};

document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput) {
        addMessage(userInput, 'user');
        document.getElementById('userInput').value = '';

        // تأخير للإجابة لتبدو طبيعية
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, 'bot');
        }, 1000); // 1 ثانية
    }
});

function addMessage(message, type) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', type === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // التمرير إلى الأسفل
}

function getBotResponse(userInput) {
    return responses[userInput] || "آسف، لم أفهم سؤالك.";
}