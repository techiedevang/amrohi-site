import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Static-site placeholder: wire this to Formspree, a serverless function,
    // or your CRM's form endpoint when deploying.
    setSubmitted(true)
  }

  return (
    <section className="px-6 md:px-14 pt-14 md:pt-20 pb-24">
      <div className="flex items-center gap-3.5 mb-5">
        <span className="w-8 h-px bg-brass inline-block" />
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass-light">Get in touch</span>
      </div>
      <h1 className="font-display font-medium text-[38px] md:text-[54px] leading-[1.1] mb-16 max-w-2xl">
        Let's talk about<br /><em className="italic font-normal text-brass-light">your address in Malad.</em>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div className="space-y-8 mb-12">
            <div>
              <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass mb-2">Call Us</h5>
              <a href="tel:+918591445462" className="text-xl font-display hover:text-brass-light transition-colors">+91 85914 45462</a>
              <p className="text-xs text-bone-dim mt-1">Mon–Sat, 10am–7pm IST</p>
            </div>
            <div>
              <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass mb-2">WhatsApp</h5>
              <a href="https://wa.me/918591445462" className="text-xl font-display hover:text-brass-light transition-colors">+91 85914 45462</a>
            </div>
            <div>
              <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass mb-2">Write to Us</h5>
              <a href="mailto:hello@amrohideverlopers.com" className="text-xl font-display hover:text-brass-light transition-colors break-all">hello@amrohideverlopers.com</a>
            </div>
            <div>
              <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass mb-2">Visit</h5>
              <p className="text-lg font-display">Amrohi House</p>
              <p className="text-bone-dim text-sm">S.V. Road, Malad West, Mumbai 400064</p>
            </div>
          </div>

          <div
            className="aspect-[16/9] rounded-sm flex items-center justify-center text-bone-dim/60 text-xs tracking-widest uppercase"
            style={{ backgroundImage: 'linear-gradient(135deg, #3d4750, #15161a 75%)' }}
          >
            Map embed goes here
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="border border-white/10 rounded-sm p-10 text-center">
              <h3 className="font-display text-2xl mb-3">Message sent.</h3>
              <p className="text-bone-dim text-sm">Someone from the studio will get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[11px] tracking-[0.14em] uppercase text-bone-dim mb-2">Your Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-white/20 focus:border-brass-light outline-none py-3 text-bone" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] tracking-[0.14em] uppercase text-bone-dim mb-2">Phone</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-white/20 focus:border-brass-light outline-none py-3 text-bone" />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.14em] uppercase text-bone-dim mb-2">Interested In</label>
                  <select className="w-full bg-transparent border-b border-white/20 focus:border-brass-light outline-none py-3 text-bone">
                    <option className="bg-ink">Residential</option>
                    <option className="bg-ink">Commercial</option>
                    <option className="bg-ink">Redevelopment</option>
                    <option className="bg-ink">Interiors</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.14em] uppercase text-bone-dim mb-2">Your Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/20 focus:border-brass-light outline-none py-3 text-bone resize-none" />
              </div>
              <button
                type="submit"
                className="text-[13px] tracking-[0.06em] uppercase text-ink bg-brass hover:bg-brass-light transition-colors px-8 py-4 rounded-sm"
              >
                Send Enquiry
              </button>
              <p className="text-xs text-bone-dim/60">
                By submitting, you allow Amrohi Developers to contact you about your enquiry. We never share details with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
