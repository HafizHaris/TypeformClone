$('.select-dropdown__button').on('click', function(){
	$('.select-dropdown__list').toggleClass('active');
});
$('.select-dropdown__list-item').on('click', function(){
	var itemValue = $(this).data('value');
	console.log(itemValue);
	$('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
	$('.select-dropdown__list').toggleClass('active');
});

const container = document.getElementById("btnContainer");
const btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function toggleSidebar(){
	const SidebarClassList = document.getElementById("sidebar").classList;
	if (SidebarClassList.contains("open"))
		SidebarClassList.remove("open");
	else
		SidebarClassList.add("open");
}