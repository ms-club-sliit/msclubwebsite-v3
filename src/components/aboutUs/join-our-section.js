"use client";

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function JoinOurSection() {
  const router = useRouter();
  
  return (
    <div className="relative min-h-96 w-full">
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#101930] to-[#0d1524] opacity-60 z-0" />
     
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals to join our team. If
              you&apos;re interested in technology, innovation, and community building,
              we&apos;d love to have you on board!
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => router.push('/join-us')}
              className="px-10 py-5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform"
              style={{
                backgroundColor: "#2563eb",
                borderColor: "#2563eb",
                height: "auto",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Apply to Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
