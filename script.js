var main = function() {
  //In script.js, attach a click event handler to the <a class="more-btn"> element.When clicked, toggle the sibling <ul class="more-menu"> element
  $('.more-btn').on('click', (event)=>{
$(event.currentTarget).siblings('.more-menu').toggle();
  })
  //Attach a click event handler to the <li class="share"> element. When clicked, toggle the corresponding <li class="share-menu"> element.
$('.share').on('click', (event)=>{
$(event.currentTarget).next().toggle();
  });
  //Attach a click event handler to the notification bell. When clicked, toggle the class active.
$('.notification').on('click', (event)=>{
$(event.currentTarget).toggleClass('active');
  });
};

$(document).ready(main);
