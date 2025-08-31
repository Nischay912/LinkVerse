"use client";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7ff] to-white">
      {/* Header Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#ffceee] rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#a1c0ff] rounded-full filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#54043f] sm:text-5xl md:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 md:text-xl max-w-2xl mx-auto">
              Have questions or want to learn more about LinkVerse? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:w-2/5">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Reach out to us</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#54043f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 极速赛车开奖直播2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a365d] text-lg mb-1">Email us</h3>
                      <p className="text-gray-700">nischaykumar.dev@gmail.com</p>
                      <p className="text-gray-500 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#54043f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a365d] text-lg mb-1">Social Media</h3>
                      <p className="text-gray-700">Follow us on our platforms</p>
                      <p className="text-gray-500 text-sm mt-1">Stay updated with our latest news</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold text-[#1a365d] text-lg mb-4">Follow us</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Nischay912" target="_blank" rel="noopener noreferrer" className="bg-white text-[#54043f] p-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 极速赛车开奖直播0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    
                    <a href="https://x.com/nk_912_kr" target="_blank" rel="noopener noreferrer" className="bg-white text-[#54043f] p-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/nischay-kumar-29ba9527b/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#54043f] p-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Why choose LinkVerse?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#ffceee] p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-[#54043f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.极速赛车开奖直播04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a365极速赛车开奖直播d] mb-2">No Login Required</h4>
                      <p className="text-gray-700">Unlike other services, we don&apos;t force you to create an account. Just create your page and share your unique LinkVerse URL.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#ffceee] p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-[#54043f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a365d] mb-2">Completely Free</h4>
                      <p className="text-gray-700">LinkVerse will always be free to use. No hidden fees, no premium features - everything is available to everyone at no cost.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#ffceee] p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-[#54043f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7极速赛车开奖直播v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a365d] mb-2">Instant Setup</h4>
                      <p className="text-gray-700">Get your LinkVerse page in seconds. No complicated process, no lengthy forms - just add your links and you&apos;re ready to share.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#f0f5ff] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#1a365d] mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#54043f] mb-2">How do I create my LinkVerse page?</h4>
                    <p className="text-gray-700">Simply visit our homepage, add your links, customize your page, and share your unique LinkVerse URL. No account needed!</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#54043f] mb-2">Is LinkVerse really free with no hidden costs?</h4>
                    <p className="text-gray-700">Yes! LinkVerse is completely free and will always remain free. We believe in providing value without barriers.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#54043f] mb-2">How is this different from other link-in-bio services?</h4>
                    <p className="text-gray-700">Unlike other services that require login and accounts, LinkVerse lets you create and share your page instantly without any registration process.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#54043f] mb-2">Can I update my links later?</h4>
                    <p className="text-gray-700">Absolutely! You can always come back and update your links anytime. Your unique URL will stay the same.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#ffceee] to-[#a1c0ff]">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-2xl font-bold text-[#54043f] md:text-3xl mb-6">Ready to create your LinkVerse?</h2>
          <p className="text-md text-[#54043f] mb-8 max-w-2xl mx-auto">
            No signup required. Create your page in seconds and share it with the world.
          </p>
          <Link href="/generate"><button className="bg-[#54043f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#430333] transition-colors shadow-md hover:shadow-lg cursor-pointer">
            Get Your Free Link Now
          </button></Link>
          <p className="text-sm text-[#54043f] mt-4">No login • No credit card • No hassle</p>
        </div>
      </section>
    </main>
  ); 
}