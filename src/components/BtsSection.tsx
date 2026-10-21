"use client";
import React,{useState} from 'react';
import {images} from '@/lib/content';
import MediaOverlay from './MediaOverlay';
export default function BtsSection({all=false}:{all?:boolean}) {
  const [limit,setLimit]=useState(24);
  const [selected,setSelected]=useState<{src:string;alt:string}|null>(null);
  const entries=all?images:images.filter(image=>/whatsapp|leads-every|realestate|placement|clients-i-closed/.test(image.src)).slice(0,12);
  const shown=all?entries.slice(0,limit):entries;
  return (<section className="bts-section" id="gallery">
    <div className="bts-glow glow-top"/><div className="bts-glow glow-bottom-left"/><div className="bts-glow glow-bottom-right"/>
    <div className="bts-header"><div className="bts-badge">THE COMPLETE PICTURE</div><h2 className="bts-title">Proof Behind <span className="gradient-text">The Progress</span></h2><p className="bts-desc">Original screenshots, campaign results, systems and client work. Open any image to see it in full.</p></div>
    <div className="bts-container"><div className="bts-grid">{shown.map((image,index)=><button key={image.src} type="button" className={'bts-item span-'+(image.width>image.height?2:1)} style={{animationDelay:index*.08+'s'}} onClick={()=>setSelected({src:image.src,alt:image.alt||'Business Growth Karma original website asset'})}><img src={image.src} alt={image.alt||'Original client result'} loading="lazy"/><div className="bts-overlay"><div className="bts-overlay-content"><p className="bts-caption">{image.alt||'Client results & growth systems'}</p><span className="bts-tag">View full image <i className="fa-solid fa-expand"/></span></div></div></button>)}</div>{all&&limit<entries.length&&<button className="clone-gallery-more" onClick={()=>setLimit(limit+24)}>View more images ({shown.length} / {entries.length}) <i className="fa-solid fa-arrow-down"/></button>}{!all&&<a className="clone-gallery-more" href="/work#gallery">Explore all screenshots & client work <i className="fa-solid fa-arrow-right"/></a>}</div>
    {selected&&<MediaOverlay src={selected.src} title={selected.alt} onClose={()=>setSelected(null)}/>}
      <style jsx>{`
        .bts-section {
          width: 100%;
          padding: 110px 20px;
          background: #100c06;
          position: relative;
          overflow: hidden;
        }

        .bts-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(220, 177, 96, 0.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-top {
          top: -300px;
          left: 50%;
          transform: translateX(-50%);
        }
        .glow-bottom-left {
          bottom: -200px;
          left: -300px;
          background: radial-gradient(circle, rgba(231, 189, 107, 0.08), transparent 70%);
        }
        .glow-bottom-right {
          bottom: -200px;
          right: -300px;
          background: radial-gradient(circle, rgba(220, 177, 96, 0.06), transparent 70%);
        }

        .bts-header {
          text-align: center;
          margin-bottom: 70px;
          position: relative;
          z-index: 2;
        }

        .bts-badge {
          display: inline-block;
          padding: 8px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-size: 12px;
          color: #f5d18a;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .bts-title {
          font-size: clamp(34px, 4.8vw, 60px);
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          line-height: 1.1;
          letter-spacing: -1px;
          font-family: var(--font-montserrat);
        }

        .bts-desc {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #b2a58c;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .bts-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .bts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 20px;
          grid-auto-rows: 230px;
        }

        .bts-item {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .bts-item.span-2 {
          grid-row: span 2;
        }
        .bts-item.span-1 {
          grid-row: span 1;
        }

        .bts-item:hover {
          transform: translateY(-8px);
          border-color: rgba(248, 209, 126, 0.45);
          box-shadow: 0 20px 60px rgba(220, 177, 96, 0.25);
        }

        .bts-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bts-item:hover img {
          transform: scale(1.06);
        }

        .bts-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(12, 8, 4, 0.92) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .bts-item:hover .bts-overlay {
          opacity: 1;
        }

        .bts-overlay-content {
          width: 100%;
        }

        .bts-caption {
          font-size: 15px;
          color: #fff8e8;
          font-weight: 700;
          margin-bottom: 6px;
          font-family: var(--font-montserrat);
        }

        .bts-tag {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(248, 209, 126, 0.2);
          border: 1px solid rgba(248, 209, 126, 0.3);
          border-radius: 20px;
          font-size: 11px;
          color: #f5d18a;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 968px) {
          .bts-section {
            padding: 80px 15px;
          }
          .bts-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
            grid-auto-rows: 190px;
          }
        }
      `}</style>
    </section>
  );
}
