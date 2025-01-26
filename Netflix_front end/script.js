document.addEventListener("DOMContentLoaded", () => {
    // Scale and brightness effect on hover for <td> images
    const tdElements = document.querySelectorAll("#main14 td");
    tdElements.forEach(td => {
        td.addEventListener("mouseover", () => {
            td.style.transform = "scale(1.3)";
            td.style.transition = "transform 0.3s ease, filter 0.3s ease";
            td.style.filter = "brightness(1.2)";
        });
        td.addEventListener("mouseout", () => {
            td.style.transform = "scale(1)";
            td.style.filter = "brightness(1)";
        });
    });

    // Add email validation functionality
    const emailButton = document.getElementById("email");
    emailButton.addEventListener("click", () => {
        const email = prompt("Enter your email address:");
        if (validateEmail(email)) {
            alert("Thank you! You’ll receive updates soon.");
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Toast message when selecting a language
    const languageSelect = document.querySelector("#main15 select");
    languageSelect.addEventListener("change", () => {
        const selectedLanguage = languageSelect.value;
        showToast(`Language changed to: ${selectedLanguage}`);
    });

    // Show login modal on Sign In button click
    const signInButton = document.querySelector("#main15 button");
    signInButton.addEventListener("click", () => {
        showLoginModal();
    });

    function showLoginModal() {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        modal.style.color = "white";
        modal.style.padding = "40px";
        modal.style.borderRadius = "20px";
        modal.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.8)";
        modal.style.zIndex = "1000";
        modal.style.width = "800px";
        modal.style.height = "600px";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.textAlign = "center";
        modal.style.fontSize = "400px";
    
        modal.innerHTML = `
            <h2 style="margin-bottom: 20px; font-size: 70px;">Login</h2>
            <input type="text" placeholder="Username" 
                   style="margin-bottom: 20px; padding: 15px; width: 80%; font-size: 60px; border-radius: 10px; border: none;">
            <input type="password" placeholder="Password" 
                   style="margin-bottom: 20px; padding: 15px; width: 80%; font-size: 60px; border-radius: 10px; border: none;">
            <button style="padding: 15px 30px; background-color: red; color: white; font-size: 70px; border: none; border-radius: 10px; cursor: pointer;">
                Login
            </button>
        `;
    
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = "999";
    
        document.body.appendChild(overlay);
        document.body.appendChild(modal);
    
        overlay.addEventListener("click", () => {
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
        });
    }
    

    // Show alert on "Get Started" button click
    const getStartedButton = document.getElementById("get");
    getStartedButton.addEventListener("click", () => {
        alert("Thank you for getting started! Check your email for further instructions.");
    });

    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Toast notification function
    function showToast(message) {
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "black";
        toast.style.color = "white";
        toast.style.padding = "10px 20px";
        toast.style.borderRadius = "10px";
        toast.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
        toast.style.zIndex = "1000";
        document.body.appendChild(toast);

        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }
});
