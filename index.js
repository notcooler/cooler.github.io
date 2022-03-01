$(document).ready(function() {
    function resetSize() {
        $('#bg').each(function() {
            $(this)[0].width = $(this).width();
            $(this)[0].height = $(this).height();
        });
    }
    resetSize();
    $(document).resize(function() {
        resetSize();
    });
    var s=window.screen;
    var width = bg.width=s.width;
    var height = bg.height;
    var yPositions = Array(300).join(0).split('');
    var ctx=bg.getContext('2d');
    function getNextChar() {
        if(Math.random()<.4) {
            // numbers
            return(getRandomChar(48, 57));
        } else if(Math.random()<.8) {
            // capital letters
            return(getRandomChar(65, 90));
        } else {
            // katakana
            return(getRandomChar(0x30A0, 0x30A0));
        }
    }
    function getRandomChar(rangeStart, rangeEnd) {
        return(String.fromCharCode(rangeStart + Math.random() * (rangeEnd-rangeStart+1)));
    }
    var draw = function () {
        ctx.fillStyle='rgba(0,0,0,.05)';
        ctx.fillRect(0,0,width,height);
        ctx.fillStyle='#0F0';
        ctx.font = '5pt Georgia';
        yPositions.map(function(y, index){
            text = getNextChar();
            x = (index * 10)+10;
            bg.getContext('2d').fillText(text, x, y);
            if(y > 100 + Math.random()*20000) {
                yPositions[index]=0;
            } else {
                yPositions[index] = y + 10;
            }
        });
    };
    RunMatrix();
    function RunMatrix() {
        if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
            Game_Interval = setInterval(draw, 25);
    }
    function StopMatrix() {
        clearInterval(Game_Interval);
    }
    // setTimeout(() => {StopMatrix()}, 1000);
})