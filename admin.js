const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', ()=> {
    sideMenu.style.display = "block";
})

//close sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = "none";
})



// change theme
/*
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    saveToLocalStorage();
}) 
*/
 

function lightTheme() {
    document.body.classList.remove('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.add('active');
    themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
    saveToLocalStorage('');
}
function darkTheme() {
    document.body.classList.add('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    themeToggler.querySelector('span:nth-child(2)').classList.add('active');
    saveToLocalStorage('dark-theme-variables');
}
function saveToLocalStorage(theme)  {
    localStorage.setItem('colorchange', theme);
}

function getLocalStorage () {
    if (localStorage.getItem('colorchange') == 'dark-theme-variables') {
        document.body.classList = localStorage.getItem('colorchange');
        saveToLocalStorage();
    } else {
        document.body.classList = localStorage.getItem(':root');
        saveToLocalStorage();
    }
}
getLocalStorage();
// fill orders in table

Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = 
                       `
                        <tr>
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.productStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                            <td class="">Details</td>
                        </tr>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);                
})