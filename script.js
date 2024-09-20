"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const allToggleButtons = document.querySelectorAll('.toggle-button');
    allToggleButtons.forEach(element => {
        element.addEventListener('click', () => {
            const togglebutton = element.getAttribute('data-target');
            if (togglebutton && togglebutton.trim()) {
                const targetElement = document.getElementById(togglebutton);
                if (targetElement) {
                    if (targetElement.style.display === 'block' || targetElement.style.display === '') {
                        targetElement.style.display = 'none';
                    }
                    else {
                        targetElement.style.display = 'block';
                    }
                }
                else {
                    console.log(`No target element found ${togglebutton}`);
                }
            }
            else {
                console.log('No data-target attribute found');
            }
        });
    });
});
