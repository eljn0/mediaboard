ymaps.ready(init);


var newLocal = '</a>', placemarks = [ 
   

    {
        latitude: 41.165444, 
        longitude: 45.309094,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b1.jpg" alt="Бургер"/></a> <div class="map-essay">Uzeyir Hadjibeyov Street</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b1.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Qazax, Qazaxbəyli kəndi, Bakı yolu',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude: 41.106241,
        longitude: 45.475951,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b2.jpg" alt="Бургер"/></a> <div class="map-essay">Ağstafa, Şəhərin girişi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b2.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Ağstafa, Şəhərin girişi',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude: 40.840635,
        longitude: 46.054909,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b3.jpg" alt="Бургер"/></a> <div class="map-essay">Şəmkir, Dəllər, Gəncə yolu</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b3.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Şəmkir, Dəllər, Gəncə yolu',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude: 40.725824,
        longitude: 46.257058,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b4.jpg" alt="Бургер"/></a> <div class="map-essay">Gəncə, Şəmkir yolu, Gəncə Mebelin qabağı</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b4.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Gəncə, Şəmkir yolu, Gəncə Mebelin qabağı',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude: 40.459051,
        longitude: 47.126328,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b5.jpg" alt="Бургер"/></a> <div class="map-essay">Bərdə, Yevlax-Bərdə yolu, Ağcəbədi yolu kəsişməsi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b5.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Bərdə, Yevlax-Bərdə yolu, Ağcəbədi yolu kəsişməsi',
            '<hr>',
            'Meqaboard',
            '<hr>',
            '30kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.055474,
        longitude: 47.404774,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b6.jpg" alt="Бургер"/></a> <div class="map-essay">Ağcəbədi, Məmməd Əmin Rəsulzadə prospekti (Səməd Vurğun)</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b6.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Ağcəbədi, Məmməd Əmin Rəsulzadə prospekti (Səməd Vurğun)',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude: 40.738256,
        longitude: 47.140543,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b7.jpg" alt="Бургер"/></a> <div class="map-essay">Mingəçevir-Xaldan yolu, Əxşam kəndi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b7.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Mingəçevir-Xaldan yolu, Əxşam kəndi',
            '<hr>',
            'Meqaboard',
            '<hr>',
            '30kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.613972,
        longitude: 47.161402,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b8.jpg" alt="Бургер"/></a> <div class="map-essay">Yevlax, Nizami - Nüşabə küçələrinin kəsişməsi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b8.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Yevlax, Nizami - Nüşabə küçələrinin kəsişməsi',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.394772,
        longitude: 46.752312,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b9.jpg" alt="Бургер"/></a> <div class="map-essay">Qax, Qorağan yolu</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b9.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Qax, Qorağan yolu',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.390023,
        longitude: 46.745527,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b10.jpg" alt="Бургер"/></a> <div class="map-essay">Qax, Qorağan yolu</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b10.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Qax, Qorağan yolu',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.622307,
        longitude: 46.645014,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b11.jpg" alt="Бургер"/></a> <div class="map-essay">Zaqatala rayonu, Faiq Əmirov küçəsi, (Bakı istiqaməti, Tala çayı keçən kimi, Eroil Petrol)</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b11.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Zaqatala rayonu, Faiq Əmirov küçəsi, (Bakı istiqaməti, Tala çayı keçən kimi, Eroil Petrol)',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.60712,
        longitude: 46.658246,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b12.jpg" alt="Бургер"/></a> <div class="map-essay">Zaqatala rayonu, Tala qəbirsanlığı</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b12.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Zaqatala rayonu, Tala qəbirsanlığı',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.144605,
        longitude: 47.153604,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b13.jpg" alt="Бургер"/></a> <div class="map-essay">Şəkinin girişi, Xaldan istiqamətində, Çeşməli kəndi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b13.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Şəkinin girişi, Xaldan istiqamətində, Çeşməli kəndi',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.061446,
        longitude: 47.142821,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b14.jpg" alt="Бургер"/></a> <div class="map-essay">Şəki, Çələbixan qəsəbəsi, DYP Postu</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b14.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Şəki, Çələbixan qəsəbəsi, DYP Postu',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.052873,
        longitude: 47.422616,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b15.jpg" alt="Бургер"/></a> <div class="map-essay">Oğuz, Azpetrol</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b15.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Oğuz, Azpetrol',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.046817,
        longitude:47.429066,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b16.jpg" alt="Бургер"/></a> <div class="map-essay">Oğuz, Qaynama İstirahət Mərkəzi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b16.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Oğuz, Qaynama İstirahət Mərkəzi',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:39.837,
        longitude:48.032582,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b17.jpg" alt="Бургер"/></a> <div class="map-essay">İmişli, Rəsullu kəndi, Aran küçəsi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b17.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'İmişli, Rəsullu kəndi, Aran küçəsi',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:39.788296,
        longitude:48.068197,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b18.png" alt="Бургер"/></a> <div class="map-essay">İmişli, Bəhramtəpə-Saatlı yolu, Azpetrol YDM</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b18.png" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'İmişli, Bəhramtəpə-Saatlı yolu, Azpetrol YDM',
            '<hr>',
            'Meqabord',
            '<hr>',
            '30kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:39.438612,
        longitude:48.547739,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b19.jpg" alt="Бургер"/></a> <div class="map-essay">Biləsuvar, Heydər Əliyev küçəsi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b19.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Biləsuvar, Heydər Əliyev küçəsi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },

    {
        latitude:39.066167,
        longitude:48.642302,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b20.jpg" alt="Бургер"/></a> <div class="map-essay">Masallı, Binə Xocavar kəndi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b20.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Masallı, Binə Xocavar kəndi',
            '<hr>',
            'Meqabord',
            '<hr>',
            '50kv/m',
            '</div>',
            '</div>'
        ]
    },

    {
        latitude:39.241016,
        longitude:48.512684,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b21.jpg" alt="Бургер"/></a> <div class="map-essay">Cəlilabad, Cəlilabad Mall</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b21.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Cəlilabad, Cəlilabad Mall',
            '<hr>',
            'Bilboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:39.231298,
        longitude:48.516862,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b22.jpg" alt="Бургер"/></a> <div class="map-essay">Cəlilabad, Olimpiya Kompleksi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b22.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Cəlilabad, Olimpiya Kompleksi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:38.468402,
        longitude:48.877146,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b23.jpg" alt="Бургер"/></a> <div class="map-essay">Astara rayonu, Ziya Bünyadov küçəsi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b23.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Astara rayonu, Ziya Bünyadov küçəsi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:39.994107,
        longitude:48.946549,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b24.jpg" alt="Бургер"/></a> <div class="map-essay">Şirvan, Heydər Əliyev prospekti, Bayraq meydanı</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b24.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Şirvan, Heydər Əliyev prospekti, Bayraq meydanı',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:39.598457,
        longitude:48.964481,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b25.jpg" alt="Бургер"/></a> <div class="map-essay">Salyan, Bayraq Meydanı</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b25.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Salyan, Bayraq Meydanı',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:39.625274,
        longitude:48.988223,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b26.jpg" alt="Бургер"/></a> <div class="map-essay">Salyan, Çuxanlı kəndi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b26.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Salyan, Çuxanlı kəndi',
            '<hr>',
            'Meqabord',
            '<hr>',
            '50kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.623144,
        longitude:47.953929,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b27.png" alt="Бургер"/></a> <div class="map-essay">Göyçay Ağsu yolu, Qarayazı kəndi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b27.png" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Göyçay Ağsu yolu, Qarayazı kəndi',
            '<hr>',
            'Meqabord',
            '<hr>',
            '50kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.328049,
        longitude:48.179187,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b28.jpg" alt="Бургер"/></a> <div class="map-essay">Kurdemir</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b28.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Kürdəmir',
            '<hr>',
            'Meqabord',
            '<hr>',
            '50kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.606385,
        longitude:48.673656,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b29.jpg" alt="Бургер"/></a> <div class="map-essay">Samaxi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b29.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Samaxi',
            '<hr>',
            'Meqabord',
            '<hr>',
            '50kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.973943,
        longitude:47.85677,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/30.jpg" alt="Бургер"/>Qəbələ, Heydər Əliyev prospekti</a> <div class="map-essay"></div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b30.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Qəbələ, Heydər Əliyev prospekti',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.952845,
        longitude:47.873654,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/31.jpg" alt="Бургер"/>Qəbələ, Vəndam yolu</a> <div class="map-essay"></div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b31.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Qəbələ, Vəndam yolu',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.970036,
        longitude:49.246237,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b32.jpg" alt="Бургер"/></a> <div class="map-essay">Siyəzən, Beşbarmaq, Socar YDM</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b32.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Siyəzən, Beşbarmaq, Socar YDM',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.230454,
        longitude:48.941388,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b33.jpg" alt="Бургер"/></a> <div class="map-essay">Şabran</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b33.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Şabran',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.174259,
        longitude:49.026502,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b34.jpg" alt="Бургер"/></a> <div class="map-essay">Siyəzən, Taxtakörpü</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b34.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Siyəzən, Taxtakörpü',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.110143,
        longitude:49.086446,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b35.jpg" alt="Бургер"/></a> <div class="map-essay">Siyəzən, Ağbaş kəndi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b35.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Siyəzən, Ağbaş kəndi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.093853,
        longitude:49.094821,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b36.jpg" alt="Бургер"/></a> <div class="map-essay">Siyəzən, Heydər Əliyev küçəsi, Siyəzən Palace</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b36.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Siyəzən, Heydər Əliyev küçəsi, Siyəzən Palace',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.418844,
        longitude:48.746974,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b37.jpg" alt="Бургер"/></a> <div class="map-essay">Xaçmaz, Yergüc kəndi</div></div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b37.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Xaçmaz, Yergüc kəndi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.433109,
        longitude:48.80852,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b38.jpg" alt="Бургер"/></a> <div class="map-essay">Xaçmaz, Şəhərin girişi, Cənnət Agro</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b38.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Xaçmaz, Şəhərin girişi, Cənnət Agro',
            '<hr>',
            'Meqabord',
            '<hr>',
            '50kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.444167,
        longitude:48.798819,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b39.jpg" alt="Бургер"/></a> <div class="map-essay">Xaçmaz, Bakı küçəsi, Xaçmaz Bayraq Muzeyi</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b39.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Xaçmaz, Bakı küçəsi, Xaçmaz Bayraq Muzeyi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.417774,
        longitude:48.45314,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b40.jpg" alt="Бургер"/></a> <div class="map-essay">Quba-Qusar yolu, Xucbala kəndi</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b40.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Quba-Qusar yolu, Xucbala kəndi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.404805,
        longitude:48.553401,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b41.jpg" alt="Бургер"/></a> <div class="map-essay">Xudat-Quba yolu, Vladimirovka kəndi</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b41.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Xudat-Quba yolu, Vladimirovka kəndi',
            '<hr>',
            'Billbord',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:41.362817,
        longitude:48.592324,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b42.jpg" alt="Бургер"/></a> <div class="map-essay">Quba, İgrig kəndi, Real Market</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b42.jpg" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Quba, İgrig kəndi, Real Market',
            '<hr>',
            'Meqabord',
            '<hr>',
            '50kv/m',
            '</div>',
            '</div>'
        ]
    },
    {
        latitude:40.276081,
        longitude:49.678939,
        hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b43.png" alt="Бургер"/></a> <div class="map-essay">Bakı Salyan şossesi, Bakı Gəmiqayırma Zavodu</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<a href="product-details.html">',
            '<img class="map__burger-img" src="mediaboardsekil/b43.png" alt="Бургер"/>',
            '</a>',
            '<div class="map-essay">',
            'Bakı Salyan şossesi, Bakı Gəmiqayırma Zavodu',
            '<hr>',
            'Billboard',
            '<hr>',
            '18kv/m',
            '</div>',
            '</div>'
        ]
    },
   
 {
    latitude:40.496708,
    longitude:49.963443,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b44.jpg" alt="Бургер"/></a> <div class="map-essay">Zabrat-Maştağa yolu, DYP Texniki Baxış İdarəsi</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b44.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Zabrat-Maştağa yolu, DYP Texniki Baxış İdarəsi',
        '<hr>',
        'Billboard',
        '<hr>',
        '15kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.29074,
    longitude:49.743066,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b45.jpg" alt="Бургер"/></a> <div class="map-essay">Bakı Salyan şossesi, Franklin Offshore Caspian</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b45.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Bakı Salyan şossesi, Franklin Offshore Caspian',
        '<hr>',
        'Meqabord',
        '<hr>',
        '50kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.29751,
    longitude:49.755586,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b46.jpg" alt="Бургер"/></a> <div class="map-essay">Salyan-Bakı şossesi, Lökbatan dairəsi</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b46.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Salyan-Bakı şossesi, Lökbatan dairəsi',
        '<hr>',
        'Billbord',
        '<hr>',
        '15kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.303829,
    longitude:49.775102,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b47.jpg" alt="Бургер"/></a> <div class="map-essay">Bakı Salyan şossesi, Bakı Baş Gömrük İdarəsi</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b47.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Bakı Salyan şossesi, Bakı Baş Gömrük İdarəsi',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.507624,
    longitude:50.108608,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b48.jpg" alt="Бургер"/></a> <div class="map-essay">Buzovna Şağan yolu</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b48.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Buzovna Şağan yolu',
        '<hr>',
        'Billbord',
        '<hr>',
        '15kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.510169,
    longitude:50.16484,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b49.jpg" alt="Бургер"/></a> <div class="map-essay">Şüvəlan-Şağan yolu, Dalga Arenaın yanı</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b49.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Şüvəlan-Şağan yolu, Dalga Arenaın yanı',
        '<hr>',
        'Billbord',
        '<hr>',
        '15kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.496712,
    longitude:50.171784,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b50.jpg" alt="Бургер"/></a> <div class="map-essay">Mərdəkan, Şüvəlan yolu</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b50.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Mərdəkan, Şüvəlan yolu',
        '<hr>',
        'Billbord',
        '<hr>',
        '15kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.582727,
    longitude:49.688831,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b51.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Cəlil Məmmədquluzadə küçəsi, Sumqayıt bulvarı</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b51.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Cəlil Məmmədquluzadə küçəsi, Sumqayıt bulvarı',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.582727,
    longitude:49.688831,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b52.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Cəlil Məmmədquluzadə küçəsi, Sumqayıt bulvarı</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b52.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Cəlil Məmmədquluzadə küçəsi, Sumqayıt bulvarı',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.582995,
    longitude:49.660494,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b52.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh-Yəhya Məmmədov kəsişməsi, Lukoil YDM</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b52.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh-Yəhya Məmmədov kəsişməsi, Lukoil YDM',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.562109,
    longitude:49.634816,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b53.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Maşın Bazarı</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b53.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Maşın Bazarı',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.572568,
    longitude:49.6371,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b54.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh küçəsi, Top Servis</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b54.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh küçəsi, Top Servis',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.580899,
    longitude:49.65563,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b55.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh küçəsi, Sumqayıt Mebel</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b55.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh küçəsi, Sumqayıt Mebel',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.580269,
    longitude:49.65468,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b56.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh küçəsi, Azercell</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b56.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh küçəsi, Azercell',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.576592,
    longitude:49.646092,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b57.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh küçəsi, Avromed</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b57.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh küçəsi, Avromed',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.576357,
    longitude:49.644841,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b58.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh küçəsi, Avromed</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b58.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh küçəsi, Avromed',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.571981,
    longitude:49.636069,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b59.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh küçəsi, Gömrük Komitəsi</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b59.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh küçəsi, Gömrük Komitəsi',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.569985,
    longitude:49.63374,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b60.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, Sülh küçəsi</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b60.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, Sülh küçəsi',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.56926,
    longitude:49.631435,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b61.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, DYP Post</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b61.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, DYP Post',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
{
    latitude:40.368564,
    longitude:49.810295,
    hintContent: '<div class="map__hint"> <a href="product-details.html"><img class="map__burger-img" src="mediaboardsekil/b62.jpg" alt="Бургер"/></a> <div class="map-essay">Sumqayıt, DYP Post</div>',
    balloonContent: [
        '<div class="map__balloon">',
        '<a href="product-details.html">',
        '<img class="map__burger-img" src="mediaboardsekil/b62.jpg" alt="Бургер"/>',
        '</a>',
        '<div class="map-essay">',
        'Sumqayıt, DYP Post',
        '<hr>',
        'Billbord',
        '<hr>',
        '18kv/m',
        '</div>',
        '</div>'
    ]
},
 

],


    
    


/*],*/

    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [40.550277, 47.578965],
        zoom: 8,
        controls: ['zoomControl','default','routeButtonControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/sprite.png',
                iconImageSize: [26, 33],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/pc1.png',
                size: [30, 30],
                offset: [-50,-50]
                
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);}