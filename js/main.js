(function($) {

	$.fn.requestForm = function(){

		var element=this;

		var elementClass = '.'+element.selector;

		var elementToShow = '#'+element.selector + '-link-';

		var buttonToShow = '#'+element.selector + '-button-';

		var elementClassAll = elementClass + '-class';

		$(elementClass+' li').each(function(){

			$(this).click(function(){

				var datalink = $(this).attr('data-link');

				$(elementClass+' li').removeClass('active');

				$(this).addClass('active');

				$(elementClassAll).fadeOut();

				$(elementToShow+datalink).fadeIn();
				
				$(buttonToShow+datalink).fadeIn();

			});

		});

	}

	$.fn.modalCustom = function(){

		var element=this;

		var elementClass = '.'+element.selector;

		$(elementClass).click(function(){

			var datamodallink = $(this).attr('data-modal-link');

			$('.container-fluid').addClass('blur');

			$('#modal-link-'+datamodallink).fadeIn(200);

			$('.modal-container-overlay').show();

		});

		$('.modal-container-overlay,.close-modal').click(function(){

			$('.modal-container').fadeOut(200);

			$('.modal-container-overlay').hide();

			$('.container-fluid').removeClass('blur');

		});
		
	}

	$.fn.nextButtonFunction = function(){

		var element=this;

		var elementID = '#'+element.selector;

		var datalink = $(elementID).attr('data-link');

		

		$(elementID).click(function(){

			var check = false;

			$('.checkThis').each(function(){

				if($(this).val()==""){

					check = true;

				}

			});

			if(check == false){

				$('.new-request-list-class').fadeOut(function(){

					$('#new-request-list-link-'+datalink).fadeIn();

				});


				$('.active').removeClass().addClass('readOnly');

				$("#request2").removeClass().addClass('active');

			}

			

			
		});

	}

	$("#emailButton,#mobileNumber").click(function () {
     
       var id = $(this).attr('id');
        
       var customClass = "."+id+"-form";
  
        var attr = $(customClass).attr('disabled');
    
        if (typeof attr !== typeof undefined && attr !== false) {
            
             $(customClass).removeAttr("disabled");
            
        }else{

            $(customClass).attr("disabled",'true');
        
        }

    });

	$.fn.changePasswordDropdown = function(){

		$('#changePassword').click(function(){

			$('.main-password-container').fadeOut(function(){

				$('.main-list-custom').addClass("list-height-adjust");

				$('.password-show').addClass("showList");

			});
			
		});

		$('#cancelPassword').click(function(){

			$('.password-show').removeClass("showList");

			$('.main-list-custom').removeClass("list-height-adjust");

			setTimeout(function(){

				$('.main-password-container').fadeIn();

			},400);
			

		});

	}

})(jQuery);