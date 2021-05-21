$(function() {
$("#myForm").validate({
    //규칙, 메세지
    rules:{
        username:{
            required:true,
            minlength:2,
            maxlength:4
        },
        password:{
            required:true,
            rangelength:[8,15]
        },
        confirm_password:{
            required:true,
            rangelength:[8,15],
            equalTo:"#password"
        },
        email:{
            required:true,
            email:true
        },
        policy:"required",
        topic:{
            required:"#newsletter:checked",
            minlength:2
        }
    },
    //메세지
    messages:{
        username:{
            required:"이름은 필수 요소입니다.",
            minlength:"이름은 최소 2자리여야 합니다.",
            maxlength:"이름은 최대 4자리를 넘을 수 없습니다."
        },
        password:{
            required:"비밀번호는 필수 요소입니다.",
            rangelength:"비밀번호는 8~15자리로 작성해주세요"
        },
        confirm_password:{
            required:"비밀번호는 필수 요소입니다.",
            rangelength:"비밀번호는 8~15자리로 작성해주세요",
            equalTo:"이전 비밀번호와 다릅니다."
        },
        email:{
            required:"이메일은 필수 요소입니다.",
            eamil:"이메일 형식을 확인해 주세요"
        },
        policy:"우리의 정책에 동의를 필요로 합니다.",
        topic:"관심사를 적어도 2개는 표시하세요"
    },
    errorElement:"em",
    errorPlacement:function(error,element){
        error.addClass("help-block");
        if(element.prop("type") == "checkbox"){
            error.insertAfter(element.next("label"));
        }else{
            error.insertAfter(element);
        }
    }
  });

  $("#newsletter").click(function(){
      
    let topics = $("#newsletter_topics");
    if(topics.css("display")=="none"){
        $(topics).css("display","block");
    }else{
        $(topics).css("display","none");
    }

  })
})

