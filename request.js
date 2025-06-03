function toggleNotifications() {
    document.getElementById("notifications").classList.toggle("show");
    document.getElementById("messages").classList.remove("show");
    document.getElementById("dropdown").classList.remove("show");
  }
  
  function toggleMessages() {
    document.getElementById("messages").classList.toggle("show");
    document.getElementById("notifications").classList.remove("show");
    document.getElementById("dropdown").classList.remove("show");
  }
  
  function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
    document.getElementById("notifications").classList.remove("show");
    document.getElementById("messages").classList.remove("show");
  }  
  