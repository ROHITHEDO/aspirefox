$(function(){

    var registerform= $("#registration")
    if(registerform.length){
        registerform.validate({
            
            rules:{
                email:{
                    required:true,
                    email:true
                },
                password:{
                    required:true
                },
                passwordre:{
                    required:true,
                    equalTO:'#password'
                },
                name:{
                    required:true
                },
                gender:{
                    required:true
                },
                hobbies: {
                    required: true
                },

            },
            messages:{
                // give messages to the names of the input
                // if no input/propr input then display these messages
                email:{
                    required:`email is mandatory`,
                    email:`please enter valid email bro`
                },
                password:{
                    required:`password is manndatory`
                },
                passwordre:{
                    required:`please re-enter your password`,
                    equalTO:`please enter the same password`
                },
                lastname:{
                    required:`lastname is mandatory`
                },
                name:{
                    required:`name is mandatory`
                },
                hobbies:{
                    required:`checkbox is mandatory`
                }
            },
            // for checkbox and radio buttons.
            errorPlacement: function(error, element) 
            {
              console.log(error);
              if (element.is(":radio")) 
              {
                  error.appendTo(element.parents('.gender'));
              }
              else if(element.is(":checkbox")){
                  error.appendTo(element.parents('.hobbies'));
              }
              else 
              { 
                  error.insertAfter( element );
              }
              
             }

            


        });
    }

})
// 