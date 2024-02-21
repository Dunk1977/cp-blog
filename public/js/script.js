function showSidebar() { 
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function loadViewPosts() {
    window.location.href = "/view-posts";
}

