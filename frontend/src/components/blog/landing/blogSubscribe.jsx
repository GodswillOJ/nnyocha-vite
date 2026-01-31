import React from "react";

export default function BlogSubscribe() {
  return (
    <section className="py-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl bg-gray-50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 p-10 lg:p-16">

            {/* LEFT CONTENT */}
            <div className="space-y-6 font-openSans max-w-xl">
              <h2 className="text-3xl font-gotham lg:text-4xl font-semibold text-[#56371a]">
                Stay Updated
              </h2>

              <p className="text-[#56371a]">
                Subscribe to receive the latest research insights, academic
                updates, funding opportunities, and innovation stories directly
                in your inbox.
              </p>

              {/* FORM */}
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-[#e76f00] px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs font-semibold text-lime-600">
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* RIGHT VISUAL */}
            <div className="hidden lg:flex justify-end">
              <div className="w-64 h-64 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <img
                  src="/images/blog/landing/blog_hero2.png"
                  alt="Newsletter illustration"
                  className="w-full h-full rounded-2xl object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
