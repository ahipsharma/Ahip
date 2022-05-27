console.log('Hello world');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.icons').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.options').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
        document.querySelector('.options').style.display = 'none';
    }
});