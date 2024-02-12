'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Nav = function(){
  const isUserLoggedIn = false;
  const [providers,setProviders] = useState(null);
  useEffect(function(){
    const SetProviders = async () => {
      const response = await getProviders()
      setProviders(response);
    };
    SetProviders();
  },[])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Promtopia logo" height="30" width="30" className="object-contain"/>
        <p className="logo_text">Promtopia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>
          <button type="button" className="outline_btn">Sign Out</button>
          <Link href="/profile">
            <Image src="/assets/images/logo.svg" width="37" height="37" alt="profile pic" className="rounded-full"/>
          </Link>
        </div>
        ): <>{providers && Object.values(providers).map((provider,index) => (
          <button>
          </button>
        ))}</>}
      </div>
    </nav>
  )
}

export default Nav