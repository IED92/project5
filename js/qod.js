/* eslint-disable no-console */
(function($){

  // $('body').append('Hello World');
  // Your code goes here

  // 1. get request to grab random post and append to the dom
    
    // Add click event for "Show me another" button and then run ajax code below
      let lastPage = '';

    $('#new-quote-button').click(function () {
      event.preventDefault();

      lastPage = document.URL;

    $.ajax({
      method: 'GET',
      url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    }).done(function(data){
      const post = data[0];
      console.log(post);
      history.pushState(null, null, qod_vars.home_url + '/' + post.slug);
      // 1st value is an object that manages State
      // 2nd value is the url
      // 3rd value is url in browser
    }).fail(function(error){
      console.log('An error has occurred', error);
    })
    $(window).on('popstate', function(){
      window.location.replace(lastPage);
    })
    // Update page when back button is clicked
  // 2. post a new quote using the post method
  // Using a form to submit a qoute to a .submit event
})})(jQuery);