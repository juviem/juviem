import Link from "next/link";

export default function Home() {
  // JSON-LD for Organization Schema (commented out - company specific)
  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Organization',
  //   name: 'Juviem Tech',
  //   description: 'AI Innovation & Technology Solutions',
  //   url: 'https://juviem.tech',
  //   logo: 'https://juviem.tech/logo.png',
  //   founder: {
  //     '@type': 'Person',
  //     name: 'Naseem Ansari',
  //     jobTitle: 'Founder & CEO',
  //     url: 'https://www.linkedin.com/in/naseem-ansari-25474b269/',
  //     sameAs: [
  //       'https://www.linkedin.com/in/naseem-ansari-25474b269/',
  //     ],
  //   },
  //   sameAs: [
  //     'https://www.linkedin.com/company/juviem-tech',
  //   ],
  //   areaServed: 'Worldwide',
  //   knowsAbout: [
  //     'Artificial Intelligence',
  //     'Machine Learning',
  //     'AI Innovation',
  //     'Technology Solutions',
  //   ],
  // };

  return (
   <>
    {/* <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    /> */}
   <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 px-4 bg-linear-to-br from-stone-50 via-neutral-50 to-zinc-100">
    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight text-stone-800">
        Juviem Tech
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-stone-600">
        AI Innovation
    </p>
    
    {/* Social Media Links */}
    <div className="flex gap-6 mt-4">
      <Link 
        className="text-stone-700 hover:text-stone-900 transition-colors duration-200" 
        href="https://x.com/juviemai" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </Link>
      
      <Link 
        className="text-stone-700 hover:text-stone-900 transition-colors duration-200" 
        href="https://github.com/juviemai" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      </Link>
    </div>

    {/* Owner Info */}
    <div className="text-sm sm:text-base md:text-lg mt-4">
        <p className="text-stone-500">
          <span className="font-normal">Owner:</span>{" "}
          <Link 
            className="text-stone-700 hover:text-stone-900 transition-colors duration-200 underline decoration-stone-300 hover:decoration-stone-500 underline-offset-4" 
            href="https://www.linkedin.com/in/naseem-ansari-25474b269/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Naseem Ansari
          </Link>
        </p>
    </div>
   </div>
   </>
  );
}
