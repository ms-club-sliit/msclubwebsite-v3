"use client";

import { Button } from 'antd'
export default function JoinOurSection() {
  return (
    <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team. If
              you're interested in technology, innovation, and community building,
              we'd love to have you on board!
            </p>
            <Button
              type="primary"
              size="large"
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
  )
}
