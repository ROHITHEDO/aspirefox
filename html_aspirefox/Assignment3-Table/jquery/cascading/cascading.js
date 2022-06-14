console.log("hey");
let auth_token;
$(document).ready(function () {

  $.ajax({
    type: 'get',
    url: 'https://www.universal-tutorial.com/api/getaccesstoken',
    headers: {
      "Accept": "application/json",
      "api-token": "K1KKBCixyLKgEoj1wFTzE3Gu2OE6b5900E2DP2mS6B_5cFm-Yoa98kE0HsAxsun2IxU",
      "user-email": "alphatesting333@gmail.com"
    },
    success: function (data) {
      auth_token=data.auth_token;
      getcountry(data.auth_token)
      // as soon as we hit ajax,we are again calling getcountry api,called nested api

      // auth token helps to fetch data
    },
    error: function (error) {
      console.log(error);
    }
  })
  $("#country").change(function(){
    // console.log('country changed');
    getState();
  })
  $("#state").change(function(){
    // console.log('country changed');
    getCity();
  })

})

function getcountry(auth_token) {
  $.ajax({
    type: 'get',
    url: 'https://www.universal-tutorial.com/api/countries/',
    headers: {
      "Authorization": "Bearer "+ auth_token,
      "Accept": "application/json"
    },
    success: function (data) {
      data.forEach(element => {
        $("#country").append('<option val="'+ element.country_name +'">'+ element.country_name +'</option>');
        // object.objname ,element acts like a objecct here when nothing is left.
      });
      // console.log(data);
      // getState(auth_token)
    },
    error: function (error) {
      console.log(error);
    }
  })
}

function getState() {
  let country_name = $("#country").val();
  $.ajax({
    type: 'get',
    url: 'https://www.universal-tutorial.com/api/states/' + country_name,
    headers: {
      "Authorization": "Bearer "+ auth_token,
      "Accept": "application/json"
    },
    success: function (data) {$("#state").empty();
      data.forEach(element => {
        $("#state").append('<option val="'+ element.state_name +'">'+ element.state_name +'</option>');
    //  getCity(auth_token);
    });
  },
  error:function(error){
    console.log(error);
  }
  
  })
}
function getCity() {
  let state_name = $("#state").val();
  $.ajax({
    type: 'get',
    url: 'https://www.universal-tutorial.com/api/cities/' + state_name,
    headers: {
      "Authorization": "Bearer "+ auth_token,
      "Accept": "application/json"
    },
    success: function (data){
      $("#city").empty();
      data.forEach(element => {
        $("#city").append('<option val="'+ element.city_name +'">'+ element.city_name +'</option>');
    //  getCity(auth_token);
    });
  },
  error:function(error){
    console.log(error);
  }
  
  })
}

  

