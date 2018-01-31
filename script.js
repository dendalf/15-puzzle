$(document).ready(function () {

    $(document).keydown(function (e) {

        switch (e.keyCode) {
            case 37:
                moveEmptyRight();
                break;
            case 38:
                moveEmptyTop();
                break;
            case 39:
                moveEmptyLeft();
                break;
            case 40:
                moveEmptyBottom();
                break;
        }
    });

    $('.number').on('click', function () {
        $('sel').hasClass('empty');
        if ($(this).next().attr('class') === 'empty'){
            moveEmptyLeft();
        }
        else if ($(this).next().next().next().next().attr('class') === 'empty'){
            moveEmptyTop();
        }
        else if ($(this).prev().attr('class') === 'empty'){
            moveEmptyRight();
        }
        else if ($(this).prev().prev().prev().prev().attr('class') === 'empty'){
            moveEmptyBottom();
        }
    });
});
var ii = 0;
$('.regulations').click(function () {
    // while (ii < 40) {
        $(document).ready(function(){
            $('.ul li').shuffle();
        });
        // $('li').first(function () {
        //     var cl = $('li').first().attr("class");
        //     $(this).removeClass();
        //     $(this).addClass('number').addClass(cl);
        // });
        // $('li').last(function () {
        //     var cl = $('li').last().attr("class");
        //     $(this).removeClass();
        //     $(this).addClass('number').addClass(cl);
        //     ii++
        // });

    // }
});

// var arr = ['number-1 number', 'number-2 number', 'number-3 number', 'number-4 number', 'number-5 number', 'number-6 number', 'number-7 number', 'number-8 number', 'number-9 number', 'number-10 number', 'number-11 number', 'number-12 number', 'number-13 number', 'number-14 number', 'number-15 number', 'empty'];
// var classes = [];
// $('li').each(function (index) {
//     var abc = $(this).attr('class');
//     classes.push(abc)
// });
// if (arr === classes) {
//     console.log(555)
// }
//
// $(document).click(function (e) {
//         console.log(arr);
//         console.log(classes);
// });


// $('li').each(function (index) {
//     var abc = $(this).attr('class');
//     classes.push(abc)
// });



function moveEmptyRight() {
    var rightBorderClasses = [
        document.getElementsByTagName('li')[3].className,
        document.getElementsByTagName('li')[7].className,
        document.getElementsByTagName('li')[11].className,
        document.getElementsByTagName('li')[15].className
    ];
    if (rightBorderClasses.indexOf('empty') === -1) {
        var cl = $('.empty').first().next().attr("class");
        $('.empty').next().removeClass().addClass('empty');
        document.getElementsByClassName('empty')[0].className = cl;
    }
}

function moveEmptyTop() {
    var bottonBorderClasses = [
        document.getElementsByTagName('li')[12].className,
        document.getElementsByTagName('li')[13].className,
        document.getElementsByTagName('li')[14].className,
        document.getElementsByTagName('li')[15].className
    ];
    if (bottonBorderClasses.indexOf('empty') === -1) {
        var cl = $('.empty').first().next().next().next().next().attr("class");
        $('.empty').next().next().next().next().removeClass().addClass('empty');
        document.getElementsByClassName('empty')[0].className = cl;
    }
}

function moveEmptyLeft() {
    var leftBorderClasses = [
        document.getElementsByTagName('li')[0].className,
        document.getElementsByTagName('li')[4].className,
        document.getElementsByTagName('li')[8].className,
        document.getElementsByTagName('li')[12].className
    ];
    if (leftBorderClasses.indexOf('empty') === -1) {
        var cl = $('.empty').first().prev().attr("class");
        $('.empty').prev().removeClass().addClass('empty');
        document.getElementsByClassName('empty')[0].nextSibling.nextSibling.className = cl;
    }
}

function moveEmptyBottom() {
    var topBorderClasses = [
        document.getElementsByTagName('li')[0].className,
        document.getElementsByTagName('li')[1].className,
        document.getElementsByTagName('li')[2].className,
        document.getElementsByTagName('li')[3].className
    ];
    if (topBorderClasses.indexOf('empty') === -1) {
        var cl = $('.empty').first().prev().prev().prev().prev().attr("class");
        $('.empty').prev().prev().prev().prev().removeClass().addClass('empty');
        document.getElementsByClassName('empty')[1].className = cl;
    }
}