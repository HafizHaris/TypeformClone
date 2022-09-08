$('.select-dropdown__button').on('click', function(){
	$('.select-dropdown__list').toggleClass('active');
});

$('.select-dropdown__list-item').on('click', function(){
	const itemValue = $(this).data('value');
	$('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
	$('.select-dropdown__list').toggleClass('active');
});

const container = document.getElementById("btnContainer");
const btns = container.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const toggleSidebar = () => {
	const SidebarClassList = document.getElementById("sidebar").classList;
	if (SidebarClassList.contains("open"))
		SidebarClassList.remove("open");
	else
		SidebarClassList.add("open");
}

const appendForm = (form) => {
	const formCard = `
		<div class="col-md-2 mb-3">
		  <a href="createform.html?fid=${form.id}">
		  <div class="d-flex justify-content-center align-items-center form-card">
			<h5>${form.name}</h5>
			<div></div>
		  </div>
		</a>
		</div>`;
	  $('#forms').append(formCard);
}

$(document).ready(function() {
	let forms = JSON.parse(window.localStorage.getItem(`forms`));
	if (forms != null) {
	  forms.forEach(form => appendForm(form));
	}else{
	  $("#forms-preview").css('display','none');
	  $("#welcome").css('display','flex');
	}
});