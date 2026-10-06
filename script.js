/* ============================================================
   RAJIB TV — Live TV Streaming Interface
   ============================================================ */

// ==========================================
// RAJIB TV PLAYLIST
// Replace the content below with your M3U
// ==========================================

const M3U_PLAYLIST = `
#EXTM3U
#EXTINF:-1 tvg-name="LALIGA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",LALIGA
https://rmtv.akamaized.net/hls/live/2043154/rmtv-en-web/bitrate_3.m3u8
#EXTINF:-1 tvg-name="A Sports HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",A Sports HD
https://tvsen6.aynaott.com/zv68oqPDu7MZZwmHhRxt/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="Star Sports 2 HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Star Sports 2 HD
http://tvsen7.aynascope.net/ssport2hd/index.m3u8
#EXTINF:-1 tvg-name="DAZN LALIGA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",DAZN LALIGA
http://45.89.51.142:8080/live/20102023/123456789/243.ts
#EXTINF:-1 tvg-name="SKY SPORTS FOOTBAll" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SKY SPORTS FOOTBAll
http://2756d46c.akciatv.ru/iptv/7FRNF6CY9A9TG3/9289/index.m3u8
#EXTINF:-1 tvg-name="Sony Ten 1" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Sony Ten 1
https://drk6xq0vhn.gpcdn.net/live/ten_1_hd_720/index.m3u8
#EXTINF:-1 tvg-name="Sony Ten 2" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Sony Ten 2
https://drk6xq0vhn.gpcdn.net/live/ten_2_hd_720/index.m3u8
#EXTINF:-1 tvg-name="Sony Ten 5" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Sony Ten 5
https://drk6xq0vhn.gpcdn.net/live/ten_5_hd_720/index.m3u8
#EXTINF:-1 tvg-name="Euro Sports HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Euro Sports HD
https://drk6xq0vhn.gpcdn.net/live/euro_sports_hd_abr/index.m3u8
#EXTINF:-1 tvg-name="REAL MADRID" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",REAL MADRID
https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/bitrate_3.m3u8
#EXTINF:-1 tvg-name="RTV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",RTV
https://tvsen5.aynaott.com/ba47dHpDk3Se/index.m3u8
#EXTINF:-1 tvg-name="Deepto TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Deepto TV
https://tvsen5.aynaott.com/tK2BNdfsdfsdf/index.m3u8
#EXTINF:-1 tvg-name="Channel 9" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Channel 9
http://103.141.70.136:8080/auth/egENFXAABLJfSQM3xEtuxnpt9TnpjzEE9Ts0Q4XUKZoVADzw_MZj5ii1qtmVpa5eL_tPWi3YR_z6xIj-kmvxp0zNeyOG1o0JcwEuFgYWGMOMIu4ueZgn5zfN7hrX4XXWWAbWsUeeNR6HUvIyg-V-l_t2rz2FPyLlVGI1z3Rf3mHdi8uaJtDACRDgJC4tBJqP9GryKXBzLzfKCsnoYYJa6VbFq62zKPHat02pcHuQX2vTRwvLdesA8TbdetEDK3QW74Z0Dd8vJVVvP0ERMSMh10lxNZSqAtJH36o_XSmAGuOfcrPAYRJ7Z36PqO3O0wAiIYdihw2IesxiKmIc88m7UvwvCOJVQ9ktT3NlOrdAUN9Czy34ojM_p3m1fNblsODiZ64-6DMWkvDjCocO2n3hlgDKUWTF6ZjvCVfXHIy-q3-01356Vy2gL_MGENkrOEpeJQYIWt7qbyT6v0HhiXPEtUrcOR8R7OL_blA5yGpkZm70ohtwKKnp-E9QRi4YeSxrSIHbweEnYUCfIr2o2pgKIkJZzbxBdprUpq2jlzfiHzcWvgdfzpZdbptmguAm-evcJvjw0U-v5sPYYkkGF7hgv89I0dW4n5PB2vDEGHMxgAw
#EXTINF:-1 tvg-name="Channel 24" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Channel 24
http://103.141.70.136:8080/auth/5higoq898tknIXeWnolokctTTq4Z-qwTMHqvnOhdEcfPISz8w-aFDn23EDcIetYR3SdJJ87UMnftSuGif-sccJ39-C9DQ3JrxVEa1XS3R0OARdoPDizyTY5R59eP7ZijqjN8Uj16Gei7CnKH4qBUceCRzJb1oex4nZ3jp2r8k6z8UZsGYq6S8xzBJc5vMlXgvzRi9Sfvi1nVO-wnpgu7yMFbJmot0cWedzMGCRXIxBM8ejycFPte8cyavUH0D69rzg3WzK4ulxLS8h81fTAMI3Z2AGSJrlgRHIG7eBqw8V2UpyK0kKx6m2N5TqOe-Ih2YQMme-tPbKwGQVdbdiOI_1ZJi0bU5qwARqWSPRFrMf16swqAjsjLm9K2_t3JBSZa4_B4ep8wYz2CTkzXI8vyKNEfZdtn9rj-8zrQ2QTBZq31_79AyMtxfd0aF9DhhfQmgIh16TDIMe6mTFvS1HrVZbl_jqFkcYzUTXVdxaNT_AwOB-JyMwBT6gfGOhTOA03_Kke4WhfBksvfZeKObWqlKCD9hyFpD-cRw-lk0vwH4Vn4KqCA4XnCCRMFYcHLOHsoZ8_fwbRJzBlDP9raEQ9cB8J29dlLj-ZWb1gAs56kEaY
#EXTINF:-1 tvg-name="Ekattor TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Ekattor TV
https://tvsen6.aynaott.com/EWDrV5QskgarZEUBb3pU/index.m3u8
#EXTINF:-1 tvg-name="DBC News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",DBC News
https://tvsen6.aynaott.com/pF66Tkz0qFwP2aMMqHyt/index.m3u8
#EXTINF:-1 tvg-name="Global TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Global TV
https://tvsen6.aynaott.com/y0q9eFAuquAtvTxRzUHq/index.m3u8
#EXTINF:-1 tvg-name="NEWS 21 TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",NEWS 21 TV
http://103.190.133.68:1935/news21live/live/playlist.m3u8
#EXTINF:-1 tvg-name="DESHI TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",DESHI TV
https://deshitv.deshitv24.net/live/myStream/playlist.m3u8
#EXTINF:-1 tvg-name="NRB HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",NRB HD
https://app.ncare.live/live-orgin/nrb-eu.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Jago News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Jago News
https://app.ncare.live/live-orgin/jagonews24.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Movie Bang" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Movie Bang
http://alvetv.com/moviebanglatv/8080/index.m3u8
#EXTINF:-1 tvg-name="Rongeen TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Rongeen TV
https://server.thelegitpro.in/rongeentv/rongeentv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-name="NTV UK" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",NTV UK
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ntvuk00332211.stream/live-orgin/ntvuk00332211.stream/chunks.m3u8
#EXTINF:-1 tvg-name="Enter TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Enter TV
https://live1.entertv.com.bd/entertv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-name="NTV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",NTV
https://tvsen5.aynaott.com/xV4jEKf3D9zc/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="ATN Bangla" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",ATN Bangla
https://tvsen5.aynaott.com/atnbangla/index.m3u8
#EXTINF:-1 tvg-name="Bangla Vision" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Bangla Vision
https://tvsen5.aynaott.com/banglavision/index.m3u8
#EXTINF:-1 tvg-name="Maasranga TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Maasranga TV
https://tvsen5.aynaott.com/maasrangatv/index.m3u8
#EXTINF:-1 tvg-name="News 24" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",News 24
https://tvsen5.aynaott.com/News24/index.m3u8
#EXTINF:-1 tvg-name="Aakash Aath" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",Aakash Aath
https://tvsen5.aynaott.com/Wm9Lv2RjZGT6/index.m3u8
#EXTINF:-1 tvg-name="Boishakhi TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Boishakhi TV
https://tvsen6.aynaott.com/1d3uG9VCgrR9DRtWZM57/index.m3u8
#EXTINF:-1 tvg-name="MY TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",MY TV
https://tvsen6.aynaott.com/XMpHaEf0ANBhv8w6NWR7/index.m3u8
#EXTINF:-1 tvg-name="Sports Grid" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Sports Grid
https://tvsen6.aynaott.com/SportsGrid/index.m3u8
#EXTINF:-1 tvg-name="Bloomberg TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Bloomberg TV
https://tvsen6.aynaott.com/bloombergtv/index.m3u8
#EXTINF:-1 tvg-name="Duronto TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Duronto TV
https://tvsen6.aynaott.com/6xyZ3N4oHv2KBJdB6W4p/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="ZEE BANGLA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",ZEE BANGLA
https://tvsen6.aynaott.com/ZeeBangla/index.m3u8
#EXTINF:-1 tvg-name="ATN News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",ATN News
https://tvsen6.aynaott.com/da6WMXAk/index.m3u8
#EXTINF:-1 tvg-name="Talk Sport" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Talk Sport
https://tvsen6.aynaott.com/talkSPORT/index.m3u8
#EXTINF:-1 tvg-name="RDS Social TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",RDS Social TV
https://tvsen6.aynaott.com/RDSSocialTV/index.m3u8
#EXTINF:-1 tvg-name="CNBC TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",CNBC TV
https://tvsen6.aynaott.com/cnbc/index.m3u8
#EXTINF:-1 tvg-name="3ABN Kids" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",3ABN Kids
https://tvsen6.aynaott.com/3abnkids/index.m3u8
#EXTINF:-1 tvg-name="Jamuna" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Jamuna
https://tvsen6.aynaott.com/KGdZEdA7qQ43dmPkgk1j/index.m3u8
#EXTINF:-1 tvg-name="SA TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",SA TV
https://tvsen6.aynaott.com/rELXiuUXqbgzPb06Npom/index.m3u8
#EXTINF:-1 tvg-name="Nexus TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Nexus TV
https://tvsen6.aynaott.com/Epm7WrFa/index.m3u8
#EXTINF:-1 tvg-name="BTV Chattogram" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",BTV Chattogram
https://tvsen6.aynaott.com/TjGR1GcxKetHNVcMVxbq/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="Bangla Tv" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Bangla Tv
https://tvsen6.aynaott.com/39ee93nUbCCmm5LsyD4t/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="A Sports" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",A Sports
https://tvsen6.aynaott.com/zv68oqPDu7MZZwmHhRxt/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="Anando TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Anando TV
https://tvsen6.aynaott.com/LeUAm4F1iixYns3s3Non/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="Moonbug Kids" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Moonbug Kids
https://tvsen6.aynaott.com/MoonbugKids/index.m3u8
#EXTINF:-1 tvg-name="PROBASHI TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",PROBASHI TV
http://158.69.24.53:8080/probashi_tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-name="Channel S" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Channel S
https://app.ncare.live/live-orgin/channels.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Green TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Green TV
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8
#EXTINF:-1 tvg-name="JALSHA BANGLA BD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",JALSHA BANGLA BD
https://dish.porosh.com.bd/hls/jalshabangla.m3u8
#EXTINF:-1 tvg-name="DTV USA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="International",DTV USA
https://cdn.dtvusa.com/dtv/index.m3u8
#EXTINF:-1 tvg-name="Jungle Book" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Jungle Book
https://cc-4bhi5osabejc9.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-4bhi5osabejc9/junglebook.m3u8
#EXTINF:-1 tvg-name="TBN24" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",TBN24
http://cdn01.palki.tv/live/TBN24-M/index.m3u8
#EXTINF:-1 tvg-name="TARA TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",TARA TV
https://legitpro.co.in/taratv/taratv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-name="STAR BANGLA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",STAR BANGLA
http://103.151.60.162:2122/play/a0f5/index.m3u8
#EXTINF:-1 tvg-name="SANANDA TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",SANANDA TV
http://live-stream.amarbanglatv.in:8080/hls/sanandatv/index.m3u8
#EXTINF:-1 tvg-name="Star Jalsha BD IP" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Star Jalsha BD IP
http://103.151.60.162:2122/play/a00w/index.m3u8
#EXTINF:-1 tvg-name="COLORS BANGLA SD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",COLORS BANGLA SD
http://103.172.29.30:9991/stream/channelid/1759751142
#EXTINF:-1 tvg-name="ENTER10 BANGLA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",ENTER10 BANGLA
https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8
#EXTINF:-1 tvg-name="Sony HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",Sony HD
http://38.96.178.205/SONYHD/index.m3u8
#EXTINF:-1 tvg-name="Kolkata TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",Kolkata TV
https://tvsen6.aynaott.com/kolkatatv/index.m3u8
#EXTINF:-1 tvg-name="Channel I" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Channel I
https://tvsen6.aynaott.com/FNHpYvGZ7FkCE10PwTHm/index.m3u8
#EXTINF:-1 tvg-name="Mohona Tv" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Mohona Tv
https://tvsen6.aynaott.com/AkyX5dunzju4cpo26dr7/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="WEATHER CHANNEL" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",WEATHER CHANNEL
https://tvsen6.aynaott.com/TheWeatherChannel/index.m3u8
#EXTINF:-1 tvg-name="Bijoy Tv" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Bijoy Tv
https://tvsen6.aynaott.com/N8Xbo5vdwVU6sF43RsW0/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="CNN" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",CNN
https://tvsen6.aynaott.com/cnn/index.m3u8
#EXTINF:-1 tvg-name="Ananda" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Ananda
https://tvsen6.aynaott.com/LeUAm4F1iixYns3s3Non/index.m3u8
#EXTINF:-1 tvg-name="Somoy TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Somoy TV
https://tvsen6.aynaott.com/4XcqdovJzbbC9WdJA9gk/index.m3u8
#EXTINF:-1 tvg-name="Marquee Sports Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Marquee Sports Network
https://tvsen6.aynaott.com/MarqueeSportsNetwork/index.m3u8
#EXTINF:-1 tvg-name="Asian TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Asian TV
https://tvsen6.aynaott.com/pKb5k6NnzxsKpWUs6E8M/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="Ekhon TV (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Ekhon TV (HD)
https://stream.ottplus.live/live/ekhon_tv_abr/live/ekhon_tv_hd_720/chunks.m3u8
#EXTINF:-1 tvg-name="Deepto TV (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Deepto TV (FHD)
https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8
#EXTINF:-1 tvg-name="Time Television (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Time Television (FHD)
https://app.ncare.live/live-orgin/timetvusa.stream/playlist.m3u8
#EXTINF:-1 tvg-name="ME TV (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",ME TV (HD)
https://iptvbd.live/metv1080/1080.m3u8
#EXTINF:-1 tvg-name="NTV UK (HD+)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",NTV UK (HD+)
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ntvuk00332211.stream/playlist.m3u8
#EXTINF:-1 tvg-name="G-Serise (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",G-Serise (FHD)
https://vods2.aynaott.com/gseriesDrama/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="Jago News 24 (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Jago News 24 (FHD)
https://app.ncare.live/live-orgin/jagonews24.stream/live-orgin/jagonews24.stream/chunks.m3u8
#EXTINF:-1 tvg-name="Deshe Bideshe (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Deshe Bideshe (HD)
https://dbcanada.sonarbanglatv.com/deshebideshe/dbtv/index.m3u8
#EXTINF:-1 tvg-name="Amar Bangla TV (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Amar Bangla TV (HD)
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/amarbanglatv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Ekushey TV (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Ekushey TV (FHD)
http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8
#EXTINF:-1 tvg-name="Cricket Gold (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Cricket Gold (FHD)
https://d1nj4u39ja4cn0.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/FLS-MuxIP-CricketGold/418.m3u8
#EXTINF:-1 tvg-name="FOX Sports 501 (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FOX Sports 501 (FHD)
http://y3fqd48g.megatv.fun/iptv/NRLXRWSBWBPLN4/19146/index.m3u8
#EXTINF:-1 tvg-name="Willow Sports (HD+)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Willow Sports (HD+)
http://27.124.71.27/Willow_Extra/index.m3u8
#EXTINF:-1 tvg-name="Telemundo (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="International",Telemundo (FHD)
https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master.m3u8
#EXTINF:-1 tvg-name="FOX Sports (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FOX Sports (FHD)
https://d1jzu95oc8fgt3.cloudfront.net/FOX_Sports.m3u8
#EXTINF:-1 tvg-name="beIN SPORTS 1 MAX (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",beIN SPORTS 1 MAX (FHD)
http://82.40.55.133:80/live/play/Ym1kS2NITkljMk5sZERKQ1JGRmpkVE0wYTBkYU1qQlRkV1pxVms5amJHUjBkRXBpTDFRMmRFRlFjejA9/707929
#EXTINF:-1 tvg-name="beIN SPORTS 2 MAX (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",beIN SPORTS 2 MAX (FHD)
http://194.147.150.210:80/live/play/VkNzM1FreEhZV2xJYUUxUlZ6azRlak12VVROUlVFUndUekYyYUhKd1ZUaFdlbmhpYjBnNVNXcFNORDA9/835129
#EXTINF:-1 tvg-name="beIN Sports 1 (HD+)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",beIN Sports 1 (HD+)
http://85.209.176.86:80/play/mpegts/eyJpdiI6IkhOUFZKUzdzRHVFQ2x5c25QZEpZM0E9PSIsInZhbHVlIjoibDYvbkZiQ2d1V3V6bXRlam5idWN5NFdGcFFCRkxLRy9RblNqOFF5Uk8zVWRMeVdnMnA1alRGaklIQ3diN0FKK1hMWFU5VnluMDR1Tm1qbTlJaEZOU1E9PSIsIm1hYyI6ImRiMzRjODdmNjY0ZDk4NGFmNmY4ZDI2M2Q2YjViYWRiYTNjMjc5OTI1ZDZkZDIyZjc2MTJmNDhjYWJjZWI4ODIiLCJ0YWciOiIifQ==/86e4e721-9c39-4221-9106-5efcf96d029c.ts
#EXTINF:-1 tvg-name="COLORS RISHTEY" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",COLORS RISHTEY
http://103.172.29.30:9991/stream/channelid/1367268710
#EXTINF:-1 tvg-name="Zee Bangla Sonar" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Zee Bangla Sonar
https://d1g8wgjurz8via.cloudfront.net/bpk-tv/ColorsHD/default/ColorsHD.m3u8
#EXTINF:-1 tvg-name="bein Sports XTRA (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",bein Sports XTRA (HD)
https://amg01334-beinsportsllc-beinxtra-localnow-kcy6r.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="beIN SPORTS XTRA (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",beIN SPORTS XTRA (HD)
https://bein-esp-xumo.amagi.tv/playlistR720P.m3u8
#EXTINF:-1 tvg-name="beIN SPORTS XTRA (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",beIN SPORTS XTRA (FHD)
https://bein-xtra-bein.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="Redbull TV (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Redbull TV (HD)
https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8
#EXTINF:-1 tvg-name="FIFA+ (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA+ (HD)
https://d2w9q46ikgrcwx.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-of5cbk3sav3w5/v1/sysdata_s_p_a_fifa_7/samsungheadend_us/latest/main/hls/playlist.m3u8
#EXTINF:-1 tvg-name="FITE (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FITE (HD)
https://d3d85c7qkywguj.cloudfront.net/scheduler/scheduleMaster/263.m3u8
#EXTINF:-1 tvg-name="Colors Bangla Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Colors Bangla Cinema
http://103.172.29.30:9991/stream/channelid/14180834
#EXTINF:-1 tvg-name="SNB CINEMA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",SNB CINEMA
http://103.182.83.246/hls/snbcinema.m3u8
#EXTINF:-1 tvg-name="Sony MAX HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Sony MAX HD
https://drk6xq0vhn.gpcdn.net/live/max_hd_abr/index.m3u8
#EXTINF:-1 tvg-name="Aamar Bangla (720p)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Aamar Bangla (720p)
http://115.187.41.216:8080/hls/amarbangla/index.m3u8
#EXTINF:-1 tvg-name="Amar Bangla Digital" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Amar Bangla Digital
http://115.187.41.216:8080/hls/amardigital/index.m3u8
#EXTINF:-1 tvg-name="Abp Ananda" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",Abp Ananda
https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/ts-ap-s1-n1/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8
#EXTINF:-1 tvg-name="R Plus News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",R Plus News
https://thelegitpro.in/pntv/rplusnews24x7/index.m3u8
#EXTINF:-1 tvg-name="ESPN8 The Ocho (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",ESPN8 The Ocho (FHD)
https://d3b6q2ou5kp8ke.cloudfront.net/ESPNTheOcho.m3u8
#EXTINF:-1 tvg-name="PGA Tour (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",PGA Tour (FHD)
https://d11k1mnrgfposz.cloudfront.net/playlist.m3u8
#EXTINF:-1 tvg-name="Rally TV (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Rally TV (FHD)
https://rally-tv-live.akamaized.net/hls/live/2117704/RallyTV-Pri/master.m3u8
#EXTINF:-1 tvg-name="Trace Sport (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Trace Sport (FHD)
https://lightning-tracesport-samsungau.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="Al Qamar (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Al Qamar (FHD)
https://streamer3.premio.link/alqamar/playlist.m3u8
#EXTINF:-1 tvg-name="Azan TV (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Azan TV (HD)
https://dbcanada.sonarbanglatv.com/azantv/atv/index.m3u8
#EXTINF:-1 tvg-name="Saudi Quran (SD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Saudi Quran (SD)
https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8
#EXTINF:-1 tvg-name="Saudi TV (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Saudi TV (FHD)
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-saudi-tv/2ad66056b51fd8c1b624854623112e43/index.m3u8
#EXTINF:-1 tvg-name="BBC Bangla" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",BBC Bangla
https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/dash/nonuk/cellular_main_sd_abr_v2/cfs/bbc_world_service.mpd
#EXTINF:-1 tvg-name="DD National (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD National (HD)
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8
#EXTINF:-1 tvg-name="DD Bharati (SD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Bharati (SD)
https://d2lk5u59tns74c.cloudfront.net/out/v1/67cec794d8b14f9ba21f73924ac65797/index.m3u8
#EXTINF:-1 tvg-name="DD Urdu (SD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Urdu (SD)
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/9b91e9007e754db39a8b32c6bfc5b24a/index.m3u8
#EXTINF:-1 tvg-name="Sony TV (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",Sony TV (HD)
https://stream.ottplus.live/live/sony_ent_sd_abr/index.m3u8
#EXTINF:-1 tvg-name="9XM (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9XM (FHD)
https://wiselp.wiseplayout.com/9XM/HD1080/HD1080.m3u8
#EXTINF:-1 tvg-name="9X Tashan (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9X Tashan (FHD)
https://wiselp.wiseplayout.com/9X_Tashan/master.m3u8
#EXTINF:-1 tvg-name="9X Jalwa (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9X Jalwa (FHD)
https://wiselp.wiseplayout.com/9X_Jalwa/master.m3u8
#EXTINF:-1 tvg-name="9X Jhakkas (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9X Jhakkas (FHD)
https://wiselp.wiseplayout.com/9X_Jhakaas/master.m3u8
#EXTINF:-1 tvg-name="Zoom (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Zoom (HD)
https://d2esfk1pb9cdob.cloudfront.net/master.m3u8
#EXTINF:-1 tvg-name="Balle (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Balle (HD)
https://mcncdndigital.com/balleballetv/tracks-v1a1/mono.ts.m3u8
#EXTINF:-1 tvg-name="Enter10 Bangla (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Enter10 Bangla (HD)
https://amg01448-samsungin-enterr10bangla-samsungin-ad-gg.amagi.tv/playlist/amg01448-samsungin-enterr10bangla-samsungin/playlist.m3u8
#EXTINF:-1 tvg-name="News18 Bangla (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",News18 Bangla (FHD)
https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8
#EXTINF:-1 tvg-name="Bangla Jago (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Bangla Jago (HD)
http://banglajagotv.livebox.co.in/banglajagohls/24x7.m3u8
#EXTINF:-1 tvg-name="DD Bangla (SD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",DD Bangla (SD)
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/7ff57cc9046b4c188b51a0d506f36e7f/index_3.m3u8
#EXTINF:-1 tvg-name="Zee 24 Ghanta (SD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Zee 24 Ghanta (SD)
https://d2dsoyvkr33m05.cloudfront.net/index_1.m3u8
#EXTINF:-1 tvg-name="India TV (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",India TV (HD)
https://pl-indiatvnews.akamaized.net/out/v1/db79179b608641ceaa5a4d0dd0dca8da/index.m3u8
#EXTINF:-1 tvg-name="Hindi Hits (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Hindi Hits (FHD)
http://146.59.253.52:8080/hindihitshd/index.m3u8
#EXTINF:-1 tvg-name="Hindi Movies (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Hindi Movies (HD)
https://vods2.aynaott.com/hindimovies/index.m3u8
#EXTINF:-1 tvg-name="Bolly Flix (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Bolly Flix (FHD)
https://cc-r5hupcym5oehh.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-r5hupcym5oehh/SBUM/RunnTV/BollyFlix_IN/BollyFlix_IN.m3u8
#EXTINF:-1 tvg-name="SONY One Hits Action (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",SONY One Hits Action (FHD)
https://5098a8b860504a3690fd2e7c0a18d68f.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-817-FR-SONYONEHITSACTION-LG_FR/playlist.m3u8
#EXTINF:-1 tvg-name="My Time (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",My Time (FHD)
https://mytime-tcl.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="MovieSphere UK (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",MovieSphere UK (FHD)
https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="Great Movies (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Great Movies (FHD)
https://amg01753-narrativeentert-greatmovies-samsunguk-7z6eh.amagi.tv/ts-eu-w1-n2/playlist/amg01753-narrativeentert-greatmovies-samsunguk/playlist.m3u8
#EXTINF:-1 tvg-name="Gravitas (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Gravitas (FHD)
https://d6dg3ebeih71x.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-jx9exbvh3yi8u/Gravitas_Movies.m3u8
#EXTINF:-1 tvg-name="Action Hollywood Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Action Hollywood Movies
https://amg01076-lightningintern-actionhollywood-samsungnz-82rry.amagi.tv/playlist/amg01076-lightningintern-actionhollywood-samsungnz/playlist.m3u8
#EXTINF:-1 tvg-name="FH Wild TV (HD+)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",FH Wild TV (HD+)
https://amg00793-amg00793c6-xumo-us-2669.playouts.now.amagi.tv/BBCStudios-BBCEarthA-hls/playlist540p.m3u8
#EXTINF:-1 tvg-name="Discover Pakistan" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Discover Pakistan
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/discoverpakistan.stream/playlist.m3u8
#EXTINF:-1 tvg-name="SONY BBC Earth (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",SONY BBC Earth (HD)
https://stream.ottplus.live/live/bbc_earth_hd_abr/index.m3u8
#EXTINF:-1 tvg-name="Real Wild" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Real Wild
https://amg00426-littledotstudio-realwild-tcl-fzsi1.amagi.tv/playlist/amg00426-littledotstudio-realwild-tcl/playlist.m3u8
#EXTINF:-1 tvg-name="Documentary+" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Documentary+
https://a38d899367d24b1197db60dedfa80262.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-887-DOCUMENTARYINTERNATIONAL-FREELIVESPORTS/mt/freelivesports/887/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="Wild Life" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Wild Life
https://wildearth-plex.amagi.tv/master.m3u8
#EXTINF:-1 tvg-name="CGTN Documentary" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",CGTN Documentary
https://english-livebkali.cgtn.com/live/doccgtn_1.m3u8
#EXTINF:-1 tvg-name="Outdoor TV (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Outdoor TV (FHD)
https://amg00718-outdoorchannela-outdoortvnz-samsungnz-lylq4.amagi.tv/playlist/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8
#EXTINF:-1 tvg-name="Breaking News (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Breaking News (FHD)
https://amg02703-leadstory-leadstory-samsungau-rr75f.amagi.tv/playlist/amg02703-leadstory-leadstory-samsungau/playlist.m3u8
#EXTINF:-1 tvg-name="Wion News ENG (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Wion News ENG (FHD)
https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8
#EXTINF:-1 tvg-name="Zee Business (SD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Zee Business (SD)
https://dwby15d04agvq.cloudfront.net/index_1.m3u8
#EXTINF:-1 tvg-name="News 24 (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",News 24 (HD)
https://amg13643-amg13643c1-amgplt0016.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg13643-amg13643c1-amgplt0016/playlist.m3u8
#EXTINF:-1 tvg-name="News Nation (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",News Nation (FHD)
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/6cd2f649739a45ca9de1daf81cc7d0f2/index.m3u8
#EXTINF:-1 tvg-name="Aaj Tak News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Aaj Tak News
https://aajtaklive-amd.akamaized.net/hls/live/2014416/aajtak/aajtaklive/live_720p/chunks.m3u8
#EXTINF:-1 tvg-name="CGTN News (EN)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",CGTN News (EN)
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/cgtn.stream/playlist.m3u8
#EXTINF:-1 tvg-name="DW English" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",DW English
https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8
#EXTINF:-1 tvg-name="News Max 2" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",News Max 2
https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8
#EXTINF:-1 tvg-name="Sky News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Sky News
https://d39chvnxm26pgp.cloudfront.net/v1/master/72588bff830dec7b26d7cbbf5f3c24928aec5c03/cc-sthen6ms4vxgv-stage/WNSFO/ABR.m3u8
#EXTINF:-1 tvg-name="France 24" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",France 24
https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/fr24.stream/playlist.m3u8
#EXTINF:-1 tvg-name="NDTV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",NDTV
https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678-b/ndtv24x7/master.m3u8
#EXTINF:-1 tvg-name="RT News (EN)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",RT News (EN)
https://rt-glb.rttv.com/live/rtnews/playlist.m3u8
#EXTINF:-1 tvg-name="CNA News (EN)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",CNA News (EN)
https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8
#EXTINF:-1 tvg-name="India Today" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",India Today
https://d2lk5u59tns74c.cloudfront.net/out/v1/d4435039c7d1433d9b9d0b6cdc9dd4ff/index.m3u8
#EXTINF:-1 tvg-name="ZEE News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",ZEE News
https://dknttpxmr0dwf.cloudfront.net/index_2.m3u8
#EXTINF:-1 tvg-name="5-Minutes Kraft (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",5-Minutes Kraft (FHD)
https://soul-5mincrafteng-rakuten.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="Teletubbies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Teletubbies
https://dv8lsrd8fecw9.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-dkls74gdpo7r0/master.m3u8
#EXTINF:-1 tvg-name="Knowledge Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Knowledge Network
https://d1wal6k3d7ssin.cloudfront.net/out/v1/ea91db0906c847a4931b46a9ec36e77b/index.m3u8
#EXTINF:-1 tvg-name="MBC (FHD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="International",MBC (FHD)
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-1/15cf99af5de54063fdabfefe66adc075/index.m3u8
#EXTINF:-1 tvg-name="Cartoon Network (HD)" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Cartoon Network (HD)
https://stream.ottplus.live/live/cn_sd_abr/index.m3u8
#EXTINF:-1 tvg-name="Kartoon Channel" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Kartoon Channel
https://d2z0ysa6dgxhlc.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-ajxyy4yaic6nq/kchan.m3u8
#EXTINF:-1 tvg-name="Smurf TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Smurf TV
https://d144py1prrd7ns.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-affg2ev32s0dq/smrfe.m3u8
#EXTINF:-1 tvg-name="Minimax" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Minimax
http://88.212.15.19/live/test_minimax/playlist.m3u8
#EXTINF:-1 tvg-name="Tiny Pop" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Tiny Pop
https://amg01753-narrativeentert-tinypop-samsunguk-hvvb7.amagi.tv/ts-eu-w1-n2/playlist/amg01753-narrativeentert-tinypop-samsunguk/playlist.m3u8
#EXTINF:-1 tvg-name="Moonbug" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Moonbug
https://dq2a9ghraf7sw.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-zxq18dopv0o6q/Moonbug.m3u8
#EXTINF:-1 tvg-name="PBS Kids Pacific" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",PBS Kids Pacific
https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8
#EXTINF:-1 tvg-name="SKY SPORTS ACTION" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SKY SPORTS ACTION
http://2756d46c.akciatv.ru/iptv/7FRNF6CY9A9TG3/9155/index.m3u8
#EXTINF:-1 tvg-name="SKY SPORTS CRICKET" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SKY SPORTS CRICKET
http://2756d46c.akciatv.ru/iptv/7FRNF6CY9A9TG3/9258/index.m3u8
#EXTINF:-1 tvg-name="SKY SPORTS MIX" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SKY SPORTS MIX
http://6zirt9yx.otttv.pw/iptv/HEGN4VXXQQSYCA/9310/index.m3u8
#EXTINF:-1 tvg-name="SKY SPORTS F1" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SKY SPORTS F1
http://6zirt9yx.otttv.pw/iptv/HEGN4VXXQQSYCA/7342/index.m3u8
#EXTINF:-1 tvg-name="SKY SPORTS EPL" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SKY SPORTS EPL
http://2756d46c.akciatru.ru/iptv/7FRNF6CY9A9TG3/9334/index.m3u8
#EXTINF:-1 tvg-name="SKY SPORTS TENNIS" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SKY SPORTS TENNIS
http://6zirt9yx.otttv.pw/iptv/HEGN4VXXQQSYCA/6546/index.m3u8
#EXTINF:-1 tvg-name="Star Sports 1 Hindi" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Star Sports 1 Hindi
http://41.205.93.154/STARSPORTS1/index.m3u8
#EXTINF:-1 tvg-name="T Sports HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",T Sports HD
http://27.124.71.27/T-Sports/index.m3u8
#EXTINF:-1 tvg-name="Bein Sports 1" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Bein Sports 1
http://27.124.71.27/beIN_Sports_1/index.m3u8
#EXTINF:-1 tvg-name="Bein Sports 2" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Bein Sports 2
http://27.124.71.27/beIN_Sports_2/index.m3u8
#EXTINF:-1 tvg-name="Bein Sports 3" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Bein Sports 3
http://27.124.71.27/beIN_Sports_3/index.m3u8
#EXTINF:-1 tvg-name="FIFA Plus English" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus English
https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8
#EXTINF:-1 tvg-name="Al Jazeera" tvg-logo="https://www.jagobd.com/wp-content/uploads/2019/09/AljazeeraTV-150x150.jpg" group-title="News",Al Jazeera
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/aljazeera.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Ananda TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2018/04/Anandatvupdate-150x150.jpg" group-title="Bangla",Ananda TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/anandatv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Asian TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/12/asiantv-150x150.jpg" group-title="Bangla",Asian TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/asian-test-sample-ok-d.stream/playlist.m3u8
#EXTINF:-1 tvg-name="ATN Bangla" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/12/atn-bangla1-150x150.jpg" group-title="Bangla",ATN Bangla
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnbd-8-org.stream/playlist.m3u8
#EXTINF:-1 tvg-name="ATN Bangla UK" tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/01/atnbanglauk11-150x150.jpg" group-title="Bangla",ATN Bangla UK
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnbanglauk-off.stream/playlist.m3u8
#EXTINF:-1 tvg-name="ATN Music" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic-150x150.jpg" group-title="Music",ATN Music
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnmusic.stream/playlist.m3u8
#EXTINF:-1 tvg-name="ATN News" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/08/atn-news.jpg" group-title="News",ATN News
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnws-sg.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Azan TV Canada" tvg-logo="https://www.jagobd.com/wp-content/uploads/2019/04/azantvs-150x150.jpg" group-title="Religious",Azan TV Canada
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/azantv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Banglavision" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/10/bv-150x1501.jpg" group-title="Bangla",Banglavision
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/banglav000.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Boishakhi TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/10/BoishakhiTV-150x1501.jpg" group-title="Bangla",Boishakhi TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/boishakhitv-org.stream/playlist.m3u8
#EXTINF:-1 tvg-name="BTV National" tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/08/btvctg.png" group-title="Bangla",BTV National
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/btvnational1.stream/playlist.m3u8
#EXTINF:-1 tvg-name="BTV News" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/12/btv-news--150x150.jpg" group-title="News",BTV News
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/btvbd-office-sg.stream/playlist.m3u8
#EXTINF:-1 tvg-name="CGTN" tvg-logo="https://www.jagobd.com/wp-content/uploads/2022/10/CGTN-150x150.png" group-title="News",CGTN
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/cgtn.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Channel 24" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/02/channel24-150x150.jpg" group-title="Bangla",Channel 24
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel24-sg-e8e.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Channel 9" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/10/ch9-150x150.jpg" group-title="Bangla",Channel 9
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel9hd.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Channel S BD" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/08/chsbd-150x150.jpg" group-title="Bangla",Channel S BD
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channels.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Channel S UK" tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/01/channelsukup.jpg" group-title="Bangla",Channel S UK
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/chsukoff.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Channel i" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/10/chi-150x150.jpg" group-title="Bangla",Channel i
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channeli-8-org.stream/playlist.m3u8
#EXTINF:-1 tvg-name="DBC News" tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/01/dbc-news-150x150.jpg" group-title="News",DBC News
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/dbcnews.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Deen TV UK" tvg-logo="https://www.jagobd.com/wp-content/uploads/2021/05/Deentv-150x150.png" group-title="Religious",Deen TV UK
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/deentv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Desh TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2022/12/DESH-TV1-150x150.png" group-title="Bangla",Desh TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/deshtv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Discover Pakistan" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/09/discoverpakistan-150x150.jpg" group-title="Documentary",Discover Pakistan
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/discoverpakistan.stream/playlist.m3u8
#EXTINF:-1 tvg-name="DW News" tvg-logo="https://www.jagobd.com/wp-content/uploads/2019/07/dwnews-150x150.jpg" group-title="News",DW News
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/dwnews.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Ekattor TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/10/ekattors-150x150.jpg" group-title="News",Ekattor TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ekattor.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Ekushey TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/12/ekusheytv-150x150.jpg" group-title="Bangla",Ekushey TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ekusheytv-8-org.stream/playlist.m3u8
#EXTINF:-1 tvg-name="France 24" tvg-logo="https://www.jagobd.com/wp-content/uploads/2019/07/francenews24-150x150.jpg" group-title="News",France 24
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/fr24.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Gazi Television – GTV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/11/gtv-150x150.jpg" group-title="Bangla",Gazi Television – GTV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/gazibdz.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Green TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2022/12/green-tv-150x150.jpg" group-title="Bangla",Green TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/greentv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Independent TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/10/inds-150x150.png" group-title="Bangla",Independent TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/independent-8-org.stream/playlist.m3u8
#EXTINF:-1 tvg-name="IQRA Bangla TV UK" tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/01/IQRA-BANGLA-TV-150x150.jpeg" group-title="Religious",IQRA Bangla TV UK
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/iqrabanglatvoffice.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Jago News 24" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/08/pran-RFL-150x150.png" group-title="News",Jago News 24
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/jagonews24.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Jamuna TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/10/jamuna-150x150.jpg" group-title="News",Jamuna TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/jamuna-test-sample-ok.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Makkah Live" tvg-logo="https://www.jagobd.com/wp-content/uploads/2020/05/MakkahLive-150x150.jpg" group-title="Religious",Makkah Live
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/makkah.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Medina Live" tvg-logo="https://www.jagobd.com/wp-content/uploads/2020/05/Medina-Live-150x150.jpg" group-title="Religious",Medina Live
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/madina.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Mohona TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/02/mohona-150x150.jpg" group-title="Bangla",Mohona TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/mohonatv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Movie Bangla" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/02/moviebangla-150x150.jpg" group-title="Movies",Movie Bangla
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/moviebanglalink2.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Music Bangla" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/12/musicbangla-150x150.jpg" group-title="Music",Music Bangla
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/musicbangla44.stream/playlist.m3u8
#EXTINF:-1 tvg-name="My TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/12/mytv-150x150.jpg" group-title="Bangla",My TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/mytv-up-off.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Nexus TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2021/07/nexustv-150x150.png" group-title="Bangla",Nexus TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/nexustv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="NRB TV | Canada" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/08/nrb.jpg" group-title="Bangla",NRB TV | Canada
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/nrb-eu.stream/playlist.m3u8
#EXTINF:-1 tvg-name="NTV Europe" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/02/ntveurope-150x150.jpg" group-title="Bangla",NTV Europe
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ntvuk00332211.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Peace TV Bangla" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/08/logo_50-150x150.png" group-title="Religious",Peace TV Bangla
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/peacetvban.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Quran TV Bangla" tvg-logo="https://www.jagobd.com/wp-content/uploads/2025/05/Copilot_20250530_180323-150x150.png" group-title="Religious",Quran TV Bangla
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/qurantvbangla.stream/playlist.m3u8
#EXTINF:-1 tvg-name="RTV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/01/rtvbd-150x150.jpg" group-title="Bangla",RTV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/rtv-sg.stream/playlist.m3u8
#EXTINF:-1 tvg-name="RTV Music" tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/01/rtvmusic-150x150.jpg" group-title="Music",RTV Music
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/rtvmusic.stream/playlist.m3u8
#EXTINF:-1 tvg-name="SA TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2015/12/satvs-150x150.jpg" group-title="Bangla",SA TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/satvoff5666.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Sananda TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2024/10/sananda-150x150.jpg" group-title="Bangla",Sananda TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/sanandatv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Somoy News" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/02/somoynews-150x150.jpg" group-title="News",Somoy News
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/somoyt000011226615544544.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Time Television | USA" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/02/timetv-150x150.jpg" group-title="Bangla",Time Television | USA
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/timetvusa.stream/playlist.m3u8
#EXTINF:-1 tvg-name="TV ONE UK" tvg-logo="https://www.jagobd.com/wp-content/uploads/2016/02/TVONE-LOGO-Colour-150x150.png" group-title="Bangla",TV ONE UK
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/tvoneuksni.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Voice of America | VOA TV" tvg-logo="https://www.jagobd.com/wp-content/uploads/2019/10/vooa-150x150.jpg" group-title="News",Voice of America | VOA TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/voa.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Movies Now" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Movies Now
http://198.195.239.50:8095/MOVIES.NOW.HD/index.m3u8
#EXTINF:-1 tvg-name="Movies Thriller" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Movies Thriller
https://shd-amg-fast.edgenextcdn.net/tx012/playlist.m3u8
#EXTINF:-1 tvg-name="MN+" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",MN+
http://198.195.239.50:8095/MN.PLUS.HD/index.m3u8
#EXTINF:-1 tvg-name="MNX" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",MNX
http://198.195.239.50:8095/MNX.HD/index.m3u8
#EXTINF:-1 tvg-name="Sony PIX" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Sony PIX
http://198.195.239.50:8095/SONY.PIX.HD/index.m3u8
#EXTINF:-1 tvg-name="Star Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Star Movies
http://51.75.127.199:3141/starmovies/index.m3u8
#EXTINF:-1 tvg-name="Star Movies Select" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Star Movies Select
http://51.75.127.199:3141/starmoviesselecthd/index.m3u8
#EXTINF:-1 tvg-name="Star Gold" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Star Gold
http://103.141.70.136:8080/auth/HawqRdDAoY5pQyqN8Ubn-tkerDW3lenAPWEzPYYrHhUPvETHt49PpdPOjQ2jvQGsi0TCoJKplVd0BP-bvonn7bnxPXgdsRwv9mqJ-keXabr1rKLOqPXnxR6SJITCVPNUWPq5pWoithQMdKrYMH87kTpnAPYrzR0rikVimgms6Pux9zfZwUZssA99sQIX3KCBWZbyu7-x85ChO2MvQNgQ6Rvo597zdfEo8BmhZgPwb-JEP_DP0_ApUJBS22MFpoJGEsl9qndrT0TQI2hXsNQb0R-6A1YfzgNTKVLsqwmZY2aV9fnuvTZ7YY019fz4lJZgzhQ73RoM95eiN5Bhgpi8RJKtuXZQlN3jYX6kVytJS03q1GDUqGt5Z-hsl95NMoqwUr5L36IESZvUfOAQJZ8uv4kQZTgu-b2q6HgfxB43oVJTf1YNS8Jb2uf4hv_tTGuk_bo8uAYxPO3VqW8sZ44ebQTIiF9hy0NRTuU60AKvbLdONaw3Wkt9cS1qqP97fAsyK89qh89IIuKf81e5BmHzEsmIT_v5Zda-6tLGuhKpF9CXQgyTac3eL5PwZdspA6cDHlzO_RKKLw7uT9gIvyAcGdXd4Et7fo01pY_qrF0qKe8
#EXTINF:-1 tvg-name="Star Gold Select" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Star Gold Select
http://51.75.127.199:3141/stargoldselecthd/index.m3u8
#EXTINF:-1 tvg-name="Zee Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Zee Cinema
https://d1g8wgjurz8via.cloudfront.net/bpk-tv/NGCHD/default/NGCHD.m3u8
#EXTINF:-1 tvg-name="B4U Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",B4U Movies
https://streams.tangotv.in/B4UMOVIES/ORIGIN/index.m3u8
#EXTINF:-1 tvg-name="B4U Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",B4U Music
https://streams.tangotv.in/B4UMUSIC/ORIGIN/index.m3u8
#EXTINF:-1 tvg-name="Zing" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Zing
http://198.195.239.50:8095/ZING.MUSIC/index.m3u8
#EXTINF:-1 tvg-name="Zoom Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Zoom Music
https://d2esfk1pb9cdob.cloudfront.net/chunklist_1.m3u8
#EXTINF:-1 tvg-name="PTC Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",PTC Music
https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8
#EXTINF:-1 tvg-name="Punjabi Hits" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Punjabi Hits
https://stream.ottlive.co.in/punjabihits/index.m3u8
#EXTINF:-1 tvg-name="Kappa TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Kappa TV
https://mumt03.tangotv.in/Dsly5z3HKAPPATV/index.m3u8
#EXTINF:-1 tvg-name="Mastiii" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Mastiii
https://mumbai-edge.smartplaytv.in/MastiMusic/index.m3u8
#EXTINF:-1 tvg-name="Dhoom Music Bangla" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Dhoom Music Bangla
https://mumt06.tangotv.in/qYyB8fXVDHOOMMUSIC/index.m3u8
#EXTINF:-1 tvg-name="Sangeet Bangla" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Sangeet Bangla
https://mumt05.tangotv.in/87NeALx2SANGEETBANGLA/index.m3u8
#EXTINF:-1 tvg-name="ZB Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",ZB Music
https://server.zillarbarta.com/zbmusic/index.m3u8
#EXTINF:-1 tvg-name="Colors" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Colors
http://198.195.239.50:8095/COLORS.HD/index.m3u8
#EXTINF:-1 tvg-name="Colors Kannada" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Colors Kannada
https://da86m1sqpm3o0.cloudfront.net/28072023/smil:colorskannadahd1.smil/playlist.m3u8
#EXTINF:-1 tvg-name="Colors Tamil" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Colors Tamil
https://da86m1sqpm3o0.cloudfront.net/28072023/smil:colorstamilhd11.smil/playlist.m3u8
#EXTINF:-1 tvg-name="Dangal" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Dangal
https://live-dangal.akamaized.net/liveabr/playlist.m3u8
#EXTINF:-1 tvg-name="Dangal 2" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Dangal 2
https://live-dangal2.akamaized.net/liveabr/playlist.m3u8
#EXTINF:-1 tvg-name="Star Plus" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Star Plus
http://103.141.70.136:8080/auth/TQv2ayFZDA9ddF1E-QiP01gT3SpMtK62yrxj47Xz9o9fGiMSJ4zSCRJC8i9mu3JrTpdwIQZcnkj4FX6T_Kah3749pX7IUN4REbewavwu9yLqx6aOhfHX0YvqkM95anBpqEOQyWX-ypV36ZtXsBNOaCPoWDHlRWSkOZZPGXkstARY1QLvIR-_2wfLZ6WIpsjdm_qpFd1T0oPUFV2lKHtRHx7Ca4uIQZAHko8EvwO-Kv7Z5Zpru7t0PxmmYiVeand48_gBo2tGoV6bFIW6EimGQY8cJQV5xaINpYI9PaHO-Amj0jhBKym5aEBJ9HT7nry4DjcCvRqq9KRd2fQ-L15PYGu4ZN-U6zcU5W42zt07IiT3Hf1RagJz9bneI-b7KzZDWC4kW_sTrVGUr1sb8Cb1gFuf5YXJuHJyGM0pnpGpzNZoOBqwzmH186G8ybV2_HkXK-dmZIFtNiqFZ00eF6mvqvUHfD1jSV_D6of1Yml0Dxl9cbj9fFAIZBIz-svJCuVoy2YnzbGIqlJgW7ctNoOAAsXHd3rd-OgUC3uGBek5P_7OSfuqTM4bktcufgKAmTHRrHrhwxXFGIXxgo6G0y7cUNLBbV6E_1SYRCHU6_EeIXw
#EXTINF:-1 tvg-name="Star Maa" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Star Maa
https://da86m1sqpm3o0.cloudfront.net/28072023/smil:starmaa1.smil/chunklist_b2628000.m3u8
#EXTINF:-1 tvg-name="Zee TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Zee TV
https://drk6xq0vhn.gpcdn.net/live/zee_tv_hd_abr/index.m3u8
#EXTINF:-1 tvg-name="Sony SAB" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Sony SAB
https://drk6xq0vhn.gpcdn.net/live/sub_hd_abr/index.m3u8
#EXTINF:-1 tvg-name="Sony Entertainment TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Sony Entertainment TV
https://drk6xq0vhn.gpcdn.net/live/sony_ent_sd_abr/index.m3u8
#EXTINF:-1 tvg-name="Hum TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Hum TV
https://drk6xq0vhn.gpcdn.net/live/hum_tv_abr/index.m3u8
#EXTINF:-1 tvg-name="&Privé" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",&Privé
http://198.195.239.50:8095/AND.PRIVE.HD/index.m3u8
#EXTINF:-1 tvg-name="HISTORY TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",HISTORY TV
https://n18syndication.akamaized.net/bpk-tv/History_TV18_Hindi_NW18_MOB/output01/History_TV18_Hindi_NW18_MOB-audio_98836_hin=98800-video=2293600.m3u8
#EXTINF:-1 tvg-name="Arirang" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="International",Arirang
https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/chunklist_b3256000_sleng.m3u8
#EXTINF:-1 tvg-name="CNN USA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",CNN USA
https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8
#EXTINF:-1 tvg-name="Fox News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Fox News
https://fox-foxnewsnow-vizio.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="YAHOO FINANCE" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",YAHOO FINANCE
https://d1ewctnvcwvvvu.cloudfront.net/playlist.m3u8
#EXTINF:-1 tvg-name="YAHOO NEWS" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",YAHOO NEWS
https://yahoo-samsung.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="Bhojpuri Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Bhojpuri Cinema
https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8
#EXTINF:-1 tvg-name="Goldmines" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Goldmines
https://streams.tangotv.in/GOLDMINES/ORIGIN/index.m3u8
#EXTINF:-1 tvg-name="Goldmines 2" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Goldmines 2
https://mumt03.tangotv.in/Dsly5z3HGOLDMINES2/index.m3u8
#EXTINF:-1 tvg-name="Goldmines Action" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Goldmines Action
https://mumt03.tangotv.in/Dsly5z3HGOLDMINESACTION/index.m3u8
#EXTINF:-1 tvg-name="Shemaroo Bollywood" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Shemaroo Bollywood
https://amg00864-shemarooenterta-shemabollywood-ono-nlwbw.amagi.tv/playlist/amg00864-shemarooenterta-shemabollywood-ono/playlist.m3u8
#EXTINF:-1 tvg-name="Pitaara TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Pitaara TV
https://d2lk5u59tns74c.cloudfront.net/out/v1/500a6b45f5ae41dda445d912b59eaa09/index.m3u8
#EXTINF:-1 tvg-name="Sony Max" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Sony Max
https://drk6xq0vhn.gpcdn.net/live/max_hd_abr/index.m3u8
#EXTINF:-1 tvg-name="Sony Max 2" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Sony Max 2
https://drk6xq0vhn.gpcdn.net/live/max_2_abr/index.m3u8
#EXTINF:-1 tvg-name="9X Jalwa" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9X Jalwa
https://wiselp.wiseplayout.com/9X_Jalwa/master.m3u8
#EXTINF:-1 tvg-name="9X Jhakaas" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9X Jhakaas
https://wiselp.wiseplayout.com/9X_Jhakaas/master.m3u8
#EXTINF:-1 tvg-name="9X Tashan" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9X Tashan
https://wiselp.wiseplayout.com/9X_Tashan/master.m3u8
#EXTINF:-1 tvg-name="9XM" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",9XM
https://cc-706183qeo55ez.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-706183qeo55ez/DIYC/PMSL/9X/9XMusic_IN/9XMusic_IN.m3u8
#EXTINF:-1 tvg-name="B4U Bhojpuri Plus" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",B4U Bhojpuri Plus
http://51.75.127.199:3141/b4ubhojpuri/index.m3u8
#EXTINF:-1 tvg-name="Colors Cineplex" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Colors Cineplex
http://198.195.239.50:8095/COLORS.CINEPLEX.HD/index.m3u8
#EXTINF:-1 tvg-name="DD National" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD National
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8
#EXTINF:-1 tvg-name="DD India" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD India
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/ceda14583477426aa162a65392d8ea07/index.m3u8
#EXTINF:-1 tvg-name="DD News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",DD News
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/ceda14583477426aa162a65392d8ea07/index.m3u8
#EXTINF:-1 tvg-name="DD Bharati" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Bharati
https://d2lk5u59tns74c.cloudfront.net/out/v1/67cec794d8b14f9ba21f73924ac65797/index.m3u8
#EXTINF:-1 tvg-name="DD Urdu" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Urdu
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/9b91e9007e754db39a8b32c6bfc5b24a/index.m3u8
#EXTINF:-1 tvg-name="Aaj Tak" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Aaj Tak
https://aajtaklive-amd.akamaized.net/hls/live/2014416/aajtak/aajtaklive/live_720p/chunks.m3u8
#EXTINF:-1 tvg-name="RT News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",RT News
https://rt-glb.rttv.com/live/rtnews/playlist.m3u8
#EXTINF:-1 tvg-name="DW English" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",DW English
https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8
#EXTINF:-1 tvg-name="Sky News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Sky News
https://d39chvnxm26pgp.cloudfront.net/v1/master/72588bff830dec7b26d7cbbf5f3c24928aec5c03/cc-sthen6ms4vxgv-stage/WNSFO/ABR.m3u8
#EXTINF:-1 tvg-name="Al Jazeera English" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Al Jazeera English
https://live-hls-web-aje.getaj.net/AJE/index.m3u8
#EXTINF:-1 tvg-name="CNA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",CNA
https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8
#EXTINF:-1 tvg-name="NDTV 24x7" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",NDTV 24x7
https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8
#EXTINF:-1 tvg-name="NDTV India" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",NDTV India
https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8
#EXTINF:-1 tvg-name="India Today" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",India Today
https://d2lk5u59tns74c.cloudfront.net/out/v1/d4435039c7d1433d9b9d0b6cdc9dd4ff/index.m3u8
#EXTINF:-1 tvg-name="Zee News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Zee News
https://dknttpxmr0dwf.cloudfront.net/index_2.m3u8
#EXTINF:-1 tvg-name="WION" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",WION
https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8
#EXTINF:-1 tvg-name="News Nation" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",News Nation
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/6cd2f649739a45ca9de1daf81cc7d0f2/index.m3u8
#EXTINF:-1 tvg-name="India TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",India TV
https://pl-indiatvnews.akamaized.net/out/v1/db79179b608641ceaa5a4d0dd0dca8da/index.m3u8
#EXTINF:-1 tvg-name="Zee Business" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Zee Business
https://dwby15d04agvq.cloudfront.net/index_1.m3u8
#EXTINF:-1 tvg-name="BBC World Service" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",BBC World Service
https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/dash/nonuk/cellular_main_sd_abr_v2/cfs/bbc_world_service.mpd
#EXTINF:-1 tvg-name="Bloomberg TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Bloomberg TV
https://tvsen6.aynaott.com/bloombergtv/index.m3u8
#EXTINF:-1 tvg-name="CNBC" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",CNBC
https://tvsen6.aynaott.com/cnbc/index.m3u8
#EXTINF:-1 tvg-name="Weather Channel" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Weather Channel
https://tvsen6.aynaott.com/TheWeatherChannel/index.m3u8
#EXTINF:-1 tvg-name="Cartoon Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Cartoon Network
https://stream.ottplus.live/live/cn_sd_abr/index.m3u8
#EXTINF:-1 tvg-name="Pogo" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Pogo
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/e5b9db1cc184406bb97159da2f120f91/index.m3u8
#EXTINF:-1 tvg-name="Nickelodeon" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Nickelodeon
https://d2lk5u59tns74c.cloudfront.net/out/v1/67cec794d8b14f9ba21f73924ac65797/index.m3u8
#EXTINF:-1 tvg-name="Sonic" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Sonic
http://198.195.239.50:8095/sonic/index.m3u8
#EXTINF:-1 tvg-name="Duronto TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",Duronto TV
http://198.195.239.50:8095/duranta/index.m3u8
#EXTINF:-1 tvg-name="Discovery" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Discovery
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8
#EXTINF:-1 tvg-name="National Geographic" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",National Geographic
https://d2lk5u59tns74c.cloudfront.net/out/v1/67cec794d8b14f9ba21f73924ac65797/index.m3u8
#EXTINF:-1 tvg-name="History TV18" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",History TV18
https://n18syndication.akamaized.net/bpk-tv/History_TV18_Hindi_NW18_MOB/output01/master.m3u8
#EXTINF:-1 tvg-name="Animal Planet" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Animal Planet
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/ceda14583477426aa162a65392d8ea07/index.m3u8
#EXTINF:-1 tvg-name="Saudi TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Saudi TV
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-saudi-tv/2ad66056b51fd8c1b624854623112e43/index.m3u8
#EXTINF:-1 tvg-name="Makkah TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Makkah TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/makkahtv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Madani Channel Bangla" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Madani Channel Bangla
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/madanitvbangla.stream1/playlist.m3u8
#EXTINF:-1 tvg-name="Islam Channel Bangla" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Islam Channel Bangla
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/islamchbangla.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Islamic TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Islamic TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/islamictvbd.stream/playlist.m3u8
#EXTINF:-1 tvg-name="ATN Islamic TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",ATN Islamic TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnislamictv.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Peace TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Peace TV
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/peacetvban.stream/playlist.m3u8
#EXTINF:-1 tvg-name="Madani Channel" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Madani Channel
https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/madanitvbangla.stream1/playlist.m3u8
#EXTINF:-1 tvg-name="Somoy TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Somoy TV HD
http://198.195.239.50:8095/somoyTv/index.m3u8
#EXTINF:-1 tvg-name="Jamuna TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Jamuna TV HD
http://198.195.239.50:8095/JAMUNA.TV/index.m3u8
#EXTINF:-1 tvg-name="Channel 24 HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Channel 24 HD
http://198.195.239.50:8095/CHANNEL.24.HD/index.m3u8
#EXTINF:-1 tvg-name="DBC News HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",DBC News HD
http://198.195.239.50:8095/DBC.NEWS.HD/index.m3u8
#EXTINF:-1 tvg-name="Ekhon TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Ekhon TV HD
http://198.195.239.50:8095/EAKHON.TV.HD/index.m3u8
#EXTINF:-1 tvg-name="Independent TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Independent TV HD
http://198.195.239.50:8095/INDEPENDENT.TV/index.m3u8
#EXTINF:-1 tvg-name="Nagorik TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Nagorik TV HD
http://198.195.239.50:8095/NAGORIK.TV.HD/index.m3u8
#EXTINF:-1 tvg-name="Boishakhi TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Boishakhi TV HD
http://198.195.239.50:8095/BOISAKHI.TV.HD/index.m3u8
#EXTINF:-1 tvg-name="BTV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",BTV
http://198.195.239.50:8095/btv/index.m3u8
#EXTINF:-1 tvg-name="Ekushey TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Ekushey TV HD
http://198.195.239.50:8095/ETV.BANGLA.HD/index.m3u8
#EXTINF:-1 tvg-name="Colors Bangla HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Colors Bangla HD
http://198.195.239.50:8095/COLORS.BANGLA.HD/index.m3u8
#EXTINF:-1 tvg-name="Enter10 Bangla HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Enter10 Bangla HD
http://198.195.239.50:8095/enter10Bangla/index.m3u8
#EXTINF:-1 tvg-name="Sony Aath" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Sony Aath
http://198.195.239.50:8095/sonyAath/index.m3u8
#EXTINF:-1 tvg-name="Zee Bangla HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Zee Bangla HD
http://198.195.239.50:8095/zeeBangla/index.m3u8
#EXTINF:-1 tvg-name="Star Jalsha HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",Star Jalsha HD
https://da86m1sqpm3o0.cloudfront.net/28072023/smil:starjalsha.smil/chunklist_b1928000.m3u8
#EXTINF:-1 tvg-name="Jalsha Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Jalsha Movies
https://catchup.yuppcdn.net/amazonv2/36/preview/starjalsha/master/chunklist.m3u8
#EXTINF:-1 tvg-name="Colors Bangla Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Colors Bangla Cinema
http://103.172.29.30:9991/stream/channelid/14180834
#EXTINF:-1 tvg-name="R Plus" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Bangla",R Plus
https://thelegitpro.in/pntv/rplusnews24x7/index.m3u8
#EXTINF:-1 tvg-name="R Plus Gold" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",R Plus Gold
https://vglivessai.akamaized.net/sg/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/cf883da3-f9f5-4c70-b0ef-b3ac2e2ad1e3/index.m3u8
#EXTINF:-1 tvg-name="Zee 24 Ghanta" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Zee 24 Ghanta
https://d2dsoyvkr33m05.cloudfront.net/index_5.m3u8
#EXTINF:-1 tvg-name="Kolkata TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Kolkata TV
https://cdn.ottlive.co.in/kolkatatv/index.m3u8
#EXTINF:-1 tvg-name="ABP Ananda" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",ABP Ananda
https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/ts-ap-s1-n1/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8
#EXTINF:-1 tvg-name="News18 Bangla" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",News18 Bangla
https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8
#EXTINF:-1 tvg-name="Mirror Now" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Mirror Now
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8
#EXTINF:-1 tvg-name="Republic Bharat" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Republic Bharat
https://d2lk5u59tns74c.cloudfront.net/out/v1/67cec794d8b14f9ba21f73924ac65797/index.m3u8
#EXTINF:-1 tvg-name="Sudarshan News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Sudarshan News
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/ceda14583477426aa162a65392d8ea07/index.m3u8
#EXTINF:-1 tvg-name="Rajya Sabha TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Rajya Sabha TV
https://d2lk5u59tns74c.cloudfront.net/out/v1/fff8f20221d5456e8922e689d71dedc3/index.m3u8
#EXTINF:-1 tvg-name="Lok Sabha TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Lok Sabha TV
https://d2lk5u59tns74c.cloudfront.net/out/v1/e4182054dce340da9e0ff38b6b3658a4/index.m3u8
#EXTINF:-1 tvg-name="Sansad TV HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Sansad TV HD
https://d2lk5u59tns74c.cloudfront.net/out/v1/e4182054dce340da9e0ff38b6b3658a4/index.m3u8
#EXTINF:-1 tvg-name="DD Kisan" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Kisan
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8
#EXTINF:-1 tvg-name="DD Punjabi" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Punjabi
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/da821c24a59d4e57960497aeaca8fb33/index.m3u8
#EXTINF:-1 tvg-name="DD Sahyadri" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Sahyadri
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/66dcc3ebe182447ba42837e746cf0c7c/index.m3u8
#EXTINF:-1 tvg-name="DD Tamil" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Tamil
https://d2lk5u59tns74c.cloudfront.net/out/v1/abf46b14847e45499f4a47f3a9afe93d/index.m3u8
#EXTINF:-1 tvg-name="DD Malayalam" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Malayalam
https://d2lk5u59tns74c.cloudfront.net/out/v1/c313674ffced4c9a90f1bba436df2b9b/index.m3u8
#EXTINF:-1 tvg-name="DD Chandana" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Chandana
https://d2lk5u59tns74c.cloudfront.net/out/v1/0c980455d2fb4b69bcc6235745ee6039/index.m3u8
#EXTINF:-1 tvg-name="DD Saptagiri" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Saptagiri
https://d2lk5u59tns74c.cloudfront.net/out/v1/26e915d6d12b4a06822c5e33c088ed56/index.m3u8
#EXTINF:-1 tvg-name="DD Odia" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Odia
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/ef4ea632b77a480ebd77106968aa99a9/index.m3u8
#EXTINF:-1 tvg-name="DD Girnar" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Girnar
https://d2lk5u59tns74c.cloudfront.net/out/v1/558fdb9aebb54bb5bbbf0ced03686148/index.m3u8
#EXTINF:-1 tvg-name="DD Assam" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Assam
https://d2lk5u59tns74c.cloudfront.net/out/v1/d380bf5c167b4319a46cdd8204bc26b2/index.m3u8
#EXTINF:-1 tvg-name="DD Arun Prabha" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Arun Prabha
https://d2lk5u59tns74c.cloudfront.net/out/v1/308556d9fd1246adb479ef012a39bbfe/index.m3u8
#EXTINF:-1 tvg-name="DD Haryana" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Haryana
https://d2lk5u59tns74c.cloudfront.net/out/v1/950fc69666474351bde0a32b9600c804/index.m3u8
#EXTINF:-1 tvg-name="DD Himachal" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Himachal
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/afd2e335b0ba40eb9bdf1096118c6ede/index.m3u8
#EXTINF:-1 tvg-name="DD Jharkhand" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Jharkhand
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/e8c3741f8c154d3185831f4e31777fb2/index.m3u8
#EXTINF:-1 tvg-name="DD Kashir" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Kashir
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/8a59a828e80c49d0958925950cec0204/index.m3u8
#EXTINF:-1 tvg-name="DD Madhya Pradesh" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Madhya Pradesh
https://mumbai-edge.smartplaytv.in/ddmadhyapradesh/index.m3u8
#EXTINF:-1 tvg-name="DD Manipur" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Manipur
https://d2lk5u59tns74c.cloudfront.net/out/v1/8b75afc6576f450e8f554b6c877681d2/index.m3u8
#EXTINF:-1 tvg-name="DD Meghalaya" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Meghalaya
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/4f81bc8d13dd49b484da35988abb8729/index.m3u8
#EXTINF:-1 tvg-name="DD Nagaland" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Nagaland
https://d2lk5u59tns74c.cloudfront.net/out/v1/29c92e0bef954a6d9b0908d1be29c1f0/index.m3u8
#EXTINF:-1 tvg-name="DD Goa" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Goa
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/e5b9db1cc184406bb97159da2f120f91/index.m3u8
#EXTINF:-1 tvg-name="DD Bharati" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Indian",DD Bharati
https://d2lk5u59tns74c.cloudfront.net/out/v1/67cec794d8b14f9ba21f73924ac65797/index.m3u8
#EXTINF:-1 tvg-name="ETV Comedy" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",ETV Comedy
https://cc-wie8j8y69d2uy.akamaized.net/WWBI/Amagi/ETV_Comedy_IN/playlist.m3u8
#EXTINF:-1 tvg-name="ETV Josh" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",ETV Josh
https://cc-uyh1ow5zouoio.akamaized.net/WWBI/Amagi/ETV_Josh_IN/playlist.m3u8
#EXTINF:-1 tvg-name="ETV Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",ETV Music
https://cc-szivnms4rlah6.akamaized.net/WWBI/Amagi/ETV_Music_IN/playlist.m3u8
#EXTINF:-1 tvg-name="Kairali TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Kairali TV
https://streams.tangotv.in/KAIRALI/ORIGIN/index.m3u8
#EXTINF:-1 tvg-name="Kairali We" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Kairali We
https://streams.tangotv.in/WETV/ORIGIN/index.m3u8
#EXTINF:-1 tvg-name="Mazhavil Manorama" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Mazhavil Manorama
https://yuppmedtaorire.akamaized.net/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/mazhavilmanorama_nim_https/050522/mazhavilmanorama/playlist.m3u8
#EXTINF:-1 tvg-name="Amrita TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Amrita TV
https://ddash74r36xqp.cloudfront.net/master.m3u8
#EXTINF:-1 tvg-name="Pulari TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Pulari TV
https://mumbai-edge.smartplaytv.in/PulariTV/index.m3u8
#EXTINF:-1 tvg-name="Zee Tamil" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Zee Tamil
https://da86m1sqpm3o0.cloudfront.net/28072023/smil:zeetamil1.smil/playlist.m3u8
#EXTINF:-1 tvg-name="Vijay Super" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Vijay Super
http://51.75.127.199:3141/vijaysuper/index.m3u8
#EXTINF:-1 tvg-name="Kalaignar Murasu" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Kalaignar Murasu
https://yuppmedtaorire.akamaized.net/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/murasu_nim_https/050522/murasu/playlist.m3u8
#EXTINF:-1 tvg-name="Fakt Marathi" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Fakt Marathi
https://mumt07.tangotv.in/zHjX9OFlFAKTMARATHI/index.m3u8
#EXTINF:-1 tvg-name="MH One Prime" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",MH One Prime
https://streams.tangotv.in/MHONE/ORIGIN/index.m3u8
#EXTINF:-1 tvg-name="Ekamra Bharat Odia" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Ekamra Bharat Odia
https://live.ekamraott.com/bharat/bharat/index.m3u8
#EXTINF:-1 tvg-name="Ekamra Manoranjan" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Ekamra Manoranjan
https://live.ekamraott.com/manoranjan/manoranjan/index.m3u8
#EXTINF:-1 tvg-name="Ekamra Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Ekamra Cinema
https://live.ekamraott.com/cynema/cynema/index.m3u8
#EXTINF:-1 tvg-name="Colors Kannada Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Colors Kannada Cinema
http://51.75.127.199:3141/colorskannadacinema/index.m3u8
#EXTINF:-1 tvg-name="Colors Gujarati Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Colors Gujarati Cinema
http://51.75.127.199:3141/colorsgujaraticinema/index.m3u8
#EXTINF:-1 tvg-name="Star Suvarna Plus" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Star Suvarna Plus
http://51.75.127.199:3141/starsuvarnaplus/index.m3u8
#EXTINF:-1 tvg-name="Star Utsav Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Star Utsav Movies
http://51.75.127.199:3141/starutsavmovies/index.m3u8
#EXTINF:-1 tvg-name="Manoranjan Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Manoranjan Movies
https://mumt04.tangotv.in/m18aqlK4MANORANJANMOVIES/index.m3u8
#EXTINF:-1 tvg-name="Public Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Public Movies
https://mumt04.tangotv.in/m18aqlK4PUBLICMOVIES/index.m3u8
#EXTINF:-1 tvg-name="Roja Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Roja Movies
https://stream.rojatv.cloud/rojatv/rojatv/index.m3u8
#EXTINF:-1 tvg-name="Shubh Cinema TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Shubh Cinema TV
https://d393sxaxig6bax.cloudfront.net/out/v1/589cf2cf44bf42bb941e817a2240d62e/index.m3u8
#EXTINF:-1 tvg-name="Gold Mines Bollywood" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Gold Mines Bollywood
https://mumt03.tangotv.in/Dsly5z3HGOLDMINESBOLLYWOOD/index.m3u8
#EXTINF:-1 tvg-name="Bollywood Film" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Bollywood Film
https://tvextra-hls.b-cdn.net/bollywoodfilm/bollywoodfilm.m3u8
#EXTINF:-1 tvg-name="Zee Bollywood" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Zee Bollywood
https://drk6xq0vhn.gpcdn.net/live/zee_bollywood_abr/index.m3u8
#EXTINF:-1 tvg-name="Zee Action" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Zee Action
https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeeaction/default/manifest.mpd
#EXTINF:-1 tvg-name="Zee Anmol Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Zee Anmol Cinema
https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeeanmolcinema/default/manifest.mpd
#EXTINF:-1 tvg-name="&pictures" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",&pictures
http://198.195.239.50:8095/ANT.PICTURS.HD/index.m3u8
#EXTINF:-1 tvg-name="&Privé HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",&Privé HD
http://198.195.239.50:8095/AND.PRIVE.HD/index.m3u8
#EXTINF:-1 tvg-name="AXN" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",AXN
http://198.195.239.50:8095/AXN.HD/index.m3u8
#EXTINF:-1 tvg-name="Comedy Central" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Comedy Central
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8
#EXTINF:-1 tvg-name="Star World" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Star World
https://d2lk5u59tns74c.cloudfront.net/out/v1/67cec794d8b14f9ba21f73924ac65797/index.m3u8
#EXTINF:-1 tvg-name="Zee Cafe" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Zee Cafe
https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/ceda14583477426aa162a65392d8ea07/index.m3u8
#EXTINF:-1 tvg-name="Zoom TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Zoom TV
https://d2esfk1pb9cdob.cloudfront.net/master.m3u8
#EXTINF:-1 tvg-name="Enter-Film" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Enter-Film
http://stream.mcquack.net/322/index.m3u8
#EXTINF:-1 tvg-name="24 Hour Free Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",24 Hour Free Movies
https://d1j2u714xk898n.cloudfront.net/scheduler/scheduleMaster/145.m3u8
#EXTINF:-1 tvg-name="4ever Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",4ever Cinema
http://stream.mcquack.net/258/index.m3u8
#EXTINF:-1 tvg-name="4ever Drama" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",4ever Drama
http://stream.mcquack.net/260/index.m3u8
#EXTINF:-1 tvg-name="4ever Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",4ever Music
http://stream.mcquack.net/257/index.m3u8
#EXTINF:-1 tvg-name="AMC" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",AMC
http://23.239.31.26:8989/amc/index.m3u8
#EXTINF:-1 tvg-name="Circle" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Circle
https://circle-roku.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="EU Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",EU Music
http://stream.mcquack.net/261/index.m3u8
#EXTINF:-1 tvg-name="Baraza Music TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Baraza Music TV
https://eco.streams.ovh:8081/barazatv/index.m3u8
#EXTINF:-1 tvg-name="Music Channel" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Music Channel
http://media.boni-records.com/index.m3u8
#EXTINF:-1 tvg-name="PowerTürk TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",PowerTürk TV
https://live.artidijitalmedya.com/artidijital_powerturktv/powerturktv/playlist.m3u8
#EXTINF:-1 tvg-name="Stingray Rock Alternative" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Stingray Rock Alternative
https://lotus.stingray.com/manifest/ose-102ads-montreal/samsungtvplus/master.m3u8
#EXTINF:-1 tvg-name="Vevo Hip Hop & R&B" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Vevo Hip Hop & R&B
https://d7i20u8nlyf1b.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-lymqk2na77cwn/VevoHipHopRB_GB.m3u8
#EXTINF:-1 tvg-name="XITE" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",XITE
https://xite-rakuten.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="XITE Hits" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",XITE Hits
https://d726x48n2pd5h.cloudfront.net/XITE_Hits.m3u8
#EXTINF:-1 tvg-name="NOW Rock" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",NOW Rock
https://lightning-now90s-samsungnz.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="30A Music" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",30A Music
https://30a-tv.com/music.m3u8
#EXTINF:-1 tvg-name="Totalmusic" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Totalmusic
https://cdn.40mediagroup.com/live/c7eds/Totalmusic/SA_LIVE_hls_enc/master.m3u8
#EXTINF:-1 tvg-name="Totalmusic 80s" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Totalmusic 80s
https://cdn.40mediagroup.com/live/c7eds/Totalmusic_80s/SA_LIVE_hls_enc/master.m3u8
#EXTINF:-1 tvg-name="Totalmusic Dance" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Totalmusic Dance
https://cdn.40mediagroup.com/live/c7eds/Totalmusic_Dance/SA_LIVE_hls_enc/master.m3u8
#EXTINF:-1 tvg-name="Music Box Hits" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Music Box Hits
http://88.212.15.19/live/mb_hits/index.m3u8
#EXTINF:-1 tvg-name="Music Box Dance" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Music Box Dance
http://88.212.15.19/live/mb_dance/index.m3u8
#EXTINF:-1 tvg-name="Music Box Classic" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Music",Music Box Classic
http://88.212.15.19/live/mb_classic/index.m3u8
#EXTINF:-1 tvg-name="B4U Kadak" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",B4U Kadak
https://streams.tangotv.in/B4UKADAK/ORIGIN/index.m3u8
#EXTINF:-1 tvg-name="Sony One Hits Comedy" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Sony One Hits Comedy
https://7aa9671895264ec9a384dfed1b992171.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-818-FR-SONYONEHITSCOMDIE-LG_FR/playlist.m3u8
#EXTINF:-1 tvg-name="MovieSphere AU" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",MovieSphere AU
https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8
#EXTINF:-1 tvg-name="Mytime Movie" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Mytime Movie
https://mytimeuk-rakuten-samsung.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="MyTime Movie Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",MyTime Movie Network
https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="MyTime Movie Network East" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",MyTime Movie Network East
https://appletree-mytimeau-samsung.amagi.tv/playlist.m3u8
#EXTINF:-1 tvg-name="Rakuten TV Action Movies UK" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Rakuten TV Action Movies UK
https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8
#EXTINF:-1 tvg-name="Rakuten TV Comedy Movies UK" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Rakuten TV Comedy Movies UK
https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8
#EXTINF:-1 tvg-name="Rakuten TV Drama Movies UK" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Rakuten TV Drama Movies UK
https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8
#EXTINF:-1 tvg-name="Rakuten TV Family Movies UK" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Rakuten TV Family Movies UK
https://e3207568b726401995c25670faaf32e4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6203/master.m3u8
#EXTINF:-1 tvg-name="Sparkle Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Sparkle Movies
https://61fc4f1a40a342daa23f92141853b7b4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Samsung-gb_SparkleMovies/playlist.m3u8
#EXTINF:-1 tvg-name="Starz Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Starz Cinema
http://23.237.104.106:8080/USA_STARZ_CINEMA/index.m3u8
#EXTINF:-1 tvg-name="GREAT! movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",GREAT! movies
https://amg01753-narrativeentert-greatmovies-samsunguk-7z6eh.amagi.tv/playlist/amg01753-narrativeentert-greatmovies-samsunguk/playlist.m3u8
#EXTINF:-1 tvg-name="GREAT! romance" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",GREAT! romance
https://amg01753-narrativeentert-greatchristmas-samsunguk-8atls.amagi.tv/playlist/amg01753-narrativeentert-greatchristmas-samsunguk/playlist.m3u8
#EXTINF:-1 tvg-name="MBC Drama USA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",MBC Drama USA
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-drama-usa/ea2f5db904aff224b7066e59c7f585a2/index.m3u8
#EXTINF:-1 tvg-name="MBC+ Drama" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",MBC+ Drama
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-plus-drama/e37251ec2aac8f6c98f75cd0fa37cd28/index.m3u8
#EXTINF:-1 tvg-name="MBC BOLLYWOOD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",MBC BOLLYWOOD
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-bollywood/546eb40d7dcf9a209255dd2496903764/index.m3u8
#EXTINF:-1 tvg-name="MBC 3" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Kids",MBC 3
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-3-usa/5d58265a862a476dc7f97694addb5ded/index.m3u8
#EXTINF:-1 tvg-name="4 TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",4 TV
https://shd-gcp-live.edgenextcdn.net/live/bitmovin-mbc-4/24f134f1cd63db9346439e96b86ca6ed/index.m3u8
#EXTINF:-1 tvg-name="ARY Q TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",ARY Q TV
https://aryqtvm.aryzap.com/v1/0183ea2a0eec0b8ed5941a38bc76/0183ea2a4e470b8ed5aa4d793457/ARYQTVH264_1080p.m3u8
#EXTINF:-1 tvg-name="Aan TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Aan TV
https://s5.ideationtec.live/AAN_HD/AAN_HD.m3u8
#EXTINF:-1 tvg-name="Ary News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Ary News
https://arynewsm.aryzap.com/v1/0183ea205add0b8ed5941a38bc6f/018ad63928611ea50695040da296/main.m3u8
#EXTINF:-1 tvg-name="LTN Family HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",LTN Family HD
https://s3.ideationtec.live/LTN_Family_HD/LTN_Family_HD.m3u8
#EXTINF:-1 tvg-name="GNN HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",GNN HD
https://s5.ideationtec.live/GNN_HD/GNN_HD.m3u8
#EXTINF:-1 tvg-name="A Plus" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",A Plus
https://s3.ideationtec.live/A_Plus/A_Plus.m3u8
#EXTINF:-1 tvg-name="SET Entertainment PK" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",SET Entertainment PK
https://s1.ideationtec.live/SET_Ent/SET_Ent.m3u8
#EXTINF:-1 tvg-name="SAB Entertainment" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",SAB Entertainment
https://s1.ideationtec.live/SAB_Entertainment/SAB_Entertainment.m3u8
#EXTINF:-1 tvg-name="Discovery Pakistan" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Discovery Pakistan
https://s3.ideationtec.live/Discover_Pakistan/Discover_Pakistan.m3u8
#EXTINF:-1 tvg-name="AAJ Entertainment HD" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",AAJ Entertainment HD
https://s2.ideationtec.live/AAJ_Entertainment/AAJ_Entertainment.m3u8
#EXTINF:-1 tvg-name="Bol Entertainment" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Bol Entertainment
https://s2.ideationtec.live/BOL_Entertainment_HD/BOL_Entertainment_HD.m3u8
#EXTINF:-1 tvg-name="Express Entertainment" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Express Entertainment
https://s3.ideationtec.live/Express_Entertainment/Express_Entertainment.m3u8
#EXTINF:-1 tvg-name="Geo Kahani" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Geo Kahani
https://s3.ideationtec.live/GEO_Entertainment/GEO_Entertainment.m3u8
#EXTINF:-1 tvg-name="Geo News" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Geo News
http://198.195.239.50:8095/GEO.NEWS.HD/index.m3u8
#EXTINF:-1 tvg-name="Hum Masala" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Hum Masala
http://198.195.239.50:8095/HUM.MASALA.TV/index.m3u8
#EXTINF:-1 tvg-name="Hum Sitaray" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",Hum Sitaray
http://38.101.217.46/HumSitaray/index.m3u8
#EXTINF:-1 tvg-name="ROHI TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",ROHI TV
https://s2.ideationtec.live/Roohi_TV/Roohi_TV.m3u8
#EXTINF:-1 tvg-name="Almasira Mubasher" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="News",Almasira Mubasher
https://live2.cdnbridge.tv/AlmasirahMubasher/Mubasher_All/playlist.m3u8
#EXTINF:-1 tvg-name="Eman TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Religious",Eman TV
https://avr.host247.net/live/emantv/playlist.m3u8
#EXTINF:-1 tvg-name="Солнце" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="International",Солнце
http://tv.mediacdn.ru/live/solntse/playlist.m3u8
#EXTINF:-1 tvg-name="Sochi TV RU" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="International",Sochi TV RU
http://serv30.vintera.tv:8081/sochi/sochi24_tv/playlist.m3u8
#EXTINF:-1 tvg-name="Sports Russian" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Sports Russian
https://live-3.otcnet.ru/sportivny/index.m3u8
#EXTINF:-1 tvg-name="30A Golf Kingdom" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",30A Golf Kingdom
https://30a-tv.com/feeds/vidaa/golf.m3u8
#EXTINF:-1 tvg-name="30A We Love Cars" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",30A We Love Cars
https://30a-tv.com/feeds/vidaa/cars.m3u8
#EXTINF:-1 tvg-name="30A Movies" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",30A Movies
https://30a-tv.com/feeds/xodglobal/30atv.m3u8
#EXTINF:-1 tvg-name="30A The Beach Show" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",30A The Beach Show
https://30a-tv.com/beachy.m3u8
#EXTINF:-1 tvg-name="30A Luxe Life" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",30A Luxe Life
https://30a-tv.com/feeds/vidaa/luxelife.m3u8
#EXTINF:-1 tvg-name="30A Darcizzle Offshore" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",30A Darcizzle Offshore
https://30a-tv.com/darcizzle.m3u8
#EXTINF:-1 tvg-name="30A Georgia Hollywood" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",30A Georgia Hollywood
https://30a-tv.com/gh.m3u8
#EXTINF:-1 tvg-name="30A Ridiculous TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Entertainment",30A Ridiculous TV
https://30a-tv.com/feeds/720p/63.m3u8
#EXTINF:-1 tvg-name="Popular Science" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",Popular Science
https://amg13231-actve-amg13231c5-sportstribal-emea-1269.playouts.now.amagi.tv/playlist/amg13231-actvefast-powder-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="Action Plus" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Movies",Action Plus
https://amg02042-ottstudio-amg02042c4-ottstudios-northamerica-1765.playouts.now.amagi.tv/playlist/amg02042-ottstudiofast-actionplus-ottstudiosnorthamerica/playlist.m3u8
#EXTINF:-1 tvg-name="ESCAPE TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",ESCAPE TV
https://amg00585-amg00585c13-sportstribal-emea-5522.playouts.now.amagi.tv/playlist/amg00585-sportstribaltvfast-escapetv-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="American Stories Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Documentary",American Stories Network
https://a1a41a9beb9342598598b5f6dd94fb56.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-1016-ASN-FREELIVESPORTS/mt/freelivesports/1016/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="DangerTV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",DangerTV
https://7a3dc993.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWV1X0RhbmdlclRWX0hMUw/playlist.m3u8
#EXTINF:-1 tvg-name="Trace Sports Stars" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Trace Sports Stars
https://tracetv-tracesportstar-sportstribal.amagi.tv/ts-us-e2-n1/playlist/tracetvAA-trace-sportstars-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="TyC Sports Fan" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",TyC Sports Fan
https://amg26268-amg26268c14-freelivesports-emea-10267.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg26268-sportsstudio-tycsports-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Strongman Champions League" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Strongman Champions League
https://0864a05b1ca54a4e8fe73805bf810fa4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/SportsTribal-gb_StrongmanChampionsLeague/playlist.m3u8
#EXTINF:-1 tvg-name="World Chase Tag" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",World Chase Tag
https://freelivesports.b-cdn.net/ssai/42/master.m3u8
#EXTINF:-1 tvg-name="Horse & Country" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Horse & Country
https://sportstri-hncfree-sportstribal-rb7j8.amagi.tv/playlist/sportstri-hncfree-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="Waypoint TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Waypoint TV
https://amg00381-amg00381c1-freelivesports-emea-11030.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg00381-waypointcommunicationsfast-waypoint-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Skull Bound TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Skull Bound TV
https://f570dedd03914e34a94fa4d318deddb5.mediatailor.us-west-2.amazonaws.com/v1/master/2d2d0d97b0e548f025b2598a69b55bf30337aa0e/npp_796/4QT2WMPRUUVGQ48G9KYQ/hls3/now,-1m/m.m3u8
#EXTINF:-1 tvg-name="Shooting Sports Life" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Shooting Sports Life
https://d1814978c0b242fa9e77dcb6acb37a29.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-1312-SHOOTINGSPORTSLIFE-FREELIVESPORTS/mt/freelivesports/1312/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="Field & Stream" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Field & Stream
https://3100d8a6ad764beb9da3c6ebf285ba1b.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-600-OUTDOORAMERICA-FREELIVESPORTS/mt/freelivesports/600/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="Game & Fish TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Game & Fish TV
https://amg00436-amg00436c7-freelivesports-emea-8457.playouts.now.amagi.tv/playlist/amg00436-ksemotvholdingsfast-gameandfishtv-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Kozoom" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Kozoom
https://amg01743-sportstribal-kozoom-sportstribal-ad-ug.amagi.tv/playlist/amg01743-sportstribal-kozoom-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="Billiard TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Billiard TV
https://wurltripleb.global.transmit.live/hls/6a8df058128d8c6c07aa9add/v1/tripleb_billiardtv_2/sportstribal_eu/latest/main/hls/billi.m3u8
#EXTINF:-1 tvg-name="World Poker Tour Spain" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",World Poker Tour Spain
https://amg00218-wptenterprises-amg00218c2-sportstribal-emea-1901.playouts.now.amagi.tv/playlist/amg00218-wptenterprisesfast-worldpokertourespanol-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="Absinthe TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Absinthe TV
https://amg26268-amg26268c5-freelivesports-emea-8263.playouts.now.amagi.tv/playlist/amg26268-sportsstudio-ssabsynthetv-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Adventure Zone Sports Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Adventure Zone Sports Network
https://freelivesports.b-cdn.net/ssai/31/master.m3u8
#EXTINF:-1 tvg-name="HorizonSports" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",HorizonSports
https://freelivesports.b-cdn.net/ssai/48/master.m3u8
#EXTINF:-1 tvg-name="World of Freesports" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",World of Freesports
https://amg01866-mainstreammedia-freesportsinc-sportstribal-b3zdo.amagi.tv/playlist/amg01866-mainstreammedia-freesportsinc-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="InTrouble" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",InTrouble
https://amg00861-terninternation-introuble-sportstribal-sog8f.amagi.tv/playlist/amg00861-terninternation-introuble-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="GoPro TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",GoPro TV
https://3a1b4d927c02473b806350cc162d271f.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-891-GOPRO-FREELIVESPORTS/mt/freelivesports/891/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="Surf Cinema" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Surf Cinema
https://amg13231-actve-amg13231c4-sportstribal-emea-1268.playouts.now.amagi.tv/playlist/amg13231-actvefast-surfer-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="Tennis Channel T2" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Tennis Channel T2
https://amg01444-amg01444c2-freelivesports-emea-11541.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01444-tennischannelfast-tennischannelus-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="ACL Cornhole TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",ACL Cornhole TV
https://bbb-aclco-freelivesports.otteravision.com/bbb/aclco/aclco.m3u8
#EXTINF:-1 tvg-name="Lacrosse TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Lacrosse TV
https://e9f5db0f59d6470c81af59545905e4e5.mediatailor.us-west-2.amazonaws.com/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/SportsTribal-LacrosseChannel/LSN_SCTE.m3u8
#EXTINF:-1 tvg-name="Perfect Game TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Perfect Game TV
https://6ebc93db.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWV1X1BlcmZlY3RHYW1lVFZfSExT/playlist.m3u8
#EXTINF:-1 tvg-name="Inside Arm Wrestling TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Inside Arm Wrestling TV
https://freelivesports.b-cdn.net/ssai/37/master.m3u8
#EXTINF:-1 tvg-name="MMA TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",MMA TV
https://streams2.sofast.tv/ptnr-sportstrible/title-MMA_Sportstrible/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/f6b049e4-885e-4551-85ac-8eef0b33d3a2/playlist.m3u8
#EXTINF:-1 tvg-name="Unbeaten" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Unbeaten
https://amg00721-amg00721c6-freelivesports-emea-9595.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg00721-inverleigh-unbtn3row-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Fight Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Fight Network
https://amg00966-amg00966c10-amgplt0201.playout.now3.amagi.tv/playlist/amg00966-amg00966c10-amgplt0201/playlist.m3u8
#EXTINF:-1 tvg-name="United Fight Alliance" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",United Fight Alliance
https://9ab4bcc639c845d2b682105f4e9afbf8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/SportsTribal-eu_UnitedFightAlliance/playlist.m3u8
#EXTINF:-1 tvg-name="Swerve Combat" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Swerve Combat
https://2be36a631c3043158c8ebfec4f421eb0.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-253-SWERVESPORTS-SPORTSSTUDIO/mt/sportsstudio/253/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="GLORY Kickboxing" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",GLORY Kickboxing
https://6ada88b3.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWV1X0dsb3J5S2lja2JveGluZ19ITFM/playlist.m3u8
#EXTINF:-1 tvg-name="Lucha Plus" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Lucha Plus
https://amg17334-amg17334c1-freelivesports-emea-7386.playouts.now.amagi.tv/playlist/amg17334-luchalibrefast-luchalibre-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="TNA Wrestling Channel" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",TNA Wrestling Channel
https://amg00966-amg00966c1-freelivesports-emea-7712.playouts.now.amagi.tv/playlist/amg00966-anthem-tnawrestling-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Professional Fighters League PFL" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Professional Fighters League PFL
https://d856dff4.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWdiX1BGTE1NQV9ITFM/playlist.m3u8
#EXTINF:-1 tvg-name="FloRacing" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FloRacing
https://amg02278-amg02278c1-freelivesports-emea-7535.playouts.now.amagi.tv/playlist/amg02278-flosports-floracing24x7-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="RPM" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",RPM
https://d1phlc8te2m7db.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/RPM-SportsTribal/playlist.m3u8
#EXTINF:-1 tvg-name="NHRA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",NHRA
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2010
#EXTINF:-1 tvg-name="Powersports World" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Powersports World
https://stream.ads.ottera.tv/playlist.m3u8?network_id=15480
#EXTINF:-1 tvg-name="MotorRacing" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",MotorRacing
https://control.prolivestream.com/ssai/49/master.m3u8
#EXTINF:-1 tvg-name="SpeedVision" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SpeedVision
https://47bb1a482dbb4fd6b341b01faf767ffd.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-1683-SPEEDVISION-FREELIVESPORTS/mt/freelivesports/1683/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="MTRSPT1" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",MTRSPT1
https://amg02873-kravemedia-mtrspt1-sportstribal-ajosc.amagi.tv/playlist/amg02873-kravemedia-mtrspt1-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="NASCAR" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",NASCAR
https://amg00115-amg00115c1-freelivesports-emea-11215.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg00115-nascar-nascar-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Sports Connect" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Sports Connect
https://d1jl8oqlli7412.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/SportsStudio-Passthrough-SportsConnect/index.m3u8
#EXTINF:-1 tvg-name="AYM Sports" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",AYM Sports
https://stream.ads.ottera.tv/playlist.m3u8?network_id=13843
#EXTINF:-1 tvg-name="ACE TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",ACE TV
https://amg00585-amg00585c10-sportstribal-emea-5519.playouts.now.amagi.tv/playlist/amg00585-sportstribaltvfast-acetv-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="HOMERUN TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",HOMERUN TV
https://amg00585-amg00585c11-sportstribal-emea-5520.playouts.now.amagi.tv/playlist/amg00585-sportstribaltvfast-homeruntv-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="GOAL TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",GOAL TV
https://amg00585-sportstribal-amg00585c1-sportstribal-emea-2175.playouts.now.amagi.tv/playlist/amg00585-sportstribaltvfast-goaltv-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="HOOP TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",HOOP TV
https://amg00585-amg00585c9-sportstribal-emea-5518.playouts.now.amagi.tv/playlist/amg00585-sportstribaltvfast-hooptv-sportstribalemea/playlist.m3u8
#EXTINF:-1 tvg-name="Golf Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Golf Network
https://amg26268-amg26268c12-freelivesports-emea-9477.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg26268-sportsstudio-golfnetworkchannel-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="GFN Football TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",GFN Football TV
https://887c98e7.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWV1X0dGTlNvY2Nlcl9ITFM/manifest.m3u8
#EXTINF:-1 tvg-name="Drone TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Drone TV
https://a480c1a918694b47b63f7ba07a0f1dc2.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/SportsTribal-eu_DroneTV/playlist.m3u8
#EXTINF:-1 tvg-name="SportsGrid Live" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SportsGrid Live
https://sportsgrid-tribal.amagi.tv/ts-us-e2-n1/playlist/sportstri-sportsgrid-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="Stadium" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Stadium
https://amg00585-sportstribaltv-stadium-sportstribal-ad-0w.amagi.tv/playlist/amg00585-sportstribaltv-stadium-sportstribal/playlist.m3u8
#EXTINF:-1 tvg-name="Sports Illustrated TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Sports Illustrated TV
https://60c273eb866445249cc34a0c01556572.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-235-CAMPUSLORE-SPORTS-SPORTSTRIBALTV/mt/sportstribaltv/235/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="Pac 12 Insider" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Pac 12 Insider
https://amg00384-amg00384c1-freelivesports-emea-7308.playouts.now.amagi.tv/playlist/amg00384-pac12-pac12-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="ACC Digital Network" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",ACC Digital Network
https://amg01258-amg01258c2-freelivesports-emea-5672.playouts.now.amagi.tv/playlist/amg01258-raycomsportsfast-accdigitalnetwork-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Big 12 Studios" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Big 12 Studios
https://amg01258-amg01258c7-freelivesports-emea-5671.playouts.now.amagi.tv/playlist/amg01258-raycomsportsfast-big12network-freelivesportsemea/playlist.m3u8
#EXTINF:-1 tvg-name="Man City 24/7" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Man City 24/7
https://b44f955a.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U3BvcnRzVHJpYmFsLWV1X01hbkNpdHkyNDdfSExT/playlist.m3u8
#EXTINF:-1 tvg-name="SWAC TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",SWAC TV
https://wurltripleb.global.transmit.live/hls/6aa9c16ffbc6fbb2f59d5455/v1/eleven_swactv_2/sportstribal_eu/latest/main/hls/swacbbb.m3u8
#EXTINF:-1 tvg-name="Red Bull TV" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Red Bull TV
https://d0bc56e0fe524f608049b91970572f03.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-582-WORBDACHDEFAST-FREELIVESPORTS/582/freelivesports/hls/master/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus English" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus English
https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus Argentina" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus Argentina
https://6c849fb3.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctbXhfRklGQVBsdXNTcGFuaXNoLTFfSExT/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus France" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus France
https://37b4c228.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus Germany" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus Germany
https://4397879b.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWRlX0ZJRkFQbHVzR2VybWFuX0hMUw/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus Italy" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus Italy
https://5d95f7d7.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWl0X0ZJRkFQbHVzSXRhbGlhbl9ITFM/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus Brazil" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus Brazil
https://e3be9ac5.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctYnJfRklGQVBsdXNQb3J0dWd1ZXNlX0hMUw/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus Spain" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus Spain
https://d63fabad.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWVzX0ZJRkFQbHVzU3BhbmlzaF9ITFM/playlist.m3u8
#EXTINF:-1 tvg-name="FIFA Plus USA" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",FIFA Plus USA
https://d2w9q46ikgrcwx.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-of5cbk3sav3w5/v1/sysdata_s_p_a_fifa_7/samsungheadend_us/latest/main/hls/playlist.m3u8
#EXTINF:-1 tvg-name="Cricket Gold" tvg-logo="https://i.postimg.cc/J47pjBQZ/m3uworld4k.png" group-title="Sports",Cricket Gold
https://streams2.sofast.tv/ptnr-yupptv/title-cricketgold/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/b2048bb8-1686-4432-aa50-647245383e0c/bfc6a36e-c250-4afe-b6c9-2bc57855bb7d/4.m3u8
`;

/* ============================================================
   RAJIB TV — Application Logic
   ============================================================ */

'use strict';

/* ---------- State ---------- */
const state = {
  all: [],
  filtered: [],
  category: 'ALL',
  query: '',
  page: 1,
  pageSize: 60,
  favorites: new Set(),
  recent: [],
  current: null,
  hls: null,
  categories: []
};

const LS_FAV = 'rajibtv.favorites.v1';
const LS_RECENT = 'rajibtv.recent.v1';

/* ---------- DOM ---------- */
const $ = (id) => document.getElementById(id);
const dom = {
  grid: $('channelGrid'),
  gridFooter: $('gridFooter'),
  categoryBar: $('categoryBar'),
  searchInput: $('searchInput'),
  searchBox: $('searchBox'),
  searchClear: $('searchClear'),
  resultCount: $('resultCount'),
  liveRail: $('liveRail'),
  favRail: $('favRail'),
  recentRail: $('recentRail'),
  sportsRail: $('sportsRail'),
  favoritesSection: $('favorites'),
  recentSection: $('recent'),
  sportsSection: $('sports'),
  statChannels: $('statChannels'),
  statCategories: $('statCategories'),
  statFavorites: $('statFavorites'),
  menuToggle: $('menuToggle'),
  mainNav: $('mainNav'),
  // Player
  playerModal: $('playerModal'),
  videoEl: $('videoEl'),
  playerLogo: $('playerLogo'),
  playerName: $('playerName'),
  playerCategory: $('playerCategory'),
  playerFav: $('playerFav'),
  playerCopy: $('playerCopy'),
  playerClose: $('playerClose'),
  playerOverlay: $('playerOverlay'),
  playerOverlayContent: $('playerOverlayContent'),
  relatedRail: $('relatedRail'),
  relatedCatName: $('relatedCatName'),
  toastWrap: $('toastWrap')
};

/* ---------- Utilities ---------- */
const escapeHTML = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function fallbackLogo(name) {
  const clean = String(name || 'TV').replace(/[^\w\s\u0980-\u09FF]/g, ' ').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  let initials = parts.slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'TV';
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  const h1 = hash % 360, h2 = (h1 + 65) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${h1},78%,48%)"/>
      <stop offset="1" stop-color="hsl(${h2},82%,28%)"/>
    </linearGradient></defs>
    <rect width="300" height="300" rx="58" fill="url(#g)"/>
    <rect x="14" y="14" width="272" height="272" rx="48" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="3"/>
    <text x="150" y="158" font-family="Arial,sans-serif" font-size="112" font-weight="700"
      fill="rgba(255,255,255,.96)" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function isValidStreamUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return /^(https?|rtmp|rtsp|udp|rtp|mms):\/\//i.test(url.trim());
}

function toast(msg, type = 'info') {
  const icons = {
    ok: '<path d="M5 12l5 5L20 7"/>',
    err: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.01"/>'
  };
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${icons[type] || icons.info}</svg><span>${escapeHTML(msg)}</span>`;
  dom.toastWrap.appendChild(el);
  setTimeout(() => {
    el.style.transition = '.35s';
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px) scale(.95)';
    setTimeout(() => el.remove(), 400);
  }, 3200);
}

/* ---------- M3U Parsing ---------- */
function parseAttributes(line) {
  const attrs = {};
  const re = /([A-Za-z0-9_.-]+)\s*=\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(line)) !== null) attrs[m[1].toLowerCase()] = m[2];
  return attrs;
}

function parseM3U(text) {
  if (!text || typeof text !== 'string') return [];
  text = text.replace(/^\uFEFF/, '');
  const lines = text.split(/\r?\n/);
  const channels = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (/^#EXTM3U/i.test(line)) continue;

    if (/^#EXTINF/i.test(line)) {
      const attrs = parseAttributes(line);
      const nameMatch = line.match(/,(.*)$/);
      let name = nameMatch ? nameMatch[1].trim() : '';
      if (!name) name = attrs['tvg-name'] || attrs['tvg-id'] || 'Unknown Channel';

      current = {
        name: name,
        logo: (attrs['tvg-logo'] || '').trim(),
        group: (attrs['group-title'] || '').trim(),
        tvgName: attrs['tvg-name'] || '',
        tvgId: attrs['tvg-id'] || '',
        url: ''
      };
      continue;
    }

    if (line.startsWith('#')) continue;

    if (isValidStreamUrl(line)) {
      if (current) {
        current.url = line;
        channels.push(current);
        current = null;
      } else {
        channels.push({
          name: 'Channel ' + (channels.length + 1),
          logo: '', group: '', tvgName: '', tvgId: '', url: line
        });
      }
    }
  }
  return channels;
}

/* ---------- Category Normalization ---------- */
const CATEGORY_MAP = {
  'sports': 'Sports', 'sport': 'Sports',
  'esports': 'Esports', 'gaming': 'Esports',
  'news': 'News',
  'entertainment': 'Entertainment',
  'movies': 'Movies', 'movie': 'Movies', 'cinema': 'Movies',
  'music': 'Music',
  'kids': 'Kids', 'children': 'Kids', 'cartoon': 'Kids',
  'documentary': 'Documentary', 'docs': 'Documentary',
  'religious': 'Religious', 'islamic': 'Religious',
  'bangla': 'Bangla', 'bengali': 'Bangla', 'bangla-channel': 'Bangla',
  'indian': 'Indian', 'hindi': 'Indian',
  'international': 'International',
  'english': 'English',
  'urdu': 'Urdu',
  'arabic': 'Arabic',
  'local': 'Local',
  'live sports': 'Sports'
};

function normalizeCategory(raw) {
  if (!raw) return 'Uncategorized';
  const key = raw.toLowerCase().trim();
  return CATEGORY_MAP[key] || raw.trim();
}

function normalizeChannels(rawChannels) {
  const seen = new Set();
  const result = [];
  for (const c of rawChannels) {
    if (!c || !c.url) continue;
    const dedupKey = c.url + '|' + c.name.toLowerCase();
    if (seen.has(dedupKey)) continue;
    seen.add(dedupKey);

    result.push({
      id: result.length,
      name: c.name || 'Unknown Channel',
      logo: c.logo || '',
      group: normalizeCategory(c.group),
      url: c.url,
      tvgName: c.tvgName,
      tvgId: c.tvgId,
      searchKey: ((c.name || '') + ' ' + (c.tvgName || '') + ' ' + (c.group || '')).toLowerCase()
    });
  }
  return result;
}

/* ---------- Render: Categories ---------- */
function buildCategories() {
  const map = new Map();
  state.all.forEach(c => {
    const g = c.group || 'Uncategorized';
    map.set(g, (map.get(g) || 0) + 1);
  });
  const cats = Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      if (a.name === 'Uncategorized') return 1;
      if (b.name === 'Uncategorized') return -1;
      return b.count - a.count;
    });
  return cats;
}

function renderCategories() {
  const cats = state.categories;
  let html = `<button class="chip ${state.category === 'ALL' ? 'active' : ''}" data-cat="ALL" role="tab">ALL <span class="chip-cnt">${state.all.length}</span></button>`;
  cats.forEach(c => {
    html += `<button class="chip ${state.category === c.name ? 'active' : ''}" data-cat="${escapeHTML(c.name)}" role="tab">${escapeHTML(c.name)} <span class="chip-cnt">${c.count}</span></button>`;
  });
  dom.categoryBar.innerHTML = html;
}

/* ---------- Render: Cards ---------- */
function createChannelCard(ch, index) {
  const logo = ch.logo || fallbackLogo(ch.name);
  const fav = state.favorites.has(ch.id);
  const delay = Math.min(index, 20) * 15;
  return `
    <article class="card" data-id="${ch.id}" tabindex="0" role="button" aria-label="${escapeHTML(ch.name)}" style="animation-delay:${delay}ms">
      <button class="card-fav ${fav ? 'on' : ''}" data-fav="${ch.id}" aria-label="Toggle favorite" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
          <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>
        </svg>
      </button>
      <div class="card-thumb">
        <span class="card-live"><span class="dot-live"></span>LIVE</span>
        <img src="${escapeHTML(logo)}" alt="${escapeHTML(ch.name)}" loading="lazy" data-fallback="${escapeHTML(fallbackLogo(ch.name))}" />
        <div class="card-play"><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
      </div>
      <div class="card-meta">
        <div class="card-name">${escapeHTML(ch.name)}</div>
        <span class="card-cat">${escapeHTML(ch.group)}</span>
      </div>
    </article>
  `;
}

function renderChannels(resetPage = false) {
  if (resetPage) state.page = 1;

  const list = state.filtered;
  const total = list.length;

  if (total === 0) {
    dom.grid.innerHTML = `
      <div class="empty-state">
        <div class="ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>
          </svg>
        </div>
        <h3>No channels found</h3>
        <p>Try another search.</p>
      </div>`;
    dom.gridFooter.innerHTML = '';
    dom.resultCount.textContent = '';
    return;
  }

  const shown = Math.min(state.page * state.pageSize, total);
  const slice = list.slice(0, shown);

  dom.grid.innerHTML = slice.map((c, i) => createChannelCard(c, i)).join('');

  dom.resultCount.textContent = `Showing ${shown.toLocaleString()} of ${total.toLocaleString()} channels`;

  if (shown < total) {
    dom.gridFooter.innerHTML = `<button class="load-more-btn" id="loadMoreBtn">Load ${Math.min(state.pageSize, total - shown)} more</button>`;
  } else {
    dom.gridFooter.innerHTML = '';
  }
}

/* ---------- Rails ---------- */
function renderRail(container, channels, limit = 14) {
  const list = channels.slice(0, limit);
  if (list.length === 0) {
    container.closest('.section').hidden = true;
    return;
  }
  container.closest('.section').hidden = false;
  container.innerHTML = list.map((c, i) => createChannelCard(c, i)).join('');
}

function renderAllRails() {
  // Live: first 14 channels
  renderRail(dom.liveRail, state.all, 14);

  // Sports
  const sports = state.all.filter(c => /sport/i.test(c.group) || /sport|espn|sky sports|bein|fox sports|tennis|cricket|nba|nfl|fifa|uefa|premier league/i.test(c.name));
  renderRail(dom.sportsRail, sports, 14);

  // Favorites
  const favs = state.all.filter(c => state.favorites.has(c.id));
  if (favs.length > 0) {
    dom.favoritesSection.hidden = false;
    renderRail(dom.favRail, favs, 20);
  } else {
    dom.favoritesSection.hidden = true;
  }

  // Recent
  const recents = state.recent.map(id => state.all.find(c => c.id === id)).filter(Boolean);
  if (recents.length > 0) {
    dom.recentSection.hidden = false;
    renderRail(dom.recentRail, recents, 12);
  } else {
    dom.recentSection.hidden = true;
  }
}

/* ---------- Filtering & Search ---------- */
function applyFilters(resetPage = true) {
  const q = state.query.trim().toLowerCase();
  let list = state.all.slice();

  if (state.category !== 'ALL') {
    list = list.filter(c => c.group === state.category);
  }

  if (q) {
    list = list.filter(c => c.searchKey.indexOf(q) !== -1);
  }

  state.filtered = list;
  renderChannels(resetPage);
}

/* ---------- Favorites ---------- */
function loadFavorites() {
  try {
    const raw = localStorage.getItem(LS_FAV);
    if (raw) state.favorites = new Set(JSON.parse(raw));
  } catch (e) { state.favorites = new Set(); }
}

function saveFavorites() {
  try { localStorage.setItem(LS_FAV, JSON.stringify(Array.from(state.favorites))); } catch (e) {}
}

function toggleFavorite(id) {
  id = Number(id);
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
  updateFavoriteUI(id);
  dom.statFavorites.textContent = state.favorites.size;
  renderAllRails();
}

function updateFavoriteUI(id) {
  const isFav = state.favorites.has(id);
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn => {
    btn.classList.toggle('on', isFav);
  });
  if (state.current && state.current.id === id) {
    dom.playerFav.classList.toggle('on', isFav);
  }
}

/* ---------- Recently Watched ---------- */
function loadRecent() {
  try {
    const raw = localStorage.getItem(LS_RECENT);
    if (raw) state.recent = JSON.parse(raw).slice(0, 20);
  } catch (e) { state.recent = []; }
}

function saveRecent() {
  try { localStorage.setItem(LS_RECENT, JSON.stringify(state.recent.slice(0, 20))); } catch (e) {}
}

function addToRecent(id) {
  state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, 20);
  saveRecent();
  renderAllRails();
}

/* ---------- Player ---------- */
function destroyHls() {
  if (state.hls) {
    try { state.hls.destroy(); } catch (e) {}
    state.hls = null;
  }
}

function setPlayerOverlay(html) {
  if (html) {
    dom.playerOverlayContent.innerHTML = html;
    dom.playerOverlay.classList.add('show');
  } else {
    dom.playerOverlay.classList.remove('show');
    dom.playerOverlayContent.innerHTML = '';
  }
}

function openPlayer(channel) {
  state.current = channel;
  addToRecent(channel.id);

  dom.playerLogo.src = channel.logo || fallbackLogo(channel.name);
  dom.playerLogo.onerror = () => { dom.playerLogo.onerror = null; dom.playerLogo.src = fallbackLogo(channel.name); };
  dom.playerName.textContent = channel.name;
  dom.playerCategory.textContent = channel.group;
  dom.playerFav.classList.toggle('on', state.favorites.has(channel.id));
  dom.relatedCatName.textContent = channel.group;

  // Related channels
  const related = state.all.filter(c => c.group === channel.group && c.id !== channel.id).slice(0, 12);
  dom.relatedRail.innerHTML = related.map((c, i) => createChannelCard(c, i)).join('');

  dom.playerModal.classList.add('open');
  dom.playerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  startPlayback(channel);
}

function closePlayer() {
  dom.playerModal.classList.remove('open');
  dom.playerModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  destroyHls();
  try {
    dom.videoEl.pause();
    dom.videoEl.removeAttribute('src');
    dom.videoEl.load();
  } catch (e) {}
  state.current = null;
}

function startPlayback(channel) {
  const video = dom.videoEl;
  destroyHls();
  try { video.pause(); } catch (e) {}
  video.removeAttribute('src');
  video.load();

  setPlayerOverlay('<div class="spinner"></div><h4>Connecting…</h4><p>Loading stream</p>');

  const url = channel.url;
  const isHls = /\.m3u8(\?|#|$)/i.test(url) || /m3u8/i.test(url);

  if (isHls && window.Hls && Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      maxBufferLength: 30,
      manifestLoadingTimeOut: 20000,
      manifestLoadingMaxRetry: 3,
      fragLoadingMaxRetry: 4
    });
    state.hls = hls;

    hls.loadSource(url);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      setPlayerOverlay(null);
      video.play().catch(() => {});
    });

    hls.on(Hls.Events.ERROR, (evt, data) => {
      if (!data || !data.fatal) return;
      if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
        setPlayerOverlay('<h4>Unable to play this stream.</h4><p>Try another channel.</p>');
        destroyHls();
      } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
        try { hls.recoverMediaError(); } catch (e) {
          destroyHls();
          setPlayerOverlay('<h4>Unable to play this stream.</h4><p>Try another channel.</p>');
        }
      } else {
        destroyHls();
        setPlayerOverlay('<h4>Unable to play this stream.</h4><p>Try another channel.</p>');
      }
    });
  } else if (isHls && video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.addEventListener('loadedmetadata', () => { setPlayerOverlay(null); video.play().catch(()=>{}); }, { once: true });
    video.addEventListener('error', () => setPlayerOverlay('<h4>Unable to play this stream.</h4><p>Try another channel.</p>'), { once: true });
  } else {
    video.src = url;
    video.addEventListener('loadedmetadata', () => { setPlayerOverlay(null); video.play().catch(()=>{}); }, { once: true });
    video.addEventListener('error', () => setPlayerOverlay('<h4>Unable to play this stream.</h4><p>Try another channel.</p>'), { once: true });
  }
}

/* ---------- Boot ---------- */
function boot() {
  loadFavorites();
  loadRecent();

  const rawChannels = parseM3U(M3U_PLAYLIST);
  if (rawChannels.length === 0) {
    toast('Playlist is empty or invalid', 'err');
    return;
  }

  state.all = normalizeChannels(rawChannels);
  state.categories = buildCategories();

  dom.statChannels.textContent = state.all.length.toLocaleString();
  dom.statCategories.textContent = state.categories.length;
  dom.statFavorites.textContent = state.favorites.size;

  renderCategories();
  applyFilters(true);
  renderAllRails();

  toast(`Loaded ${state.all.length.toLocaleString()} channels`, 'ok');
}

/* ---------- Event Delegation ---------- */
function handleCardClick(e) {
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(favBtn.dataset.fav);
    return;
  }

  const card = e.target.closest('.card');
  if (card) {
    const id = Number(card.dataset.id);
    const channel = state.all.find(c => c.id === id);
    if (channel) openPlayer(channel);
  }
}

dom.grid.addEventListener('click', handleCardClick);
dom.liveRail.addEventListener('click', handleCardClick);
dom.favRail.addEventListener('click', handleCardClick);
dom.recentRail.addEventListener('click', handleCardClick);
dom.sportsRail.addEventListener('click', handleCardClick);
dom.relatedRail.addEventListener('click', handleCardClick);

// Broken logo fallback
document.addEventListener('error', (e) => {
  const img = e.target;
  if (img && img.tagName === 'IMG' && img.dataset.fallback && img.src !== img.dataset.fallback) {
    img.src = img.dataset.fallback;
  }
}, true);

// Category chips
dom.categoryBar.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  state.category = chip.dataset.cat;
  renderCategories();
  applyFilters(true);
});

// Search
let searchTimer = null;
dom.searchInput.addEventListener('input', (e) => {
  const v = e.target.value;
  dom.searchBox.classList.toggle('has-value', v.length > 0);
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.query = v;
    applyFilters(true);
  }, 150);
});
dom.searchClear.addEventListener('click', () => {
  dom.searchInput.value = '';
  dom.searchBox.classList.remove('has-value');
  state.query = '';
  applyFilters(true);
  dom.searchInput.focus();
});

// Load more
dom.gridFooter.addEventListener('click', (e) => {
  if (e.target.closest('#loadMoreBtn')) {
    state.page++;
    renderChannels(false);
  }
});

// Player
dom.playerClose.addEventListener('click', closePlayer);
document.querySelector('[data-close-player]').addEventListener('click', closePlayer);

dom.playerFav.addEventListener('click', () => {
  if (state.current) toggleFavorite(state.current.id);
});

dom.playerCopy.addEventListener('click', async () => {
  if (!state.current) return;
  try {
    await navigator.clipboard.writeText(state.current.url);
    toast('Stream URL copied', 'ok');
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = state.current.url;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); toast('Stream URL copied', 'ok'); }
    catch (_) { toast('Could not copy URL', 'err'); }
    ta.remove();
  }
});

// Clear favorites / recent
$('clearFavs').addEventListener('click', () => {
  if (state.favorites.size === 0) return;
  if (confirm('Clear all favorites?')) {
    state.favorites.clear();
    saveFavorites();
    document.querySelectorAll('[data-fav]').forEach(b => b.classList.remove('on'));
    dom.statFavorites.textContent = '0';
    renderAllRails();
  }
});

$('clearRecent').addEventListener('click', () => {
  state.recent = [];
  saveRecent();
  renderAllRails();
});

// Mobile menu
dom.menuToggle.addEventListener('click', () => {
  const open = dom.mainNav.classList.toggle('open');
  dom.menuToggle.setAttribute('aria-expanded', String(open));
});

// Close nav on link click
dom.mainNav.addEventListener('click', (e) => {
  if (e.target.closest('.nav-link')) {
    dom.mainNav.classList.remove('open');
    dom.menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (dom.playerModal.classList.contains('open')) closePlayer();
    if (dom.mainNav.classList.contains('open')) {
      dom.mainNav.classList.remove('open');
      dom.menuToggle.setAttribute('aria-expanded', 'false');
    }
  }
  if (e.key === '/' && document.activeElement !== dom.searchInput && !dom.playerModal.classList.contains('open')) {
    e.preventDefault();
    dom.searchInput.focus();
  }
});

// Scroll for header shadow
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.getElementById('siteHeader').style.boxShadow = y > 20
    ? '0 12px 40px -18px rgba(0,0,0,.95)'
    : '0 12px 40px -22px rgba(0,0,0,.95)';
}, { passive: true });

/* ---------- Start ---------- */
document.addEventListener('DOMContentLoaded', boot);