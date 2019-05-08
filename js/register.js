$(function(){
  
    function authen(){
        var username = $('#exampleInputEmail').val();
        var password = $('#exampleInputPassword').val();
        var repeatpassword = $('#exampleRepeatPassword').val();
        if(password =='12345'){
            window.location.href='dashboard.html';
        }
        else{
            $('#authenModal').modal();

        }
    }
});