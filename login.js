document.getElementById('reg-btn').addEventListener('click', function(){
    document.getElementById('register-box').style.display='inline';
    document.getElementById('login-box').style.display='none';
})
document.getElementById('log-btn').addEventListener('click', function(){
    document.getElementById('register-box').style.display='none';
    document.getElementById('login-box').style.display='inline';
})
