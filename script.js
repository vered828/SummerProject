var users ={
    FName: 'vered',
    LName: 'rotman',
    UName: 'vero',
    Pass: 'vr2066',
    Pass2: 'vr2066',
    Email: 'veredg828@gmail.com',
    Age: 24
};

    //שם פרטי
    document.getElementById('fn').addEventListener('input', function(){
        const vfn = document.getElementById('fn').value
        if(vfn.length < 2){
            document.getElementById('mfn').innerHTML = 'Minimum 2 letters';
        }else{
            document.getElementById('mfn').innerHTML = '';
        }
    })
    
    //שם משפחה
    document.getElementById('ln').addEventListener('input', function(){
        const vln = document.getElementById('ln').value
        if(vln.length < 2){
            document.getElementById('mln').innerHTML = 'Minimum 2 letters';
        }else{
            document.getElementById('mln').innerHTML = '';
        }
    })

    //שם משתמש
    document.getElementById('un').addEventListener('input', function(){
        const vun = document.getElementById('un').value
        if(users.UName.includes(vun) == true){
            document.getElementById('mun').innerHTML = 'User exists in the system';
        }else{
            document.getElementById('mun').innerHTML = '';
        }
        
        const engl = /^[A-Za-z]+$/;
        if(vun.length < 4 && !engl.test(vun)){
            document.getElementById('mun').innerHTML = 'English letters only and Minimum 4 letters';
        }else if(!engl.test(vun)){
            document.getElementById('mun').innerHTML = 'English letters only';
        }else if(vun.length < 4){
            document.getElementById('mun').innerHTML = 'Minimum 4 letters';
        }else{
            document.getElementById('mun').innerHTML = '';
        }
    })

    //סיסמה
    document.getElementById('ps').addEventListener('input', function(){
        const vps = document.getElementById('ps').value
        const el = /[A-Za-z]/;
        const nl = /[0-9]/;
        if(
            vps.length < 6 &&
            !el.test(vps) ||
            !nl.test(vps))
        ){
            document.getElementById('mps').innerHTML = 'Must contain letters and numbers and Minimum 6 letters';
        }else if(vps.length < 6){
            document.getElementById('mps').innerHTML = 'Minimum 6 letters';
        }else if(
            (!el.test(vps) ||
            !nl.test(vps))
        ){
            document.getElementById('mps').innerHTML = 'Must contain letters and numbers';           
        }else{
            document.getElementById('mps').innerHTML = '';
        }
    })
    
    //אימות סיסמה
    document.getElementById('ps2').addEventListener('input', function(){
        const vps2 = document.getElementById('ps2').value
        if(vps2 != vps){
            document.getElementById('mps2').innerHTML = 'Passwords do not match';
        }else{
            document.getElementById('mps2').innerHTML = '';

        }
    })
    

    //אימייל
    document.getElementById('em').addEventListener('input', function(){
        const vem = document.getElementById('em').value
        const eml = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!eml.test(vem)){
            document.getElementById('mem').innerHTML = 'Invalid email'
        }else{
            document.getElementById('mem').innerHTML = '';
        }
    })

    //גיל
    document.getElementById('ag').addEventListener('input', function(){
        const vag = document.getElementById('ag').value
        if(vag < 18){
            document.getElementById('mag').innerHTML = 'too young'
        }else if(vag > 65){
            document.getElementById('mag').innerHTML = 'too old'
        }else{
            document.getElementById('mag').innerHTML = '';
            }
    })

    //לחצן שליחה
    document.getElementById('bt').addEventListener('click', function(){
    if(x == 8){
        const data = {
            FName: document.getElementById('fn').value,
            LName: document.getElementById('ln').value,
            UName: document.getElementById('un').value,
            Pass: document.getElementById('ps').value,
            Pass2: document.getElementById('ps2').value,
            Email: document.getElementById('em').value,
            Age: document.getElementById('ag').value
        };

    users.push(data);
    };
})