document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
  
    if (user === "admin" && pass === "1234") {
      // إذا المعلومات صحيحة، يفتح لوحة التحكم
      window.location.href = "homepage.html";
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  });
  