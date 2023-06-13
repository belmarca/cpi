document.addEventListener('DOMContentLoaded', (event) => {
    const sliders = document.querySelectorAll('.range-slider');
    const cpi = document.querySelector('#cpi');

    sliders.forEach((slider) => {
        const sliderValue = slider.parentElement.querySelector('.slider-value');
        sliderValue.textContent = slider.value + '%';

        slider.addEventListener('input', () => {
            let total = 0;
            sliders.forEach((slider) => {
                const sliderValue = slider.parentElement.querySelector('.slider-value');
                sliderValue.textContent = slider.value + '%';

                // Apply the color to the slider value
                sliderValue.classList.remove('positive', 'negative', 'zero');
                if (slider.value > 0) {
                    sliderValue.classList.add('positive');
                } else if (slider.value < 0) {
                    sliderValue.classList.add('negative');
                } else {
                    sliderValue.classList.add('zero');
                }

                total += Number(slider.value);
            });
            if(total != 0) {
                // Get a random float between 3.5 and 5.5
                let randomCPI = (Math.random() * (5.5 - 3.5) + 3.5).toFixed(2);
                cpi.textContent = randomCPI + '%';
            } else {
                cpi.textContent = '0%';
            }
        });
    });
});
