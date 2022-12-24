function register() {
    var ipemail = document.querySelector(".email");
    var ipusername = document.querySelector(".username");
    var ippassword = document.querySelector(".password");
    var gender = document.getElementsByName("gender");
    var genders = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            genders = gender[i].value;
        }
    }

    var ipbirthday = document.querySelector('input[name="birthday"]');


    if (
        ipemail.value === "" ||
        ipusername.value === "" ||
        ippassword.value === ""

    ) {
        alert("vui lòng không để trống");
        window.location.href = "sign_up.html";
    } else {
        // array user
        var user = {
            email: ipemail.value,
            username: ipusername.value,
            gender: genders,
            birthday: ipbirthday.value,
            password: ippassword.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(ipusername.value, json);
        alert("Đăng Ký Thành Công.");
        window.location.href = "home.html";
    }
};

function login() {
    event.preventDefault();

    var ipusername = document.querySelector(".username");
    var ippassword = document.querySelector(".password");
    if (ipusername.value === "" || ippassword.value === "") {
        alert("vui lòng không để trống");
    } else {
        const user = JSON.parse(localStorage.getItem(ipusername.value));
        if (
            user.username === ipusername.value && user.password === ippassword.value
        ) {
            // alert("Đăng Nhập Thành Công");
            window.location.href = "home.html";
        } else {
            alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.");
        }
    }

};