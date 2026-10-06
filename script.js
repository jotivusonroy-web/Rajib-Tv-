/* RAJIB TV — static IPTV front-end. No backend, no eval, no innerHTML from playlist data. */
'use strict';

// ================================
// RAJIB TV PLAYLIST
// ================================
// Replace the text below with any standard M3U/M3U8 playlist (full URLs work as-is).
// Optional shortcuts used by the bundled list (expanded by expand() below):
//   logo="~path"  -> LOGO_BASE + path + LOGO_SUFFIX     |   stream line "~slug" -> STREAM_BASE + slug + STREAM_SUFFIX
const LOGO_BASE = 'https://www.jagobd.com/wp-content/uploads/', LOGO_SUFFIX = '?x89217';
const STREAM_BASE = 'https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/', STREAM_SUFFIX = '/playlist.m3u8?wmsAuthSign=';
const PLAYLIST = `#EXTM3U
#EXTINF:-1 tvg-logo="~2019/09/AljazeeraTV-150x150.jpg" group-title="bangla-channel",Al Jazeera
~aljazeera.stream
#EXTINF:-1 tvg-logo="~2018/04/Anandatvupdate-150x150.jpg" group-title="bangla-channel",Ananda TV
~anandatv.stream
#EXTINF:-1 tvg-logo="~2015/12/asiantv-150x150.jpg" group-title="bangla-channel",Asian TV
~asian-test-sample-ok-d.stream
#EXTINF:-1 tvg-logo="~2015/12/atn-bangla1-150x150.jpg" group-title="bangla-channel",ATN Bangla
~atnbd-8-org.stream
#EXTINF:-1 tvg-logo="~2017/01/atnbanglauk11-150x150.jpg" group-title="bangla-channel",ATN Bangla UK
~atnbanglauk-off.stream
#EXTINF:-1 tvg-logo="~2016/02/atnislamictv-150x150.jpg" group-title="bangla-channel",ATN Islamic TV
~atnislamictv.stream
#EXTINF:-1 tvg-logo="~2015/12/atnmusic-150x150.jpg" group-title="bangla-channel",ATN Music
~atnmusic.stream
#EXTINF:-1 tvg-logo="~2016/08/atn-news.jpg" group-title="bangla-channel",ATN News
~atnws-sg.stream
#EXTINF:-1 tvg-logo="~2025/07/ayna-150x150.jpg" group-title="bangla-channel",Ayna TV
~ayna.stream
#EXTINF:-1 tvg-logo="~2019/04/azantvs-150x150.jpg" group-title="bangla-channel",Azan TV Canada
~azantv.stream
#EXTINF:-1 tvg-logo="~2026/06/banglar-kantho-150x150.png" group-title="bangla-channel",Banglar kontho 24
~banglarkontho.stream
#EXTINF:-1 tvg-logo="~2015/10/bv-150x1501.jpg" group-title="bangla-channel",Banglavision
~banglav000.stream
#EXTINF:-1 tvg-logo="~2025/02/bartoman-web-150x150.jpeg" group-title="bangla-channel",BARTOMAN TELEVISION
~bartomantv.stream
#EXTINF:-1 tvg-logo="~2026/04/amr-bangla--150x150.jpeg" group-title="bangla-channel",BD-আমার বাংলা ২৪
~citizentv.stream
#EXTINF:-1 tvg-logo="~2022/03/Logo-Still-150x150.png" group-title="bangla-channel",BiswaBangla 24
~biswabanglatv.stream
#EXTINF:-1 tvg-logo="~2015/10/BoishakhiTV-150x1501.jpg" group-title="bangla-channel",Boishakhi TV
~boishakhitv-org.stream
#EXTINF:-1 tvg-logo="~2017/08/3WUFkD8.png" group-title="bangla-channel",Btv Chittagong
~btvnational-ctg.stream
#EXTINF:-1 tvg-logo="~2017/08/btvctg.png" group-title="bangla-channel",BTV National
~btvnational1.stream
#EXTINF:-1 tvg-logo="~2024/12/btv-news--150x150.jpg" group-title="bangla-channel",BTV News
~btvbd-office-sg.stream
#EXTINF:-1 tvg-logo="~2024/01/CB24-PP-LOGO-150x150.png" group-title="bangla-channel",CB24 TV
~cb24.stream
#EXTINF:-1 tvg-logo="~2022/10/CGTN-150x150.png" group-title="bangla-channel",CGTN
~cgtn.stream
#EXTINF:-1 tvg-logo="~2022/10/CGTN_Doc-150x150.png" group-title="bangla-channel",CGTN Documentary
~cgtndoc.stream
#EXTINF:-1 tvg-logo="~2026/04/Channel1Bangladesh-1-150x150.png" group-title="bangla-channel",Channel 1
~channel1bd.stream
#EXTINF:-1 tvg-logo="~2026/01/channel16-150x150.jpeg" group-title="bangla-channel",Channel 16
~channel16bd.stream
#EXTINF:-1 tvg-logo="~2016/02/channel24-150x150.jpg" group-title="bangla-channel",Channel 24
~channel24-sg-e8e.stream
#EXTINF:-1 tvg-logo="~2024/12/ch52-1-150x150.jpg" group-title="bangla-channel",Channel 52 USA
~channel25usa.stream
#EXTINF:-1 tvg-logo="~2015/10/ch9-150x150.jpg" group-title="bangla-channel",Channel 9
~channel9hd.stream
#EXTINF:-1 tvg-logo="~2024/08/chsbd-150x150.jpg" group-title="bangla-channel",Channel S BD
~channels.stream
#EXTINF:-1 tvg-logo="~2017/01/channelsukup.jpg" group-title="bangla-channel",Channel S UK
~chsukoff.stream
#EXTINF:-1 tvg-logo="~2015/10/chi-150x150.jpg" group-title="bangla-channel",Channeli
~channeli-8-org.stream
#EXTINF:-1 tvg-logo="~2017/01/dbc-news-150x150.jpg" group-title="bangla-channel",DBC News
~dbcnews.stream
#EXTINF:-1 tvg-logo="~2021/05/Deentv-150x150.png" group-title="bangla-channel",Deen TV UK
~deentv.stream
#EXTINF:-1 tvg-logo="~2025/11/Deshbangla-TV-final--150x150.jpeg" group-title="bangla-channel",Desh Bangla TV
~deshbanglatv.stream
#EXTINF:-1 tvg-logo="~2022/12/DESH-TV1-150x150.png" group-title="bangla-channel",Desh TV
~deshtv.stream
#EXTINF:-1 tvg-logo="~2016/08/deshebideshe-1-150x150.jpg" group-title="bangla-channel",DesheBideshe TV | Canada
~deshebideshe.stream
#EXTINF:-1 tvg-logo="~2024/10/dim-150x150.png" group-title="bangla-channel",DIM
~dimtv.stream
#EXTINF:-1 tvg-logo="~2024/09/discoverpakistan-150x150.jpg" group-title="bangla-channel",Discover Pakistan
~discoverpakistan.stream
#EXTINF:-1 tvg-logo="~2019/07/dwnews-150x150.jpg" group-title="bangla-channel",DW News
~dwnews.stream
#EXTINF:-1 tvg-logo="~2015/10/ekattors-150x150.jpg" group-title="bangla-channel",Ekattor TV
~ekattor.stream
#EXTINF:-1 tvg-logo="~2024/08/ekhontv-150x150.jpg" group-title="bangla-channel",Ekhon TV
~globaltv.stream
#EXTINF:-1 tvg-logo="~2015/12/ekusheytv-150x150.jpg" group-title="bangla-channel",Ekushey TV
~ekusheytv-8-org.stream
#EXTINF:-1 tvg-logo="~2026/03/EPTV-Logo-400x400-1-150x150.png" group-title="bangla-channel",EP TV
~eptv.stream
#EXTINF:-1 tvg-logo="~2024/11/ESA_Patch_2022-150x150.png" group-title="bangla-channel",ESA WEB TV
~bartoman.stream
#EXTINF:-1 tvg-logo="~2019/07/francenews24-150x150.jpg" group-title="bangla-channel",France 24
~fr24.stream
#EXTINF:-1 tvg-logo="~2026/02/galaxybd-150x150.png" group-title="bangla-channel",Galaxy TV
~galaxytvbd.stream
#EXTINF:-1 tvg-logo="~2024/11/gtv-150x150.jpg" group-title="bangla-channel",Gazi Television – GTV
~gazibdz.stream
#EXTINF:-1 tvg-logo="~2021/11/globaltv-150x150.jpg" group-title="bangla-channel",Global TV Bangladesh
~Global-tv.stream
#EXTINF:-1 tvg-logo="~2022/12/green-tv-150x150.jpg" group-title="bangla-channel",Green TV
~greentv.stream
#EXTINF:-1 tvg-logo="~2022/07/Aamar-Bangla-150x150.jpg" group-title="bangla-channel",IN – Aamar Bangla
~amarbanglatv.stream
#EXTINF:-1 tvg-logo="~2026/09/Bprimebangla-150x150.jpg" group-title="bangla-channel",IN – Bprimebangla
~Bprimebangla.stream
#EXTINF:-1 tvg-logo="~2026/10/ranacablemusic-150x150.png" group-title="bangla-channel",IN – Rana Cable Music
~ranacablemusic.stream
#EXTINF:-1 tvg-logo="~2026/09/ranacabletv-150x150.png" group-title="bangla-channel",IN – Rana Cable TV
~ranacabletv.stream
#EXTINF:-1 tvg-logo="~2024/09/amardigital-1-150x150.jpg" group-title="bangla-channel",IN-Amar Digital
~amardigital.stream
#EXTINF:-1 tvg-logo="~2024/08/ANANDABARTA-150x150.jpeg" group-title="bangla-channel",IN-Ananda Barta
~anandabarta.stream
#EXTINF:-1 tvg-logo="~2024/10/expressnews-150x150.png" group-title="bangla-channel",IN-Express News
~expressnews.stream
#EXTINF:-1 tvg-logo="~2024/09/zodiaktv-150x150.jpg" group-title="bangla-channel",IN-Zodiak TV
~zodiaktv.stream
#EXTINF:-1 tvg-logo="~2015/10/inds-150x150.png" group-title="bangla-channel",Independent TV
~independent-8-org.stream
#EXTINF:-1 tvg-logo="https://www.jagobd.com/wp-content/uploads/2017/10/iontvuk.jpg?x89217" group-title="bangla-channel",iON TV UK
~iontvuk.stream
#EXTINF:-1 tvg-logo="~2026/09/chzbd-150x150.jpeg" group-title="bangla-channel",IPTV Channel Z
~channelzbd.stream
#EXTINF:-1 tvg-logo="~2026/09/G-Bangla-150x150.png" group-title="bangla-channel",IPTV G Bangla
~gbangla.stream
#EXTINF:-1 tvg-logo="~2020/06/alponatv-150x150.jpg" group-title="bangla-channel",IPTV – Alpona TV
~alponatv.stream
#EXTINF:-1 tvg-logo="~2026/05/Madhupur-News24-150x150.png" group-title="bangla-channel",IPTV- Madhupur News 24
~modhupurnews.stream
#EXTINF:-1 tvg-logo="~2017/01/IQRA-BANGLA-TV-150x150.jpeg" group-title="bangla-channel",IQRA Bangla TV UK
~iqrabanglatvoffice.stream
#EXTINF:-1 tvg-logo="~2024/08/icb-150x150.jpg" group-title="bangla-channel",Islam Ch Bangla
~islamchbangla.stream
#EXTINF:-1 tvg-logo="~2026/01/Islamictvbd-150x150.jpeg" group-title="bangla-channel",Islamic TV
~islamictvbd.stream
#EXTINF:-1 tvg-logo="~2024/08/pran-RFL-150x150.png" group-title="bangla-channel",Jago News 24
~jagonews24.stream
#EXTINF:-1 tvg-logo="~2015/10/jamuna-150x150.jpg" group-title="bangla-channel",Jamuna TV
~jamuna-test-sample-ok.stream
#EXTINF:-1 tvg-logo="~2026/05/jatv-150x150.jpeg" group-title="bangla-channel",JaTV
~jtvbd12.stream
#EXTINF:-1 tvg-logo="~2017/08/Jonmobhumi-Logo-2-150x120.jpg" group-title="bangla-channel",JonmoBhumi TV |Australia
~jonmobhumitv.stream
#EXTINF:-1 tvg-logo="~2020/05/Madani-Channel-Bangla-150x150.jpg" group-title="bangla-channel",Madani Ch. Bangla
~madanitvbangla.stream1
#EXTINF:-1 tvg-logo="~2020/05/MakkahLive-150x150.jpg" group-title="bangla-channel",Makkah Live
~makkah.stream
#EXTINF:-1 tvg-logo="~2021/04/makkahtv-150x150.jpg" group-title="bangla-channel",Makkah TV
~makkahtv.stream
#EXTINF:-1 tvg-logo="~2024/10/matribhumi-150x150.jpg" group-title="bangla-channel",Matri Bhumi TV
~matribhumitv.stream
#EXTINF:-1 tvg-logo="~2020/05/Medina-Live-150x150.jpg" group-title="bangla-channel",Medina Live
~madina.stream
#EXTINF:-1 tvg-logo="~2020/08/millennium24-150x150.jpg" group-title="bangla-channel",Millennium24 | USA
~mnews24.stream
#EXTINF:-1 tvg-logo="~2016/02/mileninumTV-150x150.jpg" group-title="bangla-channel",MillenniumTV | USA
~millenniumtv-odr-up2.stream
#EXTINF:-1 tvg-logo="~2016/02/mohona-150x150.jpg" group-title="bangla-channel",Mohona TV
~mohonatv.stream
#EXTINF:-1 tvg-logo="~2016/02/moviebangla-150x150.jpg" group-title="bangla-channel",Movie Bangla
~moviebanglalink2.stream
#EXTINF:-1 tvg-logo="~2024/12/musicbangla-150x150.jpg" group-title="bangla-channel",Music Bangla
~musicbangla44.stream
#EXTINF:-1 tvg-logo="~2024/12/mb-150x150.jpg" group-title="bangla-channel",Music Bangla
~musicbangla2025.stream
#EXTINF:-1 tvg-logo="~2015/12/mytv-150x150.jpg" group-title="bangla-channel",My TV
~mytv-up-off.stream
#EXTINF:-1 tvg-logo="~2019/11/NAN-TV-Logo-02-150x150.png" group-title="bangla-channel",NAN TV
~nantv.stream
#EXTINF:-1 tvg-logo="~2016/08/news24.jpg" group-title="bangla-channel",NEWS24 TV
~news24local.stream
#EXTINF:-1 tvg-logo="~2021/07/nexustv-150x150.png" group-title="bangla-channel",Nexus TV
~nexustv.stream
#EXTINF:-1 tvg-logo="~2025/12/n-150x150.png" group-title="bangla-channel",Noborup TV
~noboruptv.stream
#EXTINF:-1 tvg-logo="~2016/08/nrb.jpg" group-title="bangla-channel",NRB TV | Canada
~nrb-eu.stream
#EXTINF:-1 tvg-logo="~2016/02/ntveurope-150x150.jpg" group-title="bangla-channel",Ntv Europe
~ntvuk00332211.stream
#EXTINF:-1 tvg-logo="~2021/06/OPEN-TV.jpeg" group-title="bangla-channel",Open TV
~boulive.stream
#EXTINF:-1 tvg-logo="~2024/08/logo_50-150x150.png" group-title="bangla-channel",Peace TV Bangla
~peacetvban.stream
#EXTINF:-1 tvg-logo="~2024/08/Prime-Tv-Jagobd-150x150.png" group-title="bangla-channel",Prime TV
~primetv.stream
#EXTINF:-1 tvg-logo="~2025/05/Copilot_20250530_180323-150x150.png" group-title="bangla-channel",Quran TV Bangla
~qurantvbangla.stream
#EXTINF:-1 tvg-logo="~2017/01/rtvbd-150x150.jpg" group-title="bangla-channel",RTV
~rtv-sg.stream
#EXTINF:-1 tvg-logo="~2017/01/rtvmusic-150x150.jpg" group-title="bangla-channel",RTV Music
~rtvmusic.stream
#EXTINF:-1 tvg-logo="~2024/09/unnamed-150x150.webp" group-title="bangla-channel",Ruposhi Bangla TV
~ruposhibangla.stream
#EXTINF:-1 tvg-logo="~2015/12/satvs-150x150.jpg" group-title="bangla-channel",SA TV
~satvoff5666.stream
#EXTINF:-1 tvg-logo="~2024/08/samaykolkata-150x150.jpg" group-title="bangla-channel",Samay Kolkata
~samaykolkata.stream
#EXTINF:-1 tvg-logo="~2024/10/sananda-150x150.jpg" group-title="bangla-channel",Sananda TV
~sanandatv.stream
#EXTINF:-1 tvg-logo="~2025/09/shikortv1-150x150.jpg" group-title="bangla-channel",Shikor TV Canada
~shikortv.stream
#EXTINF:-1 tvg-logo="~2016/02/somoynews-150x150.jpg" group-title="bangla-channel",Somoy News
~somoyt000011226615544544.stream
#EXTINF:-1 tvg-logo="~2017/01/songsodtv-150x150.jpg" group-title="bangla-channel",Songsad TV
~songsodtv-world.stream
#EXTINF:-1 tvg-logo="~2025/12/images-150x150.jpeg" group-title="bangla-channel",Star News
~starnewsbd.stream
#EXTINF:-1 tvg-logo="~2021/03/TehelkaTV-150x150.png" group-title="bangla-channel",Tehelka TV
~tehelkatv.stream
#EXTINF:-1 tvg-logo="~2016/02/timetv-150x150.jpg" group-title="bangla-channel",Time Televison | USA
~timetvusa.stream
#EXTINF:-1 tvg-logo="~2020/04/TIMES-24-TV-150x150.jpg" group-title="bangla-channel",TIMES24 TV
~times24tv.stream
#EXTINF:-1 tvg-logo="~2025/07/Logo-For-Jagobd-2-01-150x150.jpg" group-title="bangla-channel",Toroni24 TV
~toronitv.stream
#EXTINF:-1 tvg-logo="~2016/02/TVONE-LOGO-Colour-150x150.png" group-title="bangla-channel",TV ONE UK
~tvoneuksni.stream
#EXTINF:-1 tvg-logo="~2025/01/UNTV-150x150.png" group-title="bangla-channel",UN WEB TV
~untv.stream
#EXTINF:-1 tvg-logo="~2026/01/unmochon-TV-web-150x150.jpeg" group-title="bangla-channel",Unmochon Television
~unmochon.stream
#EXTINF:-1 tvg-logo="~2020/05/V2BEATTV-150x150.png" group-title="bangla-channel",V2BEAT TV Europe
~v2beattv.stream
#EXTINF:-1 tvg-logo="~2017/01/varendro-tv-150x150.jpg" group-title="bangla-channel",Varendra TV
~varendratv.stream
#EXTINF:-1 tvg-logo="~2024/08/52doc-150x150.png" group-title="bangla-channel",VOA 52 Documentary
~voadoc.stream
#EXTINF:-1 tvg-logo="~2019/10/vooa-150x150.jpg" group-title="bangla-channel",Voice of America | VOA TV
~voa.stream
`;

// ================================
// PARSER
// ================================
const expand = (v, base, suf) => v.startsWith('~') ? base + v.slice(1) + suf : v;
const safeUrl = u => { try { const p = new URL(u); return /^https?:$/.test(p.protocol) ? p.href : ''; } catch { return ''; } };
const attr = (s, k) => (s.match(new RegExp(k + '="([^"]*)"', 'i')) || [])[1] || '';

// Keyword rules used when group-title is generic or missing. First match wins.
const RULES = [
  ['SPORTS', /sport|cricket|football|\bgtv\b|t sports|ten sports|espn|star sports/i],
  ['RELIGIOUS', /islam|quran|makkah|madina|medina|azan|deen|madani|peace tv|iqra/i],
  ['NEWS', /news|24\b|jamuna|somoy|ekattor|ekhon|dbc|channel i\b|barta|samay|ntv|rtv$|desh tv|dw|france|al jazeera|cgtn$|voice of america|voa tv|btv national|tehelka|express|times|nexus/i],
  ['MUSIC', /music|beat|\bmb\b|songsad/i],
  ['MOVIES', /movie|cinema|film/i],
  ['DOCUMENTARY', /documentary|discover|doc\b/i],
];
const classify = (name, group) => {
  const g = group.toLowerCase();
  if (g && !/bangla-channel|^$|general|undefined/.test(g)) return group.toUpperCase();
  for (const [cat, re] of RULES) if (re.test(name)) return cat;
  return /^IN\s?[-–]|kolkata|ananda|sananda|zodiak/i.test(name) ? 'INDIAN' : 'ENTERTAINMENT';
};

function parseM3U(text) {
  const out = [], seen = new Set(); let meta = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('#EXTINF')) {
      const c = line.lastIndexOf(',');
      const name = (c > -1 ? line.slice(c + 1) : '').trim() || attr(line, 'tvg-name') || 'Unnamed';
      meta = { name, tvgName: attr(line, 'tvg-name') || name, tvgId: attr(line, 'tvg-id'),
        logo: safeUrl(expand(attr(line, 'tvg-logo'), LOGO_BASE, LOGO_SUFFIX)), group: attr(line, 'group-title'),
        lang: attr(line, 'tvg-language'), country: attr(line, 'tvg-country') };
    } else if (!line.startsWith('#') && meta) {
      const url = safeUrl(expand(line, STREAM_BASE, STREAM_SUFFIX));
      if (url && !seen.has(url)) { // dedupe by stream URL only, so same-named channels with different streams are kept
        seen.add(url);
        meta.id = out.length; meta.url = url; meta.cat = classify(meta.name, meta.group);
        meta.hay = [meta.name, meta.tvgName, meta.cat, meta.country, meta.lang].join(' ').toLowerCase();
        out.push(meta);
      }
      meta = null;
    }
  }
  return out;
}

// ================================
// STATE + HELPERS
// ================================
const $ = id => document.getElementById(id);
const channels = parseM3U(PLAYLIST);
const byId = new Map(channels.map(c => [c.id, c]));
const cats = [...new Set(channels.map(c => c.cat))].sort();
const store = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch { return []; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
let favs = store.get('rtv_fav'), recent = store.get('rtv_recent');
let state = { cat: 'ALL', q: '', view: 'home' }, hls = null;

const initials = n => n.replace(/[^\p{L}\p{N} ]/gu, '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'TV';
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };

// Logo box: real image if possible, otherwise initials badge (never a broken image).
function logoBox(c) {
  const box = el('div', 'lg fb', initials(c.name));
  if (c.logo) {
    const img = new Image(); img.alt = c.name + ' logo'; img.loading = 'lazy'; img.decoding = 'async'; img.referrerPolicy = 'no-referrer';
    img.onload = () => { box.className = 'lg'; box.textContent = ''; box.appendChild(img); };
  	img.src = c.logo;
  }
  return box;
}
function card(c) {
  const d = el('div', 'card'); d.dataset.id = c.id; d.tabIndex = 0; d.setAttribute('role', 'button'); d.setAttribute('aria-label', 'Play ' + c.name);
  const f = el('button', 'fav' + (favs.includes(c.id) ? ' on' : ''), favs.includes(c.id) ? '♥' : '♡'); f.dataset.fav = c.id; f.setAttribute('aria-label', 'Toggle favorite ' + c.name);
  d.append(f, logoBox(c), el('div', 'nm', c.name), el('div', 'ct', c.cat), el('span', 'live', 'LIVE'));
  return d;
}
function section(title, list, limit) {
  if (!list.length) return null;
  const s = el('section', 'sec'), g = el('div', 'grid');
  s.appendChild(el('h2', '', title + ' · ' + list.length));
  list.slice(0, limit || 400).forEach(c => g.appendChild(card(c)));
  s.appendChild(g); return s;
}

// ================================
// RENDER
// ================================
function render() {
  const wrap = $('sections'); wrap.textContent = '';
  const q = state.q.trim().toLowerCase();
  let list = channels;
  if (state.view === 'fav') list = channels.filter(c => favs.includes(c.id));
  if (state.view === 'sports') list = channels.filter(c => c.cat === 'SPORTS');
  if (state.cat !== 'ALL') list = list.filter(c => c.cat === state.cat);
  if (q) list = list.filter(c => c.hay.includes(q));
  const add = s => s && wrap.appendChild(s);
  if (q || state.cat !== 'ALL' || state.view !== 'home') {
    const t = q ? 'SEARCH RESULTS' : state.view === 'fav' ? 'MY FAVORITES' : state.view === 'sports' ? 'SPORTS' : state.cat;
    add(section(t, list));
    if (!list.length) wrap.appendChild(el('p', 'empty', state.view === 'fav' ? 'No favorites yet — tap ♡ on any channel.' : 'No channels found.'));
    return;
  }
  const rec = recent.map(i => byId.get(i)).filter(Boolean);
  add(section('MY FAVORITES', favs.map(i => byId.get(i)).filter(Boolean)));
  add(section('RECENTLY WATCHED', rec));
  add(section('🔴 LIVE NOW', channels.filter(c => c.cat === 'NEWS').slice(0, 12)));
  cats.forEach(k => add(section(k, channels.filter(c => c.cat === k))));
}
function renderCats() {
  const bar = $('cats'); bar.textContent = '';
  ['ALL', ...cats].forEach(k => {
    const b = el('button', k === state.cat ? 'on' : '', k); b.dataset.cat = k; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', k === state.cat); bar.appendChild(b);
  });
}
$('stats').textContent = '';
[channels.length.toLocaleString() + ' CHANNELS', cats.length + ' CATEGORIES'].forEach(t => $('stats').appendChild(el('span', '', t)));

// ================================
// PLAYER
// ================================
function play(id) {
  const c = byId.get(id); if (!c) return;
  recent = [id, ...recent.filter(x => x !== id)].slice(0, 12); store.set('rtv_recent', recent);
  $('home').hidden = true; $('player').hidden = false; window.scrollTo(0, 0);
  $('pname').textContent = c.name; $('pcat').textContent = c.cat;
  const pl = $('plogo'); pl.alt = c.name + ' logo'; pl.src = c.logo || ''; pl.hidden = !c.logo; pl.onerror = () => { pl.hidden = true; };
  const pf = $('pfav'); pf.dataset.fav = id; pf.textContent = favs.includes(id) ? '♥' : '♡'; pf.classList.toggle('on', favs.includes(id));
  const rel = $('related'); rel.textContent = '';
  channels.filter(x => x.cat === c.cat && x.id !== id).slice(0, 12).forEach(x => rel.appendChild(card(x)));
  const v = $('video'), err = $('err'); err.hidden = true; stop();
  const fail = () => { err.hidden = false; };
  v.onerror = fail;
  if (window.Hls && Hls.isSupported()) {
    hls = new Hls({ lowLatencyMode: true });
    hls.on(Hls.Events.ERROR, (_, d) => { if (d.fatal) fail(); });
    hls.loadSource(c.url); hls.attachMedia(v);
  } else v.src = c.url; // Safari / native HLS
  v.play().catch(() => {}); // browsers may block autoplay with sound; user can press play
}
function stop() { if (hls) { hls.destroy(); hls = null; } const v = $('video'); v.pause(); v.removeAttribute('src'); v.load(); }
function closePlayer() { stop(); $('player').hidden = true; $('home').hidden = false; render(); }

function toggleFav(id) {
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [id, ...favs]; store.set('rtv_fav', favs);
  document.querySelectorAll('[data-fav="' + id + '"]').forEach(b => { const on = favs.includes(id); b.classList.toggle('on', on); b.textContent = on ? '♥' : '♡'; });
}

// ================================
// EVENTS (delegated)
// ================================
document.addEventListener('click', e => {
  const f = e.target.closest('[data-fav]'); if (f) { e.stopPropagation(); return toggleFav(+f.dataset.fav); }
  const c = e.target.closest('.card'); if (c) return play(+c.dataset.id);
  const k = e.target.closest('[data-cat]'); if (k) { state.cat = k.dataset.cat; state.view = 'home'; renderCats(); return render(); }
  const n = e.target.closest('[data-nav]');
  if (n) {
    e.preventDefault(); $('nav').classList.remove('open');
    if (!$('player').hidden) { stop(); $('player').hidden = true; $('home').hidden = false; }
    const t = n.dataset.nav; state.q = ''; $('q').value = ''; $('qc').hidden = true;
    state.view = t === 'fav' ? 'fav' : t === 'sports' ? 'sports' : 'home'; state.cat = 'ALL';
    renderCats(); render();
    if (t === 'cats') $('cats').scrollIntoView({ behavior: 'smooth' }); else window.scrollTo({ top: t === 'live' ? $('sections').offsetTop - 120 : 0, behavior: 'smooth' });
  }
});
document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) { e.preventDefault(); play(+e.target.dataset.id); } });
$('back').onclick = closePlayer;
$('explore').onclick = () => $('cats').scrollIntoView({ behavior: 'smooth' });
$('burger').onclick = () => { const o = $('nav').classList.toggle('open'); $('burger').setAttribute('aria-expanded', o); };
let tm; $('q').addEventListener('input', e => { clearTimeout(tm); tm = setTimeout(() => { state.q = e.target.value; $('qc').hidden = !state.q; render(); }, 120); });
$('qc').onclick = () => { $('q').value = ''; state.q = ''; $('qc').hidden = true; render(); };

renderCats(); render();
