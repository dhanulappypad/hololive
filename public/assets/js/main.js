
    var $btn = $('.category-btn [data-filter]'),
    $list = $('.category-list [data-category]');

    $btn.on('click', function() {
      var $btnCat = $(this).attr('data-filter');

      $list.removeClass('is-animate');

      if ($btnCat == 'all') {
        $list.show().addClass('is-animate');

      } else {
         $list.hide().removeClass('is-animate').filter('[data-category = "' + $btnCat + '"]').show().addClass('is-animate');
      }
      return false;
    });


    $(".option").on('click', function(){
      alert('asdas');
      $(".option").removeClass("active");
      $(this).addClass("active");
   });

