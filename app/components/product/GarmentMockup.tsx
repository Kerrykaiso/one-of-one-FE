"use client";
import { RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { ProductColor } from "@/app/data/marketplace";

export function GarmentMockup({ artwork, color, garment, placement, side, onSideChange }: {
  artwork: string; color: ProductColor; garment: string; placement: "front"|"back"|"front-back";
  side: "front"|"back"; onSideChange: (side:"front"|"back")=>void;
}) {
  const canShowArt = placement === "front-back" || placement === side;
  const type = garment.toLowerCase().includes("hoodie") ? "hoodie" : garment.toLowerCase().includes("polo") ? "polo" : garment.toLowerCase().includes("long") ? "long" : garment.toLowerCase().includes("oversized") ? "oversized" : "tee";
  return <section className="mockup-studio" aria-label="Interactive garment artwork preview">
    <div className="mockup-top"><div><span>LIVE MOCKUP</span><b>{garment} · {side}</b></div><button onClick={()=>onSideChange(side==="front"?"back":"front")}><RotateCcw/> Rotate garment</button></div>
    <div className="mockup-stage">
      <div className="stage-grid" aria-hidden="true"/>
      <motion.div key={`${side}-${garment}-${color.name}`} className={`garment-3d garment-${type} side-${side}`} initial={{rotateY:side==="front"?-30:30,opacity:.5}} animate={{rotateY:side==="front"?-7:7,opacity:1}} transition={{duration:.45}}>
        {type==="hoodie"&&<i className="hood" style={{backgroundColor:color.hex}}><i className="hood-opening"/></i>}
        <i className="sleeve sleeve-left" style={{backgroundColor:color.hex}}/><i className="sleeve sleeve-right" style={{backgroundColor:color.hex}}/>
        {(type==="long"||type==="hoodie")&&<><i className="sleeve-cuff cuff-left"/><i className="sleeve-cuff cuff-right"/></>}
        <div className="garment-body" style={{backgroundColor:color.hex}}>
          <i className="fabric-light"/>{type!=="polo"&&type!=="hoodie"&&<i className="crew-neck"/>}{type==="polo"&&<><i className="polo-collar"/><i className="polo-placket"><b/><b/></i></>}{type==="hoodie"&&side==="front"&&<i className="hood-strings"><b/><b/></i>}
          {canShowArt&&<div className={`mockup-print print-${side}`}><img src={artwork} alt=""/><span>{side.toUpperCase()} PRINT</span></div>}
          {!canShowArt&&<span className="blank-side">NO PRINT ON {side.toUpperCase()}</span>}
          {type==="hoodie"&&side==="front"&&<i className="hoodie-pocket"/>}<i className="garment-hem"/>
        </div>
      </motion.div>
      <span className="mockup-shadow"/>
    </div>
    <div className="print-map"><span className={placement!=="back"?"has-print":""}><i/> Front {placement!=="back"?"printed":"blank"}</span><b>{placement==="front-back"?"FRONT + BACK":placement==="front"?"FRONT ONLY":"BACK ONLY"}</b><span className={placement!=="front"?"has-print":""}><i/> Back {placement!=="front"?"printed":"blank"}</span></div>
    <div className="mockup-sides"><button className={side==="front"?"active":""} onClick={()=>onSideChange("front")}>Front view {placement!=="back"&&<i/>}</button><button className={side==="back"?"active":""} onClick={()=>onSideChange("back")}>Back view {placement!=="front"&&<i/>}</button></div>
  </section>;
}
