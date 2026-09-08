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
