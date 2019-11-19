(function($){

  $('body').append('Hello World');
  // Your code goes here

  // 1. get request to grab random post and append to the dom
    
    // Add click event for "Show me another" button and then run ajax code below
      $.ajax({
      method: "GET",
      url: // qod.vars.rest_url + /wp/vs/posts?filter[orderby]=rand&filter[posts_per_page]=1
    })
    $.ajax().done(function(data){
      console.log(data);
    }).fail(function(error){
      console.log(error);
    })
  // 2. post a new quote using the post method
  // Using a form to submit a qoute to a .submit event
})(jQuery);