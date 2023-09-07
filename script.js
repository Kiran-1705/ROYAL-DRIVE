$(document).ready(function(){
 $("#sellform").validate({
    rules:{
        inputName4:{
        required:true,
        minlength:5
    },
    inputEmail4:{
        required: true,
        email: true
    },
    inputAddress:{
        required: true,
        minlength:10
    },
    inputBrand:{
        required: true,
    },
    inputModel:{
        required: true,
    },
    inputVariant:{
        required: true,
    },
    inputPrice:{
        required: true,
    },
    inputKm:{
        required: true,
    }
  }
 })

})