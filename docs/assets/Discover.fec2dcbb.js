import{c as d,F as f,t as g,o as x,g as o,h as n,j as e,i as t,I as p,G as h,J as k,u as i,H as _}from"./vendor.b0220456.js";import{_ as v,B as C,a as B}from"./Mv.91d361df.js";import{_ as z}from"./CoverPlay.5278bcd3.js";import{u as l}from"./music.da76c41a.js";import{c as S}from"./index.b26e5846.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./IconPark.7d02178f.js";import"./Right.b955be44.js";import"./video.d5e145bf.js";import"./el-image-viewer.841aee50.js";import"./PlayOne.fab8ab82.js";const b={class:"grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-10"},E=["onClick"],F={class:"mt-2 text-xs text-main truncate"},N=d({setup(m){const r=f(),{personalized:a}=g(l()),{getPersonalized:u}=l();return x(async()=>{u()}),(y,$)=>(o(),n("div",null,[e(v,{title:"\u4F60\u7684\u4E13\u5C5E\u6B4C\u5355"}),t("div",b,[(o(!0),n(p,null,h(i(a).sampleSize(10),(s,c)=>(o(),n("div",{key:c,class:k({"item-1":c===0}),onClick:w=>i(r).push({name:"playlist",query:{id:s.id}})},[e(z,{name:s.name,"pic-url":s.picUrl,"play-count":s.playCount,"show-play-count":""},null,8,["name","pic-url","play-count"]),t("div",F,_(s.name),1)],10,E))),128))])]))}}),P={class:"grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer"},j=["onClick"],A=["src"],M={class:"px-2 text-xs flex-auto flex flex-col w-1/3"},R={class:"text-xs flex-1 truncate"},U={class:"mt-1.5 text-dc"},V=d({setup(m){const{play:r}=S();f();const{personalizedNewSong:a}=g(l()),{getPersonalizedNewSong:u}=l();return x(async()=>{await u()}),(y,$)=>(o(),n(p,null,[e(v,{title:"\u63A8\u8350\u65B0\u97F3\u4E50"}),t("div",P,[(o(!0),n(p,null,h(i(a),(s,c)=>(o(),n("div",{key:c,class:"hover-bg-view transition-all flex items-center",onClick:w=>i(r)(s.id)},[t("img",{src:s.picUrl,alt:"",class:"w-12 h-12 object-cover rounded flex-shrink-0"},null,8,A),t("div",M,[t("div",R,_(s.name),1),t("div",U,_(s.song.artists[0].name),1)])],8,j))),128))])],64))}}),q={class:"px-5"},D=t("h1",{class:"text-3xl font-bold pt-8 pb-4"},"\u63A8\u8350",-1),Y=d({setup(m){return(r,a)=>(o(),n("div",q,[D,e(C,{"per-page":3}),e(N),e(V),e(B)]))}});export{Y as default};
