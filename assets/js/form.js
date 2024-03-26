const form =document.getElementById('weekly-form');
const titleBox = document.getElementById('title');
const dateBox = document.getElementById('date');
const msgBox = document.getElementById('text-msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const titleValue = titleBox.value;
    const dateValue = dateBox.value;
    const storyValue = msgBox.value;

    localStorage.setItem('title', titleValue);
    localStorage.setItem('date', dateValue);
    localStorage.setItem('story', storyValue);

    window.location.href ="blog.html";
})