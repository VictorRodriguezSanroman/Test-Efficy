const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor() {

    }
    start() {
        // Start modifying the form elements here!
        // You are allowed to add extra methods and properties to this class
        const select = document.getElementsByName('status');
        const form = document.getElementsByTagName('form');
        const divOutput = document.querySelector('.output');
        let option;

        //Funtion to create tag options on the form
        const createOption = (valor) => {
          option = document.createElement('option');
          option.value = oppoStatus[valor].K_OPPO_STATUS;
          option.setAttribute('id', oppoStatus[valor].K_OPPO_STATUS);
          option.innerHTML = oppoStatus[valor].STATUS;
          select[0].appendChild(option);
        }      

        //Funtion to change value input
        const changeValue = () => {
          const input = document.getElementsByName('success');
          console.log(select[0].value);

            if(select[0].value == 1){
              input[0].value = oppoStatus[0].SUCCESS;
            }else if(select[0].value == 2){
              input[0].value = oppoStatus[1].SUCCESS;
            }else if(select[0].value == 3){
              input[0].value = oppoStatus[2].SUCCESS;
            }else if(select[0].value == 4){
              input[0].value = oppoStatus[3].SUCCESS;
            }else if(select[0].value == 5){
              input[0].value = oppoStatus[4].SUCCESS;
            }    
        }

        //Funtion to show JSON when we do submit
        const showData = () => {
          event.preventDefault();//avoid page reload when submitting

          if(select[0].value == 1){
            divOutput.innerHTML = `{"status": ${oppoStatus[0].K_OPPO_STATUS},"success":${oppoStatus[0].SUCCESS}}`;
          }else if(select[0].value == 2){
            divOutput.innerHTML = `{"status": ${oppoStatus[1].K_OPPO_STATUS},"success":${oppoStatus[1].SUCCESS}}`;
          }else if(select[0].value == 3){
            divOutput.innerHTML = `{"status": ${oppoStatus[2].K_OPPO_STATUS},"success":${oppoStatus[2].SUCCESS}}`;
          }else if(select[0].value == 4){
            divOutput.innerHTML = `{"status": ${oppoStatus[3].K_OPPO_STATUS},"success":${oppoStatus[3].SUCCESS}}`;
          }else if(select[0].value == 5){
            divOutput.innerHTML = `{"status": ${oppoStatus[4].K_OPPO_STATUS}, "success":${oppoStatus[4].SUCCESS}}`;
          }         
        }
        
        //execute to add each of the array options to the select tag with a loop for
        for( let i = 0; i < oppoStatus.length; i++) {
          createOption(i);
        }  
        //Events
        select[0].addEventListener("change",changeValue,false);
        form[0].addEventListener("submit",showData, false);

    }
  }
  
  const main = new Module();
  main.start();


  