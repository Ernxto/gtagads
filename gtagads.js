(function () {
    console.log(`gtag init`)
    const now = new Date()
    const c = window.userGeo || 'gb'
    const client = 'ca-pub-3421167218565283'
    const inv = [
        {
            id : 'dfp_banner_header_panel',
            inv: 2399260720,
            geo : ['gb','ca'],
            time : {
                from : 10,
                to: 15
            }
        }
    ];
    setTimeout(function () {
        console.log(`gtag run`)
        inv.forEach(i => {
            try {
                if(i.geo.length === 0 || i.geo.includes(c.toLowerCase())){
                    if(i.time === null || (now.getHours() >= i.time.from && now.getHours() <= i.time.to )){
                        const a = document.getElementById(i.id)
                        if(a && a !== null){
                            a.innerHTML = `<ins class="adsbygoogle" style="display:block" data-ad-client="${client}" data-ad-slot="${i.inv}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        }
                    }
                }
            } catch (error) {
                console.log(error)
            }
        })
    }, 2000)
}())
