document.addEventListener('DOMContentLoaded', function () {

    const img0 = "assets/Reel/2xBAR.png",
        img1 = "assets/Reel/3xBAR.png",
        img2 = "assets/Reel/7.png",
        img3 = "assets/Reel/BAR.png",
        img4 = "assets/Reel/Cherry.png";

    const slider = [img0, img1, img2, img3, img4];


    let step = 0;
    let offset = 0;


    const draw = () => {
        const sliderLeft = slider.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        const sliderCenter = slider.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        const sliderRight = slider.sort(function (a, b) {
            return 0.5 - Math.random()
        });
        let img = document.createElement('img');
        img.src = sliderLeft[step];
        img.classList.add('reel_img');
        img.style.top = offset * 300 + 'px';
        document.querySelector('.reel_item_inner').appendChild(img);
        if (step + 1 === sliderLeft.length) {
            step = 0;
        }
        step++;
        offset++;
    };

    draw();
    draw();
    draw();
    draw();
    draw();


    const spin = () => {

        document.onclick = null;
        let slides2 = document.getElementsByClassName('reel_img');


        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.top = slides2[i].offsetTop + 300 + 'px';
        }

        setTimeout(function () {
            for (let i = 0; i < slides2.length; i++) {
                if (slides2[i].offsetTop === 1500) {
                    slides2[i].remove();
                }
            }
            offset = 0;
            draw();
            document.onclick = spin;
        }, 100);
    };


    document.onclick = spin;
});

