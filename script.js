function checkPassword() {
    // كلمة السر الصحيحة التي طلبتها
    const correctPassword = "17112007"; 
    
    // الحصول على القيمة التي أدخلها المستخدم
    const enteredPassword = document.getElementById("secretPassword").value;
    
    // العناصر التي سنتحكم في ظهورها وإخفائها
    const secretContent = document.getElementById("secretContent");
    const messageBox = document.querySelector(".message-box");
    
    if (enteredPassword === correctPassword) {
        // إذا كانت كلمة السر صحيحة
        
        // إخفاء صندوق إدخال كلمة السر
        messageBox.style.display = 'none';
        
        // إظهار المحتوى السري
        secretContent.style.display = 'block';
        
        // تعديلات جمالية بسيطة عند النجاح
        document.body.style.backgroundColor = '#fffafa'; 
        document.querySelector('.container').style.boxShadow = '0 8px 30px rgba(255, 69, 0, 0.3)';
        
    } else {
        // إذا كانت كلمة السر خاطئة
        
        // رسالة تنبيه للمستخدم
        alert("كلمة السر خاطئة، حاولي مجدداً!");
        
        // تفريغ حقل كلمة السر
        document.getElementById("secretPassword").value = "";
    }
}
