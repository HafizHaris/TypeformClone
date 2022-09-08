let formId = 0;
const QuestionTypes = Object.freeze({
    MultipleChoice : {name:"MultipleChoice", defaultTitle:"Multiple Choice - Select one from all", html: '<div class="multiple-choice"><span>A</span>Opton A</div><div class="multiple-choice"><span>B</span>Opton B</div><div class="multiple-choice"><span>C</span>Opton C</div>'},
    ShortText : {name:"ShortText", defaultTitle:"Short Text Title", html: '<input type="text" class="short-text" placeholder="Enter your answer in short text">'},
    LongText : {name:"LongText", defaultTitle:"Long Text Title is here", html: '<textarea class="long-text" placeholder="Enter your answer in long text" rows="3"></textarea>'},
    Statement : {name:"Statement", defaultTitle:"Statement - Write statment", html: '<h4 class="statement"><span>&#34;</span> Your question here. Recall information with @</h4>'},
    YessNo : {name:"YessNo", defaultTitle:"Yess/No - select yess or no", html: '<div class="yess-no"><span>Y </span>Yess</div><div class="yess-no"><span>N</span>No</div>'},
    Email : {name:"Email", defaultTitle:"Email - Enter your email", html: '<input type="email" class="short-text" placeholder="name@example.com">'},
    PhoneNumber : {name:"PhoneNumber", defaultTitle:"Phone Number - Enter your number", html: '<input type="text" class="short-text" placeholder="(201 555-0123)">'},
    Website : {name:"Website", defaultTitle:"Website - Add your website", html: '<input type="text" class="short-text" placeholder="https://example.com">'},
    NumberWebsite : {name:"Number", defaultTitle:"Number - Add any number", html: '<input type="number" class="short-text" placeholder="Write Number">'}
});

const getQuestionTypeValues = (type) => {
    let values = [];
    switch(type){
        case QuestionTypes.MultipleChoice.name:
            values = QuestionTypes.MultipleChoice
            break;
        case QuestionTypes.ShortText.name:
            values = QuestionTypes.ShortText
            break;
        case QuestionTypes.LongText.name:
            values = QuestionTypes.LongText
            break;
        case QuestionTypes.Statement.name:
            values = QuestionTypes.Statement
            break;
        case QuestionTypes.YessNo.name:
            values = QuestionTypes.YessNo
            break;
        case QuestionTypes.Email.name:
            values = QuestionTypes.Email
            break;
            case QuestionTypes.PhoneNumber.name:
            values = QuestionTypes.PhoneNumber
            break;
        case QuestionTypes.Website.name:
            values = QuestionTypes.Website
            break;
        case QuestionTypes.NumberWebsite.name:
            values = QuestionTypes.NumberWebsite
            break;
    }
    return values;
}

$('.select-dropdown__button').on('click', function(){
	$('.select-dropdown__list').toggleClass('active');
});

$('.select-dropdown__list-item').on('click', function(){
	const itemValue = $(this).data('value');
	$('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
	$('.select-dropdown__list').toggleClass('active');
});
const toggleSidebar = () => {
	const SidebarClassList = document.getElementById("sidebar").classList;
	if (SidebarClassList.contains("open"))
		SidebarClassList.remove("open");
	else
		SidebarClassList.add("open");
}

const generateId = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const toggleQuestionMenu = () => {
	const SidebarClassList = document.getElementById("question-popup").classList;
	if (SidebarClassList.contains("open"))
		SidebarClassList.remove("open");
	else
		SidebarClassList.add("open");
}


const addForm = () => {
    let forms = JSON.parse(window.localStorage.getItem("forms"));
    if(forms == null) forms=[];
    const id = generateId();
    const form = {
      id: id,
      name: "My typeform",
      questions: [
        {type:"ShortText", title: QuestionTypes.ShortText.defaultTitle}
      ]
    }
    forms.push(form);
    window.localStorage.setItem("forms", JSON.stringify(forms));
    return id;
}

const getForm = () => {
    let forms = JSON.parse(window.localStorage.getItem("forms"));
    return forms.filter(
        function(form){ return form.id == formId }
    )[0];
}

const updateSlideArea = (active) => {
    const form = getForm();
    $('#slide-area #title').html(form.questions[active-1].title);
    $('#slide-area #content').html(getQuestionTypeValues(form.questions[active-1].type).html);
}

const loadForm = (active = 1) => {
    const form = getForm();
    let slideNumber = 1;
    let isActive = "";
    $('#slides-list').html("");
    for(let question of form.questions){
        if(slideNumber == active) isActive="active";
        else isActive="";
        const slides = `
        <li class="p-3 ${isActive}" onclick="loadForm(${slideNumber})"> 
        <div class="d-flex justify-content-start align-items-center ">
            <div class="icon d-inline">
                <i class="fa fa-bars-staggered mr-2"></i> <span>${slideNumber++}</span>
            </div>
            <div class="ml-3 slide-name">
                <p class="d-inline mb-0">${question.title}</p>
            </div>
        </div>
        </li>`;
        $('#slides-list').append(slides);
    }
    updateSlideArea(active);
    toggleSidebar();
  }

  const addQuestion = (type) => {
    const questionValues = getQuestionTypeValues(type);
    let forms = JSON.parse(window.localStorage.getItem(`forms`));
    forms.forEach(function(a){
        if(a.id == formId){
            a.questions.push({type: type, title: questionValues.defaultTitle});
        }
    });
    
    window.localStorage.setItem("forms", JSON.stringify(forms));
    document.getElementById("question-popup").classList.remove("open");
    loadForm(getForm().questions.length);
  }

  $(document).ready(function() {
    const url = new URL(window.location.href); 
    formId = url.searchParams.get("fid");
    if(formId == null){
        formId = addForm();
        window.location.href = `createform.html?fid=${formId}`;
    }
    loadForm();
  });