// Menü, klavye kullanımı ve ekrana girince çalışan deneyim sayacı.
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menü';}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Kapat':'Menü';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape' && nav.classList.contains('open')){closeMenu();menu.focus();}});
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const count=document.querySelector('[data-count]');
if(count && !reduced && 'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)return;observer.disconnect();let start;const target=Number(count.dataset.count);function tick(now){if(!start)start=now;const t=Math.min((now-start)/1000,1);count.textContent=Math.round(target*(1-Math.pow(1-t,3)))+'+';if(t<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);},{threshold:.6});observer.observe(count);}

// EKLEME: Hero slideshow. Diğer sayfalarda slider olmadığı için çalışmaz.
const slider=document.querySelector('.hero-slider');
if(slider){
 const slides=[...slider.querySelectorAll('.hero-slide')];
 const dots=[...slider.querySelectorAll('.slide-dots button')];
 const toggle=slider.querySelector('.slide-toggle');
 let current=0, paused=reduced, timer;
 function show(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.hidden=i!==current);dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===current)));}
 function schedule(){clearInterval(timer);if(!paused && !document.hidden && !slider.matches(':hover') && !slider.contains(document.activeElement))timer=setInterval(()=>show(current+1),6000);}
 function label(){toggle.textContent=paused?'Oynat':'Duraklat';toggle.setAttribute('aria-label',paused?'Otomatik geçişi başlat':'Otomatik geçişi duraklat');}
 dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);schedule();}));
 toggle.addEventListener('click',()=>{paused=!paused;label();schedule();});
 slider.addEventListener('mouseenter',()=>clearInterval(timer));
 slider.addEventListener('mouseleave',schedule);
 slider.addEventListener('focusin',()=>clearInterval(timer));
 slider.addEventListener('focusout',()=>setTimeout(schedule,0));
 slider.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();show(current+(event.key==='ArrowRight'?1:-1));dots[current].focus();}});
 document.addEventListener('visibilitychange',schedule);
 label();schedule();
}
