function dados(){
    const ds = [
        {id:1,login:"dimebag",senha:"cowboys12",email:"dimebagfromhell@hotmail.com"},
        {id:2,login:"phil",senha:"cowboys123",email:"philfromhell@hotmail.com"},
        {id:3,login:"rex",senha:"cowboys1234",email:"rexfromhell@hotmail.com"}
    ]
    return ds
}

function login(user,password){
    const usuarios = dados
    for(let i=0;i<usuarios.length;i++){
        if(user == usuarios[i].login && password == usuarios[i].senha){
            alert("Login Bem Sucedido.")
            break
        }
    }       
}

function logar(){
    let lg = document.getElementById("login").value
    let ps = document.getElementById("senha").value
    login(lg,sn)
}
