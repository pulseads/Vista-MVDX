'use client';
import {useEffect} from 'react';
import {ArrowUpRight} from 'lucide-react';
const whatsapp='https://wa.me/5527992921782?text='+encodeURIComponent('Olá! Vim pelo site da Malvadex e gostaria de saber mais sobre as peças.');
export default function Motion(){
useEffect(()=>{
const root=document.documentElement;
root.dataset.enhanced='true';
const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');reveals.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('[data-reveal]').forEach(el=>reveals.observe(el));
const hero=document.getElementById('inicio');
const heroObserver=new IntersectionObserver(([entry])=>{root.dataset.heroOut=String(!entry.isIntersecting)},{threshold:0});
if(hero)heroObserver.observe(hero);
return ()=>{reveals.disconnect();heroObserver.disconnect();delete root.dataset.enhanced;delete root.dataset.heroOut;};
},[]);
return <><a className="floating-contact" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Malvadex no WhatsApp"><span>WhatsApp</span><ArrowUpRight size={20}/></a></>;
}