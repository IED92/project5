(function($){
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
      $('.entry-content p').html(post.content.rendered);
      $('.entry-meta h2').html(post.title.rendered);
      if (post._qod_source_url === '') {
        if (post._qod_source !== '') {
          $('.source').html(' ,' + post._qod_source);
        } else {
          $('.source').html('');
        }}
        else {
          $('.source').html(', <a href="' + post._qod_quote_source_url + '">' + post._qod_quote_source + '</a>');
        }
      }).fail(function(error){
      console.log('An error has occurred', error);
    });

    $(window).on('popstate', function(){
      window.location.replace(lastPage);
    })
    // Update page when back button is clicked
  // 2. post a new quote using the post method
  // Using a form to submit a qoute to a .submit event

})

$('#submit-button').click(function (event) {

event.preventDefault();
  $.ajax({
    method: 'post',
    url: qod_vars.rest_url + 'wp/v2/posts/',
    data: {
      title: $('#quote-author').val(),
      content: $('#quote-content').val(),
      _qod_quote_source: $('#quote_source').val(),
      _qod_quote_source_url: $('#quote-author').val()
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader('X-WP-Nonce', qod_vars.nonce);
    }
  }).done(function (response) {
    console.log(response);
    $('#submit-message').text('Thank You for your submission!');
  }).fail(error => console.log(error));
    $('#submit-message').text('Sorry, an error occurred!');
});

})(jQuery);