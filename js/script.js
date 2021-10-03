$(function () {
  $('.floor_slide').slick({
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    // fade: true,
  });
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

  // ふわっ
  $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });


  $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    } else {
      $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    }
  });

  $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    // ここを消すとページ内リンクが正常に動く
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    } else {
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });

  $('.fadeLeftTrigger').each(function () { //fadeLeftTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
    } else {
      $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
    }
  });

  // スーッ（枠線が伸びて出現）

  $('.lineTrigger').each(function () { //lineTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('lineanime');// 画面内に入ったらlineanimeというクラス名を追記
    } else {
      $(this).removeClass('lineanime');// 画面外に出たらlineanimeというクラス名を外す
    }
  });

}



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});



//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {//上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  } else {
    if ($('#page-top').hasClass('UpMove')) {//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});
