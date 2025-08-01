const shareBtn = document.querySelector('.share_btn');

shareBtn.addEventListener('click', (e) => {
    const socials = document.querySelector('.socials');
    const toast = document.querySelector('.toast');
    const toastMobile = document.querySelector('.toast_mobile');
    const person = document.querySelector('.person');
    
    if (window.innerWidth <= 600) {
        if (person.style.display === 'none' || person.style.display === '') {
            person.style.display = 'flex';
            toastMobile.style.display = 'none';
            socials.style.backgroundColor = 'white';
        } else {
            person.style.display = 'none';
            toastMobile.style.display = 'flex';
            socials.style.backgroundColor = 'var(--color-grey-900)';
        }
    } else {
        const visibility = toast.style.display;
        if(visibility === "none"){
            toast.style.display = "block";
        }else {
            toast.style.display = "none";
        }
    }
});

// Listen for window resize to handle view changes
// window.addEventListener('resize', () => {
//     const socials = document.querySelector('.socials');
//     const toastMobile = document.querySelector('.toast_mobile');
//     const person = document.querySelector('.person');
//     const toast = document.querySelector('.toast');

//     if (window.innerWidth <= 600) {
//         const visibility = toast.style.display;
//         // if(visibility === "none"){
//         //     toast.style.display = "block"
//         //     socials.style.backgroundColor = 'var(--color-grey-900)';
//         // }else {
//         //     toast.style.display = "none";
//         //     socials.style.backgroundColor = 'white';
//         // }
//     }
    
//     if (window.innerWidth > 600) {
//         // Reset mobile elements when switching to desktop
//         socials.style.backgroundColor = 'white';
//         person.style.display = '';
//         toastMobile.style.display = '';
//         toast.style.display = 'none';
//     }
// });
