$(document).ready(function() {
    // ヘッダーの背景色変更（スクロール時）
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').css('background-color', 'rgba(255, 255, 255, 0.95)');
            $('header').css('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)');
            $('#headerLogo img').css('height', '50px');
        } else {
            $('header').css('background-color', 'rgba(255, 255, 255, 0.95)');
            $('header').css('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)');
            $('#headerLogo img').css('height', '60px');
        }
    });

    // モバイルメニューの開閉
    $('.btnMenu').click(function() {
        $(this).toggleClass('active');
        $('#gNavi').toggleClass('open');
    });

    // ナビゲーションリンクのスクロール動作
    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800, 'easeInOutExpo');
            $('#gNavi').removeClass('open');
            $('.btnMenu').removeClass('active');
            return false;
        }
    });

    // FAQの開閉
    $('.question').click(function() {
        $(this).toggleClass('active');
        $(this).next('.answer').slideToggle(300);
    });

    // スマホ表示時のヒーローテキストの調整
    function adjustHeroText() {
        if (window.innerWidth <= 768) {
            $('#mainVisual .subtitle').show();
        } else {
            $('#mainVisual .subtitle').show();
        }
    }

    // 初期調整とリサイズ時の調整
    adjustHeroText();
    $(window).resize(function() {
        adjustHeroText();
    });

    // スクロールアニメーション
    function animateElements() {
        $('.section').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 150) {
                $(this).addClass('animated');
            }
        });

        // 個別要素のアニメーション
        $('.recommend-item').each(function(index) {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).css('animation', 'fadeInUp 0.6s ease-out ' + (index * 0.2) + 's forwards');
            }
        });

        $('.feature-item').each(function(index) {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).css('animation', 'fadeInLeft 0.6s ease-out ' + (index * 0.2) + 's forwards');
            }
        });

        $('.step-item').each(function(index) {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).css('animation', 'fadeInRight 0.6s ease-out ' + (index * 0.2) + 's forwards');
            }
        });
    }

    // 初期アニメーションとスクロール時のアニメーション
    setTimeout(function() {
        animateElements();
    }, 300);
    
    $(window).scroll(function() {
        animateElements();
    });

    // スクロールアニメーション
    function updateScroll() {
        const mainVisual = document.querySelector('#mainVisual');
        if (!mainVisual) return;
        
        const scrolled = window.scrollY;
        const vh = window.innerHeight;
        
        // スクロール量を0から1の範囲に正規化
        const scrollProgress = Math.min(Math.max(scrolled / vh, 0), 1);
        mainVisual.style.setProperty('--scroll', scrollProgress);
        
        // スクロールが始まったらアニメーションを開始
        if (scrolled > 0) {
            mainVisual.style.animationPlayState = 'running';
        }
    }

    // スクロールイベントのリスナーを追加
    window.addEventListener('scroll', updateScroll);
    // 初期状態の設定
    updateScroll();

    // LINE登録ボタンのアクション
    $('.cta-button').click(function(e) {
        e.preventDefault();
        // LINE登録URLを設定する場合はここに記述
        alert('現在、LINE登録機能は準備中です。近日中に公開予定です。');
    });
    
    // お問い合わせフォームの送信処理
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // フォームデータの取得
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        // 送信データの整形
        var content = 'お名前: ' + name + '<br>' +
                     'メールアドレス: ' + email + '<br>' +
                     '件名: ' + subject + '<br>' +
                     'お問い合わせ内容: <br>' + message;
        
        // 送信ボタンを無効化し、ローディング表示
        $('.submit-button').prop('disabled', true).text('送信中...');
        
        // webhookへのデータ送信
        $.ajax({
            url: 'https://hook.us1.make.com/m5kmfwdvdlxbqshtxhrjobqqolploqia',
            type: 'POST',
            data: JSON.stringify({ content: content }),
            contentType: 'application/json',
            success: function(response) {
                // 送信成功時の処理
                $('#formStatus').html('お問い合わせありがとうございます。メッセージが送信されました。').removeClass('error').addClass('success');
                $('#contactForm')[0].reset();
                $('.submit-button').prop('disabled', false).text('送信する');
            },
            error: function(xhr, status, error) {
                // 送信失敗時の処理
                $('#formStatus').html('メッセージの送信に失敗しました。後ほど再度お試しください。').removeClass('success').addClass('error');
                $('.submit-button').prop('disabled', false).text('送信する');
            }
        });
    });
});

// jQuery Easing
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    easeInOutExpo: function(x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

// CSSアニメーション用のクラス追加
$(window).on('load', function() {
    setTimeout(function() {
        $('#mainVisual').addClass('loaded');
    }, 300);
    
    // ページロード時のアニメーション
    $('.section-title').each(function(index) {
        var $this = $(this);
        setTimeout(function() {
            $this.css('opacity', '0').css('animation', 'fadeInDown 0.8s ease-out forwards');
        }, 500 + (index * 200));
    });
});
