'use client'
import React from "react"



const Froms = () => {

  const [formData, setFormData] = React.useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    help: '',
  });

  const [button, setButton] = React.useState(false);

  React.useEffect(() => {

    if (formData.fullName.trim() !== '' && formData.companyName.trim() !== '' && formData.email.trim() !== '' && formData.phone.trim() !== '' && formData.help.trim() !== '') {
      setButton(true);
    } else {
      setButton(false);
    }

  }, [formData.fullName, formData.companyName, formData.email, formData.phone, formData.help])


  return (
    <section className="w-full flex flex-col items-center gap-8">
      {/*Mobile */}
      <div className="flex flex-col sm:hidden gap-5 w-4/5">
        <input
          placeholder="Full name"
          className="border w-full min-h-14 border-gray-600 rounded-sm"
          value={formData.fullName}
          onChange={(e) => { setFormData((old) => ({ ...old, fullName: e.target.value })) }}
        />
        <input
          placeholder="Company name"
          className="border w-full min-h-14 border-gray-600 rounded-sm"
          value={formData.companyName}
          onChange={(e) => { setFormData((old) => ({ ...old, companyName: e.target.value })) }}
        />
        <input
          placeholder="Bussiness Email"
          className="border w-full min-h-14 border-gray-600 rounded-sm"
          value={formData.email}
          onChange={(e) => { setFormData((old) => ({ ...old, email: e.target.value })) }}
        />
        <input
          placeholder="Phone Number"
          className="border w-full min-h-14 border-gray-600 rounded-sm"
          value={formData.phone}
          onChange={(e) => { setFormData((old) => ({ ...old, phone: e.target.value })) }}
        />
        <textarea
          placeholder="How can we help?"
          className="border w-full min-h-24 border-gray-600 rounded-sm resize-none"
          value={formData.help}
          onChange={(e) => { setFormData((old) => ({ ...old, help: e.target.value })) }}
        />
        <button disabled={!button} className={`${button ? 'bg-blue-400' : 'bg-gray-400'} text-white py-1 px-7 rounded-full`}>Contact</button>



      </div>

      {/*Desktop */}
      <div className="sm:flex hidden flex-row w-3/5 justify-center">
        <input
          placeholder="Full name"
          className="border h-12 w-5/12 mr-auto"
          value={formData.fullName}
          onChange={(e) => { setFormData((old) => ({ ...old, fullName: e.target.value })) }}
        />
        <input
          placeholder="Company name"
          className="border h-12 w-5/12 ml-auto"
          value={formData.companyName}
          onChange={(e) => { setFormData((old) => ({ ...old, companyName: e.target.value })) }}
        />
      </div>

      <div className="sm:flex hidden flex-row w-3/5 justify-center">
        <input
          placeholder="Bussiness Email"
          className="border  h-12 mr-auto w-5/12"
          value={formData.email}
          onChange={(e) => { setFormData((old) => ({ ...old, email: e.target.value })) }}
        />
        <input
          placeholder="Phone Number"
          className="border h-12 ml-auto w-5/12"
          value={formData.phone}
          onChange={(e) => { setFormData((old) => ({ ...old, phone: e.target.value })) }}
        />
      </div>

      <textarea
        placeholder="How can we help?"
        className="sm:flex hidden w-3/5 border min-h-24 resize-none"
        value={formData.help}
        onChange={(e) => { setFormData((old) => ({ ...old, help: e.target.value })) }}
      />

      <button disabled={!button} className={`${button ? 'bg-blue-400' : 'bg-gray-400'} sm:flex hidden text-white py-1 px-7 rounded-full`}>Contact</button>
    </section>
  )
}

export default Froms