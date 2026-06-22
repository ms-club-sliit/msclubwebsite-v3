"use client";

export default function JoinOurSection() {
  return (
    <section className="relative isolate py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[32px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-700/20" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-700/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="rounded-[28px] border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)] px-6 py-12 sm:px-10 sm:py-14 text-center transition-all duration-300">
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Join Our Team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300">
            We’re always looking for passionate individuals to join our team.
            If you’re interested in technology, innovation, and community
            building, we’d love to have you on board.
          </p>

          <div className="mt-8 flex justify-center">
            <button className="group relative inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30">
              <span className="relative z-10">Apply to Join</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}