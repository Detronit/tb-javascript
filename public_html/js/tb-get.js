function qry(sr)
{
    var qa = [];
    var sp = sr.split('&');
            for (var prs of sp)
    {
        var pra = prs.split('=');
        qa[pra[0]] = pra[1];
    }
    return qa;
}

function sprintf(nw)
{
    var i = 0;
    while (/%s/.test(nw))
        nw = nw.replace('%s', arguments[++i]);
    return nw;
}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

qua = {
    _141: '256k AAC',
    _140: '128k AAC',
    _251: '160k Opus',
    _250: '70k Opus',
    _249: '50k Opus',
    _171: '128k Vorbis',
    _22: '720p H.264 192k AAC',
    _84: '720p 3D 192k AAC',
    _18: '360p H.264 96k AAC',
    _82: '360p 3D 96k AAC',
    _36: '240p MPEG-4 36k AAC',
    _17: '144p MPEG-4 24k AAC',
    _43: '360p VP8 128k Vorbis',
    _100: '360p 3D 128k Vorbis',
    _5: '240p H.263 64k MP3',
    _266: '2160p H.264',
    _264: '1440p H.264',
    _299: '1080p60 H.264',
    _137: '1080p H.264',
    _298: '720p60 H.264',
    _136: '720p H.264',
    _135: '480p H.264',
    _134: '360p H.264',
    _133: '240p H.264',
    _160: '144p H.264',
    _313: '2160p VP9',
    _308: '1440p60 VP9',
    _271: '1440p VP9',
    _303: '1080p60 VP9',
    _248: '1080p VP9',
    _302: '720p60 VP9',
    _247: '720p VP9',
    _244: '480p VP9',
    _243: '360p VP9',
    _242: '240p VP9',
    _278: '144p VP9'
};
var chosen = [ 133, 134, 135, 136, 298, 137, 299, 264, 266, 22, 84];

var arr = {};
function finish()
{
    f['title'] = alf.args.title;
// dw = document.querySelector('#bm');
//  if (!dw) {
//    dw = document.createElement('div');
//    dw.id = 'bm';
//        document.body.insertBefore(dw, document.body.firstChild);
//  }
//
alert('run bookmarklet again on next page');


//
//  dw.innerHTML = [
//    new Date().toLocaleTimeString(),
//    'Click to copy the filename, then right click to download'
//  ].concat(
//    Object.keys(qua).map(ky => qua[ky]).filter(vu => /href/.test(vu))
//  ).join('<br>');
//
document.body.innerHTML = [
    new Date().toLocaleTimeString(),
    'Click to copy the filename, then right click to download'
].concat( Object.keys(arr).map(ky => arr[ky]).filter(vu => /href/.test(vu))).join('<br>');
    var ele = document.createElement("p");
        ele.innerHTML = JSON.stringify(f);
        document.body.appendChild(ele);
}

function done(i)
{
    qst = qry(frt);
    qty = qua['_' + qst.itag] || qst.itag;
    hrf = unescape(qst.url);
    if (qst.sig)
        hrf += '&signature=' + qst.sig;
    if (qst.s) {
        if (typeof rpt == 'undefined') {
            xhr = new XMLHttpRequest();
            xhr.open('get', alf.assets.js, 0);
            xhr.send();
            rpt = xhr.responseText.match(/\){([^]+)}/)[1];
            eval(rpt);

            fcnm = rpt.match(/signature\W+(\w+)/)[1];
        }

        hrf += '&signature=' + eval(sprintf('%s("%s")', fcnm, qst.s));
    }
    fn = (alf.args.title + '-' + qty)
            .toLowerCase()
            .replace(/[!"#&'()*,:?@|~’”]/g, '')
            .replace(/h.264/, 'h264')
            .replace(/[ +./[\]]/g, '-')
            .replace(/-+/g, '-');
    console.log("dla " + i+ "| "+qst.itag+" > " + qty);
    
    for(var j=0; j<chosen.length; j++)
    {
        console.log("---- test " + j+ "| "+qst.itag+" > " + chosen[j]);
        if(chosen[j] === qst.itag)
        {
            pm = sprintf('prompt("", "%s"); return false', fn).replace(/"/g, '&quot;');
            f[qua['_' + qst.itag]] = hrf;
    //        qua['_' + qst.itag] =
    //                sprintf('<a href="%s" onclick="%s">%s</a>', hrf, pm, qty);
            var temp=sprintf('<a href="%s" onclick="%s">%s</a>', hrf, pm, qty);
            arr['_' + qst.itag]=temp;
            console.log("wybrany " + j+ "| "+qst.itag+" > " + qty+" ****   "+temp);
            break;
        }
    }
    
    if(contains(chosen, qst.itag))
    {
        pm = sprintf('prompt("", "%s"); return false', fn).replace(/"/g, '&quot;');
        f[qua['_' + qst.itag]] = hrf;
//        qua['_' + qst.itag] =
//                sprintf('<a href="%s" onclick="%s">%s</a>', hrf, pm, qty);
        arr['_' + qst.itag]=sprintf('<a href="%s" onclick="%s">%s</a>', hrf, pm, qty);
    }
    //
    //
}


var f = [];
var qty;
var qst;
//if (location.host == 'www.youtube.com') {
//var frt;
var name = JSON.stringify(ytplayer.config);
// location = '//s.ytimg.com';
//} else {
var i =0;
var alf = JSON.parse(name);
z = [alf.args.adaptive_fmts, alf.args.url_encoded_fmt_stream_map]
        .join(',').split(',');
//for(var i=0; i<z; i++) {
for (var frt of z) {
//    frt = z[i];
    done(i);
    i++;
}
finish();
