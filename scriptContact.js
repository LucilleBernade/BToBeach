/***Contact***/
const message =
  ` π Merci de nous avoir transmis votre demande.
    Nous vous contacterons pour votre prochaine escale 
    dans les meilleurs dΓ©lai. π`;
    document.querySelector("#contactform");
    document.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


  let periode = document.querySelector('#periode');

  periode.addEventListener('change', (event)=>{
    event.target.value 

    switch (periode.value){
    case 'periode1':
      alert('π’ Pour cette periode le prix sera de : 3000 β¬ π’');
    break
      case 'periode2':
        alert('π’ Pour cette periode le prix sera de : 6000 β¬ π’');
      break;
        case 'periode3':
          alert('π’ Pour cette periode le prix sera de : 9000 β¬ π’ ');
        break
          case 'periode4':
            alert('π’ Pour cette periode le prix sera de : 10000 β¬ π’'); 
          break
    default: alert('π’ Please select period π’');
      break;
  }
  })

  
  
