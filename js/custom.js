$(document).ready(function(){'use strict';function navbarCollapse(){if($(window).width()<992){$(document).on('click',function(event){var clickover=$(event.target);var _opened=$("#navbar-collapse").hasClass("in");if(_opened===true&&!(clickover.is('.dropdown, #header-search-wrap input, #header-search-wrap button, #header-search-wrap .fa'))){console.log(clickover);$("button.navbar-toggle").trigger('click')}});$('.dropdown').unbind('click');$('.dropdown').on('click',function(){$(this).children('.dropdown-menu').slideToggle()})}}navbarCollapse();var songs=$('.amplitude-song-container');if(songs.length>0){var songObj=[];songs.each(function(){var songUrl=$(this).data('song');var cover1="/mp3/images/album-art/"+getRandomNumberByRange(0,83)+".jpg";var songCover=cover1;var songName=$(this).find('.song-title').html();var songArtist=$(this).find('.song-artist').html();var item={};item[name]="songName";item[artist]=songArtist;item[url]=songUrl;item[cover_art_url]=songCover;songObj.push(item)});Amplitude.init({"songs":songObj,"playlists":{"rock_and_roll":[0,1,2,3,4,5,6,7,8,9]}})}var sliderWidth=$('[type=range]').width();$('.custom-style-element-related-to-range').remove();$('<style class="custom-style-element-related-to-range">input[type="range"]::-webkit-slider-thumb { box-shadow: -'+sliderWidth+'px 0 0 '+sliderWidth+'px;}<style/>').appendTo('head');$(window).on('resize orientationchange',function(){navbarCollapse()});if($('.player-track-list-block').length>0){$('.player-track-list-block').slimScroll({height:100+$('#player-one').outerHeight(),allowPageScroll:true$(document).ready(function() {
    'use strict';
    function navbarCollapse() {
        if ($(window).width() < 992) {
            $(document).on('click', function(event) {
                var clickover = $(event.target);
                var _opened = $("#navbar-collapse").hasClass("in");
                if (_opened === true && !(clickover.is('.dropdown, #header-search-wrap input, #header-search-wrap button, #header-search-wrap .fa'))) {
                    console.log(clickover);
                    $("button.navbar-toggle").trigger('click')
                }
            });
            $('.dropdown').unbind('click');
            $('.dropdown').on('click', function() {
                $(this).children('.dropdown-menu').slideToggle()
            })
        }
    }
    navbarCollapse();
    var songs = $('.amplitude-song-container');
    if (songs.length > 0) {
        var songObj = [];
        songs.each(function() {
            var songUrl = $(this).data('song');
            var cover1 = "/mp3/images/album-art/" + getRandomNumberByRange(0, 83) + ".jpg";
            var songCover = cover1;
            var songName = $(this).find('.song-title').html();
            var songArtist = $(this).find('.song-artist').html();
            var item = {};
            item[name] = "songName";
            item[artist] = songArtist;
            item[url] = songUrl;
            item[cover_art_url] = songCover;
            songObj.push(item)
        });
        Amplitude.init({
            "songs": songObj,
            "playlists": {
                "rock_and_roll": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        })
    }
    var sliderWidth = $('[type=range]').width();
    $('.custom-style-element-related-to-range').remove();
    $('<style class="custom-style-element-related-to-range">input[type="range"]::-webkit-slider-thumb { box-shadow: -' + sliderWidth + 'px 0 0 ' + sliderWidth + 'px;}<style/>').appendTo('head');
    $(window).on('resize orientationchange', function() {
        navbarCollapse()
    });
    if ($('.player-track-list-block').length > 0) {
        $('.player-track-list-block').slimScroll({
            height: 100 + $('#player-one').outerHeight(),
            allowPageScroll: true
        })
    }
});
