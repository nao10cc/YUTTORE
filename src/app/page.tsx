"use client";

import React, { ReactNode } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// アニメーション用のコンポーネント
const AnimatedSection = ({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) => {
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = React.useState(false);
  
  React.useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(ref);
    
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <motion.div
      ref={setRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  // FAQのアコーディオン用の状態
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  // FAQの開閉を切り替える関数
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQデータ
  const faqItems = [
    {
      question: "初心者でも大丈夫？",
      answer: "はい、むしろ大歓迎です！"
    },
    {
      question: "辛くないですか？",
      answer: "辛くなる手前で止めるちょうどいい運動です"
    },
    {
      question: "道具は必要？",
      answer: "タオルと椅子があればOK"
    },
    {
      question: "やめたくなったら？",
      answer: "いつでも退会OK"
    }
  ];

  return (
    <>
      <main>
        {/* ヒーローセクション */}
        <div className="relative bg-[#FCF5DC] overflow-hidden flex items-center justify-center p-0">
          <div className="w-full relative z-10 flex items-center justify-center">
            <div className="w-full relative md:h-[66vh] flex items-center justify-center">
              <Image 
                src="/images/hero.png" 
                alt="YUTTOREヒーロー画像" 
                width={1200}
                height={600}
                className="w-full h-auto md:h-auto md:max-h-full md:w-auto"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* 波形の背景 */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FB852A" fillOpacity="1" d="M0,185L48,169C96,153,192,121,288,121C384,121,480,153,576,179.7C672,206,768,228,864,217C960,206,1056,164,1152,142.3C1248,121,1344,121,1392,121L1440,121L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
        </div>

        {/* キャッチコピーセクション */}
        <div className="py-10 md:py-20 w-full bg-[#FFF8E1] flex items-center justify-center min-h-[30vh] md:min-h-[50vh]">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection delay={0.1} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-[#333]">運動習慣、<br />ゆるっと始めよう！</h2>
              <p className="text-xl md:text-2xl mb-6 md:mb-8 text-[#ff5722] font-bold">4月限定！<br className="sm:hidden inline" />新規LINE登録で無料体験可能！</p>
              
              <div className="mt-10 md:mt-16 mb-8 md:mb-12">
                <a href="https://lin.ee/yAYKSzZ" className="btn-line btn-large">
                  今すぐ無料体験！
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* こんなあなたにおすすめ！ */}
        <div className="py-20 w-full bg-gray-100" id="recommend">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="section-title">こんなあなたにおすすめ！</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <AnimatedSection delay={0.15} className="card p-6 text-center h-full flex flex-col">
                <div className="text-xl md:text-2xl font-bold mb-4 text-[#333] py-2 px-4 rounded-lg bg-orange-50 inline-block shadow-sm">忙しくて運動が後回し</div>
                <div className="relative w-full h-64 md:h-80">
                  <Image 
                    src="/images/recommend1.png" 
                    alt="忙しい人" 
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="card p-6 text-center h-full flex flex-col">
                <div className="text-xl md:text-2xl font-bold mb-4 text-[#333] py-2 px-4 rounded-lg bg-orange-50 inline-block shadow-sm">キツイ運動は苦手</div>
                <div className="relative w-full h-64 md:h-80">
                  <Image 
                    src="/images/recommend2.png" 
                    alt="優しい運動" 
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.25} className="card p-6 text-center h-full flex flex-col">
                <div className="text-xl md:text-2xl font-bold mb-4 text-[#333] py-2 px-4 rounded-lg bg-orange-50 inline-block shadow-sm">そろそろ体を動かしたい</div>
                <div className="relative w-full h-64 md:h-80">
                  <Image 
                    src="/images/recommend3.png" 
                    alt="体を動かす" 
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.3}>
              <div className="text-center mb-16">
                <p className="text-2xl font-bold py-3 px-8 bg-[#ff5722] text-white inline-block rounded-lg shadow-md mx-auto">そんなあなたに、<br className="sm:hidden inline" />ぴったりです！</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* 応援セクション */}
        <div className="py-20 w-full bg-[#FB852A]" id="support">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg p-8 text-center shadow-md">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ff5722]">その気持ち、ちゃんと前に進んでる</h3>
                <div className="space-y-4">
                  <p className="text-lg">
                    「やりたいな〜」って思うだけで終わる人が多い中で<br />
                    こうしてここまで読んでくれてるあなたは、もう動き始めてます
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">
                      <span className="relative">
                        <span className="relative z-10 border-b-[6px] border-[#FF9800] border-opacity-70 pb-0">その小さな前進が、<br className="sm:hidden" />とても素敵です。</span>
                      </span>
                    </span>
                  </p>
                  <p className="text-lg">
                    今こそ、ゆるっと始めるチャンス！<br />
                    自分をちょっと好きになれる毎日、いっしょに作っていきませんか？
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* サービス */}
        <div id="service" className="py-16 w-full bg-white">
          <AnimatedSection delay={0.1}>
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="section-title">ゆっとれ！<br className="sm:hidden inline" />オンライントレーニング</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <AnimatedSection delay={0.15} className="card p-6 text-center">
                  <div className="text-xl md:text-2xl font-bold mb-4 text-[#ff5722]">初心者でも大丈夫</div>
                  <p className="mt-2 text-sm text-gray-600">初心者でも大丈夫です。無理なく続けて、自分をもっと好きになれる習慣、始めてみませんか？</p>
                </AnimatedSection>
                <AnimatedSection delay={0.2} className="card p-6 text-center">
                  <div className="text-xl md:text-2xl font-bold mb-4 text-[#ff5722]">辛くないです</div>
                  <p className="mt-2 text-sm text-gray-600">辛くなる手前で止めるちょうどいい運動です。</p>
                </AnimatedSection>
                <AnimatedSection delay={0.25} className="card p-6 text-center">
                  <div className="text-xl md:text-2xl font-bold mb-4 text-[#ff5722]">スマートフォンでOK</div>
                  <p className="mt-2 text-sm text-gray-600">スマートフォンでOKです。スマートフォンで簡単に利用できます。</p>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* サービス比較 */}
        <div id="comparison" className="py-16 w-full bg-[#FFF5E6]">
          <AnimatedSection delay={0.1}>
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="section-title">あなたにぴったりのプラン、<br className="sm:hidden inline" />選べます</h2>
              </div>
              <div className="mb-10">
                <AnimatedSection delay={0.15} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#ff5722] w-full relative transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 bg-[#ff5722] text-white py-1 px-4 rounded-bl-lg font-bold text-sm">おすすめ</div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#ff5722] mb-4">ゆっとれ！<br className="sm:hidden inline" />オンライントレーニング</h3>
                    <div className="bg-orange-50 rounded-lg p-4 mb-5 inline-block">
                      <p className="text-xl font-bold text-[#ff5722]">月額：980円（税別）</p>
                    </div>
                    <div className="text-gray-700 mb-6 space-y-4">
                      <p className="leading-relaxed text-lg">忙しくても大丈夫。</p>
                      <p className="leading-relaxed text-lg">週2回・30分、自宅でゆるっとできる配信型トレーニング！</p>
                      <p className="leading-relaxed text-lg">初心者向け・女性向け・中級者向けなど、いろんなテーマも準備中</p>
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <p className="font-bold text-[#ff5722] text-center text-xl">まずはここから運動習慣、始めませんか？</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {/* プラン2 */}
                <AnimatedSection delay={0.2} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#ff5722]">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#ff5722] mb-3">ゆっとれ！<br />食事管理</h3>
                    <div className="text-gray-700 mb-6 space-y-3">
                      <p className="leading-relaxed">食事の写真を送るだけで、プロがレビュー＆アドバイス！</p>
                      <p className="leading-relaxed">「食事を減らしているのに痩せられない」「何を食べたらいいかわからない」</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 mb-4 inline-block">
                      <p className="text-lg font-bold text-[#ff5722]">月額：49,800円（税別）</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                {/* プラン3 */}
                <AnimatedSection delay={0.25} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#ff5722]">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#ff5722] mb-3">ゆっとれ！<br />パーソナルトレーニング</h3>
                    <div className="text-gray-700 mb-6 space-y-3">
                      <p className="leading-relaxed">毎週1回のマンツーマン指導で、しっかり変わりたい人に。</p>
                      <p className="leading-relaxed">場所代・交通費込み、追加料金なし！</p>
                      <div className="bg-orange-50 rounded-lg p-3 mt-4">
                        <p className="font-bold text-[#ff5722]">60分プラン：49,800円/月（税別）</p>
                        <p>体力に自信がない方にもおすすめ。コンパクトに集中トレーニング。</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3 mt-4">
                        <p className="font-bold text-[#ff5722]">90分プラン：57,800円/月（税別）</p>
                        <p>フォームを丁寧に見てほしい方、じっくり取り組みたい方へ。</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                {/* プラン4 */}
                <AnimatedSection delay={0.3} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#ff5722]">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#ff5722] mb-3">ゆっとれ！<br />ペアトレのご案内</h3>
                    <div className="text-gray-700 mb-6 space-y-3">
                      <p className="leading-relaxed">「1人じゃ不安…」という方は、友達やご家族と一緒に！</p>
                      <p className="leading-relaxed">2人で受けるパーソナルで、気軽さ＆お得感アップ</p>
                      <div className="bg-orange-50 rounded-lg p-3 mt-4">
                        <p className="font-bold text-[#ff5722]">60分：80,000円/月</p>
                        <p>1人あたり40,000円（税別）</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3 mt-4">
                        <p className="font-bold text-[#ff5722]">90分：98,000円/月</p>
                        <p>1人あたり49,000円（税別）</p>
                      </div>  
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* 変わる毎日 */}
        <div id="bonus" className="py-16 w-full bg-orange-50">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="section-title">今だけ！特典の受け取り方</h2>
                <p className="text-lg text-gray-700 mt-4">新規LINE登録で無料体験可能！</p>
              </div>
            </AnimatedSection>
            
            {/* ステップフロー */}
            <div className="relative max-w-2xl mx-auto">
              {/* 縦線 */}
              <div className="absolute left-[28px] top-0 w-1 h-full bg-[#ff5722] opacity-50 z-0 max-h-[calc(100%-120px)]"></div>
              
              <div className="space-y-12">
                <AnimatedSection delay={0.15} className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#ff5722] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg mr-4">
                      1
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ff5722] flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-[#ff5722]">公式LINEに無料登録</h3>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2} className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#ff5722] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg mr-4">
                      2
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ff5722] flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-[#ff5722]">オンライントレーニング無料体験</h3>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.25} className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#ff5722] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg mr-4">
                      3
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ff5722] flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-[#ff5722]">「自宅でできる全身トレーニング図鑑（初級者編）」をプレゼント！</h3>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            <AnimatedSection delay={0.3}>
              <div className="mt-12 text-center">
                <a href="https://lin.ee/yAYKSzZ" className="bg-[#06C755] text-white py-3 px-8 rounded-full hover:bg-[#05a847] transition duration-300 text-lg font-bold inline-block flex items-center justify-center mx-auto max-w-md">
                  <span className="mr-2">自分が変わる第一歩を踏み出す！</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* よくある質問 */}
        <div id="faq" className="py-16 w-full bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="section-title">よくある質問</h2>
              </div>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <AnimatedSection key={index} delay={0.15 + index * 0.05}>
                  <div className="card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div 
                      className="flex justify-between items-center cursor-pointer" 
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="text-lg font-bold text-[#ff5722]">Q. {item.question}</div>
                      <div className="text-[#ff5722]">
                        {openFAQ === index ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {openFAQ === index && (
                      <div className="text-gray-700 mt-3 pt-3 border-t border-gray-100">
                        A. {item.answer}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* 変わる毎日 */}
        <div id="benefits" className="py-16 w-full bg-[#FCF5DC]">
          <div className="max-w-6xl mx-auto px-4">
            <AnimatedSection delay={0.1}>
              <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-center text-[#ff5722] mb-6">あなたの毎日が少しずつ変わっていく</h3>
                <div className="space-y-4 text-center">
                  <p className="text-lg">その「ちょっとやってみようかな」が、未来を変える一歩。</p>
                  <p className="text-lg">
                    <span className="font-bold">
                      <span className="relative">
                        <span className="relative z-10 border-b-[6px] border-[#FF9800] border-opacity-70 pb-0">その小さな前進が、<br className="sm:hidden" />とても素敵です。</span>
                      </span>
                    </span>
                  </p>
                  <p className="text-lg font-bold text-[#ff5722] mt-6">あなたの「変わりたい」を、ゆっとれが応援します</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        
      </main>
      
      <Footer />
    </>
  );
}
