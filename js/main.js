(function(e){
	users=['hoa','hoa2','hoabv']
	$('#register').validate({
		rules: {
                name: "required",
                Username: "required",
                Password: {
                    required: true,
                    regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/
                }
            },
            messages: {
                name: "Vui lòng nhập họ và tên",
                Username: "Vui lòng nhập Username",
                Password: {
                    required: "Vui lòng nhập Password",
                    regex: 'Password phải bao gồm cả Number, Alphabets, Ký tự đặc biệt và từ 9 ký tự trở nên'
                }
            },submitHandler: function (form) {
	            submit();
	        }
	});
	$('#register').keyup(function(event) {
		$('#username_exist').html("");
		$('#message').html("");
	});
	function submit() {
		$('#username_exist').html("");
		$('#message').html("");
		let value =true;
		for (let i = users.length - 1; i >= 0; i--) {
			if(users[i]==$('[name=Username]').val()){
				value=false;
				break;
			}
		}
		if(value){
			$('#message').html("Đăng kí thành công");
			users.push($('[name=Username]').val());
		}
		else {
			$('#username_exist').html("Username đã tồn tại!!");
		}
	};
	$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    },
    "Password phải bao gồm cả Number, Alphabets, Ký tự đặc biệt và từ 9 ký tự trở nên!"
);

}(jQuery));