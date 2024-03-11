function banco(){
    const ds = [
                 {id:1,login:"ringo",senha:"12345",email:"ringo@gmail.com",fone:"4455-7788"},
                 {id:2,login:"paul",senha:"2222",email:"paul@gmail.com",fone:"4457-7788"},
                 {id:3,login:"john",senha:"3333",email:"john@gmail.com",fone:"4433-7788"} 
               ]
  const dados = JSON.stringify(ds)
  localStorage.setItem("dados", dados)
  return dados
}

function cadCliente(){
    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let pass = document.getElementById("senha").value
    let em = document.getElementById("email").value
    let fn = document.getElementById("fone").value

    let meuId = parseInt(id)

    const ds = {id:meuId,login:lg,senha:pass,email:em,fone:fn}

    alert(ds)
}