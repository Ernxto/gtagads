(function () {
    console.log(`gtag init`)
    const a = document.getElementsByClassName('top-eds')[0];
    setTimeout(function () {
        console.log(`gtag run`)
        a.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3421167218565283" data-ad-slot="2399260720" data-ad-format="auto" data-full-width-responsive="true"></ins>';
        (adsbygoogle = window.adsbygoogle || []).push({});
    }, 2000)
}())

