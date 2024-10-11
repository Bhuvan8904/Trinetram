// Landing Page Section
document.getElementById("Open_Menu").addEventListener("click", ()=> {
    document.getElementById("Menu_List").classList.remove("translate-x-10", "opacity-0", "pointer-events-none")    
})
document.getElementById("Close_Menu").addEventListener("click", ()=> {
    document.getElementById("Menu_List").classList.add("translate-x-10", "opacity-0", "pointer-events-none")    
})

document.getElementById("back_to_Home").addEventListener("click", ()=> {
    document.getElementById("Landing_Section").classList.remove("-translate-x-5", "opacity-0", "pointer-events-none")
    document.getElementById("Sign_Login_Section").classList.add("-translate-x-5", "opacity-0", "pointer-events-none", "overflow-hidden")
    document.getElementById("Sign_Login_Section").classList.remove("overflow-x-hidden")
    // document.getElementById("Menu_List").classList.add("translate-x-10", "opacity-0", "pointer-events-none")    
})

// Sign/Login Page Section
document.querySelectorAll(".Switch_Sign_Login_Page").forEach(element => {
    element.addEventListener("click", ()=> {
        if (!document.getElementById("Menu_List").classList.contains("opacity-0")){
            document.getElementById("Menu_List").classList.add("translate-x-10", "opacity-0", "pointer-events-none")    
        }
        document.getElementById("Landing_Section").classList.add("-translate-x-5", "opacity-0", "pointer-events-none")
        document.getElementById("Sign_Login_Section").classList.remove("-translate-x-5", "opacity-0", "pointer-events-none", "overflow-hidden")
        document.getElementById("Sign_Login_Section").classList.add("overflow-x-hidden")
    })
})

document.getElementById("to_Login_Path").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("Sign_Login_Section_Heading").textContent = "Login to your account";
    document.getElementById("Sign_Login_Section_Para").textContent = "Access your DRDO recruitment portal";
    document.getElementById("Sign_Login_Section").scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.getElementById("Sign_Login_Section").classList.add("overflow-y-hidden");
    document.getElementById("Sign_Path").classList.add("duration-150", "translate-x-5", "opacity-0", "pointer-events-none");
    document.getElementById("Login_Path").classList.remove("duration-150", "translate-x-5", "opacity-0", "pointer-events-none");
});

document.getElementById("to_Sign_Path").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("Sign_Login_Section_Heading").textContent = "Sign in to your account";
    document.getElementById("Sign_Login_Section_Para").textContent = "Access your DRDO recruitment portal or create a new account.";
    document.getElementById("Sign_Login_Section").scrollTo({
        top: 0,
        behavior: "smooth"
    });
    document.getElementById("Sign_Login_Section").classList.remove("overflow-y-hidden");
    document.getElementById("Sign_Path").classList.remove("duration-150", "translate-x-5", "opacity-0", "pointer-events-none");
    document.getElementById("Login_Path").classList.add("duration-150", "translate-x-5", "opacity-0", "pointer-events-none");
});
