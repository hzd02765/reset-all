document.getElementById('textbox1').addEventListener('change', function () {
    if (this.value === '') {
        clearAllTextboxes();
    }
});

document.getElementById('textbox2').addEventListener('change', function () {
    if (this.value === '') {
        const textbox1 = document.getElementById('textbox1')
        clearAllTextboxes([textbox1]);
    }
});

function clearAllTextboxes(excludeItems = []) {
    const textboxes = document.querySelectorAll('.textbox');
    textboxes.forEach((textbox, index) => {
        if (!excludeItems.includes(textbox)) {
            textbox.value = '';
        }
    });
}