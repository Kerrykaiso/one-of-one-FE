"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Palette } from "lucide-react";

export function AccountForm({signup=false}:{signup?:boolean}){
  const [done,setDone]=useState(false);
  if(done)return <Success text={signup?"Your account has been created.":"Welcome back. This demo does not connect to a real account."}/>;
  return <>
    <form className="simple-form" onSubmit={(e)=>{e.preventDefault();setDone(true)}}>
      {signup&&<label>Full name<input required/></label>}<label>Email address<input type="email" required/></label><label>Password<input type="password" required minLength={8}/></label>{signup&&<label>Confirm password<input type="password" required minLength={8}/></label>}
      {!signup&&<div className="form-options"><label><input type="checkbox"/> Remember me</label><button type="button">Forgot password?</button></div>}
      <button className="button button-dark">{signup?"Create customer account":"Customer sign in"} <span>↗</span></button>
      <p>{signup?"Already have a customer account?":"New to One of One?"} <Link href={signup?"/login":"/signup"}>{signup?"Sign in":"Create account"}</Link></p>
    </form>
    <div className="artist-account-entry"><Palette/><div><span>ARTIST ACCOUNT</span><h3>{signup?"Looking to share your work?":"Already a One of One artist?"}</h3><p>Artists use a separate studio account for applications and editions.</p></div><div><Link className="button button-outline" href="/artist/login">Artist sign in <ArrowUpRight/></Link><Link href="/artist/signup">Apply as an artist →</Link></div></div>
  </>;
}
export function ContactForm(){const [done,setDone]=useState(false);if(done)return <Success text="Your note is in our hands. We’ll reply within two working days."/>;return <form className="simple-form contact-form" onSubmit={(e:FormEvent)=>{e.preventDefault();setDone(true)}}><div><label>Name<input required/></label><label>Email<input type="email" required/></label></div><label>Subject<select required defaultValue=""><option value="" disabled>Select a topic</option><option>Order support</option><option>Artist application</option><option>Press & partnerships</option><option>Something else</option></select></label><label>Message<textarea rows={6} required/></label><button className="button button-dark">Send message <span>↗</span></button></form>}
function Success({text}:{text:string}){return <div className="form-success"><Check/><h3>ALL SET.</h3><p>{text}</p></div>}
