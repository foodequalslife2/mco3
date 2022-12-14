//references
//https://www.w3schools.com/jquery/jquery_css.asp 
//https://teamtreehouse.com/community/how-to-append-a-lot-of-divs-with-a-unique-ids
//https://api.jquery.com/append/
var i = 2;
var text = document.getElementById('writing');
var backup = text.getAttribute('placeholder');
var btn = document.querySelector('.btn-commenting');
var clear = document.getElementById('cancel');


text.onfocus = function(){
    this.setAttribute('placeholder', '');
    btn.style.display = 'block';
}

text.onblur = function(){
    this.setAttribute('placeholder', backup);
}

cancel.onclick = function(){
    btn.style.display = 'none';
    text.value = '';
}


//jquery code

$(document).ready(function() {
  
	$('#post').click(function() {
       
		var comment = $('#writing').val();
        var newdiv1 = $('.comment').clone();  // child new commenter card
        var newdiv2 = $('.info-rating').clone(); //child new commenter as in yung photo and yung name and link
        var newdiv3 = $('.user-comment').clone(); //child new comment as in yung text
        var newdiv4 = $('.reaction').clone(); //child footers
    
        $(newdiv1).empty();
        $(newdiv3).empty();
        i++;
        newdiv1.attr("class", "comment" +i); //correct ata
        newdiv2.attr("class", "info-rating" + i);
        newdiv3.attr("class", "user-comment" + i);
        newdiv4.attr("class", "reaction" + i);

        //making the styles of the code again cause every container is now unique
        $(newdiv1).css
            ({
           
                "background-color": "#f8f8f8",
                "margin-left": "50",
                "margin-right": "50",
                "border-radius": "5px",
                "margin-bottom": "10",
            })

        $(newdiv2).css
            ({
                "display": "flex", 
            
                "justify-content": "space-between"
          
            })
        
        $(newdiv3).css
            ({
       

                "margin-left": "52",
                "margin-right": "20",
                "margin-bottom": "10",
        
            }) 

        $(newdiv4).css
            ({
         

                "background-color": "#f8f8f8",
                "display": "flex",  
                "flex-direction": "row",
                "justify-content": "flex-end"

            })

   


            $('.comment-section').append(newdiv1);//parent 

            $(newdiv1).append(newdiv2);//parent place it in the new comment-card
            $(newdiv1).append(newdiv3);//parent
            $(newdiv1).append(newdiv4);//parent
            

		$(newdiv3).text(comment).append();


		$('#post').attr('enable', 'true');
		$('#writing').val('');


    
	});



});


