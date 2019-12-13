'use strict'
setInterval(function () {
    let layer_section = document.querySelector('.layer_section');
    if (layer_section.classList.contains('aos-animate')) {
        // layer section animation........................
        // layer scroll effect.........
        let scrollLayer = document.querySelectorAll('.scrollLayer');

        for (let i = 0; i < scrollLayer.length; i++) {
            scrollLayer[0].setAttribute('style', 'left: -30px; margin-top: 100px ');
            scrollLayer[1].setAttribute('style', 'left: -60px; margin-top: 200px ');
            scrollLayer[2].setAttribute('style', 'left: -90px; margin-top: 300px ');
            scrollLayer[3].setAttribute('style', 'left: -120px; margin-top: 400px ');
        };
        //................layer line design..............
        let layer_line_design = document.querySelectorAll('.layer_line_design');
        for (let i = 0; i < layer_line_design.length; i++) {
            layer_line_design[i].style.display = 'block';
            //  else {
            //     layer_line_design[i].style.display = 'none';
            // }
        }

        // layer section animation End........................

    }
}, 1500)






/* .............. ......... comments code.........//
//
window.onscroll = function(){
    let scrollLayer = document.querySelectorAll('.scrollLayer');

    // layer scroll effect.........

        for (let i = 0; i < scrollLayer.length; i++) {
            if (document.documentElement.scrollTop > 200) {
                scrollLayer[0].setAttribute('style', 'left: -30px; margin-top: 100px ');
                scrollLayer[1].setAttribute('style', 'left: -60px; margin-top: 200px ');
                scrollLayer[2].setAttribute('style', 'left: -90px; margin-top: 300px ');
                scrollLayer[3].setAttribute('style', 'left: -120px; margin-top: 400px ' );
            }
            // else {
            //     scrollLayer[i].removeAttribute('style');
            // }
        }


        // line hide show within onscroll event


        let line_show_control = document.querySelectorAll('.line_show_control');
        for (let i = 0; i < line_show_control.length; i++) {
            if (this.document.documentElement.scrollTop > 200) {
                line_show_control[i].style.display = 'block';
            }
            //  else {
            //     line_show_control[i].style.display = 'none';

            // }
        }

        // layer headline hide show within onscroll event
        let layer_headline = document.querySelectorAll('.layer_headline');
        for (let i = 0; i < layer_headline.length; i++) {
            if (document.documentElement.scrollTop > 200) {
                layer_headline[i].style.display = 'block';
            }
            //  else {
            //     layer_headline[i].style.display = 'none';
            // }
        }



        //line_dots..............................
        let line_dots = document.querySelectorAll('.line_dots');
        for (let i = 0; i < line_dots.length; i++) {
            if (document.documentElement.scrollTop > 200) {
                line_dots[i].style.display = 'block';
            }
            //  else {
            //     line_dots[i].style.display = 'none';
            // }
        }

}

*/