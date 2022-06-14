$(document).ready(function () {
    // $("button").click(function () {
    //     $("p").hide();
    // });

    // page...button..more inside functionality


    $("p").dblclick(function () {
        $(this).hide();
    });



    $("#p1").mouseenter(function () 
    {
        // alert("you entered")
    });



    $('#p2').mouseup(function () {
        // alert("thank you")
    })



    $("#p3").hover(function () {
        // alert("hey man");
    },
        function () {
            // alert("bye man.");
        });


    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "blue");
    });

    $("#hide").click(function () {
        $("#p4").hide(2000);
    });
    $("#show").click(function () {
        $("#p4").show(1000);
    });

    $('#btn1').click(function(){
        $(".toggle").toggle(2000);
    })

    $('#btn2').click(function(){
        $('#div1').fadeToggle();
        $('#div2').fadeToggle("slow");
        $('#div3').fadeToggle();
    })

    
    $('#flip').click(function(){
        $('#panel').slideToggle();

    });

    $('#btn3').click(function(){
        $('#div4').animate({left:'250px'})
    })

    $("#btn4").click(function(){
        $("#div5").animate({
            left:'250px',
            opacity:0.5,
            height:'+=150px',
            width:'+=150px'
        })
    })

    $("#btn5").click(function(){
        // var div = $("div");
        
    //    $("div").animate({});
        
        $("#div6").animate({height: '300px', opacity: '0.4'}, "slow");
        $("#div6").animate({width: '300px', opacity: '0.8'}, "slow");
        $("#div6").animate({height: '100px', opacity: '0.4'}, "slow");
        $("#div6").animate({width: '100px', opacity: '0.8'}, "slow");
        $("#div6").animate({fontSize:'3em'},"slow");

      });

    //   CALLLL BACK FUNCTIONNNN
      $("#btn6").click(function(){
          $("#p5").hide("slow",function(){
              alert("this paragrapg is now hidden");
          })
      })

    //   CHAINING
    $("#btn7").click(function(){
        $("#p7").css("color","red").slideUp(2000).slideDown(2000);
    })

    $("#btn8").click(function(){
        alert("message:"+ $("#p8").text());
    })

    $("#btn9").click(function(){
        alert("message2:"+ $("#p8").html());
    })


    $("#btn10").click(function(){
        $("#test1").text("hello rohith");
    })

    $("#btn11").click(function(){
        $("#test2").html("<b> whats up rohith  </b>" );
    })

    $("#btn12").click(function(){
        $("#test3").val("roooooooooohith");
    })

    // callllllllllllllllbackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    $("#btn13").click(function()
    {
    $("#test4").text(function(i, origText)
    
    {
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
    })


    $("#btn14").click(function(){
        $("ol").append("<li>yo thanks </li>");
        // <li></li> it gives u numbering and line by line written.
    })

    $("#btn15").click(function(){
        $(".para,h1,h2").toggleClass("blue");
        $("#divimp").toggleClass("important");
    })

    // dimensionssssssssssssssssssssssssss
    $("#btn16").click(function(){
        var txt="";
        txt+="width is:"+ $("#div10").width() + "</br>"
        txt+="height is"+ $("#div10").height() + "</br>"
        $("#div10").html(txt);
    })

    // aaaaaamaaaaaaaaazing trick.
    // $("#btn17").click(function(){
        
    //     $("#div11").load("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001",function (response,status) {
    //         if(status == "success")
    //     alert("External content loaded successfully!");
    //         localStorage.setItem("api",response);
    //     });
        
    // })

    $("#btn17").click(function(){
        $.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001", function(data, status){
         $("#div12").text(JSON.stringify(data));
         localStorage.setItem("apijit",JSON.stringify(data));
        });
      });

      $("#btn18").click(function(){
        $.post("https://reqres.in/api/users",
        {
          name: "Donald Duck",
          city: "Duckburg"
        },
        function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
        });
      });


});
    function afterText(){
        // var txt1="";
        // var txt2=""
        // var txt3=""
        $("img").after(`<b>i</b>`,`<i>love</i>`,`<b>jQuery</b>`);
    }
    






      

    





