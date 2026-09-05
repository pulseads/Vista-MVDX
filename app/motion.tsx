'use client';
import {useEffect,useState} from 'react';
import {Pause,Play,ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
const whatsapp='https://wa.me/5527992921782?text='+encodeURIComponent('Olá! Vim pelo site da Malvadex e gostaria de saber mais sobre as peças.');
export default function Motion(){
const [paused,setPaused]=useState(false);
useEffect(()=>{
const root=document.documentElement;
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
root.dataset.enhanced='true';
const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');reveals.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('[data-reveal]').forEach(el=>reveals.observe(el));
const hero=document.getElementById('inicio');
const heroObserver=new IntersectionObserver(([entry])=>{root.dataset.heroOut=String(!entry.isIntersecting)},{threshold:0});
if(hero)heroObserver.observe(hero);
const onReduce=()=>setPaused(reduce.matches);
onReduce();reduce.addEventListener('change',onReduce);
return ()=>{reveals.disconnect();heroObserver.disconnect();reduce.removeEventListener('change',onReduce);delete root.dataset.enhanced;delete root.dataset.heroOut;};
},[]);
useEffect(()=>{document.documentElement.dataset.motionPaused=String(paused)},[paused]);
return <><Button className="motion-control" variant="ghost" size="icon" onClick={()=>setPaused(!paused)} aria-label={paused?'Retomar movimento decorativo':'Pausar movimento decorativo'} aria-pressed={paused}>{paused?<Play size={16}/>:<Pause size={16}/>}</Button><a className="floating-contact" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Malvadex no WhatsApp"><span>WhatsApp</span><ArrowUpRight size={20}/></a></>;
}