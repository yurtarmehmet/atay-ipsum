(function(){

  var atayIpsum = function(){

    var phrases = [
      "İnsanları genel anlamda seviyorum ama kimseye tahammülüm yok.",
      "Felsefe kitapları okumayı denedi. Bir süre sonra, iki kere ikinin dört olduğundan kuşkulanmaya başladığı için bıraktı.",
      "Ben iç dünyama dönüyorum. Orada hayal kırıklığına yer yok.",
      "Şu anda, sana güzel bir söz söyleyebilmek için, on bin kitap okumuş olmayı isterdim.",
      "İlk yalanı söyledikten sonra bir daha konuşmamalı insan.",
      "Ben ortaçağda yaşamalıydım. Sabahları, Montaigne gibi oda orkestrasıyla uyandırılmalıydım.",
      "Kafam cam kırıklarıyla dolu doktor. Bu nedenle beynimin her hareketinde düşüncelerim açıyor.",
      "En kötüsü, hayır demeyi öğrenemedim. Yemeğe kal, dediler: kaldım. Oysa, kalınmaz. Onlar biraz ısrar ederler; sen biraz nazlanırsın. Sonunda kalkıp gidilir. Her söylenileni ciddiye almak yok mu, şu sözünün eri olmak yok mu; bitirdi, yıktı beni.",
      "Beni hemen anlamalısın, çünkü ben kitap değilim, çünkü ben öldükten sonra kimse beni okuyamaz, yaşarken anlaşılmaya mecburum.",
      "Cennet, insanların birbirlerini dinlemeleri demektir, birbirlerine aldırmaları, birbirlerinin farkında olmaları demekti.",
      "Kitaplar yüzünden çok acı çekiyorum Esat abi. Sanki hepsi benim için yazılmış.",
      "Asıl oyun başlıyor albayım!",
      "Ülkemizin insanları yorulmaz; biz gecekondularda yorulmaz insanlar yetiştirdik.",
      "Gel seninle bir daha ağlayalım ; Yaşanmışlara, Yaşanmamışlara , Bir de hiç yaşanmayacaklara.",
      "Bazılarımız şiirlere, şarkılara, filmlere, kitaplara tutunuyor.. Sanırım artık insan, tutunamıyor insana.",
      "Neymiş efendim? Hiçbir işin sonunu getirmemişim. Siz başlamayı bile göze almadınız.",
      "Başkalarının yaptıklarını silmeye çalıştım, mürekkeple yazmışlar; oysa ben kurşun kalem silgisiydim, azaldığımla kaldım.",
      "Türkçe hocasına göre, çoğul konuşanlar alçakgönüllü olurmuş.",
      "Yazık ki erkekler, şımartıldıkları zaman nerede durmaları gerektiğini çoğu zaman bilemezler.",
      "Önce şiirden anlamı kaldırdılar, sonra müzikte melodiyi öldürdüler...Sanatı öldürdüler.",
      "İnsanlardaki zavallılığı, önce çocuklar seziyor galiba. Delileri de önce onlar kovalar.",
      "Çok yaşamak için iki nefes alıyorum, bir nefes veriyorum.",
      "Kelimeler insana ihanet ediyor.",
      "Ben de okuduğum kitaplardan bahsederdim onlara... nedense kimse ilgilenmezdi.",
      "Normal bir insan olmaya zorladılar, bana boş yere vakit kaybettirdiler. Olmayınca da anormal dediler.",
      "Hayatım, ciddiye alınmasını istediğim bir oyundu.",
      "Bütün hayatımı, en ince ayrıntılarına kadar düşünerek hesapladığım iyiliklerin hayaliyle geçirdim albayım. Artık ne olacaksa olsun istiyorum.",
      "Sabahları kimseyi uyandırmadan sessizce yola koyulurdum; gezici din adamları gibi. Yalnızlığın dinini yayıyordum.",
      "'Yahuda ne yaptıysa kendine yaptı' dedi Hikmet, 'İsa için üzücü olan , Yahuda'nın ihaneti değildi: neden yaşadığını hiç bilmeyen bu zavallı hain, neden intihar ettiğini de anlayamadan ölüp gitmişti. İsa işte buna üzülüyordu.'",
      "Herkesin istediği gibi yaşadığı uzak bir ülkenin özlemini duyuyorum.",
      "Beni bir gün unutacaksan, bir gün bırakıp gideceksen, boşuna yorma derdi; boş yere mağaramdan çıkarma beni.",
      "Kötü bir resim asarım korkusuyla hiç resim asmadım; kötü yaşarım korkusuyla hiç yaşamadım.",
      "Üniversitede en sevdiğim öğrenciler, yıllardır okulu bitiremeyenlerdi. Yanlarından ayrılamazdım. Onların başarısızlık masallarını büyük bir hayranlıkla dinlerdim.",
      "Gene de az gelişmiş bir cümle söylemeden içim rahat etmeyecek: seni tanıdığıma çok sevindim kendi çapımda.",
    ];

    var getAtayPhrase = function() {
      return phrases[Math.floor(Math.random()*phrases.length)]
    }

    var getAtayPhrases = function(length){
      if (!length) length = 1
      var atayPhrases = []
      for (var i=0; i<length; i++) {
        atayPhrases.push(getAtayPhrase())
      }
      return atayPhrases.join(' ')
    }

    return {
      getAtayPhrases: getAtayPhrases
    }
  }

  window.atayIpsumApp = atayIpsum;

})()
