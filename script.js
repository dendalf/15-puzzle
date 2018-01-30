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
            console.log('555');
            moveEmptyLeft();
        }
        else if ($(this).next().next().next().next().attr('class') === 'empty'){
            console.log(666);
            moveEmptyTop();
        }
        else if ($(this).prev().attr('class') === 'empty'){
            console.log(777);
            moveEmptyRight();
        }
        else if ($(this).prev().prev().prev().prev().attr('class') === 'empty'){
            console.log(888);
            moveEmptyBottom();
        }
    });
});
var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'empty'];
$('.regulations').click(function () {
    arr.sort(function () { return Math.random(); });
    console.log(arr);
    $('li').removeAttr('class');
    $('li').each(function (i, el) {
        $(el).addClass('number').addClass(arr[i])

    })
});


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