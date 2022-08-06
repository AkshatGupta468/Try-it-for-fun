a=document.querySelectorAll('ytd-playlist-panel-video-renderer ytd-thumbnail-overlay-time-status-renderer')
let timeinsec=0;
for(let i=0;i<a.length;i++){
    tm=a[i].innerText.split(':');
    timeinsec+=parseInt(tm[0])*60+parseInt(tm[1]);
}
console.log(timeinsec)
