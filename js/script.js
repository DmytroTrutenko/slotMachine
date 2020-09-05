document.addEventListener('DOMContentLoaded', function () {

    const img0 = "assets/Reel/2xBAR.png",
        img1 = "assets/Reel/3xBAR.png",
        img2 = "assets/Reel/7.png",
        img3 = "assets/Reel/BAR.png",
        img4 = "assets/Reel/Cherry.png";

    const sliderLeft =[img2, img3, img0, img4, img1];
    const sliderCenter = [img0, img1, img2, img3, img4];
    const sliderRight =[img4, img3, img1, img0, img2];

    let step = 0;
    let offset = 0;


    const draw = () => {

        let imgL = document.createElement('img');
        let imgC = document.createElement('img');
        let imgR = document.createElement('img');

        imgL.src = sliderLeft[step];
        imgC.src = sliderCenter[step];
        imgR.src = sliderRight[step];

        imgL.classList.add('reel_img_l');
        imgC.classList.add('reel_img_c');
        imgR.classList.add('reel_img_r');

        imgL.style.top = offset * 300 + 'px';
        imgC.style.top = offset * 300 + 'px';
        imgR.style.top = offset * 300 + 'px';

        document.querySelector('.reel_item_left').appendChild(imgL);
        document.querySelector('.reel_item_center').appendChild(imgC);
        document.querySelector('.reel_item_right').appendChild(imgR);

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
        let slides2L = document.getElementsByClassName('reel_img_l');
        let slides2C = document.getElementsByClassName('reel_img_c');
        let slides2R = document.getElementsByClassName('reel_img_r');


        for (let i = 0; i < slides2L.length; i++) {
            slides2L[i].style.top = slides2L[i].offsetTop + 300 + 'px';
            slides2C[i].style.top = slides2C[i].offsetTop + 300 + 'px';
            slides2R[i].style.top = slides2R[i].offsetTop + 300 + 'px';
        }

        setTimeout(function () {
            for (let i = 0; i < slides2L.length; i++) {
                if (slides2L[i].offsetTop === 1500) {
                    slides2L[i].remove();
                }
                if (slides2C[i].offsetTop === 1500) {
                    slides2C[i].remove();
                }
                if (slides2R[i].offsetTop === 1500) {
                    slides2R[i].remove();
                }
            }
            offset = 0;
            draw();
            document.onclick = spin;
        }, 100);
    };


    document.onclick = spin;
});

